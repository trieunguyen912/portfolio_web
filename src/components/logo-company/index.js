import React from "react";
import { Grid, Box } from "@mui/material";
import Image from "next/image";
import styles from "./styles.module.css";

const dataIcon = [
  {
    img: "/image/img_1.png",
  },
  {
    img: "/image/img_2.png",
  },
  {
    img: "/image/img_3.png",
  },
  {
    img: "/image/img_4.png",
  },
  {
    img: "/image/img_5.png",
  },
  {
    img: "/image/img_6.png",
  },
];
const AppLogoCompany = () => {
  return (
    <Grid
      item
      container
      className={styles.container}
      sx={{ mt: { xs: 4, sm: 9 } }}
      direction="row"
      justifyContent="space-between"
      alignItems="center"
    >
      {dataIcon.map((e, index) => {
        return (
          <Grid item key={index} xs={1.5}>
            <Image
              className={styles.img}
              src={`${e.img}`}
              alt="logo"
              layout="fill"
              style={{ objectFit: "cover" }}
            />
          </Grid>
        );
      })}
    </Grid>
  );
};

export default AppLogoCompany;
