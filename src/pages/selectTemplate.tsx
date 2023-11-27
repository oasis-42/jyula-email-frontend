import { Divider, Button, Card, CardContent, Typography, Box } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SelectTemplate() {
  const initialTemplateList = [
    { id: 1, name: "Template 1", content: "content", isFavorite: false, subject: "Assunto 1" },
    { id: 2, name: "Template 2", isFavorite: true, subject: "Assunto 2" },
  ];

  const [templateList, setTemplateList] = useState(initialTemplateList);
  const [showFavorites, setShowFavorites] = useState(false);
  const [activeButton, setActiveButton] = useState("all");

  const navigate = useNavigate();

  const handleCardClick = (templateId, name, code, subject) => {
    console.log(`Card clicado: ${templateId}`);
    navigate("/app/visualizar-template", { state: { templateId, name, code, subject } });
  };

  const handleFavoriteClick = (templateId) => {
    // Atualize o estado para refletir a mudança de favorito
    setTemplateList((prevTemplates) =>
      prevTemplates.map((template) =>
        template.id === templateId ? { ...template, isFavorite: !template.isFavorite } : template,
      ),
    );
  };

  const handleShowAllClick = () => {
    setShowFavorites(false);
    setActiveButton("all");
  };

  const handleShowFavoritesClick = () => {
    setShowFavorites(true);
    setActiveButton("favorites");
  };

  const filteredTemplates = showFavorites ? templateList.filter((template) => template.isFavorite) : templateList;

  return (
    <Box sx={{ width: "100%" }}>
      <Button onClick={handleShowAllClick} sx={{ marginRight: "15px" }}>
        <Typography
          variant="body2"
          sx={{
            fontWeight: activeButton === "all" ? "bold" : "normal",
            color: "#2D3C42",
            textTransform: "none",
            marginBottom: "10px",
          }}>
          Todos os templates
        </Typography>
      </Button>
      <Button onClick={handleShowFavoritesClick}>
        <Typography
          variant="body2"
          sx={{
            fontWeight: activeButton === "favorites" ? "bold" : "normal",
            color: "#2D3C42",
            textTransform: "none",
            marginBottom: "10px",
          }}>
          Templates Favoritos
        </Typography>
      </Button>
      <Divider sx={{ marginBottom: "10px", backgroundColor: "#2D3C42" }} />

      {filteredTemplates.map((template) => (
        <Card
          key={template.id}
          sx={{
            height: "50px",
            boxShadow: "none",
            border: "1px solid #2D3C42",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            "&:hover": {
              backgroundColor: "#f2f2f2",
            },
            marginBottom: "5px",
          }}>
          <Button
            onClick={() => handleCardClick(template.id, template.name, template.code, template.subject)}
            sx={{
              textDecoration: "none",
              color: "inherit",
              backgroundColor: "transparent",
              border: "none",
              cursor: "pointer",
              width: "100%",
              padding: "15px 0px",
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start",
              "&:hover": {
                backgroundColor: "transparent",
              },
              "&:active": {
                backgroundColor: "transparent !important",
              },
            }}>
            <CardContent sx={{ height: "100%", padding: "15px", display: "flex", justifyContent: "center" }}>
              <Typography variant="body2" component="div" sx={{ textTransform: "none" }}>
                {template.name}
              </Typography>
            </CardContent>
          </Button>

          <Button
            onClick={() => handleFavoriteClick(template.id)}
            sx={{
              backgroundColor: "transparent",
              height: "100%",
              border: "none",
              cursor: "pointer",
              "&:hover": {
                backgroundColor: "#f2f2f2",
              },
              "&:active": {
                backgroundColor: "transparent",
              },
            }}>
            {template.isFavorite ? (
              <StarIcon sx={{ color: "#2D3C42" }} />
            ) : (
              <StarBorderOutlinedIcon sx={{ color: "#2D3C42" }} />
            )}
          </Button>
        </Card>
      ))}
    </Box>
  );
}

export default SelectTemplate;
