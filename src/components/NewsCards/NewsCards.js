import React from "react";
import NewsCard from "../NewsCard/NewsCard";

function NewsCards({ articles }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10 lg:gap-24 p-2 md:p-6 ">
      {articles.map((article, i) => (
        <div>
          <NewsCard article={article} />
        </div>
      ))}
    </div>
  );
}

export default NewsCards;
