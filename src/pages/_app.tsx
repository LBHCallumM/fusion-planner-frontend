import "@/styles/globals.css";
import type { AppProps } from "next/app";

import Header from "@/layout/header/Header";
import ModalProvider from "@/features/modals/ModalProvider";



export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <ModalProvider />
    </>
  );
}
