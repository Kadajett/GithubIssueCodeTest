import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'

import LoginReducer from "./login.reducer";
import RepositoryReducer from './repository.reducer';

export default (history) => combineReducers({
  router: connectRouter(history),
  Login: LoginReducer,
  Repository: RepositoryReducer,
});