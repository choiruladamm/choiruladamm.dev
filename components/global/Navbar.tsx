/* eslint-disable @next/next/no-img-element */

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { routes } from "@/data/global";

export function Navbar({ currentPage }) {
  return (
    <nav className="flex items-center justify-between">
      <li className="text-lg font-bold list-none cursor-pointer">
        <Link href="/">
          <span className="flex items-center text-xl font-black">
            <Image
              alt="logos"
              height={40}
              width={40}
              src="/static/logo-rounded.svg"
              className="mr-2"
            />
            chrl.dam
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
