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
    <div className="grid h-screen relative ">
      <div className="flex justify-center items-center bg-zinc-100 fixed top-0 left-0 right-0 z-50 py-8">
        <h1 className="text-4xl font-bold ">Latest News</h1>
      </div>
      <NewsCards articles={newsArticles} />
    </div>
  );
}

export default App;
