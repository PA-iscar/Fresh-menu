import { createSlice } from "@reduxjs/toolkit";
import { getFiltersAPI } from "../feed.api";
const filterSlice = createSlice({
  name: "filters",
  initialState: {
    types: [],
    cuisines: [],
    trendings: [],
    categories: [],
  },
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getFiltersAPI.pending, (state) => {
        state.types = [];
        state.cuisines = [];
        state.trendings = [];
        state.categories = [];
      })
      .addCase(getFiltersAPI.fulfilled, (state, action) => {
        state.types = [...action.payload.types];
        state.cuisines = [...action.payload.cuisines];
        state.trendings = [...action.payload.trendings];
        state.categories = [...action.payload.categories];
      })

      .addCase(getFiltersAPI.rejected, (state) => {
        state.types = [];
        state.cuisines = [];
        state.trendings = [];
        state.categories = [];
      });
  },
});

export default filterSlice.reducer;
