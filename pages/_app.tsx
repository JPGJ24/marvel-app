import "@/styles/globals.css";
import { ThemeProvider } from "@material-tailwind/react";
import type { AppProps } from "next/app";
import RootLayout from "@/layouts/layout";
import BackgroundMarvelApp from "@/components/ui/Background-marvelApp";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider>
        <BackgroundMarvelApp>
          <RootLayout />
          <Component {...pageProps} />
        </BackgroundMarvelApp>
      </ThemeProvider>
    </>
  );
}
