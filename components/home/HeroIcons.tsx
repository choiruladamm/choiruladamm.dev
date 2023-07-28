/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from "react";

export default function HeroIcons() {
  return (
    <>
      <img
        className="sqD squiggle-hero-html w-16 top-[-90px] right-[5%] sm:top-[-90px] sm:right-[170px]"
        style={{ animationDelay: "0.1s" }}
        src="/static/doodles/hero/html.svg"
      />
      <img
        className="sqD squiggle-hero-nextjs hidden top-[75px] right-0 w-11"
        style={{ animationDelay: "0.2s" }}
        src="/static/doodles/hero/nextjs.svg"
      />
      {/* <img
        className="sqD hidden sm:block bottom-[-340px] left-[-180px]"
        style={{ animationDelay: "0.4s" }}
        src="/static/doodles/hero/coder.svg"
      /> */}
      <img
        className="sqD hidden sm:block left-[100px] lg:left-[160px] bottom-[-150px]"
        style={{ animationDelay: "0.5s" }}
        src="/static/doodles/hero/js.svg"
      />
      <img
        className="sqD bottom-[-320px] sm:bottom-[-320px] right-[65%] sm:right-[35%]"
        style={{ animationDelay: "0.6s" }}
        src="/static/doodles/hero/dino.svg"
      />
      <img
        className="sqD right-[-60px] sm:right-0 bottom-[-180px] lg:[5%]"
        style={{ animationDelay: "0.7s" }}
        src="/static/doodles/hero/paintbrush.svg"
      />
      <img
        className="sqD squiggle-hero-pop1 hidden sm:block sm:top-[-130px] sm:left-[15%] lg:top-[-130px] lg:left-[120px]"
        src="/static/doodles/hero/pop1.svg"
      />
      <img
        className="sqD left-[-35px] bottom-[-85px] sm:bottom-[-100px] sm:left-5 opacity-40"
        style={{ animationDelay: "0.9s" }}
        src="/static/doodles/hero/code.svg"
      />
    </>
  );
}
