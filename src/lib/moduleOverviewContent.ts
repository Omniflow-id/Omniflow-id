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
			title: "AI-assisted customer conversations that keep your team in control",
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
			title: "Percakapan pelanggan berbantuan AI tanpa melepas kontrol dari tim Anda",
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
	helpdesk: {
		en: {
			badge: "Service Operations",
			title: "A helpdesk layer for structured support operations",
			subtitle:
				"Omniflow Helpdesk helps teams organize incoming issues, coordinate responses, and keep service quality visible across channels.",
			description:
				"This module is positioned for support teams that need queue ownership, faster triage, and a cleaner operational rhythm for handling requests.",
			capabilitiesTitle: "Operational focus",
			capabilities: [
				"Track support requests in a structured queue with clear ownership.",
				"Standardize escalation and response handling across support agents.",
				"Surface service activity for operations leaders and department heads.",
			],
			useCasesTitle: "Ideal for",
			useCases: [
				"Internal IT or operations helpdesks.",
				"Customer support teams with recurring issue categories.",
				"Growing companies that need a more disciplined service workflow.",
			],
		},
		id: {
			badge: "Service Operations",
			title: "Lapisan helpdesk untuk operasional support yang lebih terstruktur",
			subtitle:
				"Omniflow Helpdesk membantu tim mengorganisasi isu masuk, mengoordinasikan respons, dan menjaga kualitas layanan tetap terlihat lintas channel.",
			description:
				"Modul ini diposisikan untuk tim support yang membutuhkan queue ownership, triase lebih cepat, dan ritme operasional yang lebih rapi dalam menangani permintaan.",
			capabilitiesTitle: "Fokus operasional",
			capabilities: [
				"Melacak request support dalam antrian yang terstruktur dengan owner yang jelas.",
				"Menstandarkan eskalasi dan penanganan respons antar agent support.",
				"Menampilkan aktivitas layanan untuk pemimpin operasional dan kepala departemen.",
			],
			useCasesTitle: "Cocok untuk",
			useCases: [
				"Helpdesk internal IT atau operasional.",
				"Tim customer support dengan kategori isu yang berulang.",
				"Perusahaan yang sedang tumbuh dan butuh workflow layanan yang lebih disiplin.",
			],
		},
		zh: {
			badge: "Service Operations",
			title: "为支持团队建立更有秩序的 Helpdesk 工作流",
			subtitle:
				"Omniflow Helpdesk 帮助团队组织进入的问题、协调响应，并让服务质量在多个渠道中保持可见。",
			description:
				"这个模块面向需要明确队列归属、更快分流以及更稳定服务节奏的支持团队。",
			capabilitiesTitle: "运营重点",
			capabilities: [
				"以结构化队列方式跟踪支持请求，并明确责任人。",
				"在支持坐席之间标准化升级与响应流程。",
				"为运营负责人提供清晰的服务活动可见性。",
			],
			useCasesTitle: "适用团队",
			useCases: [
				"内部 IT 或运营 Helpdesk。",
				"存在重复问题类别的客户支持团队。",
				"需要更规范服务流程的成长型企业。",
			],
		},
	},
	"booking-engine": {
		en: {
			badge: "Reservation Flow",
			title: "Booking experiences that connect availability, pricing, and confirmation",
			subtitle:
				"Omniflow Booking Engine is designed to support reservation-driven businesses that need cleaner booking journeys and operational visibility.",
			description:
				"This is a strong fit for hospitality, appointments, and service-led businesses that need a controllable booking layer rather than fragmented manual handling.",
			capabilitiesTitle: "What it helps simplify",
			capabilities: [
				"Present bookable inventory with clearer availability windows.",
				"Support reservation flow from inquiry through confirmation.",
				"Reduce operational friction around manual scheduling and follow-up.",
			],
			useCasesTitle: "Ideal for",
			useCases: [
				"Hospitality businesses and service providers.",
				"Teams managing appointment-style bookings.",
				"Companies packaging reservations into a broader ERP workflow.",
			],
		},
		id: {
			badge: "Reservation Flow",
			title: "Pengalaman booking yang menyatukan availability, pricing, dan konfirmasi",
			subtitle:
				"Omniflow Booking Engine dirancang untuk bisnis berbasis reservasi yang membutuhkan journey booking yang lebih rapi dan visibilitas operasional.",
			description:
				"Modul ini cocok untuk hospitality, appointment, dan bisnis berbasis layanan yang membutuhkan lapisan booking yang terkontrol, bukan proses manual yang terpecah.",
			capabilitiesTitle: "Yang disederhanakan",
			capabilities: [
				"Menampilkan inventori yang bisa dibooking dengan jendela ketersediaan yang lebih jelas.",
				"Mendukung alur reservasi dari inquiry hingga konfirmasi.",
				"Mengurangi friksi operasional akibat scheduling dan follow-up manual.",
			],
			useCasesTitle: "Cocok untuk",
			useCases: [
				"Bisnis hospitality dan penyedia layanan.",
				"Tim yang mengelola booking berbasis appointment.",
				"Perusahaan yang ingin menghubungkan reservasi ke workflow ERP yang lebih luas.",
			],
		},
		zh: {
			badge: "Reservation Flow",
			title: "把可用性、价格与确认流程整合为更顺畅的预订体验",
			subtitle:
				"Omniflow Booking Engine 面向需要更清晰预订流程和运营可见性的预约型业务。",
			description:
				"它适合酒店、预约型服务和其他依赖预订驱动的企业，替代碎片化的人工安排方式。",
			capabilitiesTitle: "可简化的事项",
			capabilities: [
				"更清晰地展示可预订资源与可用时间窗。",
				"支持从咨询到确认的完整预订流程。",
				"减少人工排期与跟进带来的运营摩擦。",
			],
			useCasesTitle: "适用团队",
			useCases: [
				"酒店与服务型企业。",
				"管理预约式预订流程的团队。",
				"希望把预订流程纳入更大 ERP 体系的公司。",
			],
		},
	},
	"event-ticketing": {
		en: {
			badge: "Audience Commerce",
			title: "Event ticketing with smoother registration and attendance handling",
			subtitle:
				"Omniflow Event Ticketing supports event organizers who need a cleaner path from campaign launch to attendee check-in.",
			description:
				"It is positioned for businesses managing paid or managed attendance, where ticket flow, participant data, and operational readiness all matter.",
			capabilitiesTitle: "Event teams can use it to",
			capabilities: [
				"Organize ticket availability and registration in one flow.",
				"Track attendee records for pre-event and on-site operations.",
				"Support a more structured launch-to-check-in process.",
			],
			useCasesTitle: "Ideal for",
			useCases: [
				"Event organizers running public or private ticketed experiences.",
				"Brands coordinating registrations for launches, seminars, or gatherings.",
				"Teams that need participant operations to be less manual.",
			],
		},
		id: {
			badge: "Audience Commerce",
			title: "Event ticketing dengan alur registrasi dan kehadiran yang lebih mulus",
			subtitle:
				"Omniflow Event Ticketing mendukung penyelenggara acara yang membutuhkan jalur lebih rapi dari peluncuran campaign hingga check-in peserta.",
			description:
				"Modul ini diposisikan untuk bisnis yang mengelola attendance berbayar maupun terkurasi, di mana alur tiket, data peserta, dan kesiapan operasional sama-sama penting.",
			capabilitiesTitle: "Tim event bisa menggunakannya untuk",
			capabilities: [
				"Mengelola ketersediaan tiket dan registrasi dalam satu alur.",
				"Melacak data peserta untuk operasional sebelum acara dan saat hari-H.",
				"Mendukung proses yang lebih terstruktur dari launch sampai check-in.",
			],
			useCasesTitle: "Cocok untuk",
			useCases: [
				"Penyelenggara event publik maupun privat berbayar.",
				"Brand yang mengoordinasikan registrasi untuk launch, seminar, atau gathering.",
				"Tim yang ingin mengurangi proses manual di operasional peserta.",
			],
		},
		zh: {
			badge: "Audience Commerce",
			title: "让票务、报名与到场管理更顺畅的活动模块",
			subtitle:
				"Omniflow Event Ticketing 适合需要从活动上线到现场签到都更有秩序的组织方。",
			description:
				"它面向需要管理付费或受控出席活动的企业，兼顾票务流程、参与者数据与现场运营准备。",
			capabilitiesTitle: "活动团队可借助它",
			capabilities: [
				"在同一流程中管理票务可用性与报名。",
				"跟踪参与者资料以支持会前与现场运营。",
				"建立更规范的上线到签到流程。",
			],
			useCasesTitle: "适用团队",
			useCases: [
				"举办公开或私密票务活动的组织方。",
				"为发布会、研讨会或聚会管理报名的品牌团队。",
				"希望降低参与者运营人工负担的团队。",
			],
		},
	},
	"property-management-system": {
		en: {
			badge: "Property Operations",
			title: "Operational control for units, tenants, billing, and maintenance",
			subtitle:
				"Omniflow Property Management System is built for property businesses that need clearer visibility across occupancy and day-to-day operations.",
			description:
				"This module brings operational discipline to property portfolios by aligning tenant records, service requests, and billing-related workflows.",
			capabilitiesTitle: "Designed to support",
			capabilities: [
				"Property data organization across units, tenants, and service records.",
				"More coordinated handling for billing and operational follow-up.",
				"Better visibility into recurring property operations.",
			],
			useCasesTitle: "Ideal for",
			useCases: [
				"Property operators with multiple units or sites.",
				"Teams managing tenant-facing administrative workflows.",
				"Businesses that need maintenance and billing visibility in one system.",
			],
		},
		id: {
			badge: "Property Operations",
			title: "Kontrol operasional untuk unit, tenant, billing, dan maintenance",
			subtitle:
				"Omniflow Property Management System dibangun untuk bisnis properti yang membutuhkan visibilitas lebih jelas atas okupansi dan operasional harian.",
			description:
				"Modul ini membawa disiplin operasional ke portofolio properti dengan menyelaraskan data tenant, service request, dan workflow yang terkait billing.",
			capabilitiesTitle: "Dirancang untuk mendukung",
			capabilities: [
				"Pengorganisasian data properti lintas unit, tenant, dan catatan layanan.",
				"Penanganan billing dan tindak lanjut operasional yang lebih terkoordinasi.",
				"Visibilitas yang lebih baik atas operasional properti yang berulang.",
			],
			useCasesTitle: "Cocok untuk",
			useCases: [
				"Operator properti dengan banyak unit atau site.",
				"Tim yang mengelola workflow administratif yang berhubungan dengan tenant.",
				"Bisnis yang butuh visibilitas maintenance dan billing dalam satu sistem.",
			],
		},
		zh: {
			badge: "Property Operations",
			title: "为房源、租户、账单与维护建立更清晰的运营控制",
			subtitle:
				"Omniflow Property Management System 面向需要更清晰入住与日常运营可见性的物业型企业。",
			description:
				"该模块通过整合租户数据、服务请求与账单相关流程，帮助物业组合建立更稳健的运营纪律。",
			capabilitiesTitle: "它可支持",
			capabilities: [
				"跨房源单元、租户与服务记录整理物业数据。",
				"更协调地处理账单与运营跟进。",
				"让重复性的物业运营工作更可见。",
			],
			useCasesTitle: "适用团队",
			useCases: [
				"拥有多个单元或站点的物业运营方。",
				"管理租户相关行政流程的团队。",
				"希望在同一系统中看到维护与账单情况的企业。",
			],
		},
	},
	habitat: {
		en: {
			badge: "Community Environment",
			title: "Community environment management for modern neighborhoods and estates",
			subtitle:
				"Omniflow Habitat is positioned to help residential and managed environments coordinate communication, requests, and shared operations.",
			description:
				"Based on the local repository naming and structure, Habitat is best framed as a module for community-level management rather than a generic property back office.",
			capabilitiesTitle: "What Habitat can streamline",
			capabilities: [
				"Resident-facing coordination for announcements and issue reporting.",
				"Structured handling of recurring community requests and operational tasks.",
				"Better visibility for teams managing shared facilities or environments.",
			],
			useCasesTitle: "Ideal for",
			useCases: [
				"Residential estates, clusters, or managed communities.",
				"Operations teams handling recurring neighborhood service workflows.",
				"Organizations coordinating communication across residents and managers.",
			],
		},
		id: {
			badge: "Community Environment",
			title: "Manajemen lingkungan komunitas untuk kawasan hunian modern",
			subtitle:
				"Omniflow Habitat diposisikan untuk membantu lingkungan residensial dan area terkelola dalam mengoordinasikan komunikasi, request, dan operasional bersama.",
			description:
				"Berdasarkan penamaan dan struktur repo lokal, Habitat paling tepat dibingkai sebagai modul manajemen level komunitas, bukan sekadar back office properti generik.",
			capabilitiesTitle: "Yang bisa dirapikan oleh Habitat",
			capabilities: [
				"Koordinasi yang menghadap warga untuk pengumuman dan pelaporan isu.",
				"Penanganan terstruktur untuk request komunitas dan tugas operasional yang berulang.",
				"Visibilitas lebih baik bagi tim yang mengelola fasilitas atau lingkungan bersama.",
			],
			useCasesTitle: "Cocok untuk",
			useCases: [
				"Kawasan hunian, cluster, atau komunitas terkelola.",
				"Tim operasional yang menangani workflow layanan lingkungan secara berulang.",
				"Organisasi yang mengoordinasikan komunikasi antara warga dan pengelola.",
			],
		},
		zh: {
			badge: "Community Environment",
			title: "面向现代社区与住宅区域的环境管理模块",
			subtitle:
				"Omniflow Habitat 适合帮助住宅或受管社区协调沟通、请求与共享运营事务。",
			description:
				"基于本地仓库命名与结构，Habitat 更适合作为社区层面的管理模块，而不是单纯的通用物业后台。",
			capabilitiesTitle: "Habitat 可优化的事项",
			capabilities: [
				"面向住户的公告协调与问题上报。",
				"更有结构地处理重复出现的社区请求与运营任务。",
				"为管理共享设施或社区环境的团队提供更好可见性。",
			],
			useCasesTitle: "适用团队",
			useCases: [
				"住宅区、社区集群或受管社区。",
				"负责重复性社区服务流程的运营团队。",
				"需要在住户与管理方之间协调沟通的组织。",
			],
		},
	},
	profilex: {
		en: {
			badge: "Assessment & Profiling",
			title: "Psychometric and profiling workflows for talent-focused organizations",
			subtitle:
				"Omniflow Profilex is best positioned as an assessment-driven module for profiling, evaluation, and structured people insights.",
			description:
				"The repository naming indicates a focused product rather than a generic starter in business terms, so this landing page highlights talent mapping and assessment use cases.",
			capabilitiesTitle: "What Profilex can support",
			capabilities: [
				"Structured assessment and profiling journeys.",
				"More consistent evaluation records for people decisions.",
				"Clearer insight layers for hiring, development, or internal mapping.",
			],
			useCasesTitle: "Ideal for",
			useCases: [
				"HR and talent teams running assessments at scale.",
				"Organizations offering profiling or psychometric services.",
				"Businesses that need better structure around evaluation workflows.",
			],
		},
		id: {
			badge: "Assessment & Profiling",
			title: "Workflow psikometri dan profiling untuk organisasi yang fokus pada talent",
			subtitle:
				"Omniflow Profilex paling tepat diposisikan sebagai modul berbasis assessment untuk profiling, evaluasi, dan insight SDM yang lebih terstruktur.",
			description:
				"Penamaan repo menunjukkan produk yang cukup spesifik, jadi landing page ini menonjolkan use case talent mapping dan assessment ketimbang membingkainya sebagai starter generik.",
			capabilitiesTitle: "Yang bisa didukung oleh Profilex",
			capabilities: [
				"Journey assessment dan profiling yang lebih terstruktur.",
				"Catatan evaluasi yang lebih konsisten untuk pengambilan keputusan terkait SDM.",
				"Lapisan insight yang lebih jelas untuk hiring, development, atau pemetaan internal.",
			],
			useCasesTitle: "Cocok untuk",
			useCases: [
				"Tim HR dan talent yang menjalankan assessment dalam skala besar.",
				"Organisasi yang menawarkan layanan profiling atau psikometri.",
				"Bisnis yang membutuhkan struktur lebih baik dalam workflow evaluasi.",
			],
		},
		zh: {
			badge: "Assessment & Profiling",
			title: "面向人才型组织的测评与画像工作流",
			subtitle:
				"Omniflow Profilex 最适合被定位为用于画像、评估与结构化人才洞察的测评模块。",
			description:
				"从仓库命名来看，它更像一个聚焦产品而非通用 starter，因此这里重点展示人才映射与测评场景。",
			capabilitiesTitle: "Profilex 可支持",
			capabilities: [
				"更有结构的测评与画像流程。",
				"为人才决策提供更一致的评估记录。",
				"在招聘、发展或内部映射中提供更清晰的洞察层。",
			],
			useCasesTitle: "适用团队",
			useCases: [
				"大规模开展测评的 HR 与人才团队。",
				"提供画像或心理测评服务的组织。",
				"需要更规范评估工作流的企业。",
			],
		},
	},
	ecf: {
		en: {
			badge: "Capital Platform",
			title: "Equity crowdfunding workflows with stronger operational traceability",
			subtitle:
				"Omniflow ECF highlights a more specialized financial workflow for teams coordinating investor-facing campaigns and internal process control.",
			description:
				"As a dedicated product in the local workspace, ECF belongs on the company profile as a focused solution rather than a hidden side module.",
			capabilitiesTitle: "Where ECF adds value",
			capabilities: [
				"Organize campaign-related workflows with clearer operational checkpoints.",
				"Support internal coordination around investor-facing processes.",
				"Create better visibility for compliance-sensitive business activities.",
			],
			useCasesTitle: "Ideal for",
			useCases: [
				"Teams building or operating equity crowdfunding products.",
				"Organizations managing investor onboarding and campaign execution.",
				"Businesses that need more structure around regulated growth workflows.",
			],
		},
		id: {
			badge: "Capital Platform",
			title: "Workflow equity crowdfunding dengan traceability operasional yang lebih kuat",
			subtitle:
				"Omniflow ECF menyoroti workflow finansial yang lebih spesifik untuk tim yang mengoordinasikan campaign investor-facing dan kontrol proses internal.",
			description:
				"Sebagai produk yang berdiri sendiri di workspace lokal, ECF layak tampil di company profile sebagai solusi fokus, bukan modul sampingan yang tersembunyi.",
			capabilitiesTitle: "Nilai tambah ECF",
			capabilities: [
				"Mengorganisasi workflow campaign dengan checkpoint operasional yang lebih jelas.",
				"Mendukung koordinasi internal untuk proses yang berhadapan dengan investor.",
				"Menciptakan visibilitas yang lebih baik untuk aktivitas bisnis yang sensitif terhadap kepatuhan.",
			],
			useCasesTitle: "Cocok untuk",
			useCases: [
				"Tim yang membangun atau mengoperasikan produk equity crowdfunding.",
				"Organisasi yang mengelola onboarding investor dan eksekusi campaign.",
				"Bisnis yang membutuhkan struktur lebih kuat untuk workflow pertumbuhan yang teregulasi.",
			],
		},
		zh: {
			badge: "Capital Platform",
			title: "为股权众筹流程提供更强的运营可追踪性",
			subtitle:
				"Omniflow ECF 代表一种更专业的金融工作流，适用于需要协调投资者活动与内部流程控制的团队。",
			description:
				"作为本地工作区中的独立产品，ECF 应该在公司展示中作为聚焦解决方案出现，而不是隐藏模块。",
			capabilitiesTitle: "ECF 的价值点",
			capabilities: [
				"为活动型流程建立更清晰的运营检查点。",
				"支持与投资者相关流程的内部协同。",
				"为合规敏感的业务活动提供更好的可见性。",
			],
			useCasesTitle: "适用团队",
			useCases: [
				"构建或运营股权众筹产品的团队。",
				"管理投资者入驻与活动执行的组织。",
				"需要更规范受监管增长流程的企业。",
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
