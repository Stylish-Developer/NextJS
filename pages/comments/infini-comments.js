import { useState } from "react";
import Image from "next/image";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import RefreshIcon from "@mui/icons-material/Refresh";
import Avatar from "@mui/material/Avatar";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { TextField } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';

import InfinijithImg from "../../assets/infinijith-img.png";

import toast, { Toaster } from "react-hot-toast";

const notify1 = () => toast.error("The field is required  must not be empty!");
const notify2 = () => toast.success("comment added successfully!");

const InfinijithYoutubeChannelComments = () => {

  const [isLoading, setIsLoading] = useState(false);
  const [comments, setComments] = useState([]);
  const [addComment, setAddComment] = useState("");

  // --> here fetch all the data to render
  const handleFetchCommentData = async () => {
    setIsLoading(true);
    const response = await fetch("/api/comments");
    const json = await response.json();
    setComments(json.reverse());
    setIsLoading(false);
  };

  const handleChange = (e) => {
    setAddComment(e.target.value);
  };

  // --> add a new comment into a db file.

  const handleSubmit = async () => {
    if (!addComment) {
      notify1();
    } else {
      const postData = await fetch("/api/comments", {
        method: "POST",
        body: JSON.stringify({ comment: addComment }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      notify2();
      setTimeout(() => {
        handleFetchCommentData();
      }, 3000);

      
      const data = await postData.json();

      // console.log(data);
    }
  };

  // --> delete a comment
  const handleDelete = async (id) => {
    const res = await fetch(`/api/comments/${id}`,{
      method: 'DELETE',
    });

    handleFetchCommentData();
  }
  
  if (isLoading) {
    return (
      <>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
            width: "100%",
          }}
        >
          <CircularProgress color="secondary" />
        </Box>
      </>
    );
  }
  return (
    <>
      <Grid Container sx={{ marginTop: 5, marginBottom: 5 }}>
        <Grid>
          <IconButton aria-label="add to shopping cart">
            <YouTubeIcon sx={{ color: "red", width: "50px", height: "50px" }} />
          </IconButton>
        </Grid>
        <Grid item sx={{ height: "auto", width: "100%" }}>
          <Image
            src={InfinijithImg}
            alt="Img content is missing"
            style={{ objectFit: "cover", height: "80%", width: "100%" }}
          />
        </Grid>
        <Grid
          item
          sx={{
            margin: 3,
            justifyContent: "space-around",
            alignItems: "baseline",
            display: "flex",
          }}
        >
          <TextField
            id="standard-basic"
            label="Add your comment here..."
            variant="standard"
            sx={{ width: "80%" }}
            value={addComment}
            onChange={handleChange}
            required
          />
          <Button variant="contained" type="submit" onClick={handleSubmit}>
            submit
          </Button>
        </Grid>
        <Grid
          item
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginX: 5,
          }}
        >
          <Button
            variant="contained"
            color="success"
            onClick={handleFetchCommentData}
          >
            Click to see comments
          </Button>
          <IconButton
            color="primary"
            aria-label="add to shopping cart"
            onClick={() => setComments([])}
          >
            <RefreshIcon />
          </IconButton>
        </Grid>
        <Grid item>
          {comments.map((data) => {
            return (
              <div
                key={data.id}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  margin: 10,
                }}
              >
                <Avatar sx={{ marginRight: 2, backgroundColor: "#6226A0" }}>
                  {data.text.slice(0, 1)}
                </Avatar>
                <Typography sx={{ textDecoration: "underline", width: "100%" }}>
                  {data.text}
                </Typography>
                <IconButton
            sx={{ color:'red' }}
            aria-label="add to shopping cart"
            onClick={() => handleDelete(data.id)}
          >
            <DeleteIcon />
          </IconButton>
              </div>
            );
          })}
        </Grid>
      </Grid>
      <Toaster position="top-center" reverseOrder={false} />
    </>
  );
};

export default InfinijithYoutubeChannelComments;
