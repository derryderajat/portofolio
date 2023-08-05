import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import React, { useEffect, useRef } from "react";
import profilePic from "../../public/images/profile/developer-pic-2.webp";
import Image from "next/image";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import TransitionEffect from "@/components/TransitionEffect";

const AnimatedNumbers = ({ value }) => {
  const ref = useRef(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 });
  const isInView = useInView(ref, { once: true });
  useEffect(() => {
    // first
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current && latest.toFixed(0) <= value) {
        ref.current.textContent = latest.toFixed(0);
      }
    });
  }, [springValue, value]);

  return <span ref={ref}></span>;
};
function about() {
  return (
    <>
      <Head>
        <title>Derry Derajat | Fullstack Developer | Software QA</title>
        <meta name="author" content="Derry Derajat" />
        <meta
          name="description"
          content="I am Derry Derajat, a Fullstack Developer and Software QA  with 2 years of experience in web and Android app development."
        />
        <meta
          name="keywords"
          content="Derry Derajat, Fullstack Developer, Software QA, Web Development, Android App Development, Digital Solutions, User-Centered Design, Software Quality Assurance, Thorough Testing, Problem Solving, Professionalism"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
      </Head>
      <TransitionEffect />
      <main className="flex w-full flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16">
          <AnimatedText
            text={"Passion Fuels Purpose!"}
            className="mb-16 lg:!text-7xl sm:text-!6xl xs:!text-4xl sm:mb-6"
          />
          <div
            className="grid w-full grid-cols-8 gap-16 sm:gap-8"
            itemScope
            itemType="http://schema.org/Person"
          >
            <div className="col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8">
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light">
                Biography
              </h2>
              <p className="font-medium" itemProp="description">
                Hi there, I&apos;m <span itemProp="name">Derry Derajat</span>, a
                seasoned Fullstack Developer and Software QA with a passion for
                creating exceptional digital solutions that combine both
                functionality and quality. With 2 years of experience in the
                industry, I have honed my skills in web development, Android app
                development, and comprehensive testing practices.
              </p>
              <p className="my-4 font-medium">
                As a Fullstack Developer, I love tackling challenges and finding
                innovative ways to bring my clients&apos; visions to life. I
                firmly believe that design and functionality go hand in hand,
                and I strive to create user-centered digital experiences that
                are not only visually appealing but also intuitive and enjoyable
                to use.
              </p>
              <p className="font-medium">
                When it comes to Software Quality Assurance, my dedication to
                detail and thoroughness sets me apart. I understand the
                importance of delivering a flawless product, and I am committed
                to ensuring that every aspect of the software is rigorously
                tested and meets the highest standards of excellence.
              </p>
              <p className="my-4 font-medium">
                Whether I&apos;m coding a website, crafting an Android app, or
                conducting comprehensive testing, my primary focus is on solving
                problems and exceeding expectations. I approach every project
                with a commitment to excellence, professionalism, and a
                user-centered mindset.
              </p>
              <p className="font-medium">
                I&apos;m excited about the opportunity to contribute my skills
                and passion to your next project. Let&apos;s collaborate and
                create outstanding digital experiences together!
              </p>
            </div>
            <div className="col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light dark:bg-dark dark:border-light p-8 xl:col-span-4 md:order-1 md:col-span-8">
              <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2.5rem] bg-dark dark:bg-light " />
              <Image
                priority
                sizes="(max-width: 768px) 100vw,
          (max-width: 1200px) 50vw,
          33vw"
                src={profilePic}
                alt="Derry Derajat"
                className="w-full h-auto rounded-2xl"
              />
            </div>
            <div className="col-span-2 flex flex-col items-end justify-evenly xl:col-span-8 xl:flex-row xl:items-center md:order-3 ">
              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumbers value={10} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light xl:text-center md:text-lg sm:text-base xs:text-sm">
                  Projects
                </h2>
              </div>
              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4x">
                  <AnimatedNumbers value={2} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light xl:text-center md:text-lg sm:text-base xs:text-sm">
                  Years of Experence
                </h2>
              </div>
            </div>
          </div>
          <Skills />
          <Experience />
          <Education />
        </Layout>
      </main>
    </>
  );
}

export default about;
