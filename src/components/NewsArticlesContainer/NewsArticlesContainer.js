import React from 'react';
import style from './NewsArticlesContainer.module.css';
import NewsArticle from './NewsArticle/NewsArticle';

const NewsArticlesContainer = (props) => {
  return (
    <div className={style.newsArticlesContainer}>
      {props.newsData.map((article, index) => {
        return <NewsArticle key={article.url} index={index} newsData={article}/>
      })}
    </div>
  )
}


export default NewsArticlesContainer;
