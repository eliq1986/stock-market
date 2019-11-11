import React from 'react';
import style from './NewsArticle.module.css';

const NewsArticle = ({ newsData, index }) => {

  const { newsImage, url, description, title, urlToImage } = newsData;


  const checkIfLastNewsArticle = (index) => {
      if(index === 5) {
        return null;
      }
      return <hr />
  }


  return (
    <div className={`centerText ${style.newsArticle}`}>
      <img className={style.newsImage} alt={description} src={urlToImage}/>
      <a href={url} target="_blank"><p>{title}</p></a>
     <p>{description}</p>
      {checkIfLastNewsArticle()}
    </div>
  )
}


export default NewsArticle;
