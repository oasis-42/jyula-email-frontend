import { Divider, Typography, Box, TextField, Card, Button } from "@mui/material";
import { useState } from "react";
import AddIcon from "@mui/icons-material/Add";

function CreateCampaign() {
  const [campaignName, setCampaignName] = useState("");
  const [sendTo, setSendTo] = useState("");
  const [audienceList, setAudienceList] = useState<string[]>([]);

  const handleAddClick = () => {
    if (sendTo.trim() !== "") {
      setAudienceList((prevList) => [...prevList, sendTo]);
      setSendTo("");
    }
  };

  return (
    <>
      <Box>
        <Typography variant="body1" sx={{ fontWeight: "bold", paddingTop: "5px" }}>
          Utilizando template:{" "}
        </Typography>
      </Box>
      <Divider sx={{ margin: "15px 0px 15px 0px", backgroundColor: "#2D3C42" }} />
      <Box sx={{ margin: "10px 0px 25px 0px" }}>
        <Typography variant="body2" sx={{ fontWeight: "bold", margin: "10px 0px 5px 5px" }}>
          Nome da campanha
        </Typography>
        <Card
          sx={{
            height: "auto",
            boxShadow: "none",
            border: "1px solid  #e0e0e0 ",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            marginBottom: "15px",
            padding: "10px 5px 5px 10px",
            transition: "border 0.3s",


            "&:hover": {
              border: " 1px solid #2D3C42",
            },
          }}>
          <TextField
            size="small"
            variant="standard"
            value={campaignName}
            onChange={(e) => setCampaignName(e.target.value)}
            InputProps={{
              disableUnderline: true,
            }}
            sx={{

              width: "100%",
            }}
          />
        </Card>
        <Typography variant="body2" sx={{ fontWeight: "bold", margin: "10px 0px 5px 5px" }}>
          Selecione sua audiência/segmentação
        </Typography>
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
            padding: "5px 5px 5px 10px",
            transition: "border 0.3s",

            "&:hover": {
              border: " 1px solid #2D3C42",
            },
          }}>
          <TextField
            size="small"
            variant="standard"
            value={sendTo}
            onChange={(e) => setSendTo(e.target.value)}
            InputProps={{
              disableUnderline: true,
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
      <Divider sx={{ margin: "15px 0px 15px 0px", backgroundColor: "#2D3C42" }} />
      {audienceList.map((audience, index) => (
          <Card key={index} sx={{ marginTop: "5px", padding: "5px" }}>
            <Typography>{audience}</Typography>
          </Card>
        ))}
    </>
  );
}

export default CreateCampaign;
