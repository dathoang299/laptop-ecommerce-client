import { combineReducers } from 'redux';
import authReducer from './authReducer';
import initialState from './initialState';

const appReducer = combineReducers({
  auth: authReducer(initialState.auth),
  advanced: () => initialState.advanced,
});

const rootReducer = (state, action) => {
  if (action.type === 'USER_LOGGED_OUT') {
    state = undefined;
  }
  return appReducer(state, action);
};

export default rootReducer;
