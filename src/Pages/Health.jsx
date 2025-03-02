import React from "react";
import { Link } from "react-router-dom";
import articles from "../data/articles";

const Health = () => {
  return (
    <div className="bg-gradient-to-r from-pink-50 to-purple-200 min-h-screen p-8 mt-[2cm]">
      <h1 className="text-4xl font-bold text-center mb-10 text-gray-800">
        Explore Expert Health Insights
      </h1>
      <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
        Discover expert-backed articles on women’s health, wellness, and lifestyle.
      </p>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {articles.map((article) => (
          <Link
            key={article.id}
            to={`/article/${article.id}`}
            className="block bg-white rounded-xl shadow-lg overflow-hidden transition transform hover:scale-105 hover:shadow-xl"
          >
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-56 object-cover"
            />
            <div className="p-5">
              <h2 className="text-2xl font-semibold text-gray-900 mb-2">
                {article.title}
              </h2>
              <p className="text-gray-600 text-sm mb-3">By {article.doctor}</p>
              <p className="text-gray-700 text-sm line-clamp-2">
                {article.description}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Health;