import { Typography, Grid } from "@mui/material";

// --> getStaticProps for fetching the data at build time
export const getStaticProps = (context) => {
  console.log("context", context);
  return {
    props: {
      data: context.preview
        ? { message: "Preview mode view" }
        : {
            title: "PREVIEW MODE CONCEPT IN NEXT JS",
            description1:
              "Only when preview mode is enabled get static props will run on every request even after the application has been built and deployed",
            description2:
              "This preview mode feature is really important feature when you have a cms as part of your application",
            description3:
              "this allows is for you to constantly make updates in your cms and  immediately see those changes in the browser as you do not have to rebuild the entire application ",
          },
    },
  };
};
// --> component
const PreviewComponent = (props) => {
  const { title, description1, description2, description3, message } =
    props.data;

  if (message) {
    return <Typography variant="h5" my={5} sx={{ textAlign: "center" }}>{message}</Typography>;
  }

  return (
    <>
      <Grid container my={5}>
        <Grid item>
          <Typography variant="h5">
            {title}
          </Typography>
          <ul>
            <li>
              <Typography variant="body1">{description1}</Typography>
            </li>
            <li>
              <Typography variant="body1">{description2}</Typography>
            </li>
            <li>
              <Typography variant="body1">{description3}</Typography>
            </li>
          </ul>
        </Grid>
      </Grid>
    </>
  );
};

export default PreviewComponent;
