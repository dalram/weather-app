import { useEffect, useState } from "react";
import type { RootState } from "./app/store";
import "./App.css";
import { Counter } from "./components/counter";
import { useSelector, useDispatch } from "react-redux";
import { weatherByCity } from "./app/weatherDataSlice";
import { useWeatherData } from "./hooks/useWeatherData";

function App() {
  const [cityInput, setCityInput] = useState("");
  const weatherInfo = useSelector(
    (state: RootState) => state.weather.weatherData
  );
  const dispatch = useDispatch();
  const { isLoading, fetchWeatherData } = useWeatherData();

  const iconUrl = `http://openweathermap.org/img/w/${weatherInfo.weather[0].icon}.png`;
  useEffect(() => {
    fetchWeatherData("Vilnius");
  }, []);
  console.log("render");
  const handleInputValue = (cityInput: string): void => {
    fetchWeatherData(cityInput);
  };
  return (
    <>
      <div>
        <div className="container">
          <input
            type="text"
            className="city-input"
            onChange={(e) => setCityInput(e.target.value)}
          />
          <button onClick={() => handleInputValue(cityInput)}>
            Show city weather
          </button>

          <p>{weatherInfo.name}</p>
          <p>{weatherInfo.main.temp.toFixed()}</p>
          <p>{weatherInfo.weather[0].description}</p>
          <img
            src={iconUrl}
            alt={weatherInfo.weather[0].description}
            className="weather-icon"
          />
        </div>
      </div>
      {/* <Counter /> */}
    </>
  );
}

export default App;
//
