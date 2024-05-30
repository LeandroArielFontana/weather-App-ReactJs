import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import { WeatherData } from "./interfaces/weatherData";

function App() {
  const apiKey = "860e4fe79668a540887b671330f7e50e";
  // const [weather, setWeather] = useState<WeatherData | null>(null);
  const [weather, setWeather] = useState<any | null>(null);
  const [imageUrl, setImageURL] = useState<any | null>(null);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    async function fetchWeather() {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=${apiKey}&units=metric`
        );
        setImageURL(`https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`);
        setWeather(response.data);
      } catch (error) {
        setError(error as Error);
      } finally {
        setLoading(false);
      }
    }
    fetchWeather();
  }, []);

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
          {imageUrl ? (
            <img src={imageUrl} alt="" />
          ) : (
            <h1>Error</h1>
          )}
          <h4>
            {weather ? `Temperatura: ${weather.main.temp}°C` : "No disponible"}
          </h4>
        </header>
      </div>
    </>
  );
}

export default App;
