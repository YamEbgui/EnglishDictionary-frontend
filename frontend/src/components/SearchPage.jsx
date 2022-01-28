import { Box, Typography } from "@mui/material";
import React from "react";
import SearchInput from "./SearchInput";

export default function searchPage() {
  return (
    <Box>
      <Typography variant="h3">ENGLISH DICTIONARY</Typography>
      <SearchInput></SearchInput>
    </Box>
  );
}
