import { FETCH_FEATURED_PRODUCT_LIST } from "../actionTypes/types";
const url = "http://localhost:3000/featuredProducts"

export const fetchFeaturedProduct = () => dispatch => {
    fetch (url)
    .then(res => res.json())
    .then(featuredList => dispatch({
        type : FETCH_FEATURED_PRODUCT_LIST,
        payload : featuredList
    }))
}