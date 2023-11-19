import { useState } from "react";
import { useLocation } from "react-router-dom";
import { TextField, InputAdornment, Box, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isPlaceholderVisible, setPlaceholderVisibility] = useState(true);

  const location = useLocation();
  const currentPage = location.pathname;

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  const handleFocus = () => {
    setPlaceholderVisibility(false);
  };

  const handleBlur = () => {
    if (searchTerm === "") {
      setPlaceholderVisibility(true);
    }
  };

  const routeToText = {
    "/criar-campanha": "Criar campanha",
    "/criar-templates": "Templates",
    "/segmentos": "Segmentos",
    "/audiencia": "Audiência",
    "/enviados": "Enviados",
    "/favoritos": "Favoritos",
    "/relatorios": "Relatórios",
  };

  const SearchText = {
    "/criar-campanha": "campanhas",
    "/criar-templates": "templates",
    "/segmentos": "segmentos",
    "/audiencia": "audiência",
    "/enviados": "enviados",
    "/favoritos": "favoritos",
    "/relatorios": "relatórios",
  };

  return (
    <>
      <Box sx={{ display: "flex", justifyContent: "flex-start", alignItems: "flex-end", marginRight: "auto" }}>
        <Typography sx={{ fontWeight: "bold", marginLeft: "10px", color: "#2d3c42", fontSize: "22px" }}>
          {routeToText[currentPage] || ""}
        </Typography>
      </Box>
      <TextField
        variant="outlined"
        type="text"
        margin="dense"
        fullWidth
        sx={{
          backgroundColor: "white",
          padding: "0px",
          width: "60%",
          height: "44px",
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
      />
    </>
  );
};

export default SearchBar;
