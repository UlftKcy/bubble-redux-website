import { FETCH_FEATURED_PRODUCT_DETAIL } from "../actionTypes/types";

const initialState =  {
    featuredProduct : []
}

export default (state=initialState,action) => {
    switch (action.type) {
        case FETCH_FEATURED_PRODUCT_DETAIL:
            return {
                ...state,
                featuredProduct : action.payload
            }
        default:
            return state;
    }
}