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
const FeaturedProject = ({ type, title, summary, img, link, github }) => {
  return (
    <article className="w-full relative flex items-center justify-between rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12 rounded-br-2xl">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl" />
      <Link
        href={link}
        target="_blank"
        className="w-1/2  cursor-pointer overflow-hidden rounded-lg"
      >
        <Image
          src={img}
          alt={title}
          className="w-full max-h-[500px] h-auto object-contain"
        />
      </Link>
      <div className="w-1/2  flex flex-col items-start justify-between pl-6">
        <span className="text-primary font-medium text-xl">{type}</span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold">{title}</h2>
        </Link>
        <p className="my-2 font-medium text-dark">{summary}</p>
        <div className="mt-2 flex items-center">
          <Link href={github} target="_blank" className="w-10">
            <GithubIcon />
          </Link>
          <Link
            href={link}
            target="_blank"
            className="ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold"
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
    <article className="w-full flex flex-col items-center justify-center rounded-2xl border boreder-solid border-dark bg-light p-6 relative max-h-[400px]">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl" />
      <Link
        href={link}
        target="_blank"
        className="w-full  cursor-pointer overflow-hidden rounded-lg"
      >
        <Image src={img} alt={title} className="w-full h-auto object-fill" />
      </Link>
      <div className="w-full  flex flex-col items-start justify-between mt-4 ">
        <span className="text-primary font-medium text-xl">{type}</span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-3xl font-bold">{title}</h2>
        </Link>

        <div className="w-full mt-2 flex items-center justify-between">
          <Link
            href={link}
            target="_blank"
            className="text-lg font-semibold underline"
          >
            Visit
          </Link>
          <Link href={github} target="_blank" className="w-8">
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
        <title>Derry Derajat | Projects Page</title>
        <meta name="description" content="any description" />
      </Head>

      <main className="w-full mb-16 flex flex-col items-center justify-center">
        <Layout className="pt-16">
          <AnimatedText text="Imagination Trumps Knowledge" className="mb-16" />

          <div className="grid grid-cols-12 gap-24 gap-y-32">
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
            <div className="col-span-6">
              <Project
                title={"Cimporong PLN Project (Web)"}
                img={img_project2}
                link={"https://cimporong.vercel.app"}
                github={"https://github.com/derryderajat/etransmission"}
                type={"Featured Project"}
              />
            </div>
            <div className="col-span-6">
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
