// server side authentication using nextAuth.js
import { getSession } from "next-auth/react";
import { Typography } from "@mui/material";

export const getServerSideProps = async (context) => {
  const session = await getSession(context);

  console.log(session);
  // secure the page from serverSide
  if (!session) {
    return {
      redirect: {
        destination: "/api/auth/signin?callbackUrl=http://localhost:3000/post",
        permanent: false,
      },
    };
  }

  return {
    props: {
      data: session
        ? "List of 100 personalized posts"
        : "List of 10 free posts ",
    },
  };
};

const Post = ({ data }) => {
  return (
    <>
      <Typography variant="h3" sx={{ textAlign: "center" }}>
        POST PAGE
      </Typography>
      <Typography variant="body1" sx={{ textAlign: "left", marginLeft: 50 }}>
        {data}
      </Typography>
    </>
  );
};

export default Post;
