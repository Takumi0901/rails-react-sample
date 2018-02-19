import React from 'react'
import {Route, Switch} from 'react-router-dom'

import HelloWorldApp from './HelloWorldApp'
import Sample from '../containers/Sample'
import HelloWorldContainer from '../containers/HelloWorldContainer'

export default (
  <Switch>
    <Route exact path="/" component={Sample}/>
    <Route exact path="/hello_world" component={HelloWorldContainer}/>
  </Switch>
)