import {CHANGE_TEXT} from "./actions/changeText";

const initialState = {
    text: ''
}

export default function inputReducer(state = initialState, action) {
    switch (action.type) {
        case CHANGE_TEXT:
            return {
                ...state, text: action.data
            }

        default:
            return state
    }

}
