/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */

export function Heading({ tag }: { tag?: string }) {
  return (
    <div
      className={`${
        tag ? "pt-10 pb-4 sm:pt-24 sm:pb-20" : "py-12 sm:py-20"
      } w-full text-center relative`}
    >
      {tag ? (
        <>
          <h1 className="relative inline-block w-auto mx-auto mb-8 text-3xl sm:text-4xl">
            Projects built with <b>{tag}</b>
            <img
              className="absolute w-8 sqD sm:w-10 -top-6 -right-2 sm:-right-8 sm:-top-8"
              src="/static/doodles/hero/code.svg"
            />
          </h1>
        </>
      ) : (
        <h1 className="relative inline-block w-auto mx-auto mb-8 text-4xl sm:text-6xl">
          Projects
          <img
            className="absolute w-10 sqD -top-8 -right-8"
            src="/static/doodles/hero/code.svg"
          />
        </h1>
      )}
      {!tag && (
        <p className="max-w-3xl m-auto text-xl text-fun-gray sm:text-2xl">
          I've built cool apps and websites using anything from HTML to React .
          Here are some of my favorite projects over the course of my journey.
        </p>
      )}
    </div>
  );
}
