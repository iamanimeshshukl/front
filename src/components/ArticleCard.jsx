import React from 'react';
import { Link } from 'react-router-dom';

const ArticleCard = ({ article }) => {
  const { title, description, imageUrl, date, category, readTime } = article;

  return (
    <div className="bg-white mt-12 rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_8px_30px_rgb(0,0,0,0.16)] w-[350px] h-[500px] flex flex-col group">
      <div className="relative h-[200px] overflow-hidden">
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <span className="absolute top-4 left-4 bg-gradient-to-r from-pink-500 to-purple-500 text-white px-4 py-1.5 rounded-full text-sm font-medium shadow-lg">
          {category}
        </span>
      </div>
      <div className="p-6 flex flex-col flex-grow bg-gradient-to-b from-white to-gray-50">
        <h3 className="text-xl font-bold text-gray-800 mb-2 line-clamp-2 h-[56px] group-hover:text-pink-600 transition-colors duration-300">
          {title}
        </h3>
        <p className="text-gray-600 mb-4 line-clamp-3 h-[72px]">
          {description}
        </p>
        <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
          <div className="flex items-center space-x-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span>{date}</span>
          </div>
          <div className="flex items-center space-x-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>{readTime} min read</span>
          </div>
        </div>
        <div className="mt-auto">
          <Link 
            to={`/articles/${article.id}`}
            className="inline-block w-full text-center bg-cyan-500 text-white px-6 py-3 rounded-full font-medium hover:from-pink-600 hover:to-purple-600 transition-all duration-300 transform hover:-translate-y-0.5 shadow-lg hover:shadow-xl"
          >
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
