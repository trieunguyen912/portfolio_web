import React from "react";
import styles from "./styles.module.css";
import { Grid, Box } from "@mui/material";
import TitlePage from "../title-page";
import { CardTestimonials } from "./card-testimonials";
import dataTestimonials from "../../data/dataTestimonials";
export const Testimonials = () => {
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
      <Grid item xs={8} className={styles.titlePage}>
        <TitlePage
          title={"Testimonials"}
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
          direction: { xs: "column", sm: "row" },
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {dataTestimonials?.map((e, index) => {
          return (
            <Grid key={index} item container m={2} xs={10} sm={4.5}>
              <CardTestimonials data={e} />
            </Grid>
          );
        })}
      </Grid>
    </Grid>
  );
};
