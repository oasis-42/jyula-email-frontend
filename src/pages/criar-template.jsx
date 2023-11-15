import { Box } from "@mui/material";
import MonacoEditor from "../components/MonacoEditor";

function NewTemplate() {
  return (
    <Box sx={{ height: "100vh", margin: 0, padding: 0 }}>
      <MonacoEditor />
    </Box>
  );
}

export default NewTemplate;
