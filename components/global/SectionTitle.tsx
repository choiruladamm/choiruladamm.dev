import React from "react";

export function SectionTitle({ title }: { title: string }) {
  return (
    <div className="w-full pt-5 overflow-x-hidden">
      <h2 className="relative max-w-sm pt-4 mx-auto mb-10 text-3xl font-bold text-center landingSectionTitle md:max-w-max md:mx-0 md:text-left md:pt-0 md:w-max">
        {title}
      </h2>
    </div>
  );
}
