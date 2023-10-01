import "tailwindcss/tailwind.css";
import '@/styles/main.css'
import NextTopLoader from "nextjs-toploader";

import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <NextTopLoader color="#00c7ff" showSpinner={false} />
      <Component {...pageProps} />
    </>
  );
}
