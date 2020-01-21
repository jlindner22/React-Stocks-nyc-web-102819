import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {

  render() {
    return (
      <div>
        <SearchBar
        sortAlphabetically={this.props.sortAlphabetically}
        sortByPrice={this.props.sortByPrice}
        filterByType={this.props.filterByType}/>

          <div className="row">
            <div className="col-8">
          <StockContainer 
          allStocks={this.props.allStocks}
          addOrRemove={this.props.addOrRemove}
          />
        </div>
            <div className="col-4">

              <PortfolioContainer
                myPortfolio={this.props.myPortfolio}
                addOrRemove={this.props.addOrRemove}
                />

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
