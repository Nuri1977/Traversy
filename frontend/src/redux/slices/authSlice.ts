import { createSelector, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "../../../interface/user";
import { RootState } from "../store";

interface AuthState {
  userInfo: User | null;
}

const initialState: AuthState = {
  userInfo: localStorage.getItem("userInfo")
    ? JSON.parse(localStorage.getItem("userInfo")!)
    : null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (state, action: PayloadAction<User>) => {
      state.userInfo = action.payload;
      localStorage.setItem("userInfo", JSON.stringify(action.payload));
    },
    logout: (state) => {
      state.userInfo = null;
      localStorage.removeItem("userInfo");
    },
  },
});

export const { setCredentials, logout } = authSlice.actions;

// === SELECTORS ===

const selectAuthStore = (state: RootState) => state.auth;
export const selectUserInfo = createSelector(
  [selectAuthStore],
  (auth) => auth.userInfo
);
