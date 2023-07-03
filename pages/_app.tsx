import "tailwindcss/tailwind.css";
// eslint-disable-next-line import/no-unresolved
import "@/app/globals.css";
import { AppInitialProps } from "next/app";
import React from "react";

function MyApp({
  Component,
  pageProps,
}: {
  Component: any;
  pageProps: AppInitialProps;
}) {
  return <Component {...pageProps} />;
}

export default MyApp;
