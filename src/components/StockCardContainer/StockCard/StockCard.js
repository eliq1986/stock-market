import React from 'react';
import style from './StockCard.module.css';

const StockCard = ({ stock }) => {

  const { price, symbol, day_change } = stock;

  const percentChange = day_change.slice(0, 1);

  if(percentChange === "-") {
    return (
      <div className={style.stockCard}>
        <p>Price: {price} <i className="angle down icon"></i></p>
        <p>Company: {symbol}</p>

      </div>
    )
  }

  return (
    <div className={style.stockCard}>
      <p>Price: {price} <i className="angle up icon"></i></p>
      <p>Company: {symbol}</p>

    </div>
  );
}


export default StockCard;
