import React from 'react';
import style from './NewsArticlesContainer.module.css';
import NewsArticle from './NewsArticle';

const NewsArticlesContainer = (props) => {
  console.log(props.newsData)
  return (
    <div className={style.NewsArticlesContainer}>
      {props.newsData.map((article) => {
        return <NewsArticle newsData={article}/>
      })}
    </div>
  )
}


export default NewsArticlesContainer;
