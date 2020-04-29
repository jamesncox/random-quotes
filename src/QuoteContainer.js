import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getQuote } from './actions/quotes'
import Quote from './Quote'

class QuoteContainer extends Component {

    handleClick = () => {
        this.props.getQuote()
    }

    render() {
        return (
            <div className="flip-card">
                <div className="flip-card-inner">
                    <div className="flip-card-front">
                        <img
                            src="https://bigmemes.funnyjunk.com/pictures/Albert_e4f2e8_6546489.jpg"
                            alt="Einstein Picture and Quote"
                            style={{ borderRadius: ".1in" }}
                        />
                    </div>
                    <div className="flip-card-back">
                        <button onClick={this.handleClick}>Get Quote</button>
                        <Quote />
                    </div>
                </div>
            </div>
        )
    }

}

const mapStateToProps = (state) => ({
    quote: state.quote
})

export default connect(mapStateToProps, { getQuote })(QuoteContainer)