import "@/styles/globals.css";
import { ThemeProvider } from "@material-tailwind/react";

import type { AppProps } from "next/app";
import RootLayout from "@/layouts/layout";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider>
        <RootLayout />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
