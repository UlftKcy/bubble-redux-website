import {FETCH_SHOP_PRODUCT} from "../actionTypes/types";

const initialState =  {
    product : []
}

export default (state=initialState,action) => {
    switch (action.type) {
        case FETCH_SHOP_PRODUCT:
            return {
                ...state,
                product : action.payload
            }
        default:
            return state;
    }
}