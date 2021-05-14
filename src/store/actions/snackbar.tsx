import { $axios } from '../../http/axios-config'

import { showSnackbar } from '../base'
import { ISnackbar } from '../store-types'

export const showSnackbarReducer = async (snackbar: ISnackbar) => {
    return async ( dispatch: any ) => {
        try {
            dispatch(showSnackbar(snackbar))
        } catch (error) {
            throw error
        }
    }
}