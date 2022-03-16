import React from "react";
import { Link } from "react-router-dom";
function NewsCard({
  article: { description, publishedAt, source, title, url, urlToImage },
}) {
  return (
    <div className="">
      <a href={url}>
        <div className="group cursor-pointer border rounded-lg overflow-hidden bg-gray-50  min-h-full">
          <div className="">
            <div></div>
            <img
              className="h-60 w-full object-cover group-hover:scale-105 transition-transform duration-200 ease-in-out"
              src={
                urlToImage ||
                "https://www.industry.gov.au/sites/default/files/August%202018/image/news-placeholder-738.png"
              }
            />
          </div>

          <div className="py-3 px-2">
            <div className="flex justify-between pb-2 items-center ">
              <p className="text-sm font-medium">{source.name}</p>
              <p className="font-extralight text-sm">
                {new Date(publishedAt).toDateString()}
              </p>
            </div>

            <h3 className="text-lg font-bold">{title}</h3>
            <p>{description}</p>
          </div>
        </div>
      </a>
    </div>
  );
}

export default NewsCard;
