import React from 'react';
import StockCard from './StockCard';
import style from './StockCardContainer.module.css';

const StockCardContainer = () => {
  return (
    <div className={style.StockCardContainer}>
      <StockCard />
      <StockCard />
      <StockCard />
    </div>
  )
}


export default StockCardContainer;
