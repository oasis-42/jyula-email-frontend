import { Box } from "@mui/system";
import ToolBarLayout from "./ToolBarLayout";
import SearchBarLayout from "./SearchBarLayout";

export default function Layout({ children }) {
  return (
    <Box style={{ display: "flex", backgroundColor: "#F4F4F7" }}>
      <Box>
        <ToolBarLayout />
      </Box>
      <Box sx={{ display: "flex", flexDirection: "column", flexGrow: 1, margin: "0px 15px 15px 15px" }}>
        <Box sx={{ display: "flex", justifyContent: "flex-end", margin: "5px 0px" }}>
          <SearchBarLayout />
        </Box>

        <Box
          sx={{
            backgroundColor: "white",
            padding: "14px",

            flexGrow: 1,
            borderRadius: "5px",
            border: "1px solid #797979",
          }}>
          {children}
        </Box>
      </Box>
    </Box>
  );
}
