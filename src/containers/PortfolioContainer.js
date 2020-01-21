import React, { Component } from 'react';
import Stock from '../components/Stock'

class PortfolioContainer extends Component {

  render() {
    return (
      <div>
        <h2>My Portfolio</h2>
{this.props.myPortfolio.map(stocks => (<Stock 
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

export default PortfolioContainer;
