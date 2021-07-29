export interface DappletState {
    currentPage: number;
    totalPages: number;
    filter: string;
    sort: sort;
    isServerError: boolean;
    dapplets: DappletType[] | never[];
};

export interface DappletType  {
    id: string;
    icon: string;
    title: string;
    author: string;
    rating: number;
    address: string;
    released: string;
    downloads: number;
    description: string;
    text_1: string;
    text_2: string;
    text_3: string;
    text_4:string;
    text_5: string;
    text_6: string;
    text_7: string;
    text_8: string;
    text_9: string;
    tags: string[]
}
export enum dappletsActionsType {
    FETCH_DAPPLETS = 'FETCH_DAPPLETS',
    FETCH_DAPPLETS_ERROR = 'FETCH_DAPPLETS_ERROR',
    SET_SORT = 'SET_SORT',
    SET_FILTER = 'SET_FILTER',
    SET_CURRENT_PAGE = 'SET_CURRENT_PAGE',
    SET_TOTAL_PAGE = 'SET_TOTAL_PAGE'
}

interface FetchDappletsAction{
    type: dappletsActionsType.FETCH_DAPPLETS;
    payload: DappletType[];
}
interface FetchDappletsErrorAction{
    type: dappletsActionsType.FETCH_DAPPLETS_ERROR;
    payload: boolean;
}
interface SetSortAction{
    type: dappletsActionsType.SET_SORT;
    payload: sort;
}
interface SetFilterAction{
    type: dappletsActionsType.SET_FILTER;
    payload: string;
}
interface SetTotalPageAction{
    type: dappletsActionsType.SET_TOTAL_PAGE;
    payload: number;
}
interface SetCurrentPageAction{
    type: dappletsActionsType.SET_CURRENT_PAGE;
    payload: number;
}


export type sort = "DESC" | "ASC";

export type dappletsAction = FetchDappletsAction | FetchDappletsErrorAction | SetSortAction | SetFilterAction | SetTotalPageAction | SetCurrentPageAction;