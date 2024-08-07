import Link from "next/link";
import React, { useState, useEffect } from "react";
import Logo from "./Logo";
import { useRouter } from "next/router";
import {
  GithubIcon,
  InstagramIcon,
  LinkedInIcon,
  MoonIcon,
  SunIcon,
} from "./Icons";
import { motion } from "framer-motion";
import useThemeSwitcher from "./hooks/useThemeSwitcher";
const CustomLink = ({ href, title, className = "" }) => {
  const router = useRouter();

  return (
    <Link href={href} className={`${className} relative group`}>
      {title}
      <span
        className={`h-[1px] inline-block  bg-dark absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 dark:bg-light ${
          router.asPath === href ? "w-full" : "w-0"
        }`}
      >
        &nbsp;
      </span>
    </Link>
  );
};

const CustomMobileLink = ({ href, title, className = "", toggle }) => {
  const router = useRouter();
  const handleClick = () => {
    toggle();
    router.push(href);
  };
  return (
    <button
      href={href}
      className={`${className} relative group text-light dark:text-dark my-2`}
      onClick={handleClick}
    >
      {title}
      <span
        className={`h-[1px] inline-block  bg-light absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 dark:bg-dark ${
          router.asPath === href ? "w-full" : "w-0"
        }`}
      >
        &nbsp;
      </span>
    </button>
  );
};

function NavBar() {
  const [mode, setMode] = useThemeSwitcher();
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  const handleDocumentClick = (event) => {
    // Dapatkan elemen navbar
    const navbar = document.querySelector(".navbar");

    // Periksa apakah elemen yang diklik bukanlah bagian dari navbar
    if (navbar && !navbar.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    // Tambahkan event listener ke elemen document saat komponen dimount
    document.addEventListener("click", handleDocumentClick);

    // Bersihkan event listener saat komponen di-unmount
    return () => {
      document.removeEventListener("click", handleDocumentClick);
    };
  }, [isOpen]);
  return (
    <header
      className={`${
        isOpen ? "cursor-pointer" : "cursor-default"
      } navbar w-full px-32 py-8 font-medium flex items-center justify-between bg-light dark:bg-dark dark:text-light relative md:px-12`}
    >
      {/* Hamburger */}

      <button
        className=" flex-col justify-center items-center hidden lg:flex"
        onClick={handleClick}
      >
        <span
          className={`bg-dark dark:bg-light transition-all duration-300 ease-out block h-0.5 w-6 rounded-sm -translate-y-0.5  ${
            isOpen ? "rotate-45 translate-y-1 -my-1" : "-translate-y-0.5"
          }`}
        ></span>
        <span
          className={`bg-dark dark:bg-light transition-all duration-300 ease-out block h-0.5 w-6 rounded-sm  my-0.5 ${
            isOpen ? "opacity-0" : "opacity-100"
          }
        `}
        ></span>
        <span
          className={`bg-dark dark:bg-light transition-all duration-300 ease-out block h-0.5 w-6 rounded-sm translate-y-0.5 ${
            isOpen ? "-rotate-45  -translate-y-1 -my-0.5" : "translate-y-0.5"
          }`}
        ></span>
      </button>
      {/* Mobile */}
      {isOpen ? (
        <motion.div
          initial={{ scale: 0, opacity: 0, x: "-50%", y: "-50%" }}
          animate={{ scale: 1, opacity: 1 }}
          className="min-w-[70vw] z-30 flex flex-col justify-between items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
    bg-dark/90 dark:bg-light/75 rounded-lg backdrop-blur-md py-32"
        >
          <nav className="flex items-center flex-col justify-between">
            <CustomMobileLink toggle={handleClick} href="/" title={"Home"} />
            <CustomMobileLink
              toggle={handleClick}
              href="/about"
              title={"About"}
            />
            {/* <CustomMobileLink
              toggle={handleClick}
              href="/projects"
              title={"Projects"}
            /> */}
            <CustomMobileLink
              toggle={handleClick}
              href="/articles"
              title={"Articles"}
            />
          </nav>

          <nav className="flex items-center justify-center flex-wrap mt-2">
            <button
              onClick={() => setMode(mode === "light" ? "dark" : "light")}
              className={`mr-3 flex items-center justify-center rounded-full p-1
      ${mode === "light" ? "bg-dark text-light" : "bg-light text-dark"}
      
      `}
            >
              {mode === "dark" ? (
                <SunIcon className={"fill-dark"} />
              ) : (
                <MoonIcon className={"fill-dark"} />
              )}
            </button>
            <motion.a
              href={"https://github.com/derryderajat"}
              target="_blank"
              className="w-6 mr-3 rounded-full bg-light dark:bg-dark sm:mx-1"
              whileHover={{ y: -2 }}
              rel="noopener noreferrer"
              whileTap={{ scale: 0.9 }}
            >
              <GithubIcon />
            </motion.a>
            <motion.a
              href={"https://www.linkedin.com/in/derryderajat/"}
              target="_blank"
              rel="noopener noreferrer"
              className="w-6 mx-3 sm:mx-1 rounded-full"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
            >
              <LinkedInIcon />
            </motion.a>

            {/* <motion.a
              href={"https://www.instagram.com/fl1pder/"}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="w-2 ml-3 sm:mx-1"
            >
              <InstagramIcon className="rounded-full" />
            </motion.a> */}
          </nav>
        </motion.div>
      ) : null}
      {/* Desktop */}
      <div className="w-full flex justify-between items-center lg:hidden ">
        <nav>
          <CustomLink
            href="/"
            title={"Home"}
            className="mr-4 text-dark dark:text-light"
          />
          <CustomLink
            href="/about"
            title={"About"}
            className="mx-4 text-dark dark:text-light"
          />
          {/* <CustomLink
            href="/projects"
            title={"Projects"}
            className="mx-4 text-dark dark:text-light"
          /> */}
          <CustomLink
            href="/articles"
            title={"Articles"}
            className="ml-4 text-dark dark:text-light"
          />
        </nav>

        <nav className="flex items-center justify-center flex-wrap">
          <motion.a
            href={"/"}
            target="_blank"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-2 mr-10"
          >
            {/* <InstagramIcon /> */}
          </motion.a>
          <motion.a
            href={"https://github.com/derryderajat"}
            target="_blank"
            className="w-6 mx-3 text-dark dark:text-light"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
          >
            <GithubIcon />
          </motion.a>
          <motion.a
            href={"https://www.linkedin.com/in/derryderajat/"}
            target="_blank"
            className="w-6 ml-3"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
          >
            <LinkedInIcon />
          </motion.a>
          <button
            onClick={() => setMode(mode === "light" ? "dark" : "light")}
            className={`ml-3 flex items-center justify-center rounded-full p-1
        ${mode === "light" ? "bg-dark text-light" : "bg-light text-dark"}
        
        `}
          >
            {mode === "dark" ? (
              <SunIcon className={"fill-dark"} />
            ) : (
              <MoonIcon className={"fill-dark"} />
            )}
          </button>
        </nav>
      </div>
      <div className="absolute left-[50%] top-2 translate-x-[-50%]">
        <Logo />
      </div>
    </header>
  );
}

export default NavBar;
