import { createSlice } from '@reduxjs/toolkit';

interface User {
  name: string;
}

const initialState: User = {
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
