import { configureStore } from "@reduxjs/toolkit";
import signupReducer from "../features/UserAuth/auth.slice";
export const store = configureStore({
  reducer: {
    signup: signupReducer,
  },
});
