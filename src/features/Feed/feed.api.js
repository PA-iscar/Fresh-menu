import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { getFiltersURL, getMealsURL } from "./feed.selectors";

export const getFiltersAPI = createAsyncThunk(
  "Filter/Getfilters",
  async (payload) => {
    const response = await axios.get(`${getFiltersURL}`);
    return response.data;
  }
);

export const getMealsAPI = createAsyncThunk("Home/GetMeals", async () => {
  const response = await axios.get(`${getMealsURL}`);
  return response.data;
});
