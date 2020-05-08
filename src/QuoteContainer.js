import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getQuote } from './actions/quotes'
import { getImage } from './actions/images'
import Quote from './Quote'

class QuoteContainer extends Component {

    componentDidMount() {
        this.props.getImage()
    }

    handleClick = () => {
        this.props.getQuote()
        this.props.getImage()
    }

    render() {
        return (
            <div className="flip-card">
                <div className="flip-card-inner">
                    <div className="flip-card-front">
                        <img
                            src={this.props.image}
                            alt="Einstein and Quote"
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
    quote: state.quote,
    image: state.images.image
})

export default connect(mapStateToProps, { getQuote, getImage })(QuoteContainer)