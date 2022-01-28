import React from "react";
import { Box, Typography } from "@mui/material";
import { returnLongVersion } from "../utils";

import { useSelector } from "react-redux";
import SearchPage from "./SearchPage";

export default function Word() {
  const data = useSelector((state) => state);
  console.log(data);

  return (
    <Box
      mx={2}
      my={3}
      px={3}
      py={1}
      sx={{
        borderRadius: "16px",
        border: "1px #0000CD groove",
        backgroundColor: "#ADD8E6",
      }}
    >
      <SearchPage />
      <Typography gutterBottom variant="h3" sx={{ color: "#00008B" }}>
        {data.word}
      </Typography>
      <Typography gutterBottom variant="h5" px={3} sx={{ color: "#00008D" }}>
        {returnLongVersion(data.pos)}
      </Typography>
      <Typography gutterBottom variant="body1" px={2} sx={{ color: "#00008B" }}>
        {data.definitions}
      </Typography>
    </Box>
  );
}
