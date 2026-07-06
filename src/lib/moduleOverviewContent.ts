import type { ModuleId } from "./moduleCatalog";
import type { WebsiteLocale } from "./website";

interface ModuleOverviewLocaleContent {
	badge: string;
	title: string;
	subtitle: string;
	description: string;
	capabilitiesTitle: string;
	capabilities: string[];
	useCasesTitle: string;
	useCases: string[];
}

type ModuleOverviewContentMap = Partial<
	Record<ModuleId, Record<WebsiteLocale, ModuleOverviewLocaleContent>>
>;

export const moduleOverviewContent: ModuleOverviewContentMap = {
	vecta: {
		en: {
			badge: "AI Bot CRM",
			title:
				"AI-assisted customer conversations that keep your team in control",
			subtitle:
				"Omniflow Vecta brings AI chat, agent assistance, and CRM context into one workflow for faster and more consistent customer handling.",
			description:
				"Built from the Vecta codebase structure, this module centers around AI chat flows, conversation history, use-case based prompts, and model-aware response orchestration for service teams.",
			capabilitiesTitle: "What teams can run with Vecta",
			capabilities: [
				"Centralize customer conversations and agent follow-up in one workspace.",
				"Route AI interactions by use case, model, and response workflow.",
				"Give agents structured context before they reply to prospects or customers.",
			],
			useCasesTitle: "Ideal for",
			useCases: [
				"Customer service operations that want faster first response and better consistency.",
				"Sales and CRM teams that need AI-assisted follow-up without losing human control.",
				"Businesses building an AI bot layer around WhatsApp-style customer engagement.",
			],
		},
		id: {
			badge: "AI Bot CRM",
			title:
				"Percakapan pelanggan berbantuan AI tanpa melepas kontrol dari tim Anda",
			subtitle:
				"Omniflow Vecta menggabungkan AI chat, agent assistance, dan konteks CRM dalam satu alur kerja agar penanganan pelanggan lebih cepat dan konsisten.",
			description:
				"Berdasarkan struktur codebase Vecta, modul ini berfokus pada alur AI chat, histori percakapan, prompt berbasis use case, dan orkestrasi respons berbasis model untuk tim layanan.",
			capabilitiesTitle: "Yang bisa dijalankan dengan Vecta",
			capabilities: [
				"Sentralisasi percakapan pelanggan dan tindak lanjut agent dalam satu workspace.",
				"Routing interaksi AI berdasarkan use case, model, dan workflow respons.",
				"Memberikan konteks terstruktur ke agent sebelum membalas prospek atau pelanggan.",
			],
			useCasesTitle: "Cocok untuk",
			useCases: [
				"Operasional customer service yang ingin respons awal lebih cepat dan lebih konsisten.",
				"Tim sales dan CRM yang butuh follow-up berbantuan AI tanpa kehilangan human control.",
				"Bisnis yang membangun lapisan AI bot untuk engagement pelanggan seperti WhatsApp.",
			],
		},
		zh: {
			badge: "AI Bot CRM",
			title: "让 AI 协助客户对话，同时保持团队主导权",
			subtitle:
				"Omniflow Vecta 将 AI 聊天、坐席辅助和 CRM 上下文整合到同一工作流中，以更快、更稳定地处理客户互动。",
			description:
				"根据 Vecta 本地代码结构，这个模块聚焦 AI 聊天流程、会话历史、基于场景的提示以及基于模型的响应编排。",
			capabilitiesTitle: "Vecta 可支持的能力",
			capabilities: [
				"在同一工作区集中管理客户对话与坐席跟进。",
				"按 use case、模型与响应流程路由 AI 互动。",
				"在回复潜在客户或正式客户之前先为坐席提供结构化上下文。",
			],
			useCasesTitle: "适用团队",
			useCases: [
				"希望缩短首次响应时间并提升一致性的客服团队。",
				"需要 AI 辅助跟进但仍保留人工主导的销售与 CRM 团队。",
				"正在围绕类似 WhatsApp 的客户互动构建 AI Bot 层的企业。",
			],
		},
	},
};

export function getModuleOverviewContent(
	moduleId: ModuleId,
	locale: WebsiteLocale
) {
	const contentByLocale = moduleOverviewContent[moduleId];

	if (!contentByLocale) {
		return undefined;
	}

	return contentByLocale[locale] || contentByLocale.en;
}
