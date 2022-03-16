import "./App.css";
import React, { useState, useEffect } from "react";
import wordsToNumbers from "words-to-numbers";
import alanBtn from "@alan-ai/alan-sdk-web";
import NewsCards from "./components/NewsCards/NewsCards";
const alanKey =
  "574b14d84880a9d5b2a102dc6860d98c2e956eca572e1d8b807a3e2338fdd0dc/stage";

function App() {
  const [newsArticles, setNewsArticles] = useState([]);

  useEffect(() => {
    // onCommand will listen to command
    alanBtn({
      key: alanKey,
      onCommand: ({ command, articles }) => {
        if (command === "newHeadlines") {
          //console.trace(articles);
          console.log(articles);
          setNewsArticles(articles);
        }
      },
    });
  }, []);
  return (
    // h-screen: for the whole viewport screen
    // top-0 z-50 sticky : easy peasy fixed header
    <div className=" flex flex-col justify-center items-center  ">
      <div
        className="flex justify-center items-center
      bg-gray-700  
        z-50 sticky top-0  
        w-full h-max mb-4 
        text-center
        
        "
      >
        {/* <h1 className="text-5xl font-bold ">Latest News</h1> */}
        <img
          src="https://scontent-iad3-2.xx.fbcdn.net/v/t1.6435-9/67659112_438501920211949_8507331483155824640_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=e3f864&_nc_ohc=wHewIZLyQs0AX81eyFj&_nc_ht=scontent-iad3-2.xx&oh=00_AT8piH5XjdPjlECmMeYFDldYW4UkyW2aJ477L9MUBthe6g&oe=62575BA6"
          className="w-full h-32 object-cover"
          alt="logo"
        />
      </div>
      <NewsCards articles={newsArticles} />
    </div>
  );
}

export default App;
