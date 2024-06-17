import { FC } from "react";
import { ImageStyled, TemperatureStyled, WeatherBoxStyled } from "./styled";

interface WeatherData {
  imageUrl: any;
  weather: any;
}

const WeatherBox: FC<WeatherData> = ({ imageUrl, weather }) => {
  return (
    <WeatherBoxStyled>
      <h1>Clima de hoy</h1>
      <>
        {imageUrl ? (
          <ImageStyled src={imageUrl} alt="weather-icon" />
        ) : (
          <h1>Error</h1>
        )}
      </>
      <TemperatureStyled>
        {weather ? `${weather.main.temp}°C` : "Error"}
      </TemperatureStyled>
    </WeatherBoxStyled>
  );
};

export default WeatherBox;
