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
import EinsteinFun from '../images/EinsteinFun.jpg'
import EinsteinFacts from '../images/EinsteinFacts.jpg'
import EinsteinGravitation from '../images/EinsteinGravitation.jpg'
import EinsteinMiracle from '../images/EinsteinMiracle.jpg'
import EinsteinSources from '../images/EinsteinSources.jpg'
import EinsteinProblem from '../images/EinsteinProblem.jpg'
import EinsteinFool from '../images/EinsteinFool.jpg'
import EinsteinGenius from '../images/EinsteinGenius.jpg'
import EinsteinPreview from '../images/EinsteinPreview.jpg'
import EinsteinDifficulty from '../images/EinsteinDifficulty.jpg'
import EinsteinReality from '../images/EinsteinReality.jpg'
import EinsteinSmart from '../images/EinsteinSmart.jpg'

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
                EinsteinImagination,
                EinsteinFun,
                EinsteinFacts,
                EinsteinGravitation,
                EinsteinMiracle,
                EinsteinSources,
                EinsteinProblem,
                EinsteinFool,
                EinsteinGenius,
                EinsteinPreview,
                EinsteinDifficulty,
                EinsteinReality,
                EinsteinSmart
            ]

            const randomEinsteinImage = einsteinImages[Math.floor(Math.random() * einsteinImages.length)]
            return { ...state, image: randomEinsteinImage }

        default:
            return state
    }
}