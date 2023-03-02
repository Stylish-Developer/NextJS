import { Container } from "@mui/material";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <Container maxWidth="lg">{children}</Container>
      <Footer />
    </>
  );
};

export default Layout;
