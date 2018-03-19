// @flow
import React from 'react'
import {Route, Switch} from 'react-router-dom'

import Top from '../containers/pages/Top'
import Book from '../containers/pages/Book'
import Category from '../containers/pages/Category'

export default (
  <Switch>
    <Route exact path="/" component={Top}/>
    <Route exact path="/book/:bookId" component={Book}/>
    <Route exact path="/category" component={Category}/>
  </Switch>
)