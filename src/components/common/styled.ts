import { TextField } from "@mui/material";
import styled from "styled-components";

export const StyledDivInput = styled.div`
  position: relative;
  width: 100%;
  height: 55px;
  background: slateblue;
  display: flex;
  align-items: center;
`;

export const StyledInput = styled(TextField)`
  position: absolute;
  width: 100%;
  height: 100%;
  background: transparent;
  border: 2px solid rgba(255, 255, 255, 0.2);
  outline: none;
  border-radius: 10px;
  font-size: 22px;
  color: #fff;
  font-weight: 500;
  text-transform: uppercase;
  padding: 0 48px 0 42px;

  .MuiInputBase-input::placeholder {
    color: rgba(255, 255, 255);
    text-transform: capitalize;
  }
`;
