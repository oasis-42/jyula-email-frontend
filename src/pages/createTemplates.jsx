// import { useState } from "react";
import { Box } from "@mui/material";
import { useState } from "react";
// import MonacoEditor from "../components/templatesComponents/MonacoEditor";
// import MonacoPreview from "../components/templatesComponents/MonacoPreview";
//
function CreateTemplates() {
  // const [userCode, setUserCode] = useState('console.log("Hello, Monaco Editor!");');
  // const handleCodeChange = (newCode) => {
  //   setUserCode(newCode);
  // };

  const [listTemplate, setListTemplate] = useState([]);

  const getListTemplates = async () => {
    try {
      const response = await fetch("http://localhost:8080/api/v1/templates")
        .then((response) => response.json())
        .then((json) => setListTemplate(json));
    } catch (error) {
      //tratar erros
    }
  }

  return (
    <Box sx={{ display: "flex", margin: 0, padding: "15px" }}>
      {/* <MonacoEditor onUserCodeChange={handleCodeChange} sx={{ flex: 1 }} />
      <MonacoPreview userCode={userCode} sx={{ flex: 1, overflowY: "auto", padding: "15px" }} /> 
      

      //criar componente pra listar
      {listTemplate.map((item) => <Componente de lista />)}
      */}
    </Box>
  );
}

export default CreateTemplates;
