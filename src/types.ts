export interface IArticle {
  title: string;
  url: string;
  urlToImage: string;
  description: string;
}

export interface IUseTechNewsReturn {
  news: IArticle[];
  loading: boolean;
  error: Error | null;
}
