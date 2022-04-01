import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { getMealURL } from "./foodItem.selectors";

export const getMealAPI = createAsyncThunk(
  "FoodItem/GetMeal",
  async ({ id }) => {
    const response = await axios.get(`${getMealURL}${id}`);
    return response.data;
  }
);
