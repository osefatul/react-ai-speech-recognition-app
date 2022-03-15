import React from "react";

function NewsCard({
  article: { description, publishedAt, source, title, url, urlToImage, author },
}) {
  return (
    <div>
      <div href={url}>
        <div>
          <img
            src={
              urlToImage |
              "https://www.industry.gov.au/sites/default/files/August%202018/image/news-placeholder-738.png"
            }
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default NewsCard;
