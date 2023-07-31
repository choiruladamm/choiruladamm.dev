import Link from "next/link";
import { randomNumberText } from "@/utils/utils";
import { useEffect, useState } from "react";

function Page404() {
  const [error, setError] = useState("0000");

  useEffect(() => {
    randomNumberText("404", setError);
  }, []);

  return (
    <>
      {error !== "0000" && (
        <div className="min-h-screen w-full flex items-center justify-center flex-col animate-fadeIn">
          <h1 className="text-7xl text-white font-monospace font-bold opacity-100">{`{ error: ${error} }`}</h1>
          <p className="text-fun-gray text-xl mt-8 flex items-center">
            Page not found!&nbsp;&nbsp;
            <Link href="/">
              <span className="w-full sm:w-auto flex-shrink border border-fun-pink-light text-base px-4 py-1 rounded-xl text-fun-pink-light bg-fun-pink-darkerer hover:bg-fun-pink hover:text-white transition-colors cursor-pointer">
                Return Home
              </span>
            </Link>
          </p>
        </div>
      )}
    </>
  );
}

export default Page404;
