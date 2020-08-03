import React, { useState } from 'react';
import './App.css';
import './components/Navigation.css';
import './components/TweetForm.css';
import './components/Profile.css';
import { Navigation } from './components/Navigation'
import { Profile } from './components/Profile'
import { TweetForm } from './components/TweetForm'
import { Tweet } from './components/Tweet'

const initialTweetData = [
  {
    "user": {
      "name": "Newton",
      "avatars": "https://i.imgur.com/73hZDYK.png"
      ,
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": "https://i.imgur.com/nlhLi3I.png",
      "handle": "@rd" },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  }
]

function App() {
  const [tweetsData, setTweetData] = useState(initialTweetData);

  const tweets = tweetsData.map((tweetData,index) => {
    return <Tweet key={index} name={tweetData.user.name} avatars={tweetData.user.avatars} handle={tweetData.user.handle} text={tweetData.content.text} created_at={tweetData.created_at}/>
  })

  const addNewTweet = text => {
    const newTweet = {
       "user": {
          "name": "Descartes",
          "avatars": "https://i.imgur.com/nlhLi3I.png",
          "handle": "@rd" },
        "content": {
          text
        },
        "created_at": 1461113959088
    }
    setTweetData ([newTweet, ...tweetsData])
  }
  return (
    <div className="App">
      <Navigation />
      <Profile />
      <main className="container">
      <TweetForm addNewTweet={addNewTweet}/>
      <section className="tweets-container" id="tweets-container">
        {tweets}
      </section>
      </main>
    </div>
  );
}
export default App;
