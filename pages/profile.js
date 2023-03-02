import { Typography } from "@mui/material";
import Head from "next/head";
import Footer from "./../components/Footer";
import Navbar from "../components/Navbar";

// if you wish you use headTag with dynamic  SEO information
const ProfilePage = () => {
  return (
    <>
      <Head>
        <title>My Profile</title>
        <meta name="description" content="This is a profile page" />
      </Head>
      <Typography variant="h5" sx={{ textAlign: "center", paddingY: 20 }}>
        PROFILE PAGE
      </Typography>
    </>
  );
};

export default ProfilePage;

ProfilePage.getLayout = function PageLayout(page) {
  return (
    <>
      <Navbar />
      {page}
      <Footer />
    </>
  );
};
