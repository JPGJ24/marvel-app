import "@/styles/globals.css";
import { ThemeProvider } from "@material-tailwind/react";
import type { AppProps } from "next/app";
import RootLayout from "@/layouts/layout";
import BackgroundLayout from "@/layouts/BackgroundLayout";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider>
        <BackgroundLayout>
          <RootLayout />
          <Component {...pageProps} />
        </BackgroundLayout>
      </ThemeProvider>
    </>
  );
}
