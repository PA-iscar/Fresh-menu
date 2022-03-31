import { createSlice } from "@reduxjs/toolkit";
import { signupUserAPI } from "./auth.api";

const signupSlice = createSlice({
  name: "signup",
  initialState: {
    isSignedup: false,
    isLoading: false,
    signupError: "",
  },
  reducers: {
    resetSignup(state) {
      state.isSignedup = false;
      state.isLoading = false;
      state.signupError = "";
    },
  },
  extraReducers(builder) {
    builder
      .addCase(signupUserAPI.pending, (state, action) => {
        state.isSignedup = false;
        state.isLoading = true;
        state.signupError = "";
      })
      .addCase(signupUserAPI.fulfilled, (state, action) => {
        state.isSignedup = true;
        state.isLoading = false;
        state.signupError = "";
      })

      .addCase(signupUserAPI.rejected, (state, action) => {
        state.isSignedup = false;
        state.isLoading = false;
        state.signupError = "User already Registered";
      });
  },
});

export const { resetSignup } = signupSlice.actions;
export default signupSlice.reducer;
