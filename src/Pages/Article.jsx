import React from "react";
import { useParams } from "react-router-dom";
import articles from "../data/articles.jsx";

const Article = () => {
  const { id } = useParams();
  const article = articles.find((item) => item.id === id);

  if (!article) {
    return <p className="text-center mt-10 text-red-500">Article not found.</p>;
  }

  return (
    <div className="max-w-5xl mt-12 mx-auto p-6">
      {/* Article Header with Modern Layout */}
      <div className="mb-12 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl shadow-lg p-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <h1 className="text-4xl font-bold mb-6 text-gray-800 leading-tight">
              {article.title}
            </h1>
            <p className="text-xl text-gray-600 mb-6 leading-relaxed">
              {article.description}
            </p>
          </div>
          <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-sm">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span className="text-gray-600">{article.date}</span>
              </div>
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-gray-600">{article.readTime}</span>
              </div>
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                </svg>
                <span className="bg-blue-100 text-blue-800 px-4 py-1.5 rounded-full text-sm font-medium">
                  {article.category}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Article Image with Enhanced Styling */}
      {article.imageUrl && (
        <div className="mb-12">
          <img
            src={article.imageUrl}
            alt={article.title}
            className="w-full h-auto rounded-2xl shadow-xl object-cover"
          />
        </div>
      )}

      {/* Key Points with Modern Cards */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">Key Points</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {article.keyPoints.map((point, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100"
            >
              <div className="flex items-start gap-4">
                <span className="flex-shrink-0 w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold">
                  {index + 1}
                </span>
                <p className="text-gray-700 leading-relaxed">{point}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Article Content with Enhanced Typography */}
      <div className="space-y-12">
        {/* Introduction */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">Introduction</h2>
          <div className="prose prose-lg max-w-none">
            <div className="text-gray-600 leading-relaxed whitespace-pre-line">
              {article.content.introduction}
            </div>
          </div>
        </div>

        {/* Key Findings */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">Key Findings</h2>
          <div className="prose prose-lg max-w-none">
            <div className="text-gray-600 leading-relaxed whitespace-pre-line">
              {article.content.keyFindings}
            </div>
          </div>
        </div>

        {/* Causes */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">Causes</h2>
          <div className="prose prose-lg max-w-none">
            <div className="text-gray-600 leading-relaxed whitespace-pre-line">
              {article.content.causes}
            </div>
          </div>
        </div>

        {/* Management */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">Management</h2>
          <div className="prose prose-lg max-w-none">
            <div className="text-gray-600 leading-relaxed whitespace-pre-line">
              {article.content.management}
            </div>
          </div>
        </div>

        {/* Conclusion */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">Conclusion</h2>
          <div className="prose prose-lg max-w-none">
            <div className="text-gray-600 leading-relaxed whitespace-pre-line">
              {article.content.conclusion}
            </div>
          </div>
        </div>

        {/* References */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">References</h2>
          <div className="prose prose-lg max-w-none">
            <div className="text-gray-600 leading-relaxed whitespace-pre-line">
              {article.content.references}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Article;
