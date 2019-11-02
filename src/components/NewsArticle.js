import React from 'react';
import style from './NewsArticle.module.css';

const NewsArticle = (props) => {
  return (
    <div className={`centerText ${style.NewsArticle}`}>
      <img class={style.newsImage} src={props.newsData.urlToImage}/>
      <p>{props.newsData.title}</p>
      <p>{props.newsData.description}</p>
      <hr/>
    </div>
  )
}


export default NewsArticle;
