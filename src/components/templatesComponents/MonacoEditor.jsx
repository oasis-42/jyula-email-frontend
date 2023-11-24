import React, { useEffect } from "react";
import Editor from "@monaco-editor/react";
import { Box, Typography } from "@mui/material";

function MonacoEditor({ code, onCodeChange }) {
  const editorOptions = {
    fontSize: 14,
    wordWrap: "on",
    minimap: {
      enabled: false,
    },
    language: ["html", "freemarker2"],
    lineDecorationsWidth: "5px",
  };

  const containerStyle = {
    display: "flex",
    flexDirection: "row",
    border: "1px solid #e0e0e0",
    borderRadius: "5px",
    height: "72vh",
  };

  const visualizationEditorStyle = {
    display: "flex",
    flexDirection: "column",
    flex: 1,
    maxWidth: "545px",
  };

  const visualizationStyle = {
    overflowY: "auto",
    overflowX: "auto",
    width: "100%",
    maxWidth: "545px",
    backgroundColor: "#fff",
    flex: 1,
    display: "flex",
    flexDirection: "column",
    "&::-webkit-scrollbar": {
      width: "13px",
      height: "13px",
    },
    "&::-webkit-scrollbar-track": {
      backgroundColor: "#fff",
      borderLeft: "0.1px solid #c3c3c2",
    },
    "&::-webkit-scrollbar-track-piece": {
      borderTop: "1px solid #c3c3c2",
    },
    "&::-webkit-scrollbar-thumb": {
      backgroundColor: "#c3c3c2",
      borderRadius: "0px",
    },
    "&::-webkit-scrollbar-thumb:hover": {
      backgroundColor: "#929292",
    },
  };

  useEffect(() => {
    const emmetModule = import("emmet-monaco-es");

    emmetModule.then((emmet) => {
      emmet.setup(window.monaco);
    });
  }, []);

  const handleEditorChange = (value) => {
    if (onCodeChange) {
      onCodeChange(value);
    }
  };

  return (
    <Box sx={containerStyle}>
      <Box sx={visualizationEditorStyle}>
        <Typography variant="body2" sx={{ margin: "5px 0px 5px 10px", fontWeight: "bold", color: "#2D3C42" }}>
          HTML
        </Typography>
        <Editor
          defaultLanguage="html"
          defaultValue={code}
          onChange={(value) => handleEditorChange(value)}
          options={editorOptions}
        />
      </Box>
      <Box sx={{ flex: 1, display: "flex", flexDirection: "column" }}>
        <Box sx={{ boxShadow: "0px 2px 2px rgba(0, 0, 0, 0.08)", position: "sticky", top: 0 }}>
          <Typography
            variant="body2"
            sx={{
              margin: "5px 0px 5px 10px",
              fontWeight: "bold",
              color: "#2D3C42",
              backgroundColor: "white",
            }}>
            Visualização
          </Typography>
        </Box>
        <Box sx={visualizationStyle}>
          <div dangerouslySetInnerHTML={{ __html: code }} />
        </Box>
      </Box>
    </Box>
  );
}

export default MonacoEditor;
