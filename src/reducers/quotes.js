import {
    SET_QUOTE
} from '../actionTypes'

export default (state = { quote: [] }, action) => {
    switch (action.type) {
        case SET_QUOTE:
            return { ...state, quote: action.quote }

        default:
            return state
    }
}