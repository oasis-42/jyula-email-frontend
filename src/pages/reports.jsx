import React, { useState } from "react";
import { Alert, Box, Button, Divider, Grid, IconButton, List, ListItem, ListItemText, Snackbar, Stack, Typography, colors } from "@mui/material";
import axios from "axios";

function Relatorios() {
  const [apiError, setApiError] = useState(false);
  const [success, setSuccess] = useState(false);
  // get this session's user id
  const userId = 1;

  const handleButtonClick = async () => {
    try {
      const response = await axios.post("/api/v1/report", {
        userId,
      });
      setSuccess(true);
      setApiError(false);

    } catch (error) {
      setApiError(true);
      setSuccess(false);
    }
  };

  const handleAlertClose = () => {
    setApiError(false);
    setSuccess(false);
  };

  return (
    <Grid sx={{ height: '100vh', margin: 10 }}>
      <List sx={{ width: '100%', maxWidth: 700 }}>
        <Button onClick={handleButtonClick} sx={{
          backgroundColor: '#D9D9D9',
          borderRadius: '16px',
          maxHeight: 45,
          margin: 1,
          color: 'black',
          textTransform: "none",
          width: 500
        }}>
          <ListItem>
            <ListItemText>Gerar relatório de leitura de email semanal</ListItemText>
          </ListItem>
        </Button>
        <ListItem sx={{ marginTop: 10 }}>
          <ListItemText>OBS. O PDF com o relatório será enviado no email principal configurado na conta</ListItemText>
        </ListItem>
      </List>
      <Snackbar
        open={apiError || success}
        autoHideDuration={6000}
        onClose={handleAlertClose}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}>
        <Alert
          variant="filled"
          onClose={handleAlertClose}
          severity={apiError ? "error" : "success"}>
          {apiError
            ? "Erro ao gerar relatório, tente novamente mais tarde"
            : "Relatório enviado!"}
        </Alert>
      </Snackbar>
    </Grid >
  );
}

export default Relatorios;
