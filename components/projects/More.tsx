import Link from "next/link";

export function More() {
  return (
    <p className="py-16 text-sm text-fun-gray">
      Chek my{" "}
      <Link
        href="https://github.com/choiruladamm"
        target="_blank"
        className="italic underline text-fun-pink"
      >
        Github
      </Link>{" "}
      for more project!😁
    </p>
  );
}
