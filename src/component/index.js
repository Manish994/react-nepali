import React from "react";
import { TextField, Button, Stack, Box } from "@mui/material";
import $ from "jquery";

function NepaliIndex() {
  function handleForm() {
    var inputString = $("#nepali-first").val();
    var inputString1 = $("#nepali-second").val();
    var inputString2 = $("#nepali-third").val();
    console.log(inputString);
    console.log(inputString1);
    console.log(inputString2);
  }
  return (
    <div style={{ marginTop: "10px" }}>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          variant="outlined"
          label="Nepali"
          className="local-language"
          id="nepali-first"
        />
        <br></br>
        <TextField
          variant="outlined"
          label="Nepali"
          className="local-language"
          id="nepali-second"
        />
        <br></br>
        <TextField
          variant="outlined"
          label="Nepali"
          className="local-language"
          id="nepali-third"
        />
        <br></br>
        <Button variant="contained" onClick={handleForm}>
          Save
        </Button>
      </Box>
    </div>
  );
}

export default NepaliIndex;
