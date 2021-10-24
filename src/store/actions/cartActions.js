import { ADD_PRODUCT_TO_CART,DECREASE_PRODUCT_FROM_CART,REMOVE_PRODUCT_FROM_CART } from "../actionTypes/types";

export const addProductToCart = (product) => {
    return{
        type: ADD_PRODUCT_TO_CART,
        payload:product
    }
}
export const decreaseProductFromCart = (product) => {
    return{
        type: DECREASE_PRODUCT_FROM_CART,
        payload:product
    }
}
export const removeProductFromCart = (product) => {
    return{
        type: REMOVE_PRODUCT_FROM_CART,
        payload:product
    }
}