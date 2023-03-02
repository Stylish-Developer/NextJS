import React from "react";
import { Grid } from "@mui/material";
import  Image  from "next/image";
import { DATA } from '../data/TechnologyList'

const Technologies = () => {
  return (
    <>
      <Grid container mt={2}>
        <Grid
          container
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
          }}
      
          p={2}
        >
          {DATA.map((item) => {
            console.log(item.source);
            return (
              <>
                <Grid
                  item
                  xs={12}
                  md={6}
                  lg={6}
                  sx={{
                    display: "flex",
                    justifyContent: "flex-start",
                    alignItems: "center",
                  }}
                  key={item.id}
                >
                  <Image
                    src={item.source}
                    alt="Picture of the Tech"
                    width={100}
                    height={100}
                  />
                </Grid>

                <Grid
                  item
                  xs={12}
                  md={6}
                  lg={6}
                  sx={{
                    display: "flex",
                    justifyContent: "flex-start",
                    alignItems: "flex-start",
                    fontFamily: "'Open Sans', sans-serif"
                  }}
                >
                  {item.name}
                </Grid>
              </>
            );
          })}
        </Grid>
      </Grid>
    </>
  );
};

export default Technologies;
