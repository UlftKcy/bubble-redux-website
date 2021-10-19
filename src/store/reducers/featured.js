import { FETCH_FEATURED_PRODUCT_LIST } from "../actionTypes/types";

const initialState =  {
    featuredList : []
}

export default (state=initialState,action) => {
    switch (action.type) {
        case FETCH_FEATURED_PRODUCT_LIST:
            return {
                ...state,
                featuredList : action.payload
            }
        default:
            return state;
    }
}