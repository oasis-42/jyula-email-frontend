import React, { useState } from "react";
import { Box, Button, Divider, Grid, IconButton, List, ListItem, ListItemText, Stack, Typography, colors } from "@mui/material";

function Relatorios() {

  // const YourComponent = () => {
  //   const [responseData, setResponseData] = useState(null);

  //   const handleButtonClick = () => {
  //     // Define your API endpoint
  //     const apiUrl = 'http://localhost:8000/api/v1/relatorio';

  //     // Prepare your data to be sent in the request body
  //     const dataToSend = {
  //       id: 'value1',
  //       createdAt: 'value2',
  //       updatedAt: 'value2',
  //       groupId: 'value2',
  //       name: 'value2',
  //       userId: ''
  //     };

  //     // Make the POST request using fetch
  //     fetch(apiUrl, {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //         // Add any other headers you need, such as authentication tokens
  //       },
  //       body: JSON.stringify(dataToSend),
  //     })
  //       .then(response => response.json())
  //       .then(data => {
  //         // Handle the response data
  //         setResponseData(data);
  //       })
  //       .catch(error => {
  //         // Handle errors
  //         console.error('Error:', error);
  //       });
  //   };


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
            <ListItemText>Gerar relatório de leitura de email individual Semanal</ListItemText>
          </ListItem>
          <br></br>
        </Button>
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
            <ListItemText>Gerar relatório de leitura semanal por grupo</ListItemText>
          </ListItem>
        </Button>
        <ListItem sx={{ marginTop: 10 }}>
          <ListItemText>OBS. O PDF com o relatório será enviado no email principal configurado na conta</ListItemText>
        </ListItem>
      </List>
    </Grid >
  );
}
export default Relatorios;
