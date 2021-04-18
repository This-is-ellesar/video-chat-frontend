import react from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

import { routes } from './router/router'

const AppRouter = () => {
    return (
        <Switch>
            {routes.map(({ path, component} : any) => {
                <Route path={path} component={component} exact={true} />
            })}

            <Redirect to={'/'} />
        </Switch>
    )
}

export default AppRouter