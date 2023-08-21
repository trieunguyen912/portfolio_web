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
      <Grid className={styles.wrapImage}>
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
        {/*About me*/}
        <Grid
          item
          container
          className={styles.wrapAbout}
          sx={{ mt: { xs: 5, sm: 18 } }}
        >
          <AboutMe />
        </Grid>
      </Grid>

      {/*Content card*/}
      <Grid
        item
        container
        sx={{
          mt: { xs: 5, sm: 18 },
          ml: { xs: 4, sm: 8 },
          mr: { xs: 4, sm: 8 },
        }}
      >
        <ContentCard />
      </Grid>
      {/*Testimonials*/}
      <Grid
        item
        container
        sx={{
          mt: { xs: 5, sm: 18 },
          ml: { xs: 4, sm: 8 },
          mr: { xs: 4, sm: 8 },
        }}
      >
        <Testimonials />
      </Grid>
      {/*Experience*/}
      <Grid
        item
        container
        sx={{
          mt: { xs: 5, sm: 18 },
          ml: { xs: 4, sm: 8 },
          mr: { xs: 4, sm: 8 },
        }}
      >
        <Experience />
      </Grid>
      {/*Education*/}
      <Grid
        item
        container
        sx={{
          mt: { xs: 5, sm: 18 },
          ml: { xs: 4, sm: 8 },
          mr: { xs: 4, sm: 8 },
        }}
      >
        <Education />
      </Grid>
      <Grid
        item
        container
        sx={{
          mt: { xs: 5, sm: 18 },
          mb: { xs: 5, sm: 14 },
          ml: { xs: 4, sm: 8 },
          mr: { xs: 4, sm: 8 },
        }}
      >
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
