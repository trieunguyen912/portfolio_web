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
        sx={{ border: btnDark ? 1 : 0 ,backgroundColor:  btnDark ? '': '#0b8dcd', p:{xs:0,sm:2} , color: btnDark ? "" : "white"}}
      >
       {text}
       
      </Button>
    </Grid>
  );
};

export default AppButtonIcon;
