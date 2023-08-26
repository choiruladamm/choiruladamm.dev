/* eslint-disable react/no-unescaped-entities */

import { Button } from '../global';
import HeroIcons from './HeroIcons';
import { Link as ScrollLink } from "react-scroll";

export function Hero() {
  return (
    <>
      <div
        className="relative flex flex-col items-center justify-center w-full pt-20 pb-40 m-auto text-center heroElem z-1"
        style={{ maxWidth: "1200px" }}
      >
        <p className="mb-5 text-xl">Hey, I'm Adamm.</p>
        <h1 className="relative inline-block w-auto max-w-2xl mb-10 text-5xl font-bold tracking-tighter heroTitle lg:max-w-4xl md:text-6xl lg:text-7xl heroShinyBg">
          I enjoy <span className="text-fun-pink heroShiny1">building</span> and{" "}
          <span className="text-fun-pink heroShiny2">designing</span> for the
          web.
          <HeroIcons />
        </h1>
        <ScrollLink
          activeClass="active"
          to="learnmore"
          spy={true}
          offset={-30}
          smooth={true}
          duration={500}
        > 
          <Button className='px-10 py-4 text-xl'>
            Tell me more
          </Button>
        </ScrollLink>
      </div>
    </>
  );
}
