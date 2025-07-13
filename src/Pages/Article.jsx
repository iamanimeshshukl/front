import React from "react";
import { useParams } from "react-router-dom";
import articles from "../data/articles.jsx";

const Article = () => {
  const { id } = useParams();
  const article = articles.find((item) => item.id === id);

  if (!article) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 mx-auto mb-4 bg-red-100 rounded-full flex items-center justify-center">
            <svg className="w-8 h-8 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
            </svg>
          </div>
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Article Not Found</h2>
          <p className="text-gray-600">The requested article could not be found.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-10 ">
      {/* Hero Section */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-6 py-12">
          <div className="flex items-center gap-2 text-sm text-gray-500 mb-6">
            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-medium">
              {article.category}
            </span>
            <span>•</span>
            <span>{article.date}</span>
            <span>•</span>
            <span>{article.readTime}</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
            {article.title}
          </h1>
          
          <p className="text-xl text-gray-600 leading-relaxed max-w-3xl">
            {article.description}
          </p>

       
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Article Image */}
        {article.imageUrl && (
          <div className="mb-12">
            <div className="relative overflow-hidden rounded-2xl shadow-lg">
              <img 
                src={article.imageUrl} 
                alt={article.title}
                className="w-full h-64 md:h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
          </div>
        )}

        {/* Key Points */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
            <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
              <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            Key Points
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {article.keyPoints.map((point, index) => (
              <div 
                key={index} 
                className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-200"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-semibold text-sm">
                    {index + 1}
                  </div>
                  <p className="text-gray-700 leading-relaxed">{point}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Article Content */}
        <div className="space-y-12">
          {/* Introduction */}
          <section className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 px-8 py-6 border-b border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-3">
                <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                Introduction
              </h2>
            </div>
            <div className="p-8">
              <div className="prose prose-lg max-w-none">
                <div className="text-gray-700 leading-relaxed whitespace-pre-line">
                  {article.content.introduction}
                </div>
              </div>
            </div>
          </section>

          {/* Key Findings */}
          <section className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 px-8 py-6 border-b border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-3">
                <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                Key Findings
              </h2>
            </div>
            <div className="p-8">
              <div className="prose prose-lg max-w-none">
                <div className="text-gray-700 leading-relaxed whitespace-pre-line">
                  {article.content.keyFindings}
                </div>
              </div>
            </div>
          </section>

          {/* Causes */}
          <section className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="bg-gradient-to-r from-orange-50 to-amber-50 px-8 py-6 border-b border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-3">
                <div className="w-6 h-6 bg-orange-600 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                  </svg>
                </div>
                Causes
              </h2>
            </div>
            <div className="p-8">
              <div className="prose prose-lg max-w-none">
                <div className="text-gray-700 leading-relaxed whitespace-pre-line">
                  {article.content.causes}
                </div>
              </div>
            </div>
          </section>

          {/* Management */}
          <section className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 px-8 py-6 border-b border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-3">
                <div className="w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                Management
              </h2>
            </div>
            <div className="p-8">
              <div className="prose prose-lg max-w-none">
                <div className="text-gray-700 leading-relaxed whitespace-pre-line">
                  {article.content.management}
                </div>
              </div>
            </div>
          </section>

          {/* Conclusion */}
          <section className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="bg-gradient-to-r from-teal-50 to-cyan-50 px-8 py-6 border-b border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-3">
                <div className="w-6 h-6 bg-teal-600 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                Conclusion
              </h2>
            </div>
            <div className="p-8">
              <div className="prose prose-lg max-w-none">
                <div className="text-gray-700 leading-relaxed whitespace-pre-line">
                  {article.content.conclusion}
                </div>
              </div>
            </div>
          </section>

          {/* References */}
          <section className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="bg-gradient-to-r from-gray-50 to-slate-50 px-8 py-6 border-b border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-3">
                <div className="w-6 h-6 bg-gray-600 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                References
              </h2>
            </div>
            <div className="p-8">
              <div className="prose prose-lg max-w-none">
                <div className="text-gray-700 leading-relaxed whitespace-pre-line">
                  {article.content.references}
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Article Footer */}
        <div className="mt-16 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div className="flex items-center gap-4">
              <span className="text-sm text-gray-500">Last updated: {article.lastUpdated || article.date}</span>
            </div>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default Article;
