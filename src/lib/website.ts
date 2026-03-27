export type WebsiteLocale = "en" | "id" | "zh";

const DEFAULT_API_BASE_URL = "http://localhost:8003";

function normalizeApiBaseUrl() {
	const configured = import.meta.env.VITE_API_BASE_URL?.trim();
	return (configured || DEFAULT_API_BASE_URL).replace(/\/$/, "");
}

function getQueryParams(search: string) {
	const params = new URLSearchParams(search);
	return {
		utmSource: params.get("utm_source") || undefined,
		utmMedium: params.get("utm_medium") || undefined,
		utmCampaign: params.get("utm_campaign") || undefined,
	};
}

function getCTAEventSessionId() {
	if (typeof window === "undefined") {
		return undefined;
	}

	const storageKey = "omniflow_cta_session_id";
	const existing = window.localStorage.getItem(storageKey);
	if (existing) {
		return existing;
	}

	const generated =
		typeof crypto !== "undefined" && typeof crypto.randomUUID === "function"
			? crypto.randomUUID()
			: `cta_${Date.now()}_${Math.random().toString(36).slice(2, 10)}`;
	window.localStorage.setItem(storageKey, generated);
	return generated;
}

async function parseJsonResponse<T>(response: Response): Promise<T> {
	if (!response.ok) {
		throw new Error(`HTTP error! status: ${response.status}`);
	}

	return response.json() as Promise<T>;
}

function buildApiUrl(
	path: string,
	query?: Record<string, string | number | undefined>
) {
	const url = new URL(`${normalizeApiBaseUrl()}${path}`);

	if (query) {
		for (const [key, value] of Object.entries(query)) {
			if (value !== undefined && value !== null && value !== "") {
				url.searchParams.set(key, String(value));
			}
		}
	}

	return url.toString();
}

export function getCurrentLocaleFromPath(pathname: string): WebsiteLocale {
	const match = pathname.match(/^\/(en|id|zh)(?:\/|$)/);
	return (match?.[1] as WebsiteLocale | undefined) || "en";
}

export function getLangPrefix(locale: WebsiteLocale) {
	return `/${locale}`;
}

export async function fetchWebsiteBlogs(
	locale: WebsiteLocale,
	page = 1,
	limit = 9
) {
	const response = await fetch(
		buildApiUrl("/api/blogs", {
			locale,
			page,
			limit,
		}),
		{
			method: "GET",
			headers: {
				Accept: "application/json",
			},
		}
	);

	return parseJsonResponse(response);
}

export async function fetchWebsiteBlogDetail(
	locale: WebsiteLocale,
	slug: string
) {
	const response = await fetch(
		buildApiUrl(`/api/blogs/${slug}`, {
			locale,
		}),
		{
			method: "GET",
			headers: {
				Accept: "application/json",
			},
		}
	);

	return parseJsonResponse(response);
}

export interface ContactLeadRequest {
	name: string;
	email: string;
	company?: string;
	phone?: string;
	jobTitle?: string;
	companySize?: string;
	subjectKey?: string;
	subjectLabel?: string;
	message: string;
	locale: WebsiteLocale;
	sourcePage: string;
	sourceType: string;
}

export async function submitContactLead(payload: ContactLeadRequest) {
	const pageUrl = typeof window !== "undefined" ? window.location.search : "";
	const query = getQueryParams(pageUrl);

	const response = await fetch(buildApiUrl("/api/contact-leads"), {
		method: "POST",
		headers: {
			Accept: "application/json",
			"Content-Type": "application/json",
		},
		body: JSON.stringify({
			...payload,
			website: "",
			referrer:
				typeof document !== "undefined"
					? document.referrer || undefined
					: undefined,
			...query,
		}),
	});

	return parseJsonResponse(response);
}

export interface CTAEventRequest {
	ctaKey: string;
	locale: WebsiteLocale;
	moduleKey?: string;
	pagePath?: string;
}

export async function trackCTAEvent(payload: CTAEventRequest) {
	const currentPath =
		typeof window !== "undefined"
			? `${window.location.pathname}${window.location.search}`
			: payload.pagePath || "/";
	const query =
		typeof window !== "undefined" ? getQueryParams(window.location.search) : {};

	const response = await fetch(buildApiUrl("/api/cta-events"), {
		method: "POST",
		keepalive: true,
		headers: {
			Accept: "application/json",
			"Content-Type": "application/json",
		},
		body: JSON.stringify({
			sessionId: getCTAEventSessionId(),
			locale: payload.locale,
			pagePath: payload.pagePath || currentPath,
			ctaKey: payload.ctaKey,
			moduleKey: payload.moduleKey,
			referrer:
				typeof document !== "undefined"
					? document.referrer || undefined
					: undefined,
			...query,
		}),
	});

	return parseJsonResponse(response);
}
