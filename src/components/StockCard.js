import React from 'react';
import style from './StockCard.module.css';

const StockCard = () => {
  return (
    <div className={style.StockCard}>
      <p>Price: 123</p>
      <p>Company: DIS</p>
    </div>
  )
}


export default StockCard;
