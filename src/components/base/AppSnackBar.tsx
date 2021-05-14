import { FC } from 'react'
//store
import { useTypedSelector } from '../hooks/useTypedSelector'
//ui
import { Snackbar } from '@material-ui/core';

const AppSnackBar: FC = () => {
    const { message, show, type } = useTypedSelector(state => state.base.snackbar)

    return (
        <Snackbar
            open={show}
            message={message}
        />
    )
} 


export default AppSnackBar

