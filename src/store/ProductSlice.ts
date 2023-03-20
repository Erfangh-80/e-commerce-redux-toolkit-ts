import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { Product } from "../types/types";

interface IProductState {
  Product: Product;
  loading: Boolean;
  error: string;
}

const initialState: IProductState = {
  Product: {
    id: 0,
    images: [],
    price: "",
    title: "",
    category: { id: 0, image: "", name: "" },
  },
  loading: false,
  error: "",
};

export const getproduct = createAsyncThunk(
  "categories/getproduct",
  async (id: string | undefined) => {
    if (!id) {
      return undefined;
    }
    return axios
      .get(`https://api.escuelajs.co/api/v1/products/${id}`)
      .then((response) => response.data);
  }
);

const categorySlice = createSlice({
  name: "Category",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getproduct.fulfilled, (state, action) => {
      state.loading = false;
      state.Product = { ...action.payload };
    });
    builder.addCase(getproduct.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(getproduct.rejected, (state, action) => {
      state.error = "error in fetching data";
    });
  },
});

export default categorySlice.reducer;
