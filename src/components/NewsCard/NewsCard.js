import React from "react";

function NewsCard({
  article: { description, publishedAt, source, title, url, urlToImage, author },
}) {
  return (
    <div>
      <div href={url}></div>
    </div>
  );
}

export default NewsCard;
