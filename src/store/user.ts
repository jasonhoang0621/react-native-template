import {createSlice} from '@reduxjs/toolkit';

export interface userState {
  id: number;
  email: string;
  name: string;
  role: string;
}

const userSlice = createSlice({
  name: 'user',
  initialState: {
    id: '',
    email: 'jasonhoang',
    name: 'adcadc',
    role: '',
  },
  reducers: {
    login(state, action: {payload: userState}) {
      return {...state, info: action.payload, isLogged: true};
    },
  },
});
const {actions, reducer} = userSlice;
export const {login} = actions;
export default reducer;
