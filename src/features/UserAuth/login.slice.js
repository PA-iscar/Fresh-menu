import { createSlice } from "@reduxjs/toolkit";
import { loginUserAPI } from "./auth.api";

const loginSlice = createSlice({
  name: "login",
  initialState: {
    isLoggedin: false,
    user: {},
    isLoading: false,
    isError: false,
  },
  reducers: {
    logout(state) {
      state.isLoggedin = false;
      state.user = {};
      state.isLoading = false;
      state.isError = false;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(loginUserAPI.pending, (state, action) => {
        state.isLoggedin = false;
        state.user = {};
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(loginUserAPI.fulfilled, (state, action) => {
        state.isLoggedin = true;
        state.user = action.payload;
        state.isLoading = false;
        state.isError = false;
      })
      .addCase(loginUserAPI.rejected, (state, action) => {
        state.isLoggedin = false;
        state.user = {};
        state.isLoading = false;
        state.isError = true;
      });
  },
});

export const { logout } = loginSlice.actions;
export default loginSlice.reducer;
