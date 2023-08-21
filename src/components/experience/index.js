import React from "react";
import styles from "./styles.module.css";
import AppButton from "../button/index";
import TitlePage from "../title-page";
import TableExperience from "./content/index";
import dataExperience from "../../data/dataExperience";
import { Grid, Box } from "@mui/material";
const Experience = () => {
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
          title={"Recent Experience"}
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
        className={styles.titlePage}
        sx={{
          m: { xs: 2, sm: 5 },
          direction: "column",
          justifyContent: "start",
          alignItems: "center",
        }}
      >
        <Grid
          item
          container
          sx={{
            direction: "row",
            justifyContent: "start",
            alignItems: "center",
          }}
        >
          <Box className={styles.containerContent} sx={{ mr: 1 }}>
            Chief Technology Officer
          </Box>
          <Box className={styles.contentSpan}>Molly’s Marketplace</Box>
        </Grid>
        <Grid item className={styles.contentDay}>
          May 2022 – Aug 2022 (4 Months)
        </Grid>
        {dataExperience?.map((e, index) => {
          return <TableExperience key={index} dataExperience={e} />;
        })}
      </Grid>
      <AppButton icon={false} text={"🚀 Download my resume!"} />
    </Grid>
  );
};

export default Experience;
