import { configureStore } from "@reduxjs/toolkit";
import AppSlice from "./appSlice";
import searchSlice from "./searchSlice";
import chatSlice from "./chatSlice";

export const store = configureStore({
  reducer: {
    app: AppSlice,
    search: searchSlice,
    chat: chatSlice,
  },
});

export default store;
