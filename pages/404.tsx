import Link from "next/link";
import { randomNumberText } from "@/utils/utils";
import { useEffect, useState } from "react";
import { Button } from "@/components/global";

function Page404() {
  const [error, setError] = useState("0000");

  useEffect(() => {
    randomNumberText("404", setError);
  }, []);

  return (
    <>
      {error !== "0000" && (
        <div className="flex flex-col items-center justify-center w-full min-h-screen animate-fadeIn">
          <h1 className="text-3xl text-white opacity-100 font- bold md:text-7xl font-monospace">{`{ error: ${error} }`}</h1>
          <div className="flex items-center justify-center mt-5">
            <p className="text-xl just text-fun-gray">
              Page not found!&nbsp;&nbsp;
            </p>
            <Link href="/">
              <Button className="px-4 py-1 mt-0 text-base border">
                Return Home
              </Button>
            </Link>
          </div>
        </div>
      )}
    </>
  );
}

export default Page404;
