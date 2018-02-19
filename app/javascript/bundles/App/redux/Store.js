import { createStore } from 'redux';
import rootReducers from './rootReducer';

const configureStore = (railsProps) => (
  createStore(rootReducers, railsProps)
);

export default configureStore;
