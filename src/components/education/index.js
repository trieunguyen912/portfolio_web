import React, { useEffect } from "react";
import styles from "./styles.module.css";
import { Grid, Box } from "@mui/material";
import TitlePage from "../title-page";
import { CardEducation } from "./card-education";
import dataEducation from "../../data/dataEducation";
import "aos/dist/aos.css";
import Aos from "aos";
export const Education = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
    Aos.refresh();
  }, []);
  return (
    <Grid
      item
      container
      sx={{
        direction: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Grid item xs={12} sm={8} className={styles.titlePage}>
        <TitlePage
          title={"Education"}
          border={true}
          content={
            "I am a product-oriented Software Engineer with a business mindset from bringing the latest tech to launching successful startups!"
          }
        />
      </Grid>
      <Grid
        item
        container
        xs={12}
        sx={{
          direction: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {dataEducation?.map((e, index) => {
          return (
            <Grid key={index} item container m={2} xs={12} data-aos="fade-up">
              <CardEducation data={e} />
            </Grid>
          );
        })}
      </Grid>
    </Grid>
  );
};
