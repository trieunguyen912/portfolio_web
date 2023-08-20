import React from "react";
import { Button, Grid, Typography } from "@mui/material";
import styles from "./styles.module.css";
const AppButton = ({ text }) => {
  return (
    <Grid>
      <Button
        className={styles.btn}
        sx={{ borderRadius: "5px", backgroundColor: "#0B8DCD" , color:"white" , p:{xs:0, sm:2}}}
      >
      {text}
       
      </Button>
    </Grid>
  );
};

export default AppButton;
