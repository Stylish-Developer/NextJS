import React from "react";
import Link from "next/link";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

// --> getStaticProps for list out the photos
export const getStaticProps = async () => {
  const getData = await fetch(
    "https://jsonplaceholder.typicode.com/photos?_limit=50"
  );
  const json = await getData.json();

  //fallback is set to true
  return {
    props: {
      photos: json,
    },
  };

  //fallback is set to false
  /*   return {
    props: {
      photos: json.slice(0, 5),
    },
  }; */
};

const PhotosList = (props) => {
  let { photos } = props;
  return (
    <>
      <Typography variant="h4">photos:</Typography>
      <Grid container maxWidth="lg">
        <Grid
          item
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          {photos.map((photo) => {
            return (
              <>
                <Card sx={{ maxWidth: 345, marginTop: 5 }} key={photo.id}>
                  <CardMedia
                    sx={{ height: 140 }}
                    image={`${photo.url}`}
                    title="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {photo.id} {photo.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Lizards are a widespread group of squamate reptiles, with
                      over 6,000 species, ranging across all continents except
                      Antarctica
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Link href={`photos/${photo.id}`} passHref>
                      <Button variant="contained">See More</Button>
                    </Link>
                  </CardActions>
                </Card>
              </>
            );
          })}
        </Grid>
      </Grid>
    </>
  );
};

export default PhotosList;
