import React from 'react';
import style from './NewsArticle.module.css';

const NewsArticle = (props) => {

  const { newsImage, url, description, title, urlToImage } = props.newsData;


  const checkIfLastNewsArticle = (index) => {
      if(props.index === 5) {
        return null;
      }
      return <hr />
  }


  return (
    <div className={`centerText ${style.newsArticle}`}>
      <img class={style.newsImage} src={urlToImage}/>
      <a href={url} target="_blank"><p>{title}</p></a>
     <p>{description}</p>
      {checkIfLastNewsArticle()}
    </div>
  )
}


export default NewsArticle;
