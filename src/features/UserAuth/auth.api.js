import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { checkUserURL, signupUserURL } from "./auth.selectors";

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
