import React from "react";
import useFetchNews from "../hooks/useFetchNews.ts";

const TechNews = () => {
  const { news, loading, error } = useFetchNews();

  if (loading) return;
  if (error) return <div>Error fetching data</div>;

  return (
    <div className="w-full min-h-screen bg-primary text-white">
      <div className="max-w-[1000px] mx-auto px-4 py-[100px] flex flex-col w-full h-full justify-center items-center">
        <div>
          <p className="text-white text-3xl font-bold inline border-b-4 border-pink-700">
            Tech News
          </p>
          <p className="text-gray-300 py-3">
            Some tech updates to stay in the loop
          </p>
        </div>
        <div className="mt-8 grid gap-4 grid-cols-2 md:grid-cols-3">
          {news.map((article, index) => (
            <div className="border rounded-lg bg-tertiary p-4 shadow-lg ">
              <a
                href={article.url}
                target="blank"
                className="text-lg font-bold hover:underline"
              >
                {article.title}
              </a>
              <p className="text-md">{article.description}</p>
              <img src={article.urlToImage} alt={article.title} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechNews;
