import React, { useState } from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import moment from "moment";
import CardContent from '@mui/material/CardContent';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

// ------------------------------------------------------------

export const getServerSideProps = async () => {
  const response = await fetch(
    "https://newsapi.org/v2/everything?q=apple&from=2023-02-15&to=2023-02-15&sortBy=popularity&apiKey=45e764ae9a474a948881cd48b473cc16"
  );
  const json = await response.json();

  return {
    props: {
      news: json.articles,
    },
  };
};

const NewsArticles = (props) => {
  let { news } = props;

  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Box sx={{ width: "100%" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab label="Apple News" {...a11yProps(0)} />
            <Tab label="Tesla News" {...a11yProps(1)} />
            <Tab label="US business headlines News" {...a11yProps(2)} />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          {news.map((x) => {
            return (
              <>
                <div key={x.id}>
                  <Card sx={{ maxWidth: "100%" }}>
                    <CardMedia
                      sx={{ height: 140 }}
                      image={x.urlToImage}
                      title="Apple News"
                      style={{ objectFit: "fill" }}
                    />
                    <CardContent>
                      <h3>Title: {x.title}</h3>
                      <h4>Description: {x.description}</h4>
                      <h5>Content: {x.content}</h5>

                      <p>
                        PublishedAt:{" "}
                        {moment(`${x.publishedAt}`, "YYYYMMDD").fromNow()}
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </>
            );
          })}
        </TabPanel>
        <TabPanel value={value} index={1}>
          Item Two
        </TabPanel>
        <TabPanel value={value} index={2}>
          Item Three
        </TabPanel>
      </Box>
    </>
  );
};

export default NewsArticles;
