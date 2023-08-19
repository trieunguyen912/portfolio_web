import React from "react";
import { Button, Grid, Typography } from "@mui/material";
import styles from "./styles.module.css";
import EastIcon from "@mui/icons-material/East";
const AppButtonIcon = ({ text, btnDark }) => {
  return (
    <Grid>
      <Button
        className={btnDark ? styles.btnDark : styles.btn}
        endIcon={
          <EastIcon
            sx={{ width: { xs: 12, sm: 20 }, height: { xs: 12, sm: 20 } }}
          />
        }
        sx={{ border: btnDark ? 1 : 0 }}
      >
        <Typography  className={btnDark ? styles.textDark : styles.text} > {text} </Typography>
       
      </Button>
    </Grid>
  );
};

export default AppButtonIcon;
