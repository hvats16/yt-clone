import { configureStore } from "@reduxjs/toolkit";
import AppSlice from "./appSlice";
import searchSlice from "./searchSlice";

export const store = configureStore({
  reducer: {
    app: AppSlice,
    search: searchSlice,
  },
});

export default store;
