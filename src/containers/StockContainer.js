import React, { Component } from 'react';
import Stock from '../components/Stock'

class StockContainer extends Component {
 

  render() {
    return (
      <div>
        <h2>Stocks</h2>
        {this.props.allStocks.map(stocks => (<Stock 
            stocks={stocks}
            name={stocks.name}
            ticker={stocks.ticker}
            type={stocks.type}
            price={stocks.price}
            key={stocks.id}
            addOrRemove={this.props.addOrRemove}

          />))}
      </div>
    );
  }

}

export default StockContainer;
