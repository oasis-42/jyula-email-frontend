import { Box, Typography, Divider, TextField, Button } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Cadastro() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    senha: "",
    confirmarSenha: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    console.log("Dados do formulário:", formData);
    try {
      const response = await axios.post("/api/register", formData);
      console.log(response.data);
    } catch (error) {
      console.error("Erro ao cadastrar:", error);
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
          padding: "15px 25px",
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
            Cadastro
          </Typography>
        </Box>

        <Divider sx={{ marginBottom: 2 }} />
        <Box>
          <TextField
            label="Nome Completo"
            variant="outlined"
            fullWidth
            margin="dense"
            name="nome"
            value={formData.nome}
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

          <TextField
            label="Confirmar Senha"
            variant="outlined"
            type="password"
            fullWidth
            margin="dense"
            name="confirmarSenha"
            value={formData.confirmarSenha}
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
            onClick={handleSubmit}
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
            Criar conta
          </Button>
        </Box>
        <Box sx={{ paddingTop: "35px" }}>
          <Typography sx={{ textAlign: "center" }}>
            Já tem uma conta?{" "}
            <Link to="/login" style={{ fontWeight: "bold", color: "#2D3C42" }}>
              Faça login
            </Link>
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default Cadastro;
