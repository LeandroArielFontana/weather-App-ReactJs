import styled from "styled-components";
import backgroundImage from "../../../assets/background-image.jpg";

export const StyledWeatherCard = styled.body`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-image: url(${backgroundImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

export const StyledContainer = styled.div`
  position: relative;
  width: 400px;
  height: 555px;
  background: rgba(255, 255, 255, 0.1); // color de fondo de la card
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  padding: 20px;
  margin: 20px;
  color: #233; // color del texto de la card
`;
