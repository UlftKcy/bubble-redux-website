import { FETCH_CATEGORY_LIST } from "../actionTypes/types";
const url = "http://localhost:3000/categories"

export const fetchCategoryList = () => dispatch => {
    fetch (url)
    .then(res => res.json())
    .then(categories => dispatch({
        type : FETCH_CATEGORY_LIST,
        payload : categories
    }))
}