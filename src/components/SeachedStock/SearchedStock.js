import React from 'react';
import style from './SearchedStock.module.css';

const SearchedStock = ({ singleStockIndexData }) => {
  return(
    <div className={style.SearchedStockContainer}>
     <h2 className={style.text}>Stock Index: {singleStockIndexData["01. symbol"]} </h2>
     <p className={style.text}>Open: {singleStockIndexData["02. open"]}</p>
     <p className={style.text}>Previous Close: {singleStockIndexData["08. previous close"]}</p>
     <p className={style.text}>Current Price: {singleStockIndexData["05. price"]}</p>
    </div>
  );
}



export default SearchedStock;
