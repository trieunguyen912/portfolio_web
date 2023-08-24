"use client";
import { Sora } from "next/font/google";
import "./globals.css";
import Loading from "../components/loading-page";
const sora = Sora({ subsets: ["latin"] });

export default function MyApp({ Component, pageProps }) {
  return (
    <main className={sora.className}>
      <Loading>
        {" "}
        <Component {...pageProps} />
      </Loading>
    </main>
  );
}
