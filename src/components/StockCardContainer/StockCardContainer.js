import React from 'react';
import StockCard from './StockCard/StockCard';
import style from './StockCardContainer.module.css';

const StockCardContainer = (props) => {
  if(props.stockData.length === 0) {
    return (
      <div class="ui active centered inline loader"></div>
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
