import { createSlice } from "@reduxjs/toolkit";
import { getMealsAPI } from "./feed.api";
const feedSlice = createSlice({
  name: "meals",
  initialState: {
    allMeals: [],
    selectedMeals: [],
    vegOnlyMeals: [],
    isVeg: false,
    isSorted: false,
    unsortedSelectedMeals: [],
    type: "",
    cuisines: [],
    trendings: [],
    isLoading: false,
  },
  reducers: {
    saveFilters(state, action) {
      state.selectedMeals = action.payload.selectedMeals || state.selectedMeals;
      state.unsortedSelectedMeals =
        action.payload.unsortedSelectedMeals || state.unsortedSelectedMeals;
      state.isSorted =
        action.payload.isSorted === undefined
          ? state.isSorted
          : action.payload.isSorted;
      state.isVeg =
        action.payload.isVeg === undefined
          ? state.isVeg
          : action.payload.isVeg;
      state.type = action.payload.type;
      state.vegOnlyMeals = action.payload.vegOnlyMeals || state.vegOnlyMeals;
      state.cuisines = action.payload.cuisine || state.cuisines;
      state.trendings = action.payload.trending || state.trendings;
      state.isLoading = false;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(getMealsAPI.pending, (state) => {
        state.allMeals = [];
        state.isLoading = true;
      })
      .addCase(getMealsAPI.fulfilled, (state, action) => {
        state.allMeals = action.payload;
        const newMeals = {};
        const vegMeals = {};
        for (let el of action.payload) {
          if (newMeals[el.category]) {
          } else {
            newMeals[el.category] = new Array(0);
          }
          newMeals[el.category].push(el);
          if (el.type === "Veg") {
            if (vegMeals[el.category]) {
            } else {
              vegMeals[el.category] = new Array(0);
            }
            vegMeals[el.category].push(el);
          }
        }
        let newMealsArray = [];
        let vegMealsArray = [];
        let i = 0;
        for (let key in newMeals) {
          newMealsArray[i++] = { [key]: newMeals[key] };
        }
        i = 0;
        for (let key in vegMeals) {
          vegMealsArray[i++] = { [key]: vegMeals[key] };
        }
        state.selectedMeals = newMealsArray;
        state.unsortedSelectedMeals = newMealsArray;
        state.vegOnlyMeals = vegMealsArray;
        state.isLoading = false;
      })

      .addCase(getMealsAPI.rejected, (state) => {
        state.allMeals = [];
        state.isLoading = false;
      });
  },
});

export const { saveFilters } = feedSlice.actions;
export default feedSlice.reducer;
