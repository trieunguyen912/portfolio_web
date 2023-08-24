import React from "react";
import { Button, Grid, Typography } from "@mui/material";
import styles from "./styles.module.css";
import EastIcon from "@mui/icons-material/East";
const AppButton = ({ text, icon }) => {
  return (
    <Grid item>
      {!icon ? (
        <Button
          className={styles.btn}
          sx={{
            color: "white",
            borderRadius: "5px",
            backgroundColor: "#0B8DCD",
            pt: { xs: 0.5, sm: 2 },
            pb: { xs: 0.5, sm: 2 },
            pl: { xs: 1, sm: 2, md: 5 },
            pr: { xs: 1, sm: 2, md: 5 },
          }}
        >
          {text}
        </Button>
      ) : (
        <Button
          className={styles.btnIcon}
          endIcon={
            <EastIcon
              sx={{ width: { xs: 12, sm: 20 }, height: { xs: 12, sm: 20 } }}
            />
          }
          sx={{
            fontSize: 10,
            color: "white",
            borderRadius: "5px",
            backgroundColor: "#0B8DCD",
            pt: { xs: 0.5, md: 1 },
            pb: { xs: 0.5, md: 1 },
            pl: { xs: 1, md: 2 },
            pr: { xs: 1, md: 2 },
          }}
        >
          {text}
        </Button>
      )}
    </Grid>
  );
};

export default AppButton;
