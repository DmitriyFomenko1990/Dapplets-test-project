export interface DappletState {
    isServerError: boolean;
    dapplets: DappletType[];
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
}

interface FetchDappletsAction{
    type: dappletsActionsType.FETCH_DAPPLETS;
    payload: any[];
}
interface FetchDappletsErrorAction{
    type: dappletsActionsType.FETCH_DAPPLETS_ERROR;
    payload: boolean;
}

export type dappletsAction = FetchDappletsAction | FetchDappletsErrorAction;