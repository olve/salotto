import React from 'react'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'

import App         from './components/App'
import MainMenu    from './components/MainMenu'
import ImagePicker from './components/ImagePicker'

export default (
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={MainMenu} />
      <route path="images" component={ImagePicker} />
    </Route>
  </Router>
)
