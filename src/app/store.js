import { configureStore } from "@reduxjs/toolkit";
import signupReducer from "../features/UserAuth/signup.slice";
import checkReducer from "../features/UserAuth/check.slice";
import loginReducer from "../features/UserAuth/login.slice";
import filterReducer from "../features/Feed/Filter/filter.slice";
import mealsReducer from "../features/Feed/feed.slice";
export const store = configureStore({
  reducer: {
    signup: signupReducer,
    check: checkReducer,
    login: loginReducer,
    filters: filterReducer,
    meals: mealsReducer,
  },
});
