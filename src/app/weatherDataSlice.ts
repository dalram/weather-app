import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export type weatherDataState = {
  weatherData: {
    name: string;
    coord: {
      lon: number;
      lat: number;
    };
    main: {
      temp: number;
      feels_like: number;
      temp_max: number;
      temp_min: number;
    };
    weather: [
      {
        description: string;
        icon: string;
      }
    ];
  };
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
    weatherByCity: (state, action: PayloadAction<weatherDataState>) => {
      state.weatherData = action.payload;
    },
  },
});

export const { weatherByCity } = weatherDataSlice.actions;

export default weatherDataSlice.reducer;
