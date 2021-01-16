import { combineReducers } from "redux"
import listingsReducer from "./listings";
import categoryReducer from "../category/reducers";

export default combineReducers({
	listingsReducer,
	categoryReducer
})
