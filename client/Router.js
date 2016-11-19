
import React from 'react'
import { render } from 'react-dom'
import { Router, IndexRoute, Route, browserHistory } from 'react-router'

import App from './containers/App'
import Home from './containers/Home'
import Index from './containers/Index'
import Sandbox from './containers/Sandbox'




render((
  <Router  history={browserHistory} >
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path='index' component={Index} />
      <Route path='sandbox' component={Sandbox} />
    </Route>
  </Router>
), document.getElementById('app'))