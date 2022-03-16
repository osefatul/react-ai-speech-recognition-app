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
        className="
      grid grid-cols-1 
      sm:grid-cols-2 
      lg:grid-cols-3 
      xl:grid-cols-4

      gap-2 md:gap-5 
      lg:gap-8 p-2 
      
      md:p-3
      mx-auto
      
      "
      >
        {infoCards.map((infoCard, i) => (
          <div
            className={`${infoCard.color}  
            flex flex-col justify-between items-center 
            text-center 
            border rounded-lg 
            p-10`}
          >
            <h1 className="text-2xl font-bold">{infoCard.title}</h1>
            {infoCard.info ? (
              <h2 className="font-medium">
                {/* split the title with spaces and give me the second index */}
                <strong className="text-xl">
                  {infoCard.title.split(" ")[2]}
                </strong>{" "}
                :
                <br />
                {infoCard.info}
              </h2>
            ) : null}
            <h3>
              <span className="font-semibold text-xl">Try Saying:</span> <br />
              <i>{infoCard.text}</i>
            </h3>
          </div>
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
