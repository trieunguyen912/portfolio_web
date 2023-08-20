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
    <Grid container >
      <Grid
      sx={{mb:{xs:5 ,sm:18}}}
       className={styles.wrapImage}
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
      <Grid item container sx={{mt:{xs:5 ,sm:18},ml:{xs:4 ,sm:16 },mr:{xs:4 ,sm:16 } }}>
        <AboutMe />
      </Grid>
      {/*Content card*/}
      <Grid item container sx={{mt:{xs:5 ,sm:18},ml:{xs:4 ,sm:16 },mr:{xs:4 ,sm:16 }}}>
        <ContentCard />
      </Grid>
      {/*Testimonials*/}
      <Grid item container sx={{mt:{xs:5 ,sm:18},ml:{xs:4 ,sm:16 },mr:{xs:4 ,sm:16 }}}>
        <Testimonials />
      </Grid>
      {/*Experience*/}
      <Grid item container sx={{mt:{xs:5 ,sm:18},ml:{xs:4 ,sm:16 },mr:{xs:4 ,sm:16 }}}>
        <Experience />
      </Grid>
      {/*Educatio*/}
      <Grid item container sx={{mt:{xs:5 ,sm:18},ml:{xs:4 ,sm:16 },mr:{xs:4 ,sm:16 }}}>
        <Education />
      </Grid>
      <Grid item  container  sx={{mt:{xs:5 ,sm:18} , mb:{xs:5, sm:124}}} >
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
