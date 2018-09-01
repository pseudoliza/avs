
/* eslint global-require: "off" */
import React from 'react'
import ReactDOM from 'react-dom'
import moment from 'moment'
import { Route, Router } from 'react-router-dom'
import { AppContainer } from 'react-hot-loader'
import { createBrowserHistory } from 'history'
import appRoute from 'src/module/app/app.routes'
import './styles/global.styled'

const history = createBrowserHistory()
moment.locale('RU')

const render = ({ route }) => {
  const rootEl = document.getElementById('root')
  const App = route.component

  if (rootEl && App) {
    ReactDOM.render(
      <AppContainer>
        <Router history={history}>
          <Route render={props => <App route={route} {...props} />} />
        </Router>
      </AppContainer>,
      rootEl,
    )
  }
}

render({ route: appRoute })

if (module && module.hot && module.hot.accept) {
  module.hot.accept('./module/app/app.routes.js', () => {
    const newAppRoute = require('./module/app/app.routes.js').default
    render({ route: newAppRoute })
  })
}
