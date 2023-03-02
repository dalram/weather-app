import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";
import weatherReducer from "./weatherDataSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    weather: weatherReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
