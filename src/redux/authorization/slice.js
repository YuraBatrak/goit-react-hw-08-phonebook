import { createSlice } from '@reduxjs/toolkit';
import { userApi } from './operations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshingCurrentUser: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addMatcher(
      userApi.endpoints.registerUser.matchFulfilled,
      (state, { payload }) => {
        state.token = payload.token;
        state.user = payload.user;
        state.isLoggedIn = true;
      }
    );

    builder.addMatcher(
      userApi.endpoints.logInUser.matchFulfilled,
      (state, { payload }) => {
        state.token = payload.token;
        state.user = payload.user;
        state.isLoggedIn = true;
      }
    );

    builder.addMatcher(
      userApi.endpoints.logOutUser.matchFulfilled,
      (state, _action) => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
      }
    );

    builder.addMatcher(userApi.endpoints.getCurrentUser.matchPending, state => {
      state.isRefreshingCurrentUser = true;
    });

    builder.addMatcher(
      userApi.endpoints.getCurrentUser.matchFulfilled,
      (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.isRefreshingCurrentUser = false;
      }
    );

    builder.addMatcher(
      userApi.endpoints.getCurrentUser.matchRejected,
      state => {
        state.isRefreshingCurrentUser = false;
      }
    );
  },
});

export default authSlice.reducer;
export const {
  registerUser,
  logInUser,
  logOutUser,
  getCurrentUser,
} = authSlice.actions;
