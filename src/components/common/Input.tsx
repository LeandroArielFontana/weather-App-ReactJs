import LocationSearchingIcon from "@mui/icons-material/LocationSearching";
import InputAdornment from "@mui/material/InputAdornment";
import { FC, useState } from "react";
import { StyledDivInput, StyledInput } from "./styled";

interface Props {
  handleIconClick: (inputValue: string) => void;
}

const Input: FC<Props> = ({ handleIconClick }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target) setInputValue(event.target.value);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") handleIconClick(inputValue);
  };

  return (
    <StyledDivInput>
      <StyledInput
        id="outlined-basic"
        variant="outlined"
        value={inputValue}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <LocationSearchingIcon
                onClick={() => handleIconClick(inputValue)}
              />
            </InputAdornment>
          ),
        }}
        placeholder="Ingrese su ubicacion"
      />
    </StyledDivInput>
  );
};

export default Input;
