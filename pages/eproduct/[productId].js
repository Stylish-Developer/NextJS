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
import Rating from "@mui/material/Rating";

export const getStaticPaths = async () => {
  // fallBack value is set to true
  const getData = await fetch("https://fakestoreapi.com/products");

  const json = await getData.json();

  const idValue = json.map((item) => {
    return {
      params: {
        productId: item.id.toString(), // --> its also same as like toString() - `${item.id}`
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
        params: { productId: "1" },
      },
      {
        params: { productId: "2" },
      },
      {
        params: { productId: "3" },
      },
      {
        params: { productId: "4" },
      },
      {
        params: { productId: "5" },
      }
    ],
    fallback: false,
  }; */
};

// --> getStaticProps
export const getStaticProps = async (context) => {
  const id = context.params.productId;

  const getData = await fetch("https://fakestoreapi.com/products/" + id);

  const json = await getData.json();

  return {
    props: {
      product: json,
    },
  };
};

const Photo = (props) => {
  const { product } = props;

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
      <Card
        sx={{ maxWidth: 340, marginTop: 5, minHeight: 400 }}
        key={product.id}
      >
        <CardMedia
          sx={{ height: 300, width: "100%", objectFit: "cover" }}
          image={`${product.image}`}
          title="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {product.id}) {product.title}
          </Typography>
          <Typography component="legend">
            ratings: {product.rating.rate}
          </Typography>
          <Rating
            name="customized-10"
            defaultValue={product.rating.rate}
            max={5}
          />{" "}
          <br />
          <Typography variant="body2" color="text.secondary">
            {product.description}
          </Typography>
          <Typography variant="h5" color="text.secondary">
            ${product.price}
          </Typography>
        </CardContent>
        <CardActions>
          <Link href={`/eproduct`} passHref>
            <Button variant="contained">Go back</Button>
          </Link>
        </CardActions>
      </Card>
    </>
  );
};

export default Photo;
