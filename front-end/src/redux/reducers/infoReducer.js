
import { getAllInfos } from "../../services/infoData";
import { END_FETCHING_DATA, ERROR_FETCHING_DATA, IS_LOADING, ADD_REQUEST_INFO_ACTION } 
from "../actions/infoAction";

const initialState = {
    isLoading: false,
    infos: getAllInfos(),
    error: undefined
};

export const InfoReducer = (state = initialState, action) => {
    switch(action.type){
        case IS_LOADING:
            return{
                ...state,
                isLoading: false,
                infos: action.infos,
                error: undefined
            }
        case ADD_REQUEST_INFO_ACTION:
            return{
                ...state,
                isLoading: false,
                infos: action.infos,
                error: undefined
            }
            
            case END_FETCHING_DATA:
                return{
                    ...state,
                    isLoading: false,
                    error: action.error
                }
            case ERROR_FETCHING_DATA:
                return{
                    ...state,
                    isLoading: false,
                    error: action.error
                }
            
                default:
                    return{...initialState}
                    
    }
}