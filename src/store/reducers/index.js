import { combineReducers } from "redux";
import categories from "./categories";

const routeReducer =  combineReducers({
    categories,
})

export default routeReducer;