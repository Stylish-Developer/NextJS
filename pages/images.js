import { Typography } from "@mui/material";
import { URL_ENDPOINT } from "../utils/UnsplashApi";
import { ACCESS_KEY } from "../utils/UnsplashApi";
import { useState,useEffect } from "react";
import moment from "moment/moment";
import Image from "next/image";

const ImgComponent = () => {
  const [img, setImg] = useState([]);

  const getData = async () => {
    const response = await fetch(
      `${URL_ENDPOINT}/photos/?client_id=${ACCESS_KEY}`
    );
    const json = await response.json();
    console.log(json);
    setImg(json);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Typography variant="h4" sx={{ textAlign: "center", margin: 5 }}>
        IMAGES PAGE
      </Typography>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
          flexWrap: "wrap",
          width: "100%",
        }}
      >
        {img.map((item) => {
          return (
            <div
              key={item.id}
              style={{ marginLeft: 20, marginRight: 18, marginBottom: 10 }}
            >
              <Image
               placeholder="blurDataURL blur"
               
                src={item.urls.regular}
                alt="images from unsplash"
                width={250}
                height={380}
                style={{ objectFit: "fill", marginBottom: 2 }}
              />
              <Typography variant="h5">Total Likes: {item.likes}</Typography>
              <Typography variant="body1">
                Updated_at: {moment(`${item.updated_at}`, "YYYYMMDD").fromNow()}
              </Typography>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ImgComponent;
