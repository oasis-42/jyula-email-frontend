import React, { useState, useEffect } from "react";
import ViwerMonacoTemplate from "../components/templatesComponents/ViewerMonacoTemplate";
import { Box, Typography, TextField, InputAdornment, Button, Snackbar } from "@mui/material";
import Alert from "@mui/material/Alert";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

function ViewerMonacoTemplate() {
  const [localName, setLocalName] = useState("");
  const [subject, setSubject] = useState("");
  const [content, setContent] = useState("");
  const [apiError, setApiError] = useState(false);
  const [emptyFieldsError, setEmptyFieldsError] = useState(false);
  const [success, setSuccess] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();
  const { state } = location;
  const { content: routeContent, name: routeName, subject: routeSubject } = state || {};

  useEffect(() => {
    if (routeName) setLocalName(routeName);
    if (routeContent) setContent(routeContent);
    if (routeSubject) setSubject(routeSubject);
  }, [routeName, routeContent, routeSubject]);

  const handleSaveTemplate = async () => {
    // Verificar se todos os campos têm conteúdo
    if (!subject.trim() || !localName.trim() || !content.trim()) {
      setEmptyFieldsError(true);
      setApiError(false);
      setSuccess(false);
      return;
    }

    try {
      const response = await axios.post("/api/v1/templates", {
        name: localName,
        subject: subject,
        content: content,
      });
      setSuccess(true);
      setEmptyFieldsError(false);
      setApiError(false);

      console.log("Resposta da API:", response.data);
    } catch (error) {
      console.error("Erro ao salvar template:", error);
      setApiError(true);
      setEmptyFieldsError(false);
      setSuccess(false);
      navigate("/app/criar-campanha");
    }
  };

  const handleAlertClose = () => {
    setEmptyFieldsError(false);
    setApiError(false);
    setSuccess(false);
  };

  return (
    <>
      <Box sx={{ display: "flex", alignItems: "center", flexDirection: "column" }}>
        <TextField
          sx={{ width: "100%", height: "30px" }}
          variant="standard"
          size="small"
          value={localName}
          onChange={(e) => setLocalName(e.target.value)}
          InputProps={{
            disableUnderline: true,
            startAdornment: (
              <InputAdornment position="start">
                <Typography sx={{ color: "#2D3C42", fontWeight: "bold" }}>Nome do template:</Typography>
              </InputAdornment>
            ),
          }}
        />
        <TextField
          sx={{ width: "100%", height: "30px", margin: "5px 0px 10px 0px" }}
          variant="standard"
          size="small"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          InputProps={{
            disableUnderline: true,
            startAdornment: (
              <InputAdornment position="start">
                <Typography sx={{ color: "#2D3C42", fontWeight: "bold" }}>Assunto:</Typography>
              </InputAdornment>
            ),
          }}
        />
      </Box>

      <ViwerMonacoTemplate content={content} onContentChange={setContent} />
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          marginTop: "10px",
          width: "100%",
        }}>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#2D3C42",
            "&:hover": {
              backgroundColor: "#1D2C34",
            },
            textTransform: "capitalize",
            width: "200px",
          }}
          onClick={handleSaveTemplate}>
          <Typography variant="body2" sx={{ textTransform: "none" }}>
            Salvar e usar template
          </Typography>
        </Button>
        <Snackbar
          open={emptyFieldsError || apiError || success}
          autoHideDuration={6000}
          onClose={handleAlertClose}
          anchorOrigin={{ vertical: "top", horizontal: "right" }}>
          <Alert
            variant="filled"
            onClose={handleAlertClose}
            severity={emptyFieldsError ? "warning" : apiError ? "error" : "success"}>
            {emptyFieldsError
              ? "Preencha todos os campos antes de salvar"
              : apiError
                ? "Erro ao salvar, tente novamente mais tarde"
                : "Template salvo com sucesso!"}
          </Alert>
        </Snackbar>
      </Box>
    </>
  );
}

export default ViewerMonacoTemplate;
