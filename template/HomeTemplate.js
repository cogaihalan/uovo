import React, { Fragment } from "react";
import Head from "next/head";
import Header from "../layout/Header/Header";
import Footer from "../layout/Footer/Footer";
export default function HomeTemplate({ themeClasses, children }) {
  return (
    <Fragment>
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" type="image/x-icon" href="/assets/favicon.png" />
        <title>UOVO</title>
      </Head>
      
      <div className={themeClasses}>
        <Header></Header>
        <main>{children}</main>
        <Footer></Footer>
      </div>
    </Fragment>
  );
}
