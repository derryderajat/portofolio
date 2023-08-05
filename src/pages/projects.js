import AnimatedText from "@/components/AnimatedText";
import { GithubIcon } from "@/components/Icons";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import img_project1 from "../../public/images/projects/tour_app.png";
import img_project2 from "../../public/images/projects/cimporong.png";
import img_project3 from "../../public/images/projects/pendekin.png";
import { motion } from "framer-motion";
import TransitionEffect from "@/components/TransitionEffect";

const FramerImage = motion(Image);
const FeaturedProject = ({ type, title, summary, img, link, github }) => {
  return (
    <article
      className="w-full relative flex items-center justify-between rounded-3xl border border-solid border-dark bg-light 
    dark:border-light dark:bg-dark
    shadow-2xl p-12 rounded-br-2xl lg:flex-col lg:-p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4"
    >
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark dark:bg-light rounded-br-3xl xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]" />
      <Link
        href={link}
        rel="noopener noreferrer"
        target="_blank"
        className="w-1/2  cursor-pointer overflow-hidden rounded-lg lg:w-full"
      >
        <FramerImage
          priority
          sizes="(max-width: 768px) 100vw,
          (max-width: 1200px) 50vw,
          33vw"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          src={img}
          alt={title}
          className="w-full max-h-[500px] h-auto object-contain"
        />
      </Link>
      <div className="w-1/2  flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6">
        <span className="text-primary dark:text-dark font-medium text-xl xs:text-base">
          {type}
        </span>
        <Link
          href={link}
          rel="noopener noreferrer"
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold sm:text-sm">
            {title}
          </h2>
        </Link>
        <p className="my-2 font-medium text-dark dark:text-light sm:text-sm">
          {summary}
        </p>
        <div className="mt-2 flex items-center">
          <Link
            href={github}
            rel="noopener noreferrer"
            target="_blank"
            className="w-10"
          >
            <GithubIcon />
          </Link>
          <Link
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-4 rounded-lg bg-dark text-light dark:bg-light dark:text-dark p-2 px-6 text-lg font-semibold sm:px-4 sm:text-base"
          >
            Visit Project
          </Link>
        </div>
      </div>
    </article>
  );
};
const Project = ({ type, title, img, link, github }) => {
  return (
    <article className="w-full flex flex-col items-center justify-center rounded-2xl border boreder-solid border-dark bg-light dark:border-light dark:bg-dark p-6 relative max-h-[400px] xs:p-4">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark dark:bg-light rounded-br-3xl md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]" />
      <Link
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="w-full  cursor-pointer overflow-hidden rounded-lg"
      >
        <FramerImage
          priority
          sizes="(max-width: 768px) 100vw,
          (max-width: 1200px) 50vw,
          33vw"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          src={img}
          alt={title}
          className="w-full h-auto object-fill"
        />
      </Link>
      <div className="w-full  flex flex-col items-start justify-between mt-4 ">
        <span className="text-primary dark:text-primaryDark font-medium text-xl lg:text-lg md:text-base">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-3xl font-bold lg:text-2xl">
            {title}
          </h2>
        </Link>

        <div className="w-full mt-2 flex items-center justify-between">
          <Link
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg font-semibold underline md:text-base"
          >
            Visit
          </Link>
          <Link
            href={github}
            rel="noopener noreferrer"
            target="_blank"
            className="w-8 md:w-6"
          >
            <GithubIcon />
          </Link>
        </div>
      </div>
    </article>
  );
};
function projects() {
  return (
    <>
      <Head>
        <title>Derry Derajat | Portfolio Projects</title>

        <meta
          name="description"
          content="Explore Derry Derajat's portfolio projects, including a mobile app, web applications, and more. Get insights into the development and implementation of these featured projects."
        />

        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
      </Head>
      <TransitionEffect />
      <main className="w-full mb-16 flex flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16">
          <AnimatedText
            text="Imagination Trumps Knowledge!"
            className="mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
          />

          <div className="grid grid-cols-12 gap-24  xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
            <div className="col-span-12">
              <FeaturedProject
                title={"Tour App (mobile)"}
                img={img_project1}
                summary={
                  "An mobile app that provides information about tours and implements recommendation method for giving recommendation for user based on their preferences and location"
                }
                link={"https://lebak-tour-service.vercel.app/"}
                github={"https://github.com/derryderajat/lebak_tour"}
                type={"Featured Project"}
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title={"Cimporong PLN Project (Web)"}
                img={img_project2}
                link={"https://cimporong.vercel.app"}
                github={"https://github.com/derryderajat/etransmission"}
                type={"Featured Project"}
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              {" "}
              <Project
                title={"Pen-dekin: Shortener URL (Web)"}
                img={img_project3}
                link={"https://pen-dekin.vercel.app/"}
                github={"https://github.com/derryderajat/pen-dekin"}
                type={"Featured Project"}
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
}

export default projects;
