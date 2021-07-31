import {applyMiddleware, createStore} from "redux";
import thunk from "redux-thunk";
import {reducers} from "./redux/combine-reducers";

let store = createStore(reducers, applyMiddleware(thunk));
export default store;