// @flow
import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Top from '../containers/pages/Top'
import DetailBook from '../containers/pages/DetailBook'
import EditBook from '../containers/pages/EditBook'
import Category from '../containers/pages/Category'

export default (
  <Switch>
    <Route exact path="/" component={Top} />
    <Route exact path="/book/:bookId" component={DetailBook} />
    <Route exact path="/book/:bookId/edit" component={EditBook} />
    <Route exact path="/category" component={Category} />
  </Switch>
)
