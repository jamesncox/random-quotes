import React, { Component } from "react";
import "./App.css";
import "./Responsive.css"
import QuoteContainer from './QuoteContainer'
import { connect } from 'react-redux';
import { getQuote } from './actions/quotes'

class App extends Component {

  render() {
    return (
      <div className="App">
        <div className="wrapper">
          <h1>Quotivational</h1>
          <h2>Need motivation? Click for a famous quote</h2>
          <QuoteContainer />
        </div>
      </div>
    )
  }
}

export default connect(null, { getQuote })(App)