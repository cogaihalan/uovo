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
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/fontawesome.min.css"
          integrity="sha512-RvQxwf+3zJuNwl4e0sZjQeX7kUa3o82bDETpgVCH2RiwYSZVDdFJ7N/woNigN/ldyOOoKw8584jM4plQdt8bhA=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
        <title>UOVO</title>
      </Head>
      <div className={themeClasses}>
        <Header theme={themeClasses}></Header>
        <main>{children}</main>
        <Footer></Footer>
      </div>
    </Fragment>
  );
}
