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
    <div className="h-screen">
      <div className="flex justify-center items-center bg-zinc-100 w-full h-16 z-50 sticky top-0 ">
        <h1 className="text-4xl font-bold ">Latest News</h1>
      </div>
      <NewsCards articles={newsArticles} />
    </div>
  );
}

export default App;
