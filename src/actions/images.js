import {
    RANDOM_IMAGE
} from '../actionTypes'

const randomImage = () => {
    return { type: RANDOM_IMAGE }
}

export const getImage = () => {
    return dispatch => {
        dispatch(randomImage())
    }
}

