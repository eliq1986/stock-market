import React, { Component } from 'react';

// functional components
import Header from './Header/Header';
import Footer from './Footer/Footer';

// css
import style from './App.module.css';

// container components
import Spinner from './Spinner/Spinner';
import StockCardContainer from './StockCardContainer/StockCardContainer';
import NewsArticlesContainer from './NewsArticlesContainer/NewsArticlesContainer';
import SearchedStock from './SeachedStock/SearchedStock';


import { stockApiKey, newsApiKey } from '../config.js';
import {stockApiURL, newsApiURL } from './api.js';

class App extends Component {

// set state
  state = {
    stocks: [],
    newsArticles: [],
    searchedStock: null
  }


// fetches stock data
fetchApiData = async (apiUrl, apiKey) => {
  const response = await fetch(apiUrl + apiKey);
  const data = response.json();
  return data;
}

// fetches search stock index
getSearchData = async(stockIndex, stockApiKey) => {
  const response = await fetch(`https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${stockIndex}&apikey=${stockApiKey}`)
  const data = response.json();
  return data;
}



searchStock = (stockIndex) => {
  this.getSearchData(stockIndex).then(data => {
    if(data["Error Message"]) {
      this.setState({searchedStock: null})
    } else {
     this.setState({searchedStock: data["Global Quote"]});
    }
  })

}


componentDidMount() {

  Promise.all([this.fetchApiData(stockApiURL, stockApiKey), this.fetchApiData(newsApiURL, newsApiKey)]).then( data => {
    const [stocks, articles] = data;
    this.setState({
      stocks,
      newsArticles: articles.articles.slice(0,6)
    })
  })

}




render() {

let mainContent= null;


  if(!this.state.stocks.length && !this.state.newsArticles.length && !this.state.searchStock ) {
      mainContent = (
        <Spinner/ >
      );

  } else if(this.state.searchedStock) {
     mainContent = (
       <div>
       <SearchedStock  singleStockIndexData={this.state.searchedStock}/>
       <NewsArticlesContainer newsData={this.state.newsArticles} />
       </div>
     );
  } else {
    mainContent = (
      <div>
      <StockCardContainer  stockData={this.state.stocks}/>
      <NewsArticlesContainer newsData={this.state.newsArticles} />
      </div>
    );
}

  return (

      <div className={style.container}>
        <Header searchStock={this.searchStock}/>
        <main className={style.mainContent}>
          {mainContent}
        </main>
        <Footer />
      </div>
  );
}

}


export default App;
