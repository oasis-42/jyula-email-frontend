import MonacoEditor from "../components/templatesComponents/MonacoEditor";
import { Box, Typography, TextField, InputAdornment, Button } from "@mui/material";
//import { styled } from "@mui/system";

function CreateTemplates() {
  return (
    <>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <TextField
          sx={{ width: "100%", height: "30px", margin: "14px 0px" }}
          variant="standard"
          size="small"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Typography sx={{ fontWeight: "bold", color: "#2D3C42" }}>Assunto:</Typography>
              </InputAdornment>
            ),
          }}
        />
      </Box>
      <MonacoEditor />
      <Box sx={{ display: "flex", justifyContent: "flex-end", marginTop: "16px" }}>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#2D3C42",
            "&:hover": {
              backgroundColor: "#1D2C34",
            },
            textTransform: "capitalize",
            width: "100px",
          }}>
          Salvar
        </Button>
      </Box>
    </>
  );
}

export default CreateTemplates;
