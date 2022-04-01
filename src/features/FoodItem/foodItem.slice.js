import { createSlice } from "@reduxjs/toolkit";
import { getMealAPI } from "./foodItem.api";
const foodSlice = createSlice({
  name: "meal",
  initialState: {
    singleMeal: {},
    isLoading: false,
  },
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getMealAPI.pending, (state) => {
        state.singleMeal = {};
        state.isLoading = true;
      })
      .addCase(getMealAPI.fulfilled, (state, action) => {
        state.singleMeal = action.payload;
        state.isLoading = false;
      })

      .addCase(getMealAPI.rejected, (state) => {
        state.singleMeal = {};
        state.isLoading = false;
      });
  },
});

export default foodSlice.reducer;
