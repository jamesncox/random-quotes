import EinsteinBicycle from '../images/EinsteinBicycle.jpg'
import EinsteinChange from '../images/EinsteinChange.jpg'
import EinsteinCreativity from '../images/EinsteinCreativity.jpg'
import EinsteinDesk from '../images/EinsteinDesk.jpg'
import EinsteinEducation from '../images/EinsteinEducation.jpg'
import EinsteinExplain from '../images/EinsteinExplain.jpg'
import EinsteinMemorize from '../images/EinsteinMemorize.jpg'
import EinsteinMistake from '../images/EinsteinMistake.jpg'
import EinsteinOthers from '../images/EinsteinOthers.jpg'
import EinsteinOpposition from '../images/EinsteinOpposition.jpg'
import EinsteinImagination from '../images/EinsteinImagination.jpg'

import {
    RANDOM_IMAGE
} from '../actionTypes'

export default (state = { image: null }, action) => {
    switch (action.type) {
        case RANDOM_IMAGE:

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
            return { ...state, image: randomEinsteinImage }

        default:
            return state
    }
}