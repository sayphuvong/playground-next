import Head from "next/head";
import { Inter } from "next/font/google";
import rootStyles from "@/styles/root.module.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export async function getStaticProps() {
  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      data: {},
    },
  };
}

export default function Home() {
  return (
    <>
      <Head>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={rootStyles.main}>
        <h1 className="mb-[60px] text-5xl font-medium">Welcome Safuru.top</h1>
      </main>
    </>
  );
}
