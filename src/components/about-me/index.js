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
        mr: { xs: 4, md: 0 },
        ml: { xs: 4, md: 0 },
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
        xs={12}
        sm={6}
        container
        sx={{
          ml: { xs: 10, md: 3 },
          direction: { xs: "column" },
          justifyContent: { xs: "center", md: "start" },
          alignItems: { xs: "center", md: "start" },
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
  );
};

export default AboutMe;
