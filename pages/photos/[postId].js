// --> getStaticPaths
import React from "react";
import { CardContent, CardMedia, Button } from "@mui/material";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import Link from "next/link";
import { useRouter } from "next/router";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

export const getStaticPaths = async () => {
  // fallBack value is set to true
  const getData = await fetch(
    "https://jsonplaceholder.typicode.com/photos?_limit=50"
  );

  const json = await getData.json();

  const idValue = json.map((item) => {
    return {
      params: {
        postId: item.id.toString(), // --> its also same as like toString() - `${item.id}`
      },
    };
  });

  const paths = idValue.slice(0, 5);

  return {
    paths,
    fallback: true,
  };

  //fallback is set to false
  /*     return {
    paths: [
      {
        params: { postId: "1" },
      },
      {
        params: { postId: "2" },
      },
      {
        params: { postId: "3" },
      },
      {
        params: { postId: "4" },
      },
      {
        params: { postId: "5" },
      }
    ],
    fallback: false,
  }; */
};

// --> getStaticProps
export const getStaticProps = async (context) => {
  const id = context.params.postId;

  const getData = await fetch(
    "https://jsonplaceholder.typicode.com/photos/" + id
  );

  const json = await getData.json();

  if (!json.id) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      post: json,
    },
  };
};

const Photo = (props) => {
  const { post } = props;

  const router = useRouter();

  if (router.isFallback) {
    return (
      <>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "600px",
          }}
        >
          <CircularProgress />
        </Box>
      </>
    );
  }

  return (
    <>
      <Card sx={{ maxWidth: 345, marginTop: 5 }} key={post.id}>
        <CardMedia
          sx={{ height: 140 }}
          image={`${post.url}`}
          title="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {post.id}) {post.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
        <CardActions>
          <Link href={`/photos`} passHref>
            <Button variant="contained">Go back</Button>
          </Link>
        </CardActions>
      </Card>
    </>
  );
};

export default Photo;
