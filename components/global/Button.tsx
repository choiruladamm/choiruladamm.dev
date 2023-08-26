"use client"

import React from "react";
import { twMerge } from "tailwind-merge";

type buttonProps = {
  children: string;
  className?: string;
};

export function Button({ children, className }: buttonProps) {
  return (
    <div
      className={twMerge(
        "px-8 py-3 mt-6 font-bold text-white transition-colors border-2 border-white rounded-full cursor-pointer whitespace-nowrap bg-bg hover:bg-fun-pink hover:border-fun-pink mx-auto text-center",
        className
      )}
    >
      {children}
    </div>
  );
}
