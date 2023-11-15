import { Box, Button, Divider, IconButton, Stack, Typography } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import SegmentIcon from "@mui/icons-material/Segment";
import SwitchAccountIcon from "@mui/icons-material/SwitchAccount";
import OutboxIcon from "@mui/icons-material/Outbox";
import GradeIcon from "@mui/icons-material/Grade";
import AssessmentIcon from "@mui/icons-material/Assessment";
import AddBoxIcon from "@mui/icons-material/AddBox";
import logo from "../assets/logo.png";

function ToolBarLayout() {
  const buttonsDataFirst = [
    { label: "Criar campanha", icon: <AddBoxIcon />, onClick: () => console.log("Clicou em Botão Adicional 1") },
  ];
  const buttonsDataSecond = [
    { label: "Templates", icon: <EmailIcon />, onClick: () => console.log("Clicou em Email Templates") },
    { label: "Segmentos", icon: <SegmentIcon />, onClick: () => console.log("Clicou em Segmentos") },
    { label: "Audiência", icon: <SwitchAccountIcon />, onClick: () => console.log("Clicou em Audiência") },
    { label: "Enviados", icon: <OutboxIcon />, onClick: () => console.log("Clicou em Enviados") },
    { label: "Favoritos", icon: <GradeIcon />, onClick: () => console.log("Clicou em Favoritos") },
    { label: "Relatórios", icon: <AssessmentIcon />, onClick: () => console.log("Clicou em Relatório") },
  ];

  return (
    <Box sx={{ height: "100vh" }}>
      <Stack sx={{ display: "flex", flexDirection: "column", justifyContent: "space-between", height: "100%" }}>
        <Stack>
          {buttonsDataFirst.map((button, index) => (
            <Button
              key={index}
              variant="contained"
              onClick={button.onClick}
              sx={{
                textTransform: "capitalize",

                borderRadius: 0,
                border: "1px solid transparent",
                backgroundColor: "#fff",
                justifyContent: "flex-start",
                color: "#797979",
                transition: "color 0.3s ease",
                boxShadow: "none !important",
                padding: "15px 0px 15px 15px",

                "&:hover": {
                  backgroundColor: "#ECECEC",
                  color: "#000",
                  "& svg": {
                    color: "#000",
                  },
                },
              }}>
              <Stack direction="row" spacing={1} alignItems="center">
                <IconButton size="small">{button.icon}</IconButton>{" "}
                <Typography sx={{ fontWeight: 600, fontSize: "14px" }}>{button.label}</Typography>
              </Stack>
            </Button>
          ))}
          <Divider />
          {buttonsDataSecond.map((button, index) => (
            <Button
              key={index}
              variant="contained"
              onClick={button.onClick}
              sx={{
                textTransform: "capitalize",
                borderRadius: 0,
                border: "1px solid transparent",
                backgroundColor: "#fff",
                justifyContent: "flex-start",
                color: "#797979",
                transition: "color 0.3s ease",
                boxShadow: "none !important",
                paddingTop: "15px",

                "&:hover": {
                  backgroundColor: "#ECECEC",
                  color: "#000",
                  "& svg": {
                    color: "#000",
                  },
                },
              }}>
              <Stack direction="row" spacing={1} alignItems="center">
                <IconButton size="small">{button.icon}</IconButton>{" "}
                <Typography sx={{ fontWeight: 600, fontSize: "14px" }}>{button.label}</Typography>
              </Stack>
            </Button>
          ))}
        </Stack>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <img src={logo} alt="Logo do Site" style={{ width: "70%" }} />
        </Box>
      </Stack>
    </Box>
  );
}

export default ToolBarLayout;
