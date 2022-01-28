import {
  Button,
  FormControl,
  FormHelperText,
  OutlinedInput,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import React, { useState } from "react";

import { wordMiddleware } from "../utils/middleware";
import { useDispatch } from "react-redux";

export default function SearchInput() {
  const [word, setWord] = useState("");
  const dispatch = useDispatch();

  const handleChange = (event) => {
    event.preventDefault();
    setWord(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(wordMiddleware(word));
  };

  return (
    <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
      <OutlinedInput
        id="wordSearchInput"
        value={word}
        onChange={handleChange}
        inputProps={{
          "aria-label": "this",
        }}
      />
      <FormHelperText id="outlined-weight-helper-text">
        Search Word
      </FormHelperText>
      <Button
        variant="outlined"
        startIcon={<SearchIcon />}
        onClick={handleSubmit}
      >
        Search
      </Button>
    </FormControl>
  );
}
