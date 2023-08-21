import React from "react";
import { Button, Grid, Typography } from "@mui/material";
import styles from "./styles.module.css";
import EastIcon from "@mui/icons-material/East";
const AppButtonIcon = ({ text }) => {
  return (
    <Grid item>
      <Button
        className={styles.btnDark}
        endIcon={
          <EastIcon
            sx={{ width: { xs: 12, sm: 20 }, height: { xs: 12, sm: 20 } }}
          />
        }
        sx={{
          border: 1,
          pt: { xs: 0.5, md: 2 },
          pb: { xs: 0.5, md: 2 },
          pl: { xs: 1, md: 2 },
          pr: { xs: 1, md: 2 },
        }}
      >
        {text}
      </Button>
    </Grid>
  );
};

export default AppButtonIcon;
