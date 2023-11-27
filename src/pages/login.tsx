import { Box, Typography, Divider, TextField, Button } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
// import axios from "axios";

function Login({ onSuccessfulLogin }) {
  const [formData, setFormData] = useState({
    email: "",
    senha: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // const handleSubmit = async () => {
  //   console.log("Dados do formulário:", formData);
  //   try {
  //     const response = await axios.post("/api/login", formData);
  //     console.log(response.data);
  //   } catch (error) {
  //     console.error("Erro ao fazer login:", error);
  //   }
  // };

  //CREDENCIAIS FAKE PARA TESTE
  const handleFakeLogin = () => {
    const fakeCredentials = {
      email: "usuario@teste.com",
      senha: "senha123",
    };

    if (formData.email === fakeCredentials.email && formData.senha === fakeCredentials.senha) {
      console.log("Login bem-sucedido!");
      onSuccessfulLogin();
    } else {
      console.error("Credenciais inválidas");
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#F4F4F7",
      }}>
      <Box
        sx={{
          width: "350px",
          padding: "15px 25px ",
          backgroundColor: "white",
          border: "1px solid #2D3C42",
          borderRadius: "5px",
          boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
        }}>
        <Box>
          <Typography
            variant="h5"
            sx={{
              marginBottom: "10px",
              textAlign: "center",
              fontSize: "16px",
              color: "#2D3C42",
              fontWeight: "bold",
            }}>
            Login
          </Typography>
        </Box>

        <Divider sx={{ marginBottom: 2 }} />
        <Box>
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            margin="dense"
            name="email"
            value={formData.email}
            onChange={handleChange}
            sx={{
              marginBottom: 2,
              "& input": { fontSize: "16px" },
              "& .MuiOutlinedInput-root": {
                height: "50px",
              },
            }}
          />

          <TextField
            label="Senha"
            variant="outlined"
            type="password"
            fullWidth
            margin="dense"
            name="senha"
            value={formData.senha}
            onChange={handleChange}
            sx={{
              marginBottom: 2,
              "& input": { fontSize: "16px" },
              "& .MuiOutlinedInput-root": {
                height: "50px",
              },
            }}
          />

          <Button
            // onClick={handleSubmit}
            onClick={handleFakeLogin}
            sx={{
              marginTop: "15px",
              backgroundColor: "#2D3C42",
              "&:hover": {
                backgroundColor: "#1D2C34",
              },
              textTransform: "capitalize",
            }}
            variant="contained"
            color="primary"
            fullWidth>
            Entrar
          </Button>
        </Box>
        <Box sx={{ paddingTop: "35px" }}>
          <Typography sx={{ textAlign: "center" }}>
            Sem conta?{" "}
            <Link to="/cadastro" style={{ fontWeight: "bold", color: "#2D3C42" }}>
              Cadastrar-se
            </Link>
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default Login;
