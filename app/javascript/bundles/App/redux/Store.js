// @flow
import { createStore, applyMiddleware, compose } from 'redux'
import { createLogger } from 'redux-logger'
import rootReducers from './rootReducer'

const configureStore = (railsProps: Object) => (
  createStore(rootReducers, railsProps, compose(applyMiddleware(createLogger())))
)

export default configureStore
