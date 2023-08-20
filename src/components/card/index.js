import React from "react";
import styles from "./styles.module.css";
import AppButtonIcon from "../button-icon";
import { Grid, Box } from "@mui/material";
import Image from "next/image";
const AppCard = ({ dataCard }) => {
  return (
    <Grid
      item
      container
      className={styles.container}
      sx={{
        borderRadius: 5,
        direction: "row",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Grid
        item
        container
        xs={6}
        sx={{
          direction: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Grid item container xs={9} md={8} >
          {dataCard?.title_other != null ? (
            <Box className={styles.title}>{dataCard?.title_other}</Box>
          ) : (
            <Image
              className={styles.img}
              src={`/image/${dataCard?.img_logo}`}
              alt="logo"
              layout="fill"
              style={{ objectFit: "cover" }}
            />
          )}
          <Grid sx={{mb:{xs:0,sm:1},mt:{xs:0,sm:1}}} className={styles.childernContent}>{dataCard?.content}</Grid>
          <Grid
            container
            sx={{
              direction: "row",
              justifyContent: "flex-start",
              alignItems: "center",
              mb: { xs: 0, lg: 3 },
            }}
          >
            {dataCard?.dataIcon?.map((e, index) => {
              return (
                <Grid key={index} item xs={0.8} sm={1} sx={{m:{xs:0,sm:0.5}}}>
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
          
          <AppButtonIcon text={dataCard.text_btn} btnDark={true} />
         
        </Grid>
      </Grid>
      <Grid item xs={6}>
        <Image
          className={styles.img}
          src={`/image/${dataCard.img_card}`}
          alt="logo"
          layout="fill"
          style={{ objectFit: "cover", borderRadius: 20 }}
        />
      </Grid>
    </Grid>
  );
};

export default AppCard;
