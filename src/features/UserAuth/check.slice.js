import { createSlice } from "@reduxjs/toolkit";
import { checkUserAPI } from "./auth.api";

const checkSlice = createSlice({
  name: "check",
  initialState: {
    userExists: false,
    userID: "",
    OTP: "",
    isLoading: false,
    checkError: "",
  },
  reducers: {
    resetCheck(state) {
      state.userExists = false;
      state.userID = "";
      state.OTP = "";
      state.isLoading = false;
      state.checkError = "";
    },
  },
  extraReducers(builder) {
    builder
      .addCase(checkUserAPI.pending, (state, action) => {
        state.userExists = false;
        state.userID = "";
        state.OTP = "";
        state.isLoading = true;
        state.checkError = "";
      })
      .addCase(checkUserAPI.fulfilled, (state, action) => {
        state.userExists = true;
        state.userID = action.payload.id;
        state.OTP = action.payload.OTP;
        state.isLoading = false;
        state.checkError = "";
      })

      .addCase(checkUserAPI.rejected, (state, action) => {
        state.userExists = false;
        state.userID = "";
        state.OTP = "";
        state.isLoading = false;
        state.checkError = "User not Registered";
      });
  },
});


export const { resetCheck } = checkSlice.actions;
export default checkSlice.reducer;
