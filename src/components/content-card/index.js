import React from "react";
import styles from "./styles.module.css";
import { Grid, Box } from "@mui/material";
import TitlePage from "../title-page";
import AppCard from "../card";
import dataCard from "../../data/dataListIcon";
const ContentCard = () => {
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
      <Grid item xs={8}>
        <TitlePage
          title={"Recent Cases"}
          border={true}
          content={
            "I am a product-oriented Software Engineer with a business mindset from bringing the latest tech to launching successful startups!"
          }
        />
      </Grid>
      <Grid item xs={12}>
        {dataCard.map((e, index) => {
          return (
            <Grid key={index} className={styles.wrapListCard}>
              <AppCard dataCard={e} />
            </Grid>
          );
        })}
      </Grid>
    </Grid>
  );
};

export default ContentCard;
