import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React, { useRef } from "react";

import { motion, useMotionValue } from "framer-motion";

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
        className="w-96 h-auto hidden absolute rounded-lg z-10"
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
       bg-light text-dark first:mt-0 border border-solid border-dark border-r-4 bordder-b-4 dark:bg-dark dark:text-light dark:border-light"
    >
      <MovingImg img={img} title={title} link={link} />
      <span className="text-primary font-semibold pl-4">{date}</span>
    </motion.li>
  );
};
const FeaturedArticle = ({ img, title, time, summary, link }) => {
  return (
    <li className="col-span-1 w-full p-4 bg-light border border-solid border-dark rounded-2xl relative dark:border-light dark:bg-dark">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl dark:bg-light" />
      <Link
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
      <Link href={link} target="_blank">
        <h2 className="capitalize text-2xl font-bold my-2 hover:underline">
          {title}
        </h2>
        <p className="text-sm mb-2">{summary}</p>
        <span className="text-primary font-semibold dark:text-primaryDark">
          {time}
        </span>
      </Link>
    </li>
  );
};

function articles() {
  return (
    <>
      <Head>
        <title>Derry Derajat | Articles Page</title>
        <meta name="description" content="any description" />
      </Head>

      <main className="w-full mb-16 flex flex-col items-start justify-center overflow-hidden dark:text-light">
        <Layout className="pt-16">
          <AnimatedText
            text={"Words Can Change The World!"}
            className="mb-16"
          />

          <ul className="grid grid-cols-2 gap-16">
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
          <h2 className="font-bold text-4xl w-full text-center my-16 mt-32">
            All Articles
          </h2>
          <ul>
            <Articles
              title={
                "Alhamdulillaah, terimakasih atas diberikannya kesempatan untuk mengikuti dan menyelesaikan pelatihan Quality Assurance yang diadakan oleh Digital Talent Scholarship dan Binar Academy"
              }
              date={"3 mo"}
              link={
                "https://www.linkedin.com/posts/derryderajat_completion-training-fga-binar-academy-activity-7061941886915133440-ivAN?utm_source=share&utm_medium=member_desktop"
              }
              img={
                "https://media.licdn.com/dms/image/D561FAQH0F489gm1xvg/feedshare-document-images_480/1/1683697931979?e=1692230400&v=beta&t=I_mNr_-JDCxRUft--PK33vLbY38Iw-S-nYJ-Gh5sNgo"
              }
            />
            <Articles
              title={
                "I’m happy to share that I’ve obtained a new certification: Data Science Nexus – DSBIZ Certification CertNexus from"
              }
              date={"11 mo"}
              link={
                "https://www.linkedin.com/posts/derryderajat_dsbiz-certificate-activity-6981440489749192704--FJD?utm_source=share&utm_medium=member_desktop"
              }
              img={
                "https://media.licdn.com/dms/image/D561FAQEIjyyWfJyrfA/feedshare-document-images_480/1/1664505071221?e=1692230400&v=beta&t=P6OPQlbcCikFNfi47ZiMz1lLJhXfNCU6tsQa7dIILI8"
              }
            />
            <Articles
              title={"Frontend Website for providing latest data of covid-19"}
              date={"1 yr"}
              link={
                "https://www.linkedin.com/posts/derryderajat_react-kampusmerdeka-msib-activity-6920215921282211840-LIxI?utm_source=share&utm_medium=member_desktop"
              }
              img={
                "https://media.licdn.com/dms/image/C5622AQHKGwinrikXkg/feedshare-shrink_800/0/1649908046200?e=1694044800&v=beta&t=9xZ7ZDt0atVP4-ZkwEQDhOv3-RLrcJUX3aPFiKuSs1g"
              }
            />
            <Articles
              title={
                "Thanks to BISA AI Academy (PT BISA ARTIFISIAL INDONESIA), suatu kehormatan bisa mengisi di salah satu webinar menggunakan platform tampil.id"
              }
              date={"2 yr"}
              link={
                "https://www.linkedin.com/posts/derryderajat_machinelearning-bisaai-webinar-activity-6787969728238411776-piMJ?utm_source=share&utm_medium=member_desktop"
              }
              img={
                "https://media.licdn.com/dms/image/C4E22AQHE1YLItOWQKw/feedshare-shrink_800/0/1618378081234?e=1694044800&v=beta&t=_iTmK9rFL3M-EGSYiDp652sp-2F0TxBGYL8oVIRHoa4"
              }
            />
            <Articles
              title={
                "Tetap semangat tuk terus menimba ilmu. The journey has begun."
              }
              date={"2 yr"}
              link={
                "https://www.linkedin.com/posts/derryderajat_brihacakton-dataanalytics-machinelearning-activity-6842973403100577792-QKK6?utm_source=share&utm_medium=member_desktop"
              }
              img={
                "https://media.licdn.com/dms/image/C4E22AQH1Fn4Mu8CPDw/feedshare-shrink_2048_1536/0/1631491994909?e=1694044800&v=beta&t=wvAmvPI63-Ui_GXU8uLI-_h88j9pzXnuof4DDo_pLKo"
              }
            />
          </ul>
        </Layout>
      </main>
    </>
  );
}

export default articles;
