import React, { Component } from 'react';
import Header from './Header/Header';
import Footer from './Footer/Footer';


import StockCardContainer from './StockCardContainer/StockCardContainer';
import MarketIndexContainer from './MarketIndex/MarketIndexContainer';
import NewsArticlesContainer from './NewsArticlesContainer/NewsArticlesContainer';


import { stockApiKey, newsApiKey } from '../config.js';

class App extends Component {

// set state
  state = {
    stocks: [],
    newsArticles: []
  }


fetchStockData = async () => {
  const response = await fetch(`https://api.worldtradingdata.com/api/v1/stock?symbol=DIS,AMZN,ANET&api_token=${stockApiKey}`)
  const data = response.json();
  return data;
}

fetchNewsData = async() => {
  const response = await fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${newsApiKey}`)
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
    <Footer />
    </div>
  )
}

}


export default App;
