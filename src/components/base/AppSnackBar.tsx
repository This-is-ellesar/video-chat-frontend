import { FC } from 'react'
//store
import { useTypedSelector } from '../../hooks/useTypedSelector'
//ui
import { Snackbar } from '@material-ui/core'

const AppSnackBar: FC = () => {
  const { message, show } = useTypedSelector((state) => state.base.snackbar)

  return <Snackbar open={show} message={message} autoHideDuration={1000} />
}

export default AppSnackBar
