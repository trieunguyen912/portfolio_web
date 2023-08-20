import React from "react";
import styles from "./styles.module.css";
import AppHeading from "../../components/heading-tile";
import AboutMe from "../../components/about-me";
import ContentCard from "../../components/content-card";
import { Testimonials } from "../../components/testimonials";
import { Education } from "../../components/education";
import Experience from "../../components/experience";
import TitlePage from "../../components/title-page";
import { Grid } from "@mui/material";
const Home = () => {
  return (
    <Grid container>
      <Grid
       className={styles.wrapImage}
        sx={{
          backgroundImage: `url("/image/img_bg.png")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/*Header*/}
        <Grid
        item
          container
          className={styles.wrapHeading}
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <AppHeading name={"Nguyen Minh Trieu"} year={"2"} />
        </Grid>
      </Grid>
      {/*About me*/}
      <Grid item container className={styles.wrapContent}>
        <AboutMe />
      </Grid>
      {/*Content card*/}
      <Grid item container className={styles.wrapContent}>
        <ContentCard />
      </Grid>
      {/*Testimonials*/}
      <Grid item container className={styles.wrapContent}>
        <Testimonials />
      </Grid>
      {/*Experience*/}
      <Grid item container className={styles.wrapContent}>
        <Experience />
      </Grid>
      {/*Educatio*/}
      <Grid item container className={styles.wrapContent}>
        <Education />
      </Grid>
      <Grid item  container className={styles.wrapContentBottom}>
        <TitlePage
          title={"Contact me"}
          border={true}
          content={
            "I am a product-oriented Software Engineer with a business mindset from bringing the latest tech to launching successful startups!"
          }
        />
      </Grid>
    </Grid>
  );
};

export default Home;
