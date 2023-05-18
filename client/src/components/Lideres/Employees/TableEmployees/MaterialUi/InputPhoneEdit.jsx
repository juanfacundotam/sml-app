import React from "react";
import Box from "@mui/system/Box";
import TextField from "@mui/material/TextField";
import { styled } from "@mui/system";

const CustomTextField = styled(TextField)({
  "& .MuiInputBase-input": {
    padding: '.7rem',
    margin: '0' // Elimina el relleno (padding)
  },
});

export default function InputPhoneEdit({ phoneEdit, setPhoneEdit }) {
  const handleChange = (event) => {
    setPhoneEdit(event.target.value);
  };

  return (
    <Box sx={{ width: "14rem", color: "white" }}>
      <CustomTextField
        fullWidth
        label="Phone Number"
        id="Phone Number"
        value={phoneEdit}
        onChange={handleChange}
        InputProps={{
          style: { color: "white" },
        }}
        InputLabelProps={{
          style: { color: "white" },
        }}
      />
    </Box>
  );
}
