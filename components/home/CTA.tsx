/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */

export function CTA() {
  return (
    <div className="relative w-full mt-36">
      <img
        src="/static/doodles/lineBreak.svg"
        alt="doodles"
        className="m-auto mb-2 w-30"
      />
      <div className="pb-40 mt-16">
        <h2 className="mb-10 text-4xl font-bold md:text-5xl">
          Interested in Working Together?
        </h2>
        <a
          href="mailto:choiruladamm@gmail.com"
          className="px-8 py-3 mt-6 font-bold text-white transition-colors border-2 border-white rounded-full cursor-pointer whitespace-nowrap bg-bg hover:bg-fun-pink hover:border-fun-pink"
        >
          Get in Touch
        </a>
      </div>
      <img
        className="sqD min-w-[800px] bottom-[-100px] left-1/2 sm:bottom-[-150px] -translate-x-1/2 object-cover sm:min-w-[1100px]"
        style={{ zIndex: "-10" }}
        src="/static/doodles/hero/fancyLines.svg"
      />
    </div>
  );
}
