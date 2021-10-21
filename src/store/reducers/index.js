import { combineReducers } from "redux";
import categories from "./categories";
import shopProduct from "./shopProduct";
import featured from "./featured";
import featuredDetail from "./featuredDetail";
import cartReducers from "./cartReducers";

const routeReducer =  combineReducers({
    categories,
    shopProduct,
    featured,
    featuredDetail,
    cartReducers,
})

export default routeReducer;