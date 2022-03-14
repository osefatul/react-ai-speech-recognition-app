import "./App.css";
import React, { useState, useEffect } from "react";
import wordsToNumbers from "words-to-numbers";
import alanBtn from "@alan-ai/alan-sdk-web";

const alanKey =
  "574b14d84880a9d5b2a102dc6860d98c2e956eca572e1d8b807a3e2338fdd0dc/stage";
function App() {
  useEffect(() => {
    // onCommand will listen to command
    alanBtn({
      key: alanKey,
      onCommand: ({ command, articles }) => {
        if (command === "newHeadlines") {
          console.trace(articles);
        }
      },
    });
  }, []);
  return (
    <div className="bg-whitesmoke flex items-center justify-center text-4xl font-bold py-8">
      <h1>Hi</h1>
    </div>
  );
}

export default App;
