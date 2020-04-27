import React, { Component } from "react";
import "./styles.css";
// import Signup from './Signup'
import QuoteContainer from './QuoteContainer'
import { connect } from 'react-redux';
import { getQuote } from './actions/quotes'

class App extends Component {

  render() {
    return (
      <div className="App">
        <div className="wrapper">
          <h1>Motivational Quotes</h1>
          <h2>Click below to see a random quote</h2>
          {/* <Signup /> */}
          <QuoteContainer />
        </div>
      </div>
    )
  }
}

export default connect(null, { getQuote })(App)