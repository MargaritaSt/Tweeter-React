import React from 'react';
import { Tweet } from '../components/Tweet'

export default { title: "Singular Tweet"}
export const emptyTweet = () => <Tweet />

export const populatedTweet = () => {
    const singleTweet = {
        "user": {
            "name": "Newton",
            "avatars": "https://i.imgur.com/73hZDYK.png",
            "handle": "@SirIsaac"
          },
          "content": {
            "text": "If I have seen further it is by standing on the shoulders of giants"
          },
          "created_at": 1461116232227
    }
    return <Tweet name={singleTweet.user.name} avatars={singleTweet.user.avatars} handle={singleTweet.user.handle} text={singleTweet.content.text} created_at={singleTweet.created_at}/>
}