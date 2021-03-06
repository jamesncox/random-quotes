import React, { Component } from 'react'
import { connect } from 'react-redux'

class Quote extends Component {

    render() {
        if (this.props.quote) {
            return (
                <div>
                    <p>
                        {this.props.quote.content}
                        <h2> </h2>
                        {this.props.quote.author}
                    </p>
                </div>
            )
        }
    }
}

const mapStateToProps = (state) => ({
    quote: state.quotes.quote
})

export default connect(mapStateToProps)(Quote)