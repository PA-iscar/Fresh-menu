import { createSlice } from "@reduxjs/toolkit";
import { getMealsAPI } from "./feed.api";
const feedSlice = createSlice({
  name: "meals",
  initialState: {
    allMeals: [],
    selectedMeals: [],
    type: "",
    cuisines: [],
    trendings: [],
  },
  reducers: {
    saveFilters(state, action) {
      state.selectedMeals = action.payload.selectedMeals;
      state.type = action.payload.type;
      state.cuisines = action.payload.cuisine;
      state.trendings = action.payload.trending;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(getMealsAPI.pending, (state) => {
        state.allMeals = [];
      })
      .addCase(getMealsAPI.fulfilled, (state, action) => {
        state.allMeals = action.payload;
      })

      .addCase(getMealsAPI.rejected, (state) => {
        state.allMeals = [];
      });
  },
});

export const { saveFilters } = feedSlice.actions;
export default feedSlice.reducer;
