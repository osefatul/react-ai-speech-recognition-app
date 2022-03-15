import React from "react";
import NewsCard from "../NewsCard/NewsCard";

function NewsCards({ articles }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6 3xl:grid-cols-7 4xl:grid-cols-8 gap-3 md:gap-6 lg:gap-10 p-2 md:p-6 ">
      {articles.map((article, i) => (
        <NewsCard i={i} article={article} />
      ))}
    </div>
  );
}

export default NewsCards;
