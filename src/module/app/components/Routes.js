import * as React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'

export const Routes = ({ location, routes = [] }) => (
  <Switch location={location}>
    {routes.map(route => (
      <Route
        key={route.key || route.path}
        path={route.path}
        exact={route.exact}
        strict={route.strict}
        render={(props) => {
          if (route.redirect) return <Redirect to={route.redirect} />
          if (route.component) {
            const Component = route.component
            return <Component {...props} route={route} />
          }
          return null
        }}
      />
    ))}
  </Switch>
)
