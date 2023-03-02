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

  const iconUrl = `http://openweathermap.org/img/w/${weatherInfo.weather[0].icon}.png`;
  useEffect(() => {
    fetchWeatherData("Vilnius");
  }, []);

  return (
    <>
      <div>{weatherInfo.name}</div>
      <div>{weatherInfo.main.feels_like.toFixed()}</div>
      <div>{weatherInfo.weather[0].description}</div>
      <img src={iconUrl} alt={weatherInfo.weather[0].description} />
      {/* <Counter /> */}
    </>
  );
}

export default App;
//
