import { configureStore } from "@reduxjs/toolkit";
import categoriesReducer from "./categoriesSlice";
import categoryReducer from "./categorySlice";
import productsReducer from "./ProductsSlice";
import productReducer from "./ProductSlice";
import cartReducer from "./CartSlice";

const store = configureStore({
  reducer: {
    categories: categoriesReducer,
    category: categoryReducer,
    products: productsReducer,
    product: productReducer,
    cart: cartReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export default store;
