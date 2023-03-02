import Typography from "@mui/material/Typography";

// --> getServerSideProps for fetching the data
export const getServerSideProps = async (context) => {
  const category = context.params.category;

  const {req,res,query} = context;
  console.log(req.headers.cookie);
  // console.log(query);
  res.setHeader('Set-Cookie',["name=gautham"]);

  const response = await fetch(
    `http://localhost:4000/news?category=${category}`
  );
  
  const json = await response.json();

  return {
    props: {
      news: json,
      category,
    },
  };
};

const NewsPage = (props) => {
  let { news, category } = props;
  return (
    <>
      <Typography variant="h2">NEWS</Typography>
      {news.map((x) => {
        return (
          <>
            <div
              key={x.id}
              style={{ marginTop: 5, marginBottom: 10, width: "100%" }}
            >
              <Typography variant="h6">CATEGORY: {category}</Typography>
              <Typography variant="subTitle2">TITLE: {x.title} </Typography>
              <br />
              <Typography variant="p">DESCRIPTION: {x.description}</Typography>
            </div>
            <br />
          </>
        );
      })}
    </>
  );
};

export default NewsPage;
