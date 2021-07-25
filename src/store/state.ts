import {applyMiddleware, createStore} from "redux";
import thunk from "redux-thunk";
import {reducers} from "./redux/combineReducers";

let store = createStore(reducers, applyMiddleware(thunk));
export default store;