import React from "react";
import styles from "./styles.module.css";
import AppButton from "../button/index";
import TitlePage from "../title-page";
import { Grid, Box, Typography } from "@mui/material";
const Experience = ({ name, year }) => {
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
        sx={{m:{xs:2,sm:0},
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
        <Grid item className={styles.titleContent}>
          👨‍💻 Technical background :
          <Box className={styles.content}>
            • Developed Chrome Extension using ReactJS/Webpack for Insider Web
            Scrapping usage increasing the productivity of content managers by
            85%;
          </Box>
          <Box className={styles.content}>
            • Team Leading Backend Side of the SSO(Single Sign On), Mollys
            Services and Ecommerce Products
          </Box>
          <Box className={styles.content}>
            • Building better WordPress eCommerce infrastructure using AWS S3
            Bucket Technology and Cyber Panel And Light Speed Technologies(MVP)
          </Box>
          <Box className={styles.content}>
            • Reviewing codes of React Frontend Part of Applications. Reviews
            and set up Sprint plans and goals.
          </Box>
        </Grid>
        <Grid item className={styles.titleContent}>
          👨‍💼 Business:
          <Box className={styles.content}>
            • Hiring Developers as well as Interviewing them if they fit the
            tech requirements.
          </Box>
          <Box className={styles.content}>
            • Develop technical aspects of the company’s strategy to ensure
            alignment with its business goals{" "}
          </Box>
          <Box className={styles.content}>
            • Discover and implement new technologies that yield a competitive
            advantage
          </Box>
          <Box className={styles.content}>
            • Help departments use technology profitably
          </Box>
          <Box className={styles.content}>
            • Supervise system infrastructure to ensure functionality and
            efficiency
          </Box>
          <Box className={styles.content}>
            • Build quality assurance and data protection processes
          </Box>
          <Box className={styles.content}>
            • Monitor KPIs and IT budgets to assess technological performance
          </Box>
          <Box className={styles.content}>
            • Use stakeholders’ feedback to inform necessary improvements and
            adjustments to technology
          </Box>
          <Box className={styles.content}>
            • Communicate technology strategy to partners and investors
          </Box>
        </Grid>
      </Grid>
      <AppButton text={"🚀 Download my resume!"} />
    </Grid>
  );
};

export default Experience;
