import { routes } from "@/data/global";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import useDelayedRender from "use-delayed-render";

export function MobileNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { mounted: isMenuMounted, rendered: isMenuRendered } = useDelayedRender(
    isMenuOpen,
    {
      enterDelay: 20,
      exitDelay: 300,
    }
  );

  function toggleMenu() {
    if (isMenuOpen) {
      setIsMenuOpen(false);
      document.body.style.overflow = "";
    } else {
      setIsMenuOpen(true);
      document.body.style.overflow = "hidden";
    }
  }

  useEffect(() => {
    return function cleanup() {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <nav>
      <div
        className={`w-full justify-between flex items-center ${
          isMenuRendered && "bg-bg"
        } p-5`}
        style={{ zIndex: 101 }}
      >
        <li className="text-lg font-bold list-none">
          <Link href="/">
            {/* <Image
              alt="logos"
              height={60}
              width={60}
              src="/vercel.svg"
              className="mr-2 transition-transform duration-500 transform bg-white hover:rotate-360 hover:scale-75"
            /> */}
            <span>
              AdamCH
            </span>
          </Link>
        </li>
        <button
          className="visible burger md:hidden"
          aria-label="Toggle menu"
          type="button"
          onClick={toggleMenu}
        >
          <MenuIcon data-hide={isMenuOpen} />
          <CrossIcon data-hide={!isMenuOpen} />
        </button>
      </div>
      {isMenuMounted && (
        <ul
          className={`menu flex flex-col absolute bg-bg
            ${isMenuRendered && "menuRendered"}`}
        >
          {routes.map((item, index) => {
            return (
              <li
                key={index}
                className="text-sm font-semibold text-gray-100 border-b border-gray-900"
                style={{ transitionDelay: `${150 + index * 25}ms` }}
              >
                <Link href={item.path}>
                  <span className="flex w-auto pb-4">{item.title}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </nav>
  );
}

function MenuIcon(props) {
  return (
    <svg
      className="absolute w-5 h-5 text-gray-100"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      {...props}
    >
      <path
        d="M2.5 7.5H17.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2.5 12.5H17.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CrossIcon(props) {
  return (
    <svg
      className="absolute w-5 h-5 text-gray-100"
      viewBox="0 0 24 24"
      width="24"
      height="24"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
      shapeRendering="geometricPrecision"
      {...props}
    >
      <path d="M18 6L6 18" />
      <path d="M6 6l12 12" />
    </svg>
  );
}
