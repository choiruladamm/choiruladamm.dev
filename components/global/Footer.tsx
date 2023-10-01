/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";
import { footer } from "@/data/global";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="flex flex-col w-screen px-5 py-10 border-t border-fun-pink-darker z-5 bg-bg">
      <div className="grid items-start justify-between w-full max-w-4xl grid-cols-2 m-auto sm:grid-cols-3">
        {footer.columns.map((item, index) => {
          return (
            <div key={index} className="mb-5 text-left sm:mb-0">
              <h4 className="text-sm font-bold uppercase text-fun-gray">
                {item.title}
              </h4>
              <div>
                {item.links.map((item, index) => {
                  return (
                    <div key={index} className="my-4">
                      {item.leavesWebsite ? (
                        <a
                          href={item.link}
                          target="_blank"
                          className="flex items-center"
                        >
                          {item.icon && (
                            <span className="pr-2 -mb-1">
                              <Image
                                src={item.icon}
                                width={20}
                                height={20}
                                alt=""
                              />
                            </span>
                          )}
                          {item.name}
                        </a>
                      ) : (
                        <Link href={item.link}>{item.name}</Link>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
        <div className="col-span-2 pt-8 text-center border-t sm:col-auto sm:text-left sm:mt-0 sm:pt-0 text-fun-gray border-fun-pink-dark sm:border-0">
          <h4 className="text-sm font-bold uppercase text-fun-gray">
            Support My Work
          </h4>
          <div className="flex flex-col items-center w-full mt-4 space-y-2 sm:items-start">
            {footer.support.buymeacoffee !== "" && (
              <div>
                <a
                  href={`https://buymeacoffee.com/${footer.support.buymeacoffee}`}
                  target="_blank"
                >
                  <img
                    src="/static/buy-me-a-coffee.svg"
                    className="h-12 mr-2 transition-opacity opacity-100 hover:opacity-80"
                  />
                </a>
              </div>
            )}
            <p className="pt-1 text-xs text-fun-gray">
              {footer.support.message}
            </p>
          </div>
        </div>
      </div>
      <div className="w-full max-w-4xl pt-8 m-auto mt-8 text-center border-t sm:mt-4 sm:pt-4 text-fun-gray border-fun-pink-dark">
        <div className="flex flex-col items-center justify-center ">
          <div className="text-xs md:text-sm">
            Made using{" "}
            <Link
              href="https://nextjs.org/"
              className="text-fun-pink hover:underline"
            >
              NextJS
            </Link>
            {` & `}
            <Link
              href="https://tailwindcss.com/"
              className=" text-fun-pink hover:underline"
            >
              TailwindCSS.
            </Link>
            {` Hosted on  `}
            <Link
              href="https://vercel.com/dashboard"
              className="hover:underline text-fun-pink"
            >
              Vercel.
            </Link>
          </div>
          <div className="mt-1 text-xs md:text-sm">© Choirul Adam. 2023</div>
        </div>
      </div>
    </footer>
  );
}
