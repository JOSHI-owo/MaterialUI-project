import React from "react";
import Box from "@mui/material/Box";

const Rightbar = () => {
  return (
    <Box
      backgroundColor="red"
      flex={2}
      p={2}
      sx={{ display: { xs: "none", sm: "block" } }}
    >
      Rightbar
    </Box>
  );
};

export default Rightbar;
