import React from "react";
import Head from "next/head";
import { Footer, MobileNavbar, Navbar } from "../global";

type PageProps = {
  currentPage: string;
  meta: {
    title?: string;
    desc: string;
  };
  children?: JSX.Element | JSX.Element[];
};

function Page({ currentPage, meta: { title, desc }, children }: PageProps) {
  const pageTitle = `${
    currentPage === "Home"
      ? "Choirul Adam - Front End Developer"
      : `${currentPage} - Choirul Adam`
  }`;

  return (
    <div
      className="flex flex-col items-center justify-center w-full min-h-screen m-auto overflow-hidden text-white opening-box-animate-paddin md:overflow-visible"
      style={{
        maxWidth: "1200px",
      }}
    >
      <Head>
        <title>{pageTitle}</title>
        <link
          rel="icon"
          type="image/jpg"
          sizes="32x32"
          href="/static/logo-square-rounded.svg"
        />

        <meta name="title" content={pageTitle} />
        <meta name="description" content={desc} />
      </Head>
      <main className="flex-1 w-full p-5 text-center">
        <div className="hidden sm:block z-100">
          <Navbar currentPage={currentPage} />
        </div>
        <div className="block -m-5 sm:hidden z-100">
          <MobileNavbar />
        </div>
        {children}
      </main>
      <Footer />
    </div>
  );
}

export default Page;
