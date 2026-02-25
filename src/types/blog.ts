export interface BlogPost {
	id: number;
	title: string;
	meta_title: string;
	meta_description: string;
	meta_keywords: string;
	banner_url: string;
	content: string;
	slug: string;
	created_at: string;
	updated_at: string;
}

export interface BlogResponse {
	success: boolean;
	data: {
		blogs: BlogPost[];
		pagination: {
			page: number;
			limit: number;
			total: number;
			totalPages: number;
			hasNext: boolean;
			hasPrev: boolean;
		};
	};
}

export interface BlogDetailResponse {
	success: boolean;
	data: {
		blog: BlogPost;
	};
}
