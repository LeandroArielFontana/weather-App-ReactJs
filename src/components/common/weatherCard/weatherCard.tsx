import axios from "axios";
import { useEffect, useState } from "react";
import Input from "../input";
import { StyledContainer, StyledWeatherCard } from "./weatherCardStyle";
import WeatherBox from "../weatherBox/weatherBox";
import { Alert, Snackbar } from "@mui/material";

function WeatherCard() {
  const API_KEY = "860e4fe79668a540887b671330f7e50e";
  const [weather, setWeather] = useState<any | null>(null);
  const [imageUrl, setImageURL] = useState<any | null>(null);
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState<string | null>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  async function fetchWeather(city?: string) {
    try {
      let response;
      if (city) {
        response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
        );
        setOpen(true);
        setMessage("Actualizado!");
      } else {
        response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?lat=36.72&lon=10.99&appid=${API_KEY}&units=metric`
        );
      }
      setImageURL(
        `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
      );
      setWeather(response.data);
    } catch (error) {
      setError(error as Error);
      setOpen(true);
      setMessage("No se encontro la ciudad");
      setWeather(null);
    } finally {
      setLoading(false);
    }
  }

  const handleIconClick = (city: string) => {
    fetchWeather(city);
  };

  useEffect(() => {
    fetchWeather();
  }, []);

  const handleClose = () => {
    setOpen(false);
  };

  if (loading) {
    return <div className="App">Cargando...</div>;
  }

  // if (error) {
  //   return <div className="App">Error: {error.message}</div>;
  // }

  return (
    <>
      <StyledWeatherCard>
        <StyledContainer>
          <Input
            handleIconClick={(inputValue) => handleIconClick(inputValue)}
          />
          <WeatherBox imageUrl={imageUrl} weather={weather} />
        </StyledContainer>
      </StyledWeatherCard>
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        open={open}
        onClose={handleClose}
        autoHideDuration={3000}
      >
        <Alert
          severity={weather ? "success" : "error"}
          variant="filled"
          sx={{ width: "100%" }}
        >
          {weather ? "Actualizado!" : "Ciudad no encontrada"}
        </Alert>
      </Snackbar>
    </>
  );
}

export default WeatherCard;
