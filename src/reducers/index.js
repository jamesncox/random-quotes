import { combineReducers } from 'redux'
import quotes from '../reducers/quotes'

const rootReducer = combineReducers(
    {
        quotes
    }
)

export default rootReducer