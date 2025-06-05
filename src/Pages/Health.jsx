import React from "react";
//import Article from "../components/Article";
import ArticleCard from "../components/ArticleCard";
import articles from "../data/articles";

const Health = () => {
  return (
   <div className="mt-10">
 <div className="container  px-4 py-8">
      <div className="flex flex-wrap -mx-4">
        {articles.map((article) => (
          <div key={article.id} className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
            <ArticleCard article={article} />
          </div>
        ))}
      </div>
    </div>

   </div>
  );
};

export default Health;