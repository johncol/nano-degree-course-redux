import { combineReducers } from 'redux';

import { todoReducer } from './todo';
import { goalReducer } from './goal';
import { loadingReducer } from './shared';

export default combineReducers({
  todos: todoReducer,
  goals: goalReducer,
  loading: loadingReducer
});
