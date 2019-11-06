import React from 'react';
import style from './NewsArticlesContainer.module.css';
import NewsArticle from './NewsArticle/NewsArticle';

const NewsArticlesContainer = (props) => {
  console.log(props.newsData)
  return (
    <div className={style.newsArticlesContainer}>
      {props.newsData.map((article, index) => {
        return <NewsArticle index={index} newsData={article}/>
      })}
    </div>
  )
}


export default NewsArticlesContainer;
