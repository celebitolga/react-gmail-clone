import { createSlice } from '@reduxjs/toolkit';
import { auth } from '../firebase';


export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
  },
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
    },
  },
});

export const logoutAsyn = () => (dispatch) => {
  auth.signOut().then(() => {
    dispatch(logout());
  });
}

export const selectUser = (state) => state.user.user;

export const { login, logout } = userSlice.actions;

export default userSlice.reducer;
