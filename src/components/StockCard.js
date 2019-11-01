import React from 'react';
import style from './StockCard.module.css';

const StockCard = (props) => {
  const {price, symbol} = props.stock;
  return (
    <div className={style.StockCard}>
      <p>Price: {price}</p>
      <p>Company: {symbol}</p>
    </div>
  )
}


export default StockCard;
