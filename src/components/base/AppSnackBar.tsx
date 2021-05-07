import react, { FC } from 'react'
//ui
import { Snackbar } from '@material-ui/core';

const AppSnackBar: FC = () => {
    return (
    <Snackbar
        open={true}
        message="I love snacks"
    />
    )
} 


export default AppSnackBar

