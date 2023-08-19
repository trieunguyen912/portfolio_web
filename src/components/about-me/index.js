import React from "react";
import AppButton from "../button";
import TitlePage from "../title-page";
import Image from "next/image";
import { Grid, Box } from "@mui/material";
import styles from "./styles.module.css";
const AboutMe = () => {
  return (
    <Grid
      item
      container
      sx={{
        direction: { xs: "column", md: "row" },
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Grid item xs={6} sm={4} sx={{ mr: { xs: 4, md: 18 } }}>
        <Image
          className={styles.img}
          src={"/image/avatar.png"}
          alt="logo"
          layout="fill"
          style={{ objectFit: "cover" }}
        />
      </Grid>
      <Grid
        item
        xs={10}
        sm={6.3}
        container
        sx={{
          justifyContent: { xs: "center", sm: "start" },
          alignItems: { xs: "center", sm: "start" },
        }}
      >
        <TitlePage
          title={"About Me"}
          border={false}
          content={
            "Worked on multiple startups and governmental projects to get the ideas into real-world mobile and web applications and developed successful Educational startups in Uzbekistan."
          }
        />
        <AppButton text={"😉 Download My Resume"} />
      </Grid>
    </Grid>
  );
};

export default AboutMe;
