import { Grid, Typography, Box } from "@mui/material";
import React from "react";
import styles from '../styles/Footer.module.css';

const Footer = () => {
  return (
    <>
      <Box sx={{ flexGrow: 1 }} className={styles.footer} >
        <Grid container>
          <Grid item xs={12} md={12} lg={12} display="flex" justifyContent="center" alignItems="center">
            <Typography className={styles.footerText}>gautham@nextJS</Typography>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Footer;
