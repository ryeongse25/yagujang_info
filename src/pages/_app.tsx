import type { AppProps } from "next/app";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import "@/styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
