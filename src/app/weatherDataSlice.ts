import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { weatherData } from "../types";

export type weatherDataState = {
  weatherData: weatherData;
};

const initialState: weatherDataState = {
  weatherData: {
    name: "",
    coord: {
      lon: 0,
      lat: 0,
    },
    main: {
      temp: 0,
      feels_like: 0,
      temp_max: 0,
      temp_min: 0,
    },
    weather: [
      {
        description: "",
        icon: "",
      },
    ],
  },
};

export const weatherDataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    weatherByCity: (state, action: PayloadAction<weatherData>) => {
      state.weatherData = action.payload;
    },
  },
});

export const { weatherByCity } = weatherDataSlice.actions;

export default weatherDataSlice.reducer;
