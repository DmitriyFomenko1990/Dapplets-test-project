import {dappletsAPI} from "../api/api";
import {dappletsAction, dappletsActionsType, DappletType} from "./redux/dappletsReducerTypes";
import {Dispatch} from "redux";

 export const fetchDapplets = (start:number, limit:number, filter:string, sort:string) => {
    return async (dispatch: Dispatch<dappletsAction>) =>{
       try {
           const response: any = await dappletsAPI.getDapplets(start, limit, filter, sort);
           dispatch({type: dappletsActionsType.FETCH_DAPPLETS, payload: response.data});
           dispatch({type: dappletsActionsType.FETCH_DAPPLETS_ERROR, payload: false})
       } catch (e) {
           dispatch({type: dappletsActionsType.FETCH_DAPPLETS_ERROR, payload: true})
       }

    }
}
export const fetchDappletsForPagination = (start:number, limit:number, filter:string, sort:string, prevState:DappletType[]) => {
    return async (dispatch: Dispatch<dappletsAction>) =>{
        try {
            const response: any = await dappletsAPI.getDapplets(start, limit, filter, sort);
            prevState = [...prevState,...response.data];
            dispatch({type: dappletsActionsType.FETCH_DAPPLETS, payload: prevState});
            dispatch({type: dappletsActionsType.FETCH_DAPPLETS_ERROR, payload: false});
        } catch (e) {
            dispatch({type: dappletsActionsType.FETCH_DAPPLETS_ERROR, payload: true})
        }

    }
}