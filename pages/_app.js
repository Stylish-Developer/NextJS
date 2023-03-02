// import Layout from "../components/Layout"; // before jsconfig.js file
import Layout from "components/Layout"; // after jsconfig.js file   --> both are works fine.
import "../styles/globals.css";

// 1 apart from writing own styles you might also come across a need to import
//  a stylesheet from another library
//2 rule remains the same

import "bootstrap/dist/css/bootstrap.min.css";

// css in js
import { ThemeProvider } from "styled-components";

import { SessionProvider } from "next-auth/react";

const theme = {
  color: {
    primary: "orange",
  },
};

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  if (Component.getLayout) {
    return Component.getLayout(
      <SessionProvider session={session}>
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </SessionProvider>
    );
  }

  return (
    <SessionProvider session={session}>
      <Layout>
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </Layout>
    </SessionProvider>
  );
}

export default MyApp;
