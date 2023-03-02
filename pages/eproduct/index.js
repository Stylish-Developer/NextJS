import React from "react";
import Link from "next/link";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Rating from "@mui/material/Rating";

// this index.js file is used for learn about how to update data in static page after we built the application => use of incremental static regeneration

// --> getStaticProps for list out the photos
export const getStaticProps = async () => {
  const getData = await fetch("https://fakestoreapi.com/products");
  const json = await getData.json();

  //fallback is set to true
  return {
    props: {
      product: json,
    },
  };

  //fallback is set to false
  /*   return {
    props: {
      product: json.slice(0, 5),
    },
  }; */
};

const EProductList = (props) => {
  let { product } = props;
  return (
    <>
      <Typography variant="h4">product:</Typography>
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
          {product.map((item) => {
            return (
              <>
                <Card
                  sx={{ maxWidth: 340, marginTop: 5, minHeight: 400 }}
                  key={item.id}
                >
                  <CardMedia
                    sx={{ height: 300, width: "100%", objectFit: "cover" }}
                    image={`${item.image}`}
                    title="green iguana"
                  />
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h6"
                      component="div"
                      sx={{ overflow: "auto" }}
                    >
                      {item.id} {item.title}
                    </Typography>
                    <Typography component="legend">
                      ratings: {item.rating.rate}
                    </Typography>
                    <Rating
                      name="customized-10"
                      defaultValue={item.rating.rate}
                      max={5}
                    />
                    <br />
                    <Typography
                      variant="subTitle1"
                      color="text.secondary"
                      sx={{ overflow: "auto" }}
                    >
                      {item.description}
                    </Typography>
                    <Typography variant="h5" color="text.secondary">
                      ${item.price}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Link href={`eproduct/${item.id}`} passHref>
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

export default EProductList;
