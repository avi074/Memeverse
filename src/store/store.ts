import { configureStore } from "@reduxjs/toolkit";
import memeReducer from "./memeSlice";
import userReducer from "./userSlice";

export const store = configureStore({
  reducer: {
    meme: memeReducer,
    user: userReducer,
  },
  devTools: process.env.NODE_ENV !== "production",
});

// Infer RootState & AppDispatch types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
