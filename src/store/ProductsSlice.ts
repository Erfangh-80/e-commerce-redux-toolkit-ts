import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { Product } from "../types/types";
import axios from "axios";

interface productsState {
  products: Product[];
  loading: Boolean;
  error: String;
}

const initialState: productsState = {
  products: [],
  loading: false,
  error: "",
};

export const getProducts = createAsyncThunk("getProducts/products", async () => {
  return axios
    .get("https://api.escuelajs.co/api/v1/products")
    .then((response) => response.data);
});

const ProductsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getProducts.fulfilled, (state, action) => {
      state.loading = false;
      state.products.push(...action.payload);
    });
    builder.addCase(getProducts.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(getProducts.rejected, (state, action) => {
      state.error = "error in fetching data";
    });
  },
});


export default ProductsSlice.reducer