import {dappletsAction, DappletState, dappletsActionsType} from "./dappletsReducerTypes";

export const initialDappletState: DappletState = {
    filter: '',
    sort: "DESC",
    currentPage: 0,
    totalPages: 0,
    isServerError: false,
    dapplets: [{
        "id": "",
        "icon": "",
        "title": "",
        "author": "",
        "rating": 0,
        "address": "",
        "released": "",
        "downloads": 0,
        "description": "",
        "text_1": "",
        "text_2": "",
        "text_3": "",
        "text_4": "",
        "text_5": "",
        "text_6": "",
        "text_7": "",
        "text_8": "",
        "text_9": "",
        "tags": ["7", "8", "0", "6"]
    }]
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
