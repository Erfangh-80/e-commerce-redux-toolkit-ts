import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { Category } from "../types/Categories";

interface ICategoryState {
  categories: Category[];
  loading: Boolean;
  error: string;
}

const initialState: ICategoryState = {
  categories: [],
  loading: false,
  error: "",
};

export const fetchCategories = createAsyncThunk(
  "categories/getCategories",
  async () => {
    return axios
      .get(`https://api.escuelajs.co/api/v1/categories`)
      .then((response) => response.data);
  }
);

const categorySlice = createSlice({
  name: "Category",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCategories.fulfilled, (state, action) => {
      state.loading = false;
      state.categories.push(...action.payload);
    });

    builder.addCase(fetchCategories.pending, (state, action) => {
      state.loading = true;
    });

    builder.addCase(fetchCategories.rejected, (state, action) => {
      state.error = "error in fetching data";
    });
  },
});

export default categorySlice.reducer;
