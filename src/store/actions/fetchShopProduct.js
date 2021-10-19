import {FETCH_SHOP_PRODUCT} from "../actionTypes/types";

const fetchShopProduct = (category) => dispatch => {
    fetch (`http://localhost:3000/products?categoryId=${category.id}`)
    .then(res => res.json())
    .then(product => dispatch({
        type : FETCH_SHOP_PRODUCT,
        payload :  product[0]   
    }))
}

export default fetchShopProduct;