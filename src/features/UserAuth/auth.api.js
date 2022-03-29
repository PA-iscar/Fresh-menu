import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { signupUserURL } from "./auth.selectors";

export const signupUserAPI = createAsyncThunk(
  "Auth/SignupUser",
  async (payload) => {
    const response = await axios.post(`${signupUserURL}`, payload);
    return response.data;
  }
);
