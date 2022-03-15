import React from "react";
import { Link } from "react-router-dom";
function NewsCard({
  article: { description, publishedAt, source, title, url, urlToImage },
}) {
  return (
    <div className="group cursor-pointer border rounded-lg overflow-hidden bg-slate-50">
      <div className="py-">
        <div></div>
        <img
          className="h-60 w-full object-cover group-hover:scale-105 transition-transform duration-200 ease-in-out"
          src={
            urlToImage ||
            "https://www.industry.gov.au/sites/default/files/August%202018/image/news-placeholder-738.png"
          }
        />
      </div>
      <div className="p-2">
        <p className="text-sm">{source.name}</p>
        <h3 className="text-lg font-bold">{title}</h3>
        <p>{description}</p>
      </div>
      <div className="flex justify-between p-2 items-center ">
        <p className="font-extralight text-sm">
          {new Date(publishedAt).toDateString()}
        </p>
      </div>
    </div>
  );
}

export default NewsCard;
