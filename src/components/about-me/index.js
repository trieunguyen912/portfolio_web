import React, { useEffect, useRef } from "react";
import AppButton from "../button";
import TitlePage from "../title-page";
import Image from "next/image";
import { Grid, Box } from "@mui/material";
import styles from "./styles.module.css";
import { TweenMax, Power3 } from "gsap";
const AboutMe = () => {
  let { imgItem, textItem } = useRef(null);
  useEffect(() => {
    TweenMax.to(imgItem, 0.8, {
      opacity: 1,
      y: -30,
      ease: Power3.easeOut,
      delay: 5,
    });
    TweenMax.to(textItem, 0.8, {
      opacity: 1,
      x: -40,
      ease: Power3.easeOut,
      delay: 6,
    });
  }, []);
  return (
    <Grid
      item
      container
      className={styles.container}
      sx={{
        direction: { xs: "column", lg: "row" },
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Grid
        item
        xs={6}
        className={styles.wrapImg}
        sm={4}
        sx={{ mr: { xs: 4, md: 8 } }}
      >
        <Image
          ref={(el) => {
            imgItem = el;
          }}
          className={styles.img}
          src={"/image/avatar.png"}
          alt="logo"
          layout="fill"
          style={{ objectFit: "cover", top: "-20%" }}
        />
      </Grid>
      <Grid
        className={styles.textContainer}
        ref={(el) => {
          textItem = el;
        }}
        item
        xs={10}
        sm={6}
        container
      >
        <Grid
          item
          container
          sx={{
            justifyContent: { xs: "center", sm: "start" },
            alignItems: { xs: "center", sm: "start" },
            mt: { xs: 0, sm: 2, md: 3 },
            mb: { xs: 0, sm: 2, md: 3 },
          }}
        >
          <TitlePage
            title={"About Me"}
            border={false}
            content={
              "Worked on multiple startups and governmental projects to get the ideas into real-world mobile and web applications and developed successful Educational startups in Uzbekistan."
            }
          />
          <AppButton icon={false} text={"😉 Download My Resume"} />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default AboutMe;
