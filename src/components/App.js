import React, { Component } from 'react';
import Header from './Header';
import StockCardContainer from './StockCardContainer';
import MarketIndexContainer from './MarketIndexContainer';
import NewsArticlesContainer from './NewsArticlesContainer';
import { apiKey } from '../config.js';

class App extends Component {


  state = {
    stocks: [],
    newsArticles: []
  }


fetchStockData = async () => {
  const response = await fetch(`https://api.worldtradingdata.com/api/v1/stock?symbol=DIS,AMZN,ANET&api_token=${apiKey}`)
  const data = response.json();
  return data;
}

fetchNewsData = async() => {
  const response = await fetch("https://newsapi.org/v2/top-headlines?country=us&apiKey=3d49048756f34fb08ea7c4c6a751e5b5")
  const data = response.json();
  return data;
}


componentDidMount() {

  Promise.all([this.fetchStockData(), this.fetchNewsData()]).then( data => {
    this.setState({
      stocks: data[0],
      newsArticles: data[1].articles.slice(0, 6)
    })
  })

}


render() {
  return(
    <div>
    <Header />
    <MarketIndexContainer />
    <StockCardContainer  stockData={this.state.stocks}/>
    <NewsArticlesContainer newsData={this.state.newsArticles} />
    </div>
  )
}

}


export default App;
