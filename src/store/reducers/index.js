import { combineReducers } from "redux";
import categories from "./categories";
import shopProduct from "./shopProduct";
import featured from "./featured";
import featuredDetail from "./featuredDetail";

const routeReducer =  combineReducers({
    categories,
    shopProduct,
    featured,
    featuredDetail,
})

export default routeReducer;