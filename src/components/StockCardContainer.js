import React from 'react';
import StockCard from './StockCard';
import style from './StockCardContainer.module.css';

const StockCardContainer = (props) => {
  if(props.stockData.length === 0) {
    return (
      <h3>Loading.....</h3>
    );

  }

  return (
    <div className={style.StockCardContainer}>

    {props.stockData.data.map( stock => {
      return <StockCard stock={stock} />
    })}

    </div>
  );
}


export default StockCardContainer;
