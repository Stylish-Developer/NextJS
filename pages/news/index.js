// --> use getServerSideProps to fetch the data
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

export const getServerSideProps = async () => {
  const response = await fetch("http://localhost:4000/news");
  const json = await response.json();

  return {
    props: {
      article: json,
    },
  };
};

const NewsPage = (props) => {
  const { article } = props;

  return (
    <>
      <Grid container maxLength="lg">
        <Grid item mt={2} mb={2}>
          {article.map((x) => {
            return (
              <div key={x.id}>
                <Typography variant="h5">{x.title}</Typography>
                <Typography variant="h6">{x.category}</Typography>
                <Typography variant="p">{x.description}</Typography>
                <br />
              </div>
            );
          })}
        </Grid>
      </Grid>
    </>
  );
};

export default NewsPage;
