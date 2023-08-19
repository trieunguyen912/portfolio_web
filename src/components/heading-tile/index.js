import React from "react";
import styles from "./styles.module.css";
import AppButton from "../button/index";
import { Grid, Box } from "@mui/material";
const AppHeading = ({ name, year }) => {
  return (
    <Grid
      item
      className={styles.container}
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
      sx={{ textAlign: "center" }}
    >
      <Grid className={styles.wrapText}>
        <Grid className={styles.name}>Hi, my name is</Grid>
        <Box className={styles.title}>
          {name}
          <br />I am a Software Engineer
        </Box>
      </Grid>
      <Grid>
        <Box className={styles.containerContent}>
          {year}+ years of making the job done in the{" "}
          <Box component={"span"} className={styles.contentSpan}>
            Tech industry!
          </Box>
        </Box>
        <Box className={styles.childernContent}>
          I am a product-oriented Software Engineer with a business mindset{" "}
          <br /> from bringing the latest tech to launching successful startups!
        </Box>
      </Grid>

      <AppButton text={"🚀 Lets Get Started!"} />
    </Grid>
  );
};

export default AppHeading;
