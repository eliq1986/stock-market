import React from 'react';
import StockCard from './StockCard/StockCard';
import style from './StockCardContainer.module.css';

const StockCardContainer = (props) => {
  const { data } = props.stockData;

  return (
    <div className={style.StockCardContainer}>
    {data.map( stock => <StockCard key={stock.symbol} stock={stock} />)}
    </div>
  );
}


export default StockCardContainer;
