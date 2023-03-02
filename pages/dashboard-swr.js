import React from "react";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import useSWR from "swr";
import Alert from "@mui/material/Alert";
import Grid from "@mui/material/Grid";
import PostAddIcon from "@mui/icons-material/PostAdd";
import FavoriteIcon from "@mui/icons-material/Favorite";
import PersonIcon from "@mui/icons-material/Person";
import GroupsIcon from "@mui/icons-material/Groups";


const DashboardSwr = () => {
  const { isLoading, data, error } = useSWR("swr-dataFetching", async () => {
    const response = await fetch("http://localhost:4000/dashboard");
    const json = await response.json();

    return json;
  });

  if (isLoading) {
    return (
      <Alert severity="info" position="center">
        Loading...!
      </Alert>
    );
  }
  if (!data) {
    return <Alert severity="info">OOPS! Here there is no data from the server...!</Alert>;
  }
  if (error) {
    return <Alert severity="error">Error is occurred check it out!</Alert>;
  }

  return (
    <>
      <h4>DashboardSwr</h4>
      <Grid
        container
        sx={{
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "flex-start",
          flexDirection: "column",
        }}
      >
        <Grid item mb={2}>
          <Avatar sx={{ backgroundColor: "orange" }}>G</Avatar>
        </Grid>

        <Grid item mb={2} sx={{ width: "100%" }}>
          <Grid
            item
            sx={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
            }}
          >
            <PostAddIcon sx={{ mx: 3 }} color="secondary" />
            <Typography>POSTS: {data.posts}</Typography>
          </Grid>
          <Grid
            item
            sx={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
            }}
          >
            <FavoriteIcon sx={{ mx: 3, color: "red" }} />
            <Typography>LIKES: {data.likes}</Typography>
          </Grid>
          <Grid
            item
            sx={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
            }}
          >
            <GroupsIcon sx={{ mx: 3 }} color="primary" />
            <Typography>FOLLOWERS: {data.followers}</Typography>
          </Grid>
          <Grid
            item
            sx={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
            }}
          >
            <PersonIcon sx={{ mx: 3 }} color="success" />
            <Typography>FOLLOWING:{data.following}</Typography>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default DashboardSwr;
