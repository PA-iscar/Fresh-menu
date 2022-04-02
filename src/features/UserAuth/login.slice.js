import { createSlice } from "@reduxjs/toolkit";
import { checkLoginAPI, loginUserAPI, logoutUserAPI } from "./auth.api";
import { saveLocalData, loadLocalData } from "../LocalStorage/localStorage";

const loginSlice = createSlice({
  name: "login",
  initialState: {
    isLoggedin: loadLocalData("isLoggedin") || false,
    user: loadLocalData("user") || {},
    isLoading: false,
    isError: false,
  },
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(loginUserAPI.pending, (state, action) => {
        state.isLoggedin = false;
        state.user = {};
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(loginUserAPI.fulfilled, (state, action) => {
        saveLocalData("isLoggedin", true);
        saveLocalData("user", action.payload);
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
    builder
      .addCase(logoutUserAPI.pending, (state) => {
        saveLocalData("isLoggedin", false);
        saveLocalData("user", {});
        state.isLoggedin = false;
        state.user = {};
        state.isLoading = false;
        state.isError = false;
      })
      .addCase(logoutUserAPI.fulfilled, (state) => {
        saveLocalData("isLoggedin", false);
        saveLocalData("user", {});
        state.isLoggedin = false;
        state.user = {};
        state.isLoading = false;
        state.isError = false;
        window.alert("Logged Out");
      })
      .addCase(logoutUserAPI.rejected, (state) => {
        saveLocalData("isLoggedin", false);
        saveLocalData("user", {});
        state.isLoggedin = false;
        state.user = {};
        state.isLoading = false;
        state.isError = false;
      });
    builder
      .addCase(checkLoginAPI.pending, (state, action) => {})
      .addCase(checkLoginAPI.fulfilled, (state, action) => {
        state.isLoggedin = true;
        state.user = action.payload;
        state.isLoading = false;
        state.isError = false;
      })
      .addCase(checkLoginAPI.rejected, (state, action) => {});
  },
});

export default loginSlice.reducer;
