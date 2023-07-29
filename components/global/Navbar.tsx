/* eslint-disable @next/next/no-img-element */

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { routes } from "@/data/global";

export function Navbar({ currentPage }) {
  return (
    <nav className="flex items-center justify-between mt-2">
      <li className="text-lg font-bold list-none cursor-pointer">
        <Link href="/">
          <span className="flex items-center text-xl font-black">
            {/* <Image
              alt="logos"
              height={60}
              width={60}
              src="/vercel.svg"
              className="mr-2 transition-transform duration-500 transform bg-white hover:rotate-360 hover:scale-75"
            /> */}
            {"Choirul Adam".split("").map((letter, index) => {
              return (
                <span
                  key={index}
                  className="transition-all duration-500 hover:text-fun-pink hover:-mt-2 hover:duration-100 click:goodbyeLetterAnim"
                >
                  {letter}
                </span>
              );
            })}
          </span>
        </Link>
      </li>
      <ul className="flex items-center space-x-8">
        {routes.map((route, index) => {
          return (
            <li
              key={index}
              className={`
              list-none text-white ${
                currentPage === route.title
                  ? "opacity-100"
                  : "opacity-40 hover:opacity-100 transition-opacity"
              }
            `}
            >
              <Link href={route.path}>{route.title}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
