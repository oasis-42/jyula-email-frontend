import { useState } from "react";
import {
  Divider,
  Button,
  Card,
  CardContent,
  Typography,
  Box,
  TextField,
  InputAdornment,
  Snackbar,
  Alert,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import SaveAsIcon from "@mui/icons-material/SaveAs";

function CreateCampaign() {
  const [initialContactList, setInitialContactList] = useState([
    { id: 1, nickname: "Contato 1", email: "teste01.contato@gmail.com" },
    { id: 2, nickname: "Contato 2", email: "teste02.contato@gmail.com" },
    { id: 3, nickname: "Contato 3", email: "teste03.contato@gmail.com" },
  ]);
  const [editingContactId, setEditingContactId] = useState(null);
  const [editedNickname, setEditedNickname] = useState("");
  const [editedEmail, setEditedEmail] = useState("");
  const [newNickname, setNewNickname] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const handleEditClick = (contactId) => {
    const contactToEdit = initialContactList.find((contact) => contact.id === contactId);
    setEditingContactId(contactId);
    setEditedNickname(contactToEdit.nickname);
    setEditedEmail(contactToEdit.email);
  };
  //editar
  const handleSaveClick = () => {
    if (!editedNickname || !editedEmail) {
      setSnackbarOpen(true);
      return;
    }

    console.log("Salvar alterações:", editedNickname, editedEmail);

    const updatedContactList = initialContactList.map((contact) => {
      if (contact.id === editingContactId) {
        return {
          ...contact,
          nickname: editedNickname,
          email: editedEmail,
        };
      }
      return contact;
    });

    setInitialContactList(updatedContactList);
    setEditingContactId(null);
    setEditedNickname("");
    setEditedEmail("");
    setSnackbarOpen(false);
  };

  //Deletar
  const handleDeleteClick = (contactId) => {
    const updatedContactList = initialContactList.filter((contact) => contact.id !== contactId);
    setInitialContactList(updatedContactList);
  };

  //Adicionar
  const handleAddClick = () => {
    if (!newNickname || !newEmail) {
      setSnackbarOpen(true);
      return;
    }

    const newContact = {
      id: initialContactList.length + 1,
      nickname: newNickname,
      email: newEmail,
    };
    setInitialContactList((prevList) => [...prevList, newContact]);
    setNewNickname("");
    setNewEmail("");
  };

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };
  return (
    <Box sx={{ width: "100%", height: "100%" }}>
      <Typography
        variant="body2"
        sx={{
          fontWeight: "bold",
          color: "#2D3C42",
          textTransform: "none",
          marginBottom: "10px",
          padding: "5px 0px 5px 10px",
        }}>
        Adicionar novos contatos
      </Typography>
      <Divider sx={{ marginBottom: "10px", backgroundColor: "#2D3C42" }} />
      <Box sx={{ margin: "10px 0px 25px 0px" }}>
        <Card
          sx={{
            height: "auto",
            boxShadow: "none",
            border: "1px solid  #e0e0e0 ",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: "5px",
            padding: "0px 0px 0px 15px",
            transition: "border 0.3s",

            "&:hover": {
              border: " 1px solid #2D3C42",
            },
          }}>
          <TextField
            size="small"
            variant="standard"
            value={newNickname}
            onChange={(e) => setNewNickname(e.target.value)}
            InputProps={{
              disableUnderline: true,
              startAdornment: (
                <InputAdornment position="start">
                  <Typography sx={{ color: "#2D3C42" }}>Apelido do Contato:</Typography>
                </InputAdornment>
              ),
            }}
            sx={{
              marginRight: "10px",
              flex: 1,
            }}
          />

          <TextField
            size="small"
            variant="standard"
            value={newEmail}
            onChange={(e) => setNewEmail(e.target.value)}
            InputProps={{
              disableUnderline: true,
              startAdornment: (
                <InputAdornment position="start">
                  <Typography sx={{ color: "#2D3C42" }}>Endereço de E-mail:</Typography>
                </InputAdornment>
              ),
            }}
            sx={{
              flex: 1,
            }}
          />

          <Button
            onClick={handleAddClick}
            variant="raised"
            sx={{
              backgroundColor: "transparent",
              height: "60px",
              border: "none",
              cursor: "pointer",
              "&:hover": {
                backgroundColor: "#f2f2f2",
              },
              "&:active": {
                backgroundColor: "transparent",
              },
            }}>
            <AddIcon sx={{ color: "#2D3C42" }} />
          </Button>
        </Card>
      </Box>
      <Typography
        variant="body2"
        sx={{
          fontWeight: "bold",
          color: "#2D3C42",
          textTransform: "none",
          marginBottom: "10px",
        }}>
        Todos os contatos
      </Typography>
      <Divider sx={{ marginBottom: "10px", backgroundColor: "#2D3C42" }} />
      <Box sx={{ overflowY: "auto", overflowX: "auto", height: "65%" }}>
        {initialContactList.map((contact) => (
          <Card
            key={contact.id}
            sx={{
              height: "50px",
              boxShadow: "none",
              border: "1px solid #2D3C42",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              transition: "background-color 0.3s",
              "&:hover": {
                backgroundColor: "#f2f2f2",
              },
              marginBottom: "5px",
            }}>
            {editingContactId === contact.id ? (
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  width: "70%",
                  padding: "15px",
                  justifyContent: "space-between",
                }}>
                <TextField
                  InputProps={{
                    disableUnderline: true,
                  }}
                  size="small"
                  variant="standard"
                  value={editedNickname}
                  onChange={(e) => setEditedNickname(e.target.value)}
                  sx={{ marginRight: "10px", width: "30%", fontSize: "14px" }}
                />

                <TextField
                  InputProps={{
                    disableUnderline: true,
                  }}
                  size="small"
                  variant="standard"
                  value={editedEmail}
                  onChange={(e) => setEditedEmail(e.target.value)}
                  sx={{ width: "30%", fontSize: "14px" }}
                />
              </Box>
            ) : (
              <CardContent
                sx={{
                  height: "100%",
                  width: "70%",
                  padding: "15px",
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}>
                <Typography variant="body2" component="div" sx={{ textTransform: "none" }}>
                  {contact.nickname}
                </Typography>
                <Typography variant="body2" component="div" sx={{ textTransform: "none", color: "#555555" }}>
                  {contact.email}
                </Typography>
              </CardContent>
            )}

            <Box sx={{ display: "flex", flexDirection: "row" }}>
              {editingContactId === contact.id ? (
                <Button
                  onClick={handleSaveClick}
                  sx={{
                    backgroundColor: "transparent",
                    height: "100%",
                    width: "70px",
                    border: "none",
                    cursor: "pointer",
                    "&:hover": {
                      backgroundColor: "#f2f2f2",
                    },
                    "&:active": {
                      backgroundColor: "transparent",
                    },
                  }}>
                  <SaveAsIcon sx={{ color: "#2D3C42", width: "20px" }} />
                </Button>
              ) : (
                <Button
                  onClick={() => handleEditClick(contact.id)}
                  sx={{
                    backgroundColor: "transparent",
                    height: "100%",
                    width: "70px",
                    border: "none",
                    cursor: "pointer",
                    "&:hover": {
                      backgroundColor: "#f2f2f2",
                    },
                    "&:active": {
                      backgroundColor: "transparent",
                    },
                  }}>
                  <EditOutlinedIcon sx={{ color: "#2D3C42", width: "20px" }} />
                </Button>
              )}

              <Button
                onClick={() => handleDeleteClick(contact.id)}
                sx={{
                  backgroundColor: "transparent",
                  height: "100%",
                  width: "70px",
                  border: "none",
                  cursor: "pointer",
                  "&:hover": {
                    backgroundColor: "#f2f2f2",
                  },
                  "&:active": {
                    backgroundColor: "transparent",
                  },
                }}>
                <DeleteOutlineOutlinedIcon sx={{ color: "#2D3C42", width: "20px" }} />
              </Button>
            </Box>
          </Card>
        ))}
      </Box>
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}>
        <Alert variant="filled" severity="error" onClose={handleSnackbarClose} sx={{ marginBottom: "10px" }}>
          Por favor, preencha todos os campos antes de salvar.
        </Alert>
      </Snackbar>
    </Box>
  );
}

export default CreateCampaign;
