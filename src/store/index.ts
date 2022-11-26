import {configureStore} from '@reduxjs/toolkit';
import {combineReducers} from 'redux';
import user, {userState} from './user';

export interface RootState {
  user: userState;
}

export default configureStore({
  reducer: combineReducers({
    user: user,
  }),
});
