import { useCallback, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { weatherByCity } from "../app/weatherDataSlice";

export const API_URL = "https://api.openweathermap.org/data/2.5";

export const useWeatherData = () => {
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const fetchWeatherData = useCallback(async (city: string) => {
    setIsLoading(true);
    console.log("gaunamas miestas:", city);

    try {
      const response = await fetch(
        `${API_URL}/weather?q=${city}&units=metric&appid=${
          import.meta.env.VITE_API_KEY
        }`
      );
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      const weatherData = await response.json();
      dispatch(weatherByCity(weatherData));
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  return { fetchWeatherData, isLoading };
};
