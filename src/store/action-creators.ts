import {dappletsAPI} from "../api/api";
import {dappletsAction, dappletsActionsType, DappletType, sort} from "./redux/dappletsReducerTypes";
import {Dispatch} from "redux";

interface FilteredResult {
    dapplets: DappletType[];
    page: number;
    totalPages: number
}

const filtered  = async (page: number,  limit:number, filter:string , sort:string, dapplets: DappletType[]):  Promise<any> => {
    try {
        const response: any = await dappletsAPI.getFilteredDapplets(page, limit, filter, sort);
        const totalPages: number = response.total;
        const filterTextLowerCase = filter.toLowerCase();
        const filteredData = response.data.filter((user: DappletType) => {
            return user.title.toLowerCase().includes(filterTextLowerCase) || user.author.toLowerCase().includes(filterTextLowerCase)
                || user.description.toLowerCase().includes(filterTextLowerCase) ;
        });
        dapplets = [...dapplets,...filteredData];
        if (dapplets.length < response.data.length && page < totalPages ) {
            return filtered(page+1, limit, filter, sort, dapplets);
        }
        page = page + 1;
        return {dapplets, page, totalPages};
    } catch (e) {
        dispatchError(true);
    }
}

export const fetchDapplets = (start:number, limit:number,  sort:string, prevState:DappletType[]) => {
    return async (dispatch: Dispatch<dappletsAction>) =>{
        try {
            const response: any = await dappletsAPI.getDapplets(start, limit, sort);
            const state = [...prevState,...response.data];
            const nextPage= ++start;
            dispatch(setTotalPages(response.total));
            dispatch(setDapplets(state));
            dispatch(setCurrentPage(nextPage));
        } catch (e) {
            dispatchError(true);
        }
    }
}

export const fetchFilteredDapplets = (start:number, limit:number, filter:string,  sort:string, prevState:DappletType[]) => {
    return async (dispatch: Dispatch<dappletsAction>) =>{
        try {
            const {dapplets, page, totalPages}: FilteredResult = await filtered(start, limit, filter, sort, prevState);
            dispatch(setDapplets(dapplets));
            dispatch(setTotalPages(totalPages));
            dispatch(setCurrentPage(page));
        } catch (e) {
            dispatch(setIsError(true));
        }
    }
}

export const dispatchSort = (sort: sort) => {
    return  (dispatch: Dispatch<dappletsAction>) =>{
        dispatch({type: dappletsActionsType.SET_SORT, payload: sort});
    }
}
export const dispatchFilter = (filter: string) => {
    return  (dispatch: Dispatch<dappletsAction>) =>{
        dispatch({type: dappletsActionsType.SET_FILTER, payload: filter});
    }
}
export const dispatchError = (isError: boolean) => {
    return  (dispatch: Dispatch<dappletsAction>) =>{
        dispatch(setIsError(isError));
    }
}
export const dispatchCurrentPage = (page: number) => {
    return  (dispatch: Dispatch<dappletsAction>) =>{
        dispatch(setCurrentPage(page));
    }
}

export const setDapplets = (dapplets: DappletType[]): dappletsAction  => ({type: dappletsActionsType.FETCH_DAPPLETS, payload: dapplets});
const setIsError = (isError: boolean): dappletsAction  => ({type: dappletsActionsType.FETCH_DAPPLETS_ERROR, payload: isError});
const setTotalPages = (pages: number): dappletsAction  => ({type: dappletsActionsType.SET_TOTAL_PAGE, payload: pages});
const setCurrentPage = (page: number): dappletsAction  => ({type: dappletsActionsType.SET_CURRENT_PAGE, payload: page});

