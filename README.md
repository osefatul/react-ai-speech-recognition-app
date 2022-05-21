# React AI Speech Recognition Web Application

Click [Here](https://upbeat-jones-bfdf75.netlify.app/) to visit our website.
We are using ALAN AI for our speech recognition software. You can visit to the website by clicking [here](https://alan.app/).

Signup and then start an empty project. Click on the integration and copy SDK key. Go to APP.js file and assign the key to alanKey.

Go to [newsapi.org](https://newsapi.org/) and signup to get you api key. Once you got your API key you can go back to ALANAI studio and paste it there.

### Roadmap

1- First configure your Alan.ai with your react application using alan.ai key.
2- Create NewsCards- which is an array of multiple news from different media.
3- Create A NewsCard for each element of the array.
4- Design UI for the news cards.
5- So then implement the basic page for the users as a guide what to expect and what they use Alan.ai for.
6- Once you the design the landing or home, then Alan should be programmed again to give us different categories to choose and what to expect from.
7- From the home page to the choosen category of news, Alan should be programmed to let us in to choose a news card base on title or card index number. it also should be able to show us the activated card with border bottom colored.
8- Page should be designed to automatically get scrolled per row as Alan is telling the titles of the news card based on a specific category.


### NewsCard

In order to pass a link from the article props to the NewsCard container, we used anchor tag `<a href="link" />` because we can't directly pass a link to a div.

##### 1. Activating Card

We initialized useState for an active article. pass the activeArticle from App.js to NewCard.js and show active if the highlighted command is which is assigned to the activeArticle === to the index of that article - then add border bottom

##### 2. Automatically Scrolling to Next Card Row

Automatically scroll a page for the next card row without touching mouse.

First whenever a page renders we need to setup our references for the all cards or individually for each specific card. Create an array of 20 elements because we have 20 cards each time, and map through the array, we only need the index parameter and check if the reference exist, if yes then we keep it or otherwise create one. and then set all of the referenced cards in to the array of elRefs.
`setElRefs((refs) => Array(20) .fill() .map((_, j) => refs[j] || createRef()) );`

Sometimes when you say "Open article number two, the bot mistakenly assume 'to', thats the reason we convert the 'to' -> 'two' with fuzzy:true
