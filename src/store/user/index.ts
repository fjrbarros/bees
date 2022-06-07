import { createSlice } from '@reduxjs/toolkit';
import { IUser } from './types';

const initialState: IUser = {
  name: '',
};

const userReducer = createSlice({
  name: 'userReducer',
  initialState,
  reducers: {
    addUserName: (state, actions) => ({ name: actions.payload }),
  },
});

export const { addUserName } = userReducer.actions;

export default userReducer.reducer;
