import { REMOVE_SELECTED_PRODUCT } from "../actionTypes/types";


export default (state,action) => {
    switch (action.type) {
        case REMOVE_SELECTED_PRODUCT:
            return {}
        default:
            return state;
    }
}