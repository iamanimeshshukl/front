import React from "react";
//import Article from "../components/Article";
import ArticleCard from "../components/ArticleCard";
import articles from "../data/articles";

const Health = () => {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
          {articles.map((article) => (
            <div key={article.id} className="w-full flex justify-center">
              <div className="w-full max-w-sm">
                <ArticleCard article={article} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Health;