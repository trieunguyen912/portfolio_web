import React from "react";
import styles from "./styles.module.css";
import AppButton from "../button/index";
import AppLogoCompany from "../logo-company";
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
      <Grid item className={styles.wrapText}>
        <Grid item className={styles.name}>
          Hi, my name is
        </Grid>
        <Box className={styles.title}>
          {name}
          <br />I am a Software Engineer
        </Box>
      </Grid>
      <Grid item>
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

      <AppButton icon={false} text={"🚀 Lets Get Started!"} />
      <AppLogoCompany />
    </Grid>
  );
};

export default AppHeading;
