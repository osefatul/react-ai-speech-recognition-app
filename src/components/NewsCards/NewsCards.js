import React from "react";
import NewsCard from "../NewsCard/NewsCard";

const infoCards = [
  {
    color: "bg-[#00838f]",
    title: "Latest News",
    text: "Give me the latest news",
  },
  {
    color: "bg-[#1565c0]",
    title: "News by Categories",
    info: "Business, Entertainment, General, Health, Science, Sports, Technology",
    text: "Give me the latest Technology news",
  },
  {
    color: "bg-[#4527a0]",
    title: "News by Terms",
    info: "Bitcoin, PlayStation 5, Smartphones, Donald Trump...",
    text: "What's up with PlayStation 5",
  },
  {
    color: "bg-[#283593]",
    title: "News by Sources",
    info: "CNN, Wired, BBC News, Time, IGN, Buzzfeed, ABC News...",
    text: "Give me the news from CNN",
  },
];

function NewsCards({ articles }) {
  // Sp before someone ask Alan we need to have components of guide
  if (!articles.length) {
    return (
      <div
        className="grid grid-cols-1 
      sm:grid-cols-2 
      lg:grid-cols-3 
      xl:grid-cols-4 
      2xl:grid-cols-6 
      gap-2 md:gap-5 
      lg:gap-8 p-2 
      md:p-3 "
      >
        {infoCards.map((infoCard, i) => (
          <div className={infoCard.color}> Hi </div>
        ))}
      </div>
    );
  }

  return (
    <div
      className="grid grid-cols-1 
    sm:grid-cols-2 
    lg:grid-cols-3 
    xl:grid-cols-4 
    2xl:grid-cols-6 
    gap-2 md:gap-5 
    lg:gap-8 p-2 
    md:p-3 "
    >
      {articles.map((article, i) => (
        <NewsCard i={i} article={article} />
      ))}
    </div>
  );
}

export default NewsCards;
