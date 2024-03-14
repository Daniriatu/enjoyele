import "@/styles/globals.css";
import Head from "next/head";
import React, { useEffect, useState } from "react";
import { Layout } from "../components";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>EnjoyELE</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
