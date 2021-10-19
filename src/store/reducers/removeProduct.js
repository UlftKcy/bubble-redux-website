import {REMOVE_SHOW_PRODUCT} from "../actionTypes/types";

export default (state,action) => {
    switch (action.type) {
        case REMOVE_SHOW_PRODUCT:
            return {}
        default:
            return state;
    }
}