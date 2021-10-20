import { FETCH_FEATURED_PRODUCT_DETAIL } from "../actionTypes/types";

export const fetchFeaturedDetail = (productId) => dispatch => {
    fetch (`http://localhost:3000/featuredProducts/${productId}`)
    .then(res => res.json())
    .then(featuredProduct => dispatch({
        type : FETCH_FEATURED_PRODUCT_DETAIL,
        payload : featuredProduct
    }))
}