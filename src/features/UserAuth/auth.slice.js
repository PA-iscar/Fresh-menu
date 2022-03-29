import { createSlice } from "@reduxjs/toolkit";
import { signupUserAPI } from "./data.api";

const signupSlice = createSlice({
  name: "signup",
  initialState: {},
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(signupUserAPI.pending, () => {
        window.alert("Signup Loading...");
      })
      .addCase(signupUserAPI.fulfilled, () => {
        window.alert("Signup Successful");
      })

      .addCase(signupUserAPI.rejected, () => {
        window.alert("Signup Failed");
      });
  },
});

export default signupSlice.reducer;
