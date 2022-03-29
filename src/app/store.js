import { configureStore } from "@reduxjs/toolkit";
import signupReducer from "../features/UserAuth/signup.slice";
export const store = configureStore({
  reducer: {
    signup: signupReducer,
  },
});
