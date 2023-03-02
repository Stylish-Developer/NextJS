import { Typography } from "@mui/material";
import { DATA } from "../../data/CommentsData";

export const getStaticPaths = async () => {
  return {
    paths: [
      { params: { id: "1" } },
      { params: { id: "2" } },
      { params: { id: "3" } },
      { params: { id: "4" } },
      { params: { id: "5" } },
    ],
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  /** Don't do this 
  const response = await fetch(`http:localhost:3000/api/comments/${commentId}`)
  const data = await response.json()
  */

  const id = context.params.id;
  const comment = DATA.find((item) => item.id === parseInt(id));
  console.log('comment',comment);
  return {
    props: {
      comment, // comment: comment means we can use comment
    },
  };
};

const ChannelComment = (props) => {
  const { comment } = props;
  return (
    <>
      <Typography variant="h3" sx={{ textAlign: "center" }}>
        {comment.id}
      </Typography>
      <Typography variant="h5" sx={{ textAlign: "center" }}>
        {comment.text}
      </Typography>
    </>
  );
};

export default ChannelComment;
