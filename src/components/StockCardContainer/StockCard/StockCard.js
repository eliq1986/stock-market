import React from 'react';
import style from './StockCard.module.css';

const StockCard = (props) => {

  const { price, symbol } = props.stock;

  const percentChange = props.stock.day_change.slice(0, 1);

  if(percentChange === "-") {
    return (
      <div className={style.stockCard}>
        <p>Price: {price} <i class="angle down icon"></i></p>
        <p>Company: {symbol}</p>

      </div>
    )
  }

  return (
    <div className={style.stockCard}>
      <p>Price: {price} <i class="angle up icon"></i></p>
      <p>Company: {symbol}</p>

    </div>
  );
}


export default StockCard;
