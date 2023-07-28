/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */

import React from "react";

export default function SkillsIcons() {
  return (
    <>
      <img
        className="sqD bottom-[-80px] left-[-50px] lg:bottom-[-50px] lg:left-[-35px] z-[-10]"
        src="/static/doodles/skills/laptop.svg"
      />
      <img
        className="sqD hidden md:block top-[140px] right-0 lg:top-[105px]"
        src="/static/doodles/skills/coding.svg"
      />
      <img
        className="sqD hidden md:block top-[200px] right-[50px] lg:top-[170px] lg:right-[50px]"
        src="/static/doodles/skills/youtube.svg"
      />
      <img
        className="sqD top-[-15px] right-[-15px]"
        src="/static/doodles/skills/fillStar.svg"
      />
    </>
  );
}
