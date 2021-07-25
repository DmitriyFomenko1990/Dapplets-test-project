import {combineReducers} from "redux";
import dappletsReducer from "./dapplets-reducer";
import {TypedUseSelectorHook, useSelector} from "react-redux";

export const reducers = combineReducers({
    dappletReducer: dappletsReducer,
});

export type dappletState = ReturnType<typeof reducers>;

export  const useTypedSelector: TypedUseSelectorHook<dappletState> = useSelector;