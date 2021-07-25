import {dappletsAPI} from "../api/api";
import {dappletsAction, dappletsActionsType, DappletState} from "./redux/dappletsReducerTypes";
import {Dispatch} from "redux";

 export const fetchDapplets = (start:number, limit:number, filter:string, sort:string) => {
    return async (dispatch: Dispatch<dappletsAction>) =>{
       try {
           const response: any = await dappletsAPI.getDapplets(start, limit, filter, sort);
           dispatch({type: dappletsActionsType.FETCH_DAPPLETS, payload: response.data});
       } catch (e) {
           dispatch({type: dappletsActionsType.FETCH_DAPPLETS_ERROR, payload: 'error'})
       }
    }
}
export const fetchPic = (pic: string) => {
    return async (dispatch: Dispatch<dappletsAction>) => {
        try {
            const pict = await dappletsAPI.getPicture(pic);
            debugger
            console.log(pict)
        } catch (e) {
            dispatch({type: dappletsActionsType.FETCH_DAPPLETS_ERROR, payload: 'error'})
        }

    }
}