import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { getFiltersURL } from "./feed.selectors";

export const getFiltersAPI = createAsyncThunk(
  "Filter/Getfilters",
  async (payload) => {
    const response = await axios.get(`${getFiltersURL}`);
    return response.data;
  }
);
