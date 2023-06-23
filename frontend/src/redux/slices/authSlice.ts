import { createSelector, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "../../../interface/user";
import { RootState } from "../store";

interface AuthState {
  userInfo: User | null;
}

const initialState: AuthState = {
  userInfo: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<User>) => {
      state.userInfo = action.payload;
    },
    logout: (state) => {
      state.userInfo = null;
    },
  },
});

export const { login, logout } = authSlice.actions;

// === SELECTORS ===

const selectAuthStore = (state: RootState) => state.auth;
export const selectUserInfo = createSelector(
  [selectAuthStore],
  (auth) => auth.userInfo
);

export default authSlice.reducer;
