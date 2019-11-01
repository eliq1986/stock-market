import React, { Component } from 'react';
import Header from './Header';
import StockCardContainer from './StockCardContainer';
import MarketIndexContainer from './MarketIndexContainer';

const apiKey = "VnEM1HPcGFuWN6emPLEG9BKxn2xxyeXBRE1eNtxYqhdd9ir8fLyt60BtdCsK";


class App extends Component {



fetchStockData = async () => {
  const response = await fetch(`https://api.worldtradingdata.com/api/v1/stock?symbol=DIS,AMZN,DOW&api_token=${apiKey}`)
  const data = response.json();
  console.log(data);
  return data;
}

state = {
  stocks: []
}


// componentDidMount() {
//  this.fetchStockData().then((data)=> {
//    this.setState({
//      stocks: data
//    })
//    console.log(this.state.stocks.data)
//  })
//
// }


render() {
  return(
    <div>
    <Header />
    <MarketIndexContainer />
    <StockCardContainer />
    </div>
  )
}

}


export default App;
