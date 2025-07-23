export type TCategory =
  | "general"
  | "news"
  | "business"
  | "entertainment"
  | "health"
  | "science"
  | "sports"
  | "technology";
export interface IActionGetNews {
  type: string;
  payload?: {
    q: string;
    from?: string;
    to?: string;
    sortBy?: string;
    sources?: string;
    domains?: string;
    isSearch?: boolean;
    pageSize?: number;
    page?: number;
  };
  response?: IResponseGetNews["data"];
  error?: IResponseGetNews["error"];
}

export interface IActionGetNewsTopHeadlines
  extends Omit<IActionGetNews, "payload"> {
  payload?: {
    category: TCategory;
    country?: string;
    sources?: string;
    q?: string;
    pageSize?: number;
    page?: number;
  };
}

export interface IActionGetArticle extends Omit<IActionGetNews, "payload"> {
  payload?: NewsData;
}

export interface IResponseGetNews {
  loading: boolean;
  error: string | null | undefined;
  data: NewsData[] | null | undefined;
  headlines: NewsData[] | null | undefined;
  business: NewsData[] | null | undefined;
  entertainment: NewsData[] | null | undefined;
  health: NewsData[] | null | undefined;
  science: NewsData[] | null | undefined;
  sports: NewsData[] | null | undefined;
  technology: NewsData[] | null | undefined;
  article: NewsData | null | undefined;
  [key: string]: any; // For dynamic categories
}

export interface NewsData {
  source?: {
    id: string | null;
    name: string | null;
  };
  author: string | null;
  title: string | null;
  description: string | null;
  url: string | null;
  urlToImage: string | null;
  publishedAt: string | null;
  content: string | null;
}
