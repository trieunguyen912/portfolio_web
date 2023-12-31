import React, { useEffect } from "react";
import styles from "./styles.module.css";
import { Grid, Box } from "@mui/material";
import TitlePage from "../title-page";
import { CardTestimonials } from "./card-testimonials";
import dataTestimonials from "../../data/dataTestimonials";
import "aos/dist/aos.css";
import Aos from "aos";
export const Testimonials = () => {
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
            <Grid
              key={index}
              item
              container
              m={2}
              xs={10}
              sm={5.5}
              data-aos="flip-left"
            >
              <CardTestimonials data={e} />
            </Grid>
          );
        })}
      </Grid>
    </Grid>
  );
};
