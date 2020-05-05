import { combineReducers } from 'redux'
import quotes from '../reducers/quotes'
import images from '../reducers/images'

const rootReducer = combineReducers(
    {
        quotes,
        images
    }
)

export default rootReducer