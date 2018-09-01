import * as React from 'react'

import App from 'src/module/app/components/App'
import { Main } from 'src/pages/Main'

const MainPageRoute = {
  path: '/',
  exact: true,
  component: () => (<Main />),
}

const rootRoute = {
  component: App,
  routes: [
    MainPageRoute,
  ],
}

export default rootRoute
