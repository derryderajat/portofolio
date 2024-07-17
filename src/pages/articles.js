import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React, { useRef } from "react";
import articlesData from "../../public/articles/articles.json"
import { useState, useEffect } from "react";
import { motion, useMotionValue } from "framer-motion";
import TransitionEffect from "@/components/TransitionEffect";

const FramerImage = motion(Image);

const MovingImg = ({ title, img, link }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const imgRef = useRef(null);
  function handleMouse(event) {
    imgRef.current.style.display = "inline-block";
    x.set(event.pageX);
    y.set(-10);
  }
  function handleMouseLeave(event) {
    imgRef.current.style.display = "none";
    x.set(0);
    y.set(0);
  }
  return (
    <Link
      href={link}
      rel="noopener noreferrer"
      target="_blank"
      onMouseMove={handleMouse}
      onMouseLeave={handleMouseLeave}
    >
      <h2 className="capitalize text-xl font-semibold hover:underline">
        {title}
      </h2>
      <FramerImage
        priority
        sizes="(max-width: 768px) 100vw,
          (max-width: 1200px) 50vw,
          33vw"
        style={{
          x: x,
          y: y,
        }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, transition: { duration: 0.2 } }}
        ref={imgRef}
        src={img}
        alt={title}
        height={600}
        width={600}
        className="w-96 h-auto hidden absolute rounded-lg z-10 md:!hidden"
      />
    </Link>
  );
};

const Articles = ({ img, title, date, link }) => {
  return (
    <motion.li
      initial={{ y: 200 }}
      whileInView={{ y: 0, transition: { duration: 0.5, ease: "easeInOut" } }}
      viewport={{ once: true }}
      className="relative w-full p-4 py-6 my-4 rounded-xl flex items-center justify-between
       bg-light text-dark first:mt-0 border border-solid border-dark border-r-4 bordder-b-4 dark:bg-dark dark:text-light dark:border-light sm:flex-col"
    >
      <MovingImg img={img} title={title} link={link} />
      <span className="text-primary font-semibold pl-4 sm:self-start sm:pl-0 xs:text-sm">
        {date}
      </span>
    </motion.li>
  );
};
const FeaturedArticle = ({ img, title, time, summary, link }) => {
  return (
    <li className="col-span-1 w-full p-4 bg-light border border-solid border-dark rounded-2xl relative dark:border-light dark:bg-dark">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl dark:bg-light" />
      <Link
        rel="noopener noreferrer"
        href={link}
        target="_blank"
        className="w-full inline-block cursor-pointer overflow-hidden rounded-lg"
      >
        <FramerImage
          priority
          sizes="(max-width: 768px) 100vw,
          (max-width: 1200px) 50vw,
          33vw"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          width={600}
          height={600}
          src={img}
          alt={title}
          className="w-full h-auto object-fill"
        />
      </Link>
      <Link rel="noopener noreferrer" href={link} target="_blank">
        <h2 className="capitalize text-2xl font-bold my-2 hover:underline xs:text-lg text-dark dark:text-light">
          {title}
        </h2>
        <p className="text-sm mb-2 text-dark dark:text-light">{summary}</p>
        <span className="text-primary font-semibold dark:text-primaryDark">
          {time}
        </span>
      </Link>
    </li>
  );
};


function articles() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    // Fetch data (if needed), or simply set it from imported JSON
    setArticles(articlesData);
  }, []);
  return (
    <>
      <Head>
        <title>Derry Derajat | Articles Page</title>
        <meta
          name="description"
          content="Explore Derry Derajat's articles on data science, machine learning, web development, and more. Stay informed and gain insights from these informative reads."
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
        <meta
          name="keywords"
          content="Derry Derajat, Articles, Data Science, Machine Learning, Web Development, Informative Reads, Pendahuluan Machine Learning, Kaggle Course, Eksplorasi Data, Supervised Machine Learning"
        />
        <meta name="author" content="Derry Derajat" />
      </Head>
      <TransitionEffect />
      <main className="w-full mb-16 flex flex-col items-start justify-center overflow-hidden text-dark dark:text-light">
        <Layout className="pt-16">
          <AnimatedText
            text={"Words Can Change The World!"}
            className="mb-16  lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
          />

          <ul className="grid grid-cols-2 gap-16 md:grid-cols-1 lg:gap-8 md:gap-y-16">
            <FeaturedArticle
              title={
                "Pendahuluan Machine Learning: part-1 (Bagaimana Sebuah Model Bekerja) | by Kaggle Course"
              }
              summary={
                "hal yang kita dapat bahwa penemuan sebuah pola pada set data bisa menjadikannya sebuah model yang dapat memprediksi suatu nilai tertentu."
              }
              time={"2 min read"}
              link={
                "https://medium.com/@derryderajat/pendahuluan-machine-learning-part-1-bagaimana-sebuah-model-bekerja-by-kaggle-course-af0e425433c4"
              }
              img={
                "https://miro.medium.com/v2/resize:fit:640/format:webp/1*O6gane-qXQknVTmINQbddQ.png"
              }
            />
            <FeaturedArticle
              title={"Pendahuluan Machine Learning: part-2 (Eksplorasi Data)"}
              summary={
                "Langkah awal di tiap projek ML adalah membiasakan diri dengan data. Kita dapat menggunakan Panda library untuk hal ini"
              }
              time={"2 min read"}
              link={
                "https://derryderajat.medium.com/pendahuluan-machine-learning-part-2-eksplorasi-data-85a821e448fc"
              }
              img={
                "https://miro.medium.com/v2/resize:fit:588/format:webp/1*miizA6ni98fCLvWUuTEdZg.png"
              }
            />
            <FeaturedArticle
              title={"Machine Learning dan Supervised Machine Learning"}
              summary={
                "ketika variabel predict y merupakan bilangan kontinu. Sebaliknya apabila nilai dari variabel predict y berupa bilangan diskrit maka kasus tersebut adalah klasifikasi."
              }
              time={"2 min read"}
              link={
                "https://derryderajat.medium.com/machine-learning-dan-supervised-machine-learning-b55bad1e8bc4"
              }
              img={
                "https://miro.medium.com/v2/resize:fit:1100/0*6vvmb1pw77a3R3mS"
              }
            />
          </ul>
          <h2 className="font-bold text-4xl w-full text-center my-16 mt-32 text-dark dark:text-light">
            All Articles
          </h2>
          <ul>
        {articles.map((article, index) => (
          <Articles
            key={index} // Assuming index is unique, otherwise use a unique ID
            title={article.title}
            date={article.date}
            link={article.link}
            img={article.img}
          />
        ))}
      </ul>

        </Layout>
      </main>
    </>
  );
}

export default articles;
