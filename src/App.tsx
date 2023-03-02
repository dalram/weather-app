import { useEffect, useState } from "react";
import "./App.css";
import { Counter } from "./components/counter";

export const API_URL = "https://api.openweathermap.org/data/2.5";

function App() {
  const [data, setData] = useState<any>(null);
  const API_KEY = import.meta.env.VITE_API_KEY;

  useEffect(() => {
    fetch(`${API_URL}/weather?q=Vilnius&units=metric&appid=${API_KEY}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        return response.json();
      })
      .then((data) => setData(data))
      .catch((error) => console.error(error));
    console.log(data);
  }, []);
  return (
    <>
      <Counter />
    </>
  );
}

export default App;
//
