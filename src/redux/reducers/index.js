import { combineReducers } from 'redux';
import user from './userReducer';
import login from './loginReducer';
import character from './characterReducer';

const store = combineReducers({
  user,
  login,
  character,
});

export default store;
