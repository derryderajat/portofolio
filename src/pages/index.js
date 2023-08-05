import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import AnimatedText from "@/components/AnimatedText";
import Link from "next/link";
import { LinkArrow } from "@/components/Icons";
import HireMe from "@/components/HireMe";
import profilePic from "../../public/images/profile/developer-pic-1.png";
import lightBulb from "../../public/images/svgs/miscellaneous_icons_1.svg";
import TransitionEffect from "@/components/TransitionEffect";
export default function Home() {
  return (
    <>
      <Head>
        <title>Derry | Fullstack Developer and Software QA</title>
        <meta name="author" content="Derry Derajat" />
        <meta
          name="description"
          content="Welcome to Derry Portofolio WeB. I am fullstack developer and Software QA"
        />
        <meta
          name="keywords"
          content="Derry, Portfolio, Web, Fullstack Developer, Software QA"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
      </Head>
      <TransitionEffect />
      <main className="flex items-center text-dark min-h-screen dark:text-light">
        <Layout className="pt-0 md:p-16 sm:pt-8">
          <div className="flex items-center justify-betweem w-full lg:flex-col lg:text-center">
            <div className="w-1/2 md:w-full">
              <Image
                src={profilePic}
                alt="Derry"
                className="w-full h-auto rounded-md lg:hidden md:inline-block md:w-full"
              />
            </div>
            <div className="w-1/2 flex flex-col items-center self-center lg:w-full">
              <AnimatedText
                text={"Uniting Quality Assurance and Fullstack Prowess!"}
                className="!text-6xl !text-left xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl"
              />

              <p className="my-4 text-base font-medium md:text-sm sm:text-xs">
                As a full stack developer and SQA, I am dedicated to turning
                ideas into innovative web applications and making sure they meet
                the highest quality standards.Explore my latest projects and
                articles
              </p>
              <div
                className="flex items-center self-start mt-2 lg:self-center"
                itemScope
                itemType="http://schema.org/Person"
              >
                <Link
                  href={"Resume-Derry.pdf"}
                  rel="noopener noreferrer"
                  target="_blank"
                  className="flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:text-dark hover:bg-light border-2 border-solid border-transparent hover:border-dark
                  dark:bg-light
                  dark:text-dark
                  hover:dark:text-light
                  hover:dark:bg-dark
                  hover:dark:border-light
                  md:p-2 md:px-4 md:text-base

                  
                  "
                  download={true}
                >
                  Resume
                  <LinkArrow className={"w-6 ml-1"} />
                </Link>
                <Link
                  itemProp="email"
                  href={"mailto:derryd.derajat@gmail.com"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-4 text-lg font-medium capitalize text-dark underline dark:text-light md:text-base"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </Layout>
        <HireMe />
        <div className="absolute right-8 bottom-8 inline-block w-24 md:hidden">
          <Image
            priority
            sizes="(max-width: 768px) 100vw,
          (max-width: 1200px) 50vw,
          33vw"
            src={lightBulb}
            alt="Derry Derajat"
            className="w-full h-auto"
          />
        </div>
      </main>
    </>
  );
}
