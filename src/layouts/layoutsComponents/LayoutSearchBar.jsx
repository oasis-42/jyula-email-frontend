// import { useState } from "react";
import { useLocation } from "react-router-dom";
import { Box, Typography } from "@mui/material";
//TextField, InputAdornment,
// import SearchIcon from "@mui/icons-material/Search";

const SearchBarLayout = () => {
  //   const [searchTerm, setSearchTerm] = useState("");
  //   const [isPlaceholderVisible, setPlaceholderVisibility] = useState(true);

  const location = useLocation();
  const currentPage = location.pathname;

  // const handleFocus = () => {
  //   setPlaceholderVisibility(false);
  // };

  // const handleBlur = () => {
  //   if (searchTerm === "") {
  //     setPlaceholderVisibility(true);
  //   }
  // };

  const routeToText = {
    "/app/selecionar-template": "Selecionar template",
    "/app/criar-templates": "Templates",
    "/app/segmentos": "Segmentos",
    "/app/audiencia": "Audiência",
    "/app/enviados": "Enviados",
    "/app/favoritos": "Favoritos",
    "/app/relatorios": "Relatórios",
  };

  // const SearchText = {
  //   "/app/selecionar-template": "templates",
  //   "/app/segmentos": "segmentos",
  //   "/app/audiencia": "audiência",
  //   "/app/enviados": "enviados",
  //   "/app/favoritos": "favoritos",
  //   "/app/relatorios": "relatórios",
  // };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "flex-end",
          marginRight: "auto",
          marginTop: "20px",
        }}>
        <Typography sx={{ fontWeight: "bold", marginLeft: "10px", color: "#2d3c42", fontSize: "22px" }}>
          {routeToText[currentPage] || ""}
        </Typography>
      </Box>
      {/* <TextField
        variant="outlined"
        type="text"
        margin="dense"
        fullWidth
        sx={{
          backgroundColor: "white",
          alignItems: "center",
          width: "60%",
          "& label": { fontSize: "14px", transform: "translate(14px, 13px) scale(1)" },
        }}
        value={searchTerm}
        label={isPlaceholderVisible ? `Pesquisar ${SearchText[currentPage]}` : ""}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChange={(e) => setSearchTerm(e.target.value)}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
          sx: { height: "44px" },
        }}
        InputLabelProps={{
          shrink: searchTerm !== "" || !isPlaceholderVisible,
          sx: { marginLeft: "35px", fontSize: "14px" },
        }}
      /> */}
    </>
  );
};

export default SearchBarLayout;
