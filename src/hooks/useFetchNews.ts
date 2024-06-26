import axios from "axios";
import { useEffect, useState } from "react";
import { IUseTechNewsReturn } from "../types";

const useFetchNews = (): IUseTechNewsReturn => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get(
          "https://newsapi.org/v2/top-headlines",
          {
            params: {
              category: "technology",
              country: "us",
              apiKey: process.env.REACT_APP_NEWS_API_KEY,
            },
          }
        );
        setNews(response.data.articles);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchNews();
  }, []);

  return { news, loading, error };
};

export default useFetchNews;
