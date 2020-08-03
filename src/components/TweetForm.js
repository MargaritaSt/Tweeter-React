import React, { useState } from 'react'

export const  TweetForm = props => {
  const { addNewTweet } = props
  const [tweetText, setTweetText] = useState("");
  const tweetRamainingLength = 140 - tweetText.length
  const outputStyle = {color: tweetRamainingLength >= 0 ? "black" : "red"}

  const submitTweet = event => {
    event.preventDefault()
    if (tweetRamainingLength >= 0 && tweetRamainingLength < 140) {
      addNewTweet(tweetText);
      setTweetText("");      
    }
  }

    return (
      <section className="new-tweet">
          <h2>Compose Tweet</h2>
            <p className = "error-text"></p>
          <form onSubmit = {submitTweet} method="POST" action="/tweets">
            <label className = "label" htmlFor="tweet-text">What are you humming about?</label>
            <textarea name= "text" value={tweetText} onChange={event => setTweetText(event.target.value)} className = "tweet-text" id="tweet-text"></textarea>
            <div className="forButtonAndCounter">
              <button className = "button" id = "button" type="submit">Tweet</button>
              <output style={outputStyle} name="counter" className="counter" htmlFor="tweet-text">{tweetRamainingLength}</output>
            </div>
          </form>
        </section>
    )
  }