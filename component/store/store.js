import { configureStore } from "@reduxjs/toolkit";
import All_Data from "./allData";

export const store = configureStore({
  reducer: {
    all_data: All_Data,
  },
});
