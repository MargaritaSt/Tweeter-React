import React from 'react'

export const  Tweet = props => {
  const {name,avatars,text,created_at,handle} = props
    return (
      <article className="article">
      <div className="headers-footers-alignment">
        <header className="header-footer-format">
          <div><img src={avatars} /> </div>
    <div className="user-name">{name}</div>
        </header>
        <header className="header-hover"> {handle} </header>
      </div>
      <div>
    <p className="tweet-text-history">{text}</p>
      </div>
      <div className="footers-alignment">
    <footer className="header-footer-format">{created_at}</footer>
        <footer className="header-footer-format">
          <span className = "footer-actions">
            <a href="#"><i className="fa fa-flag"></i></a>   
            <a href="#"><i className="fa fa-retweet"></i></a>
            <a href="#"><i className="fa fa-heart"></i></a> 
          </span>
        </footer>
      </div>
    </article>
    )
  }