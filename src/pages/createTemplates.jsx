// import { useState } from "react";
import { Box } from "@mui/material";
// import MonacoEditor from "../components/templatesComponents/MonacoEditor";
// import MonacoPreview from "../components/templatesComponents/MonacoPreview";
//
function CreateTemplates() {
  // const [userCode, setUserCode] = useState('console.log("Hello, Monaco Editor!");');
  // const handleCodeChange = (newCode) => {
  //   setUserCode(newCode);
  // };
  return (
    <Box sx={{ display: "flex", margin: 0, padding: "15px" }}>
      {/* <MonacoEditor onUserCodeChange={handleCodeChange} sx={{ flex: 1 }} />
      <MonacoPreview userCode={userCode} sx={{ flex: 1, overflowY: "auto", padding: "15px" }} /> */}
    </Box>
  );
}

export default CreateTemplates;
