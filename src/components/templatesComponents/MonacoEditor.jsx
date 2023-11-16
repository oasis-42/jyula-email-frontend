import { useEffect, useState } from "react";
import { Box } from "@mui/material";
import * as monaco from "monaco-editor";
import "../../styles/monaco.css";

function MonacoEditor({ onUserCodeChange }) {
  const [userCode, setUserCode] = useState('console.log("Hello, Monaco Editor!");');

  useEffect(() => {
    const editor = monaco.editor.create(document.getElementById("editor"), {
      workerSrc: "node_modules/monaco-editor/min/vs/base/worker/workerMain.js",
      language: "javascript",
      wordWrap: "on",
      minimap: {
        enabled: false,
      },
      theme: "light",
    });

    editor.setValue(userCode); // Defina o valor usando setValue

    const onChangeHandler = () => {
      const newUserCode = editor.getValue();
      setUserCode(newUserCode);
      if (onUserCodeChange) {
        onUserCodeChange(newUserCode);
      }
    };

    const disposable = editor.onDidChangeModelContent(onChangeHandler);

    // Cleanup: Destruir o editor e remover o listener quando o componente for desmontado
    return () => {
      disposable.dispose();
      editor.dispose();
    };
  }, [userCode, onUserCodeChange]);

  return (
    <Box sx={{ margin: 0, padding: 0, height: "100%", width: "50%", overflow: "hidden" }}>
      <div id="editor" style={{ height: "100%" }}></div>
    </Box>
  );
}

export default MonacoEditor;
