import { combineReducers } from "redux";
import categories from "./categories";
import shopProduct from "./shopProduct";

const routeReducer =  combineReducers({
    categories,
    shopProduct,
})

export default routeReducer;