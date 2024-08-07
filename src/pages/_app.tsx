import type { AppProps } from "next/app";
import Header from "@/components/Header";
import { PageProvider } from "@/components/PageProvider";

import "@/styles/globals.css";
import "@mantine/core/styles.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <PageProvider>
        <Header />
        <Component {...pageProps} />
      </PageProvider>
    </>
  );
}
