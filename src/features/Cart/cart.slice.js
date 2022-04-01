import { createSlice } from "@reduxjs/toolkit";
import { getCartAPI } from "./cart.api";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    meals: [],
    localMeals: [],
  },
  reducers: {
    addToLocalCart(state, action) {
      state.localMeals.push(action.payload);
    },
  },
  extraReducers(builder) {
    builder
      .addCase(getCartAPI.pending, (state) => {
        state.meals = [];
      })
      .addCase(getCartAPI.fulfilled, (state, action) => {
        state.meals = action.payload;
      })

      .addCase(getCartAPI.rejected, (state) => {
        state.meals = [];
      });
  },
});

export default cartSlice.reducer;
