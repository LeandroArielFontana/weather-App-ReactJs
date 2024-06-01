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
  background: purple;
  border-radius: 16px;
  padding: 20px;
`;
