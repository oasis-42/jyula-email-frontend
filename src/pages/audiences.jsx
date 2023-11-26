import { Divider, Button, Card, CardContent, Typography, Box } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function CreateCampaign() {
  const initialContactList = [
    { id: 1, name: "Contato 1", favorited: false },
    { id: 2, name: "Contato 2", favorited: true },
  ];

  const [contactList, setContactList] = useState(initialContactList);

  const navigate = useNavigate();

  const handleCardClick = (contactId) => {
    console.log(`Card clicado: ${contactId}`);
    navigate("/app/enviar-campanha");
  };

  const handleFavoriteClick = (contactId) => {
    setContactList((prevContacts) =>
      prevContacts.map((contact) =>
        contact.id === contactId ? { ...contact, favorited: !contact.favorited } : contact,
      ),
    );
  };

  const filteredContacts = contactList;

  return (
    <Box sx={{ width: "100%" }}>
      <Typography sx={{ fontWeight: "bold", color: "#2D3C42", textTransform: "none", marginBottom: "10px" }}>
        Todos os contatos
      </Typography>
      <Divider sx={{ marginBottom: "10px", backgroundColor: "#2D3C42" }} />

      {filteredContacts.map((contact) => (
        <Card
          key={contact.id}
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
            onClick={() => handleCardClick(contact.id)}
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
                {contact.name}
              </Typography>
            </CardContent>
          </Button>

          <Button
            onClick={() => handleFavoriteClick(contact.id)}
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
            {contact.favorited ? (
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
