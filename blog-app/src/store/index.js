import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter/counter.slice";

const store = configureStore({
  reducer: {
    ctr: counterReducer,
  },
});

export default store;
