import React from 'react';

import "./Article.css";

const article = ({imgUrl, title, date}) => {
  return (
    <div className='gpt3__blog-container_article'>
       <div className="gpt3__blog-container_article-img">
        <img src={imgUrl} alt="blog1" />
       </div>
       <div className="gpt3__blog-container__article-content">
        <p>{date}</p>
        <h2>{title}</h2>
        <p>Read Full Article</p>
       </div>
    </div>
  )
}

export default article