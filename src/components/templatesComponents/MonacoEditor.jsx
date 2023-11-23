import React, { useState } from "react";
import Editor from "@monaco-editor/react";
import { Box, Typography } from "@mui/material";

function MonacoEditor() {
  const [code, setCode] = useState("<!-- Digite aqui -->");

  const editorOptions = {
    fontSize: 14,
    wordWrap: "on",
    padding: { top: 0, bottom: 0 },
    minimap: {
      enabled: false,
    },
    language: ["html", "freemarker2"],
  };

  const visualizationEditor = {
    display: "flex",
    flexDirection: "column",
    flex: 1,
  };
  const visualizationStyle = {
    whiteSpace: "pre-wrap",
    overflowWrap: "break-word",
    height: "72vh",
    display: "flex",
    flexDirection: "column",
    overflowY: "auto",
    flex: 1,
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "row", border: "1px solid #e0e0e0", borderRadius: "5px" }}>
      <Box sx={visualizationEditor}>
        <Typography variant="body1" sx={{ margin: "5px 0px 0px 5px" }}>
          HTML
        </Typography>
        <Editor
          defaultLanguage="html"
          defaultValue={code}
          onChange={(value) => setCode(value)}
          options={editorOptions}
        />
      </Box>

      <Box style={visualizationStyle}>
        <Typography variant="body1" sx={{ margin: "5px 0px 0px 5px" }}>
          Visualização
        </Typography>
        <div sx={visualizationStyle} dangerouslySetInnerHTML={{ __html: code }} />
      </Box>
    </Box>
  );
}

export default MonacoEditor;
