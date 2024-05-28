import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import { WeatherData } from "./interfaces/weatherData";

function App() {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    async function fetchWeather() {
      try {
        const response = await axios.get(
          "https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=860e4fe79668a540887b671330f7e50e&units=metric"
        );
        console.log(response);
        setWeather(response.data);
      } catch (error) {
        setError(error as Error);
      } finally {
        setLoading(false);
      }
    }

    fetchWeather();
  }, []);

  console.log("Weather: ", weather);

  if (loading) {
    return <div className="App">Cargando...</div>;
  }

  if (error) {
    return <div className="App">Error: {error.message}</div>;
  }

  return (
    <>
      <div className="App">
        <header className="App-header">
          <h1>Clima de hoy</h1>
          <h4>
            {weather ? `Temperatura: ${weather.main.temp}°C` : "No disponible"}
          </h4>
        </header>
      </div>
    </>
  );
}

export default App;
