import { combineReducers } from "redux"
import { weatherReducer } from "./reducer"


export default combineReducers(
    { weatherReducer }
)