import React from 'react'
import {Route, Switch} from 'react-router-dom'

import Top from '../containers/Top'
import HelloWorldContainer from '../containers/HelloWorldContainer'

export default (
  <Switch>
    <Route exact path="/" component={Top}/>
    <Route exact path="/hello_world" component={HelloWorldContainer}/>
  </Switch>
)