import { combineReducers } from 'redux';
import user from './user';
import app from './app';
import reporting from './reporting';


const appStore = combineReducers({
  user,
  app,
  reporting
});

export default appStore;
