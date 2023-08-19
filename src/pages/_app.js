"use client";
import { Sora } from "next/font/google";
import "./globals.css";
const sora = Sora({ subsets: ["latin"] });
export default function MyApp({ Component, pageProps }) {
  return (
    <main className={sora.className}>
      <Component {...pageProps} />
    </main>
  );
}
