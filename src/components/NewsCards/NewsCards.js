import React from "react";
import NewsCard from "../NewsCard/NewsCard";

function NewsCards({ articles }) {
  return (
    <div>
      {articles.map((article, i) => (
        <NewsCard />
      ))}
    </div>
  );
}

export default NewsCards;
