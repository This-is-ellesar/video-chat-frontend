import { IAuthState } from '../types/store/Auth'

const GET_COUNT = "GET_COUNT"

const defaultState:IAuthState = {
    token: '',
    isAuthtentificated: false,
    isFetching: false,
}

export const authReducer = (state: IAuthState = defaultState, action: any) => {
    switch(action.type){ 
        case GET_COUNT:
            return {
                ...state,
                token: action.payload
            }
        default :
            return state
    }
}

export const getUsers = ({token} : any) => ({type: GET_COUNT, payload: token})