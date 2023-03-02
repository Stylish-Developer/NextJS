import React from "react";
import { Grid, Typography } from "@mui/material";

const About = () => {
  return (
    <>
      <Grid container mt={2}>
        <Grid item xs={12} md={12} lg={12}>
          <Typography> About page </Typography>
          <Typography variant="subtitle1" mb={1}>
            👨‍💻 Professional Software Engineer | 💻 Frontend Developer |
            JavaScript | React/Next JS | TypeScript | React Native | 📝 Tech
            Posts Writer
          </Typography>
          <br />
          <Typography variant="body1">
            I am working as a software Engineer from india. I am a ReactJS
            developer with FrontEnd Technologies. specializing in JS,ReactJS,
            TypeScript,Next js.
          </Typography>
        </Grid>
      </Grid>
    </>
  );
};

export default About;
