import React from "react";
import Layout from "./Layout";
import Link from "next/link";

function Footer() {
  return (
    <footer className="w-full border-t-2 border-solid border-dark text-lg dark:text-light dark:border-light sm:text-base">
      <Layout className="py-8 flex items-center justify-between lg:flex-col lg:py-6">
        <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
        <div className="flex items-center lg:py-2">
          Build with{" "}
          <span className="text-primary text-2xl px-1 dark:text-primaryDark">
            &#9825;
          </span>{" "}
          by &nbsp;
          <Link
            rel="noopener noreferrer"
            href={"https://derry.in"}
            className="underline underline-offset-2"
            target="_blank"
          >
            Derry Derajat
          </Link>
        </div>
        <Link
          rel="noopener noreferrer"
          href={"https://wa.me/6289677816465"}
          className="underline underline-offset-2"
          target="_blank"
        >
          Say Hello
        </Link>
      </Layout>
    </footer>
  );
}

export default Footer;
