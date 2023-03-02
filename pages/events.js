import React, { useState } from "react";
import { Typography, Grid, Button } from "@mui/material";
import { useRouter } from "next/router";

export const getServerSideProps = async (context) => {
  const { query } = context;
  const { category } = query;
  const queryString = category ? "category=sports" : "";
  const response = await fetch(`http://localhost:4000/events?${queryString}`);
  const json = await response.json();
  console.log(context);
  return {
    props: {
      eventList: json,
    },
  };
};
export const EventPage = (props) => {
  const { eventList } = props;

  const [list, setList] = useState(eventList);
  const router = useRouter();

  const handleFilterClick = async () => {
    const getData = await fetch("http://localhost:4000/events?category=sports");
    const parsedData = await getData.json();

    setList(parsedData);
    router.push("/events?category=sports", undefined, { shallow: true });
  };

  return (
    <>
      <Typography variant="h4">Event Page</Typography>
      <Button variant="contained" color="secondary" onClick={handleFilterClick}>
        filter only sports
      </Button>
      <Grid container sx={{ width: "100%", flexDirection: "column" }}>
        {list.map((data) => {
          return (
            <div key={data.id}>
              <Grid
                item
                mt={2}
                sx={{
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "baseline",
                  flexDirection: "column",
                }}
                
              >
                <Typography variant="h5">TITLE: {data.title}</Typography>
                <Typography variant="body1">
                  CATEGORY: {data.category}
                </Typography>
                <Typography variant="p">
                  DESCRIPTION: {data.description}
                </Typography>
              </Grid>
            </div>
          );
        })}
      </Grid>
    </>
  );
};

export default EventPage;
