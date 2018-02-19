import {combineReducers} from "redux"
import {helloWorldReducer} from "./modules/HelloWorldReducer"

export default combineReducers({
  helloWorld: helloWorldReducer
});
