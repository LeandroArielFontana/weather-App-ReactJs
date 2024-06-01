import LocationSearchingIcon from "@mui/icons-material/LocationSearching";
import { TextField } from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import { FC } from "react";
import { StyledDivInput, StyledInput } from "./styled";

const Input: FC = () => {
  return (
    <StyledDivInput>
      <StyledInput
          id="outlined-basic"
          variant="outlined"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <LocationSearchingIcon />
              </InputAdornment>
            ),
          }}
          placeholder="Ingrese su ubicacion"
        />
    </StyledDivInput>
  );
};

export default Input;
