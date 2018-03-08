// @flow
import {combineReducers} from "redux"
import {helloWorldReducer} from "./modules/HelloWorldReducer"
import { reducer as formReducer } from 'redux-form'

export default combineReducers({
  helloWorld: helloWorldReducer,
  form: formReducer
})
