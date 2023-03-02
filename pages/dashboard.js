import React, { useState, useEffect } from "react";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Alert from "@mui/material/Alert";
import Grid from "@mui/material/Grid";
import PostAddIcon from "@mui/icons-material/PostAdd";
import FavoriteIcon from "@mui/icons-material/Favorite";
import PersonIcon from "@mui/icons-material/Person";
import GroupsIcon from "@mui/icons-material/Groups";

import { useSession } from "next-auth/react"

// --> client side data fetching it is same as like data-fetching in react - with react useEffect hook
const Dashboard = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(null);
  const { data: session } = useSession()


  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch("http://localhost:4000/dashboard");
    const json = await response.json();
    setData(json);
    setIsLoading(false);
  };

  if (isLoading) {
    return (
      <>
        <h1 style={{ textAlign: "center" }}>Loading</h1>
      </>
    );
  }
  
  if(session) {
    return <>
    <h4>Dashboard</h4>
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
        <Avatar sx={{ backgroundColor: "orange" }} src={session.user.image}></Avatar>
        <Typography>Name: {session.user.name}</Typography>
        <Typography>Email Address: {session.user.email}</Typography>
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
    {/* <button onClick={() => signOut()}>Sign out</button> */}

  </>
     
  }
  
  return <>
    <Typography variant="h1" sx={{ textAlign:'center',padding: 30 }}>
    Not signed in 
    </Typography>
    {/* <button onClick={() => signIn()}>Sign in</button> */}
  </>
};

export default Dashboard;
