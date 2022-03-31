import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  checkUserURL,
  loginUserURL,
  logoutUserURL,
  signupUserURL,
} from "./auth.selectors";

export const signupUserAPI = createAsyncThunk(
  "Auth/SignupUser",
  async (payload) => {
    const response = await axios.post(`${signupUserURL}`, payload);
    return response.data;
  }
);

export const checkUserAPI = createAsyncThunk(
  "Auth/CheckUser",
  async ({ query, value }) => {
    const response = await axios.get(`${checkUserURL}${query}=${value}`);
    return response.data;
  }
);

export const loginUserAPI = createAsyncThunk(
  "Auth/LoginUser",
  async ({ id, userOTP }) => {
    const response = await axios.get(`${loginUserURL}${id}/${userOTP}`);
    return response.data;
  }
);

export const logoutUserAPI = createAsyncThunk("Auth/LogoutUser", async () => {
  const response = await axios.get(`${logoutUserURL}`, {
    withCredentials: true,
    headers: {
      "content-type": "applicatoin/json",
      "Access-Control-Allow-Credentials": true,
      Accept: "application/json",
    },
  });
  return response.data;
});

export const checkLoginAPI = createAsyncThunk(
  "Auth/LoginUserCheck",
  async () => {
    const response = await axios.get(`${loginUserURL}check`, {
      withCredentials: true,
      headers: {
        "content-type": "applicatoin/json",
        "Access-Control-Allow-Credentials": true,
        Accept: "application/json",
      },
    });
    return response.data;
  }
);
