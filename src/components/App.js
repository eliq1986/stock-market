import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

// Container Components
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Form from './Form/Form';

// css
import style from './App.module.css';

//
import Spinner from './Spinner/Spinner';
import StockCardContainer from './StockCardContainer/StockCardContainer';
import NewsArticlesContainer from './NewsArticlesContainer/NewsArticlesContainer';


import { stockApiKey, newsApiKey, searchApiKey } from '../config.js';
import {stockApiURL, newsApiURL, searchApiURL} from './api.js';

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
getSearchData = async(stockIndex, ) => {
  const response = await fetch(`https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${stockIndex}&apikey=${stockApiKey}`)
  const data = response.json();
  return data;
}



searchStock = (stockIndex) => {
  this.getSearchData(stockIndex).then( data=> {
    console.log(data);
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


  if(!this.state.stocks.length && !this.state.newsArticles.length ) {
      mainContent = (
        <Spinner/ >
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
    <BrowserRouter>
      <div className={style.container}>
        <Header searchStock={this.searchStock}/>
        <main className={style.mainContent}>
          {mainContent}
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

}


export default App;
