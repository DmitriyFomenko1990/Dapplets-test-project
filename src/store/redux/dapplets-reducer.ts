import {dappletsAction, DappletState, dappletsActionsType} from "./dappletsReducerTypes";

export const initialDappletState: DappletState = {
    filter: '',
    sort: "DESC",
    currentPage: 0,
    totalPages: 0,
    isServerError: false,
    dapplets: []
};

const dappletsReducer = (state = initialDappletState, action: dappletsAction): DappletState => {
    switch (action.type) {
        case dappletsActionsType.FETCH_DAPPLETS :
            return {...state, dapplets: action.payload}
        case dappletsActionsType.FETCH_DAPPLETS_ERROR :
            return {...state, isServerError: action.payload}
        case dappletsActionsType.SET_SORT:
            return {...state, sort: action.payload}
        case dappletsActionsType.SET_FILTER:
            return {...state, filter: action.payload}
        case dappletsActionsType.SET_TOTAL_PAGE:
            return {...state, totalPages: action.payload}
        case dappletsActionsType.SET_CURRENT_PAGE:
            return {...state, currentPage: action.payload}
        default:
            return state
    }
};

export default dappletsReducer;
