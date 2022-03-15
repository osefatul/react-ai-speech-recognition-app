# React AI Speech Recognition Web Application

We are using ALAN AI for our speech recognition software. You can visit to the website by clicking [here](https://alan.app/).

Signup and then start an empty project. Click on the integration and copy SDK key. Go to APP.js file and assign the key to alanKey.

Go to [newsapi.org](https://newsapi.org/) and signup to get you api key. Once you got your API key you can go back to ALANAI studio and paste it there.

### Roadmap

1- First configure your Alan.ai with your react application using alan.ai key.
2- Create NewsCards- which is an array of multiple news from different media.
3- Create A NewsCard for each element of the array.
4- Design.

5- So then implement the basic page for the users as a guide what to expect and what they use Alan.ai for.

#### NewsCard

In order to pass a link from the article props to the NewsCard container, we used anchor tag `<a href="link" />` because we can't directly pass a link to a div.
