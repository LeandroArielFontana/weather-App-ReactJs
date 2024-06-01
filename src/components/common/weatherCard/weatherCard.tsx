import axios from "axios";
import { useEffect, useState } from "react";
import Input from "../input";
import { StyledContainer, StyledWeatherCard } from "./weatherCardStyle";

function WeatherCard() {
  const API_KEY = "860e4fe79668a540887b671330f7e50e";
  const [weather, setWeather] = useState<any | null>(null);
  const [imageUrl, setImageURL] = useState<any | null>(null);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  async function fetchWeather() {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=36.72&lon=10.99&appid=${API_KEY}&units=metric`
      );
      setImageURL(
        `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
      );
      console.log(response.data);
      setWeather(response.data);
    } catch (error) {
      setError(error as Error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchWeather();
  }, []);

  if (loading) {
    return <div className="App">Cargando...</div>;
  }

  if (error) {
    return <div className="App">Error: {error.message}</div>;
  }

  return (
    <StyledWeatherCard>
      <StyledContainer>
        <body className="App-header">
          <Input />
          <h1>Clima de hoy</h1>
          {imageUrl ? <img src={imageUrl} alt="" /> : <h1>Error</h1>}
          <h4>
            {weather ? `Temperatura: ${weather.main.temp}°C` : "No disponible"}
          </h4>
        </body>
      </StyledContainer>
    </StyledWeatherCard>
  );
}

export default WeatherCard;
