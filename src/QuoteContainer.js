import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getQuote } from './actions/quotes'
import Quote from './Quote'
import EinsteinBicycle from './images/EinsteinBicycle.jpg'
import EinsteinChange from './images/EinsteinChange.jpg'
import EinsteinCreativity from './images/EinsteinCreativity.jpg'
import EinsteinDesk from './images/EinsteinDesk.jpg'
import EinsteinEducation from './images/EinsteinEducation.jpg'
import EinsteinExplain from './images/EinsteinExplain.jpg'
import EinsteinMemorize from './images/EinsteinMemorize.jpg'
import EinsteinMistake from './images/EinsteinMistake.jpg'
import EinsteinOthers from './images/EinsteinOthers.jpg'
import EinsteinOpposition from './images/EinsteinOpposition.jpg'
import EinsteinImagination from './images/EinsteinImagination.jpg'

class QuoteContainer extends Component {

    handleClick = () => {
        this.props.getQuote()
        // this.randomImage()
    }

    randomImage = () => {
        const einsteinImages = [
            EinsteinBicycle,
            EinsteinChange,
            EinsteinCreativity,
            EinsteinDesk,
            EinsteinEducation,
            EinsteinExplain,
            EinsteinMemorize,
            EinsteinMistake,
            EinsteinOthers,
            EinsteinOpposition,
            EinsteinImagination
        ]

        const randomEinsteinImage = einsteinImages[Math.floor(Math.random() * einsteinImages.length)]

        return randomEinsteinImage
    }

    render() {
        return (
            <div className="flip-card">
                <div className="flip-card-inner">
                    <div className="flip-card-front">
                        <img
                            src={this.randomImage()}
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
    quote: state.quote
})

export default connect(mapStateToProps, { getQuote })(QuoteContainer)