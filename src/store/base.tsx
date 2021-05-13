import { IBaseState, Snackbar } from "./store-types"

const SHOW_SNACKBAR = 'SHOW_SNACKBAR'

const defaultState:IBaseState = {
    snackbar : {
        type: '',
        message: '',
        show: false
    }
}


export const baseReducer = (state: IBaseState = defaultState, action: any) => {
    switch(action.type){ 
        case SHOW_SNACKBAR: 
            return {
                ...state,
                snackbar : action.payload.snackbar
            }
        default :
            return state
    }
}

export const showSnackbar = (snackbar: Snackbar) => ({
    type: SHOW_SNACKBAR,
    payload: snackbar
})