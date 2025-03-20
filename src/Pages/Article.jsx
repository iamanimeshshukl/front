import React from "react";
import { useParams } from "react-router-dom";
import articles from "../data/articles";

const ArticlePage = () => {
  const { id } = useParams();
  const article = articles.find((article) => article.id.toString() === id);

  if (!article) {
    return (
      <div className="flex justify-center items-center h-screen text-red-500 text-2xl md:text-3xl">
        Article not found.
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* Hero Section */}
      <section
        className="relative w-full h-64 sm:h-80 md:h-96 bg-cover bg-center rounded-lg shadow-lg overflow-hidden"
        style={{ backgroundImage: `url(${article.image})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white text-center">
            {article.title}
          </h1>
        </div>
      </section>

      {/* Author Section */}
      <section className="mt-8 bg-white p-6 sm:p-8 md:p-10 rounded-lg shadow-lg">
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 mb-6 border-b pb-6">
          <img
            src={article.doctorImage}
            alt={article.doctor}
            className="w-24 h-24 sm:w-32 sm:h-32 rounded-full border-4 border-gray-300 shadow-md"
          />
          <div className="text-center sm:text-left">
            <h2 className="text-2xl sm:text-3xl lg:mt-9 font-bold text-gray-900">{article.doctor}</h2>
            <p className="text-gray-600 text-sm sm:text-lg">{article.date}</p>
          </div>
        </div>

        {/* Article Content */}
        <section className="mt-6">
         
          <p className="text-gray-700  leading-relaxed text-base sm:text-lg mb-6">
            {article.content}
          </p>
        </section>

        {/* Related Images Section */}
        {article.extraImages && article.extraImages.length > 0 && (
          <section className="mt-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4 sm:mb-6">Related Images</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6">
              {article.extraImages.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt="Article related"
                  className="rounded-lg shadow-md w-full h-32 sm:h-40 object-cover"
                />
              ))}
            </div>
          </section>
        )}
      </section>
    </div>
  );
};

export default ArticlePage;
