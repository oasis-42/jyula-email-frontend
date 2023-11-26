import { Box, Button, Divider, IconButton, Stack, Typography } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import SegmentIcon from "@mui/icons-material/Segment";
import SwitchAccountIcon from "@mui/icons-material/SwitchAccount";
import OutboxIcon from "@mui/icons-material/Outbox";
import GradeIcon from "@mui/icons-material/Grade";
import AssessmentIcon from "@mui/icons-material/Assessment";
import AddBoxIcon from "@mui/icons-material/AddBox";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

function ToolBarLayout() {
  const buttonsDataFirst = [{ label: "Criar campanha", icon: <AddBoxIcon />, to: "/criar-campanha" }];
  const buttonsDataSecond = [
    { label: "Templates", icon: <EmailIcon />, to: "/criar-templates" },
    { label: "Segmentos", icon: <SegmentIcon />, to: "/segmentos" },
    { label: "Audiência", icon: <SwitchAccountIcon />, to: "/audiencia" },
    { label: "Enviados", icon: <OutboxIcon />, to: "/enviados" },
    { label: "Favoritos", icon: <GradeIcon />, to: "/favoritos" },
    { label: "Relatórios", icon: <AssessmentIcon />, to: "/relatorios" },
  ];
  return (
    <Box sx={{ height: "100vh", boxShadow: "5px 0px 10px rgba(0, 0, 0, 0.1)", width: "200px" }}>
      <Stack sx={{ display: "flex", flexDirection: "column", justifyContent: "space-between", height: "100%" }}>
        <Stack>
          {buttonsDataFirst.map((button, index) => (
            <Link key={index} to={button.to} style={{ textDecoration: "none" }}>
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
                  width: "100%",

                  "&:hover": {
                    backgroundColor: "#ECECEC",
                    color: "#2d3c42",
                    "& svg": {
                      color: "#2d3c42",
                    },
                  },
                }}>
                <Stack direction="row" spacing={1} alignItems="center">
                  <IconButton size="small">{button.icon}</IconButton>{" "}
                  <Typography sx={{ fontWeight: 600, fontSize: "14px" }}>{button.label}</Typography>
                </Stack>
              </Button>
            </Link>
          ))}
          <Divider />
          {buttonsDataSecond.map((button, index) => (
            <Link key={index} to={button.to} style={{ textDecoration: "none", width: "100%" }}>
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
                  width: "100%",

                  "&:hover": {
                    backgroundColor: "#ECECEC",
                    color: "#2d3c42",
                    "& svg": {
                      color: "#2d3c42",
                    },
                  },
                }}>
                <Stack direction="row" spacing={1} alignItems="center">
                  <IconButton size="small">{button.icon}</IconButton>{" "}
                  <Typography sx={{ fontWeight: 600, fontSize: "14px" }}>{button.label}</Typography>
                </Stack>
              </Button>
            </Link>
          ))}
        </Stack>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <img src={logo} alt="Logo do Site" style={{ width: "70%", paddingBottom: "10px" }} />
        </Box>
      </Stack>
    </Box>
  );
}

export default ToolBarLayout;
