import React from "react";
import NewsCard from "../NewsCard/NewsCard";

function NewsCards({ articles }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6 gap-2 md:gap-5 lg:gap-8 p-2 md:p-3 ">
      {articles.map((article, i) => (
        <NewsCard i={i} article={article} />
      ))}
    </div>
  );
}

export default NewsCards;
