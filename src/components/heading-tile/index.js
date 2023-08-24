import React, { useEffect, useRef } from "react";
import styles from "./styles.module.css";
import AppButton from "../button/index";
import AppLogoCompany from "../logo-company";
import { Grid, Box } from "@mui/material";
import { TweenMax, Power3 } from "gsap";
const AppHeading = ({ name, year }) => {
  let { textName, textContent, textSpan, textTitle } = useRef(null);

  useEffect(() => {
    TweenMax.to(textTitle, 0.8, {
      opacity: 1,
      y: -20,
      ease: Power3.easeOut,
      delay: 3,
    });
    TweenMax.to(textName, 0.8, {
      opacity: 1,
      y: -20,
      ease: Power3.easeOut,
      delay: 2,
    });
    TweenMax.to(textSpan, 0.8, {
      opacity: 1,
      y: -50,
      ease: Power3.easeOut,
      delay: 5,
    });
    TweenMax.to(textContent, 0.8, {
      opacity: 1,
      y: -20,
      ease: Power3.easeOut,
      delay: 4,
    });
  }, []);
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
        <Grid
          ref={(el) => {
            textName = el;
          }}
          item
          className={styles.name}
        >
          Hi, my name is
        </Grid>
        <Box
          ref={(el) => {
            textTitle = el;
          }}
          className={styles.title}
        >
          {name}
          <br />I am a Software Engineer
        </Box>
      </Grid>
      <Grid item>
        <Box
          ref={(el) => {
            textContent = el;
          }}
          className={styles.containerContent}
        >
          {year}+ years of making the job done in the{" "}
          <Box
            ref={(el) => {
              textSpan = el;
            }}
            component={"span"}
            className={styles.contentSpan}
          >
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
