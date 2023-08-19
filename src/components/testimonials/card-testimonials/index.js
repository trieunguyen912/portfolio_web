import React from "react";
import AppButtonIcon from "../../button-icon";
import { Grid, Box } from "@mui/material";
import Image from "next/image";
import styles from "../styles.module.css";

export const CardTestimonials = ({ data }) => {
  return (
    <Grid
      item
      className={styles.containerCard}
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
      sx={{ textAlign: "center", p: 4, borderRadius: 3 }}
    >
      <Grid item xs={5}>
        <Image
          src={`/image/${data?.img_avatar}`}
          alt="logo"
          width={100}
          height={100}
          style={{ objectFit: "cover", borderRadius: 999 }}
        />
        <Box className={styles.titleName}>{data?.name}</Box>
        <Grid className={styles.nameInfo}>{data?.info}</Grid>
        <Grid
          sx={{ minHeight: { xs: 0, sm: 150 } }}
          className={styles.childernContent}
        >
          {data?.comment}
        </Grid>
        <Grid>
          <AppButtonIcon btnDark={false} text={data?.text_bnt} />
        </Grid>
      </Grid>
    </Grid>
  );
};
