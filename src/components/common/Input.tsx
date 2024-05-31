import { TextField } from "@mui/material";
import LocationSearchingIcon from "@mui/icons-material/LocationSearching";
import InputAdornment from "@mui/material/InputAdornment";
import { FC } from "react";

const Input: FC = () => {
  return (
    <>
      <TextField
        id="outlined-basic"
        // label="Outlined"
        variant="outlined"
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <LocationSearchingIcon />
            </InputAdornment>
          ),
        }}
        placeholder="Ingresa tu ubicacion"
      />
    </>
  );
};

export default Input;
