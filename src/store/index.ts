import { configureStore } from "@reduxjs/toolkit";
import repoReducer from "./repository";
import modalReducer from "./modal";

// Main Redux store
const store = configureStore({
  reducer: {
    repo: repoReducer,
    modal: modalReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
