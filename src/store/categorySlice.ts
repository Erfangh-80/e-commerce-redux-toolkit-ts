import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { Product } from "../types/types";

interface ICategoryState {
  categories: Product[];
  loading: Boolean;
  error: string;
}

const initialState: ICategoryState = {
  categories: [],
  loading: false,
  error: "",
};

export const getCategory = createAsyncThunk(
  "categories/getCategory",
  async (id: string | undefined) => {
    if (!id) {
      return undefined;
    }
    return axios
      .get(`https://api.escuelajs.co/api/v1/categories/${id}/products`)
      .then((response) => response.data);
  }
);

const categorySlice = createSlice({
  name: "Category",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCategory.fulfilled, (state, action) => {
      state.loading = false;
      state.categories = [];
      state.categories.push(...action.payload);
    });
    builder.addCase(getCategory.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(getCategory.rejected, (state, action) => {
      state.error = "error in fetching data";
    });
  },
});

export default categorySlice.reducer;
