import { FC } from 'react'
import { useStore } from 'react-redux'
//ui
import { Snackbar } from '@material-ui/core';

const AppSnackBar: FC = () => {
    const snackbar = useStore().getState().base

    console.log(snackbar)

    return (
    <Snackbar
        open={snackbar.show}
        message={snackbar.message}
    />
    )
} 


export default AppSnackBar

