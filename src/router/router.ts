import { LOGIN_ROUTE, ROOMS_ROUTE } from '../utils/consts'

//views
import Rooms from '../views/Rooms'
import SignIn from '../views/SignIn'

export const routes = [
    {
        path: LOGIN_ROUTE,
        component: SignIn
    },
    {
        path: ROOMS_ROUTE,
        component: Rooms
    }
]