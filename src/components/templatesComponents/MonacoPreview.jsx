import React from "react";
import { Box } from "@mui/material";

function MonacoPreview({ userCode }) {
  return (
    <Box sx={{ width: "50%", overflowY: "auto" }}>
      <pre>{userCode}</pre>
    </Box>
  );
}

export default MonacoPreview;
