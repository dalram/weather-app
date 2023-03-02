import { useEffect } from "react";
import type { RootState } from "./app/store";
import "./App.css";
import { Counter } from "./components/counter";
import { useSelector, useDispatch } from "react-redux";
import { weatherByCity } from "./app/weatherDataSlice";
import { useWeatherData } from "./hooks/useWeatherData";

function App() {
  const weatherInfo = useSelector(
    (state: RootState) => state.weather.weatherData
  );
  const dispatch = useDispatch();
  const { isLoading, fetchWeatherData } = useWeatherData();
  useEffect(() => {
    fetchWeatherData("Vilnius");
  }, []);
  console.log(weatherInfo);

  return (
    <>
      <Counter />
    </>
  );
}

export default App;
//
