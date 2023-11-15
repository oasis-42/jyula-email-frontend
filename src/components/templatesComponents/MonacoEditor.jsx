import { useEffect } from "react";
import { Box } from "@mui/material";
import * as monaco from "monaco-editor";

function MonacoEditor() {
  useEffect(() => {
    const editor = monaco.editor.create(document.getElementById("editor"), {
      value: 'console.log("Hello, Monaco Editor!");',
      language: "javascript",
      wordWrap: "on",
      minimap: {
        enabled: false,
      },
    });
    //eslint-disable-next-line
    const onChangeHandler = (event) => {
      const userCode = editor.getValue();
      // Faça algo com o código do usuário em tempo real, como renderizar a saída ao lado.
      console.log(userCode);
    };

    const disposable = editor.onDidChangeModelContent(onChangeHandler);

    // Cleanup: Destruir o editor e remover o listener quando o componente for desmontado
    return () => {
      disposable.dispose();
      editor.dispose();
    };
  }, []);

  return (
    <Box sx={{ margin: 0, padding: 0, height: "100%", width: "50%" }}>
      <div id="editor" style={{ height: "100%" }}></div>
    </Box>
  );
}

export default MonacoEditor;
