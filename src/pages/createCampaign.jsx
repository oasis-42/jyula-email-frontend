import { Divider, Button, Card, CardContent, Typography, Box } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function CreateCampaign() {
  const initialTemplateList = [
    { id: 1, name: "Template 1", favorited: false },
    { id: 2, name: "Template 2", favorited: true },
  ];

  const [templateList, setTemplateList] = useState(initialTemplateList);
  const [showFavorites, setShowFavorites] = useState(false);

  const navigate = useNavigate();

  const handleCardClick = (templateId) => {
    // Implemente a lógica para a ação ao clicar no card aqui
    console.log(`Card clicado: ${templateId}`);
    navigate("/app/enviar-campanha");
  };

  const handleFavoriteClick = (templateId) => {
    // Atualize o estado para refletir a mudança de favorito
    setTemplateList((prevTemplates) =>
      prevTemplates.map((template) =>
        template.id === templateId ? { ...template, favorited: !template.favorited } : template,
      ),
    );
  };

  const handleShowAllClick = () => {
    setShowFavorites(false);
  };

  const handleShowFavoritesClick = () => {
    setShowFavorites(true);
  };

  const filteredTemplates = showFavorites ? templateList.filter((template) => template.favorited) : templateList;

  return (
    <Box sx={{ width: "100%" }}>
      <Button
        onClick={handleShowAllClick}
        sx={{ fontWeight: "bold", color: "#2D3C42", textTransform: "none", marginRight: "15px" }}>
        Todos os templates
      </Button>
      <Button onClick={handleShowFavoritesClick} sx={{ fontWeight: "bold", color: "#2D3C42", textTransform: "none" }}>
        Templates Favoritos
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
            onClick={() => handleCardClick(template.id)}
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
            {template.favorited ? (
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

export default CreateCampaign;
