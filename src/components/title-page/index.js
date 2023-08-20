import React from "react";
import styles from "./styles.module.css";
import { Grid, Box, Typography } from "@mui/material";
const TitlePage = ({ title, content, border }) => {
  return (
    <Grid
      item
      container
      direction="column"
      justifyContent={border ? "center" : "flex-start"}
      alignItems={border ? "center" : "flex-start"}
      sx={{ textAlign: border ? "center" : "start" }}
      xs={12}
    >
      <Grid item className={styles.wrapText}>
        <Box className={styles.title} sx={{ mb:  border ? { xs: 1, sm: 3 } : 0 }}>
          {title}
        </Box>

        <Box
          className={styles.title}
          sx={{
            ml: { xs: 5, sm: 10 },
            mr: { xs: 5, sm: 10 },
            borderBottom: border ? 4 : 0,
          }}
        ></Box>
      </Grid>
      <Grid item mt={2}>
        {!border && (
          <Box className={styles.containerContent}>
            Bringing modern technologies into the real world is my{" "}
            <Box component={"span"} className={styles.contentSpan}>
              DNA.
            </Box>
          </Box>
        )}
        <Box className={styles.childernContent}>{content}</Box>
      </Grid>
    </Grid>
  );
};

export default TitlePage;
