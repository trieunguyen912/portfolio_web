import React from "react";
import AppButtonIcon from "../../button-icon";
import { Grid, Box } from "@mui/material";
import Image from "next/image";
import styles from "../styles.module.css";

export const CardEducation = ({ data }) => {
  return (
    <Grid
      item
      className={styles.containerCard}
      container
      justifyContent="center"
      alignItems="center"
      sx={{
        textAlign: { xs: "center", sm: "start" },
        borderRadius: 3,
        direction: { xs: "column", sm: "row" },
      }}
    >
      <Grid item xs={10} sm={1.5}>
        <Image
          src={`/image/${data?.img_avatar}`}
          alt="logo"
          width={100}
          height={100}
          style={{ objectFit: "cover", borderRadius: 999 }}
        />
      </Grid>
      <Grid item xs={10} sm={3.7}>
        {" "}
        <Box className={styles.titleName}>{data?.name}</Box>
        <Grid className={styles.nameInfo}>{data?.info}</Grid>
        <Grid className={styles.contentTime}>{data?.time}</Grid>
      </Grid>

      <Grid item xs={10} sx={{mb:{xs:4,sm:0}}} sm={4} className={styles.childernContent}>
        {data?.comment}
      </Grid>
      <Grid item xs={10} ml={1} sm={2.5}>
        <AppButtonIcon btnDark={false} text={data?.text_bnt} />
      </Grid>
    </Grid>
  );
};
