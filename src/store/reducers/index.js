import { combineReducers } from "redux";
import categories from "./categories";
import shopProduct from "./shopProduct";
import featured from "./featured";

const routeReducer =  combineReducers({
    categories,
    shopProduct,
    featured,
})

export default routeReducer;