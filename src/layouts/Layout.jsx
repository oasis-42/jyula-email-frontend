import PropTypes from "prop-types";
import { Grid } from "@mui/material";
import ToolBarLayout from "./ToolBarLayout";

export default function Layout({ children }) {
  return (
    <Grid container>
      <Grid item xs={1.8}>
        <ToolBarLayout />
      </Grid>

      <Grid item xs={10.2}>
        {children}
      </Grid>
    </Grid>
  );
}

Layout.propTypes = {
  children: PropTypes.node,
};
