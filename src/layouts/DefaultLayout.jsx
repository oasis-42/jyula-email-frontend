import { Box } from "@mui/system";
import LayoutToolBar from "./layoutsComponents/LayoutToolBar";
import LayoutSearchBar from "./layoutsComponents/LayoutSearchBar";

export default function DefaultLayout({ children }) {
  return (
    <Box style={{ display: "flex", backgroundColor: "#F4F4F7" }}>
      <Box sx={{ backgroundColor: "#ffffff" }}>
        <LayoutToolBar />
      </Box>
      <Box sx={{ display: "flex", flexDirection: "column", flexGrow: 1, margin: "0px 15px 15px 15px" }}>
        <Box sx={{ display: "flex", justifyContent: "flex-end", margin: "5px 0px" }}>
          <LayoutSearchBar />
        </Box>

        <Box
          sx={{
            backgroundColor: "white",
            padding: "14px",
            flexGrow: 1,
            borderRadius: "5px",
            border: "1px solid #e0e0e0",
            transition: "border 0.1s ease-in-out",
            "&:hover": {
              border: "1px solid #797979",
            },
            maxHeight: "860px",
            overflowY: "auto",
            overflowX: "auto",
          }}>
          {children}
        </Box>
      </Box>
    </Box>
  );
}
