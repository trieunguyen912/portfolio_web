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
          className={styles.img}
          src={"/image/avatar.png"}
          alt="logo"
          layout="fill"
          style={{ objectFit: "cover", top: "-25%" }}
        />
      </Grid>
      <Grid item xs={10} sm={6} container>
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
