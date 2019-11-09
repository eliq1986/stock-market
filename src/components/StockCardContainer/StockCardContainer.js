import React from 'react';
import StockCard from './StockCard/StockCard';
import style from './StockCardContainer.module.css';

const StockCardContainer = (props) => {
  const { data } = props.stockData;

  // if(props.stockData.length === 0) {
  //   return (
  //     <div className="ui active centered inline loader"></div>
  //   );
  //
  // }

  return (
    <div className={style.StockCardContainer}>

    {props.stockData.data.map( stock => {
      return <StockCard key={stock.symbol} stock={stock} />
    })}

    </div>
  );
}


export default StockCardContainer;
