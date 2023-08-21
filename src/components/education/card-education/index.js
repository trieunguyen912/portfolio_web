import React from "react";
import AppButton from "../../button";
import { Grid, Box } from "@mui/material";
import Image from "next/image";
import styles from "../styles.module.css";

export const CardEducation = ({ data }) => {
  return (
    <Grid
      item
      className={styles.containerCard}
      container
      justifyContent="space-between"
      alignItems="center"
      sx={{
        textAlign: { xs: "center", md: "start" },
        borderRadius: 3,
        direction: { xs: "column", md: "row" },
      }}
    >
      <Grid item xs={12} md={1.2}>
        <Image
          src={`/image/${data?.img_avatar}`}
          alt="logo"
          width={100}
          height={100}
          style={{ objectFit: "cover", borderRadius: 999 }}
        />
      </Grid>
      <Grid item xs={12} md={2.5}>
        {" "}
        <Box className={styles.titleName}>{data?.name}</Box>
        <Grid className={styles.nameInfo}>{data?.info}</Grid>
        <Grid className={styles.contentTime}>{data?.time}</Grid>
      </Grid>

      <Grid
        item
        xs={12}
        sx={{ mb: { xs: 4, md: 0 } }}
        md={5}
        className={styles.childernContent}
      >
        {data?.comment}
      </Grid>
      <Grid item xs={12} ml={1} md={2}>
        <AppButton icon={true} text={data?.text_bnt} />
      </Grid>
    </Grid>
  );
};
