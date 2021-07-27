import {dappletsAPI} from "../api/api";
import {dappletsAction, dappletsActionsType, DappletType, sort} from "./redux/dappletsReducerTypes";
import {Dispatch} from "redux";

export const fetchDapplets = (start:number, limit:number,  sort:string, prevState:DappletType[]) => {
    return async (dispatch: Dispatch<dappletsAction>) =>{
        try {
            const response: any = await dappletsAPI.getDapplets(start, limit, sort);

            const state = [...prevState,...response.data];
            dispatch({type: dappletsActionsType.FETCH_DAPPLETS, payload: state});
            dispatch({type: dappletsActionsType.FETCH_DAPPLETS_ERROR, payload: false});
        } catch (e) {
            dispatch({type: dappletsActionsType.FETCH_DAPPLETS_ERROR, payload: true})
        }
    }
}
export const fetchFilteredDapplets = (start:number, limit:number, filter:string,  sort:string, prevState:DappletType[]) => {
    return async (dispatch: Dispatch<dappletsAction>) =>{
        try {
            const response: any = await dappletsAPI.getFilteredDapplets(start, limit, filter, sort);
            const state = [...prevState,...response.data];
            dispatch({type: dappletsActionsType.FETCH_DAPPLETS, payload: state});
            dispatch({type: dappletsActionsType.FETCH_DAPPLETS_ERROR, payload: false});
        } catch (e) {
            dispatch({type: dappletsActionsType.FETCH_DAPPLETS_ERROR, payload: true})
        }
    }
}

export const setSort = (sort: sort) => {
    return  (dispatch: Dispatch<dappletsAction>) =>{
        dispatch({type: dappletsActionsType.SET_SORT, payload: sort});
    }
}
export const setFilter = (filter: string) => {
    return  (dispatch: Dispatch<dappletsAction>) =>{
        dispatch({type: dappletsActionsType.SET_FILTER, payload: filter});
    }
}