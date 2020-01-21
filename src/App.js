import React, { Component } from 'react';
import Header from './components/Header'
import MainContainer from './containers/MainContainer'

class App extends Component {

  state = {
    allStocks: [],
    filteredStocks: [],
    myPortfolio: [],
    inPortfolio: [],
    selectedFilter: 'none'
  }

  componentDidMount(){
    fetch('http://localhost:3000/stocks')
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      this.setState({
        allStocks: data
      })
    });
  }

  addOrRemove = (clickedStock) => {
     if (!this.state.inPortfolio.includes(clickedStock.ticker)) {
        {this.setState({
        myPortfolio: [...this.state.myPortfolio, clickedStock],
        inPortfolio: [...this.state.inPortfolio, clickedStock.ticker],
      })
    }
  } else {
      let filteredTickers = this.state.inPortfolio.filter(ticker => clickedStock.ticker !== ticker)
      let filteredPortfolio = this.state.myPortfolio.filter(stock => clickedStock.ticker !== stock.ticker)
         this.setState({
           myPortfolio: filteredPortfolio, //array of the objects clicked
           inPortfolio: filteredTickers //array of the object tickers 
         })
     }}

     sortAlphabetically = () => {
       this.setState({
         allStocks: this.state.allStocks.sort((stock1, stock2) => {
          if (stock1.name < stock2.name) {
            return -1;
          }
          if (stock1.name > stock2.name) {
            return 1;
          }
           return 0;
        })
      })
      console.log(this.state.allStocks)
     }

     sortByPrice = () => {
        this.setState({
          allStocks: this.state.allStocks.sort((stock1, stock2) => {
            if (stock1.price < stock2.price) {
              return -1;
            }
            if (stock1.price > stock2.price) {
              return 1;
            }
             return 0;
          })
        })
        console.log(this.state.allStocks)
       }

     filterByType = (target) => {
       console.log(target.value)
       let newList = this.state.allStocks.filter(stock => stock.type === target.value)
       this.setState({
        selectedFilter: target.value,
        filteredStocks: newList
      })
      
    }

  render() {
    return (
      <div>
        <Header/>
        <MainContainer
        sortAlphabetically={this.sortAlphabetically}
        sortByPrice={this.sortByPrice}
        filterByType={this.filterByType}
        addOrRemove={this.addOrRemove}
        myPortfolio={this.state.myPortfolio}
        allStocks={this.state.allStocks}/>
      </div>
    );
  }
}

export default App;
