import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { getCartURL } from "./cart.selectors";

export const getCartAPI = createAsyncThunk("Cart/getCart", async ({ id }) => {
  const response = await axios.get(`${getCartURL}${id}`);
  return response.data;
});
