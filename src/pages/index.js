import Layout from "@/components/Layout";
import Head from "next/head";
import profilePic from "../../public/images/profile/developer-pic-1.png";
import Image from "next/image";
import AnimatedText from "@/components/AnimatedText";
import Link from "next/link";
import { LinkArrow } from "@/components/Icons";
export default function Home() {
  return (
    <>
      <Head>
        <title>Derry</title>
        <meta name="description" content="Derry's web portofolio" />
      </Head>
      <main className="flex items-center text-dark min-h-screen">
        <Layout className="pt-0">
          <div className="flex items-center justify-betweem w-full">
            <div className="w-1/2">
              <Image
                src={profilePic}
                alt="Derry"
                className="w-full h-auto rounded-md"
              />
            </div>
            <div className="w-1/2 flex flex-col items-center self-center">
              <AnimatedText
                text={"Uniting Quality Assurance and Fullstack Prowess!"}
                className="!text-6xl !text-left"
              />

              <p className="my-4 text-base font-medium">
                As a full stack developer and SQA, I am dedicated to turning
                ideas into innovative web applications and making sure they meet
                the highest quality standards.Explore my latest projects and
                articles
              </p>
              <div className="flex items-center self-start mt-2">
                <Link
                  href={"/Resume-Derry.pdf"}
                  target="_blank"
                  className="flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:text-dark hover:bg-light border-2 border-solid border-transparent hover:border-dark"
                  download={true}
                >
                  Resume
                  <LinkArrow className={"w-6 ml-1"} />
                </Link>
                <Link
                  href={"mailto:derryd.derajat@gmail.com"}
                  target="_blank"
                  className="ml-4 text-lg font-medium capitalize text-dark underline"
                >
                  Contact{" "}
                </Link>
              </div>
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
}
