import {
    SET_QUOTE
} from '../actionTypes'

const setQuote = quote => {
    return { type: SET_QUOTE, quote: quote }
}

export const getQuote = () => {
    return async dispatch => {
        try {
            const res = await fetch("https://api.quotable.io/random")
            if (!res.ok) {
                throw res
            }
            const quoteData = await res.json()
            dispatch(setQuote(quoteData))
        } catch (err) {
            alert("Failed to load quotes")
        }
    }
}