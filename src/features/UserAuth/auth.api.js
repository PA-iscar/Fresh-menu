import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { checkUserURL, loginUserURL, signupUserURL } from "./auth.selectors";

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
