import React, { useRef } from "react";
import { useScroll, motion } from "framer-motion";
import Lilcon from "./Lilcon";
const Details = ({ type, time, place, info }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]"
    >
      <Lilcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">
          {type}
        </h3>
        <span className="capitalize font-medium xs:text-sm text-dark/75 ">
          {time} | {place}
        </span>
        <p className="font-medium w-full md:text-sm">{info}</p>
      </motion.div>
    </li>
  );
};

function Education() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">
        Education
      </h2>
      <div className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">
        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
          <motion.div
            style={{ scaleY: scrollYProgress }}
            ref={ref}
            className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top md:w-[2px] md:left-[30px] xs:left-[20px]"
          />
          <Details
            type={"Information Technology"}
            time={"2019 - 2023"}
            place={"Serang Raya University"}
            info={
              "Bachelor of Informatics Engineering | GPA: 3.94 | Research: Tours Recommendation System Using Apriori Haversine  "
            }
          />

          <Details
            type={"FGA - Quality Assurance"}
            time={"March 2023 - April 2023"}
            place={"Binar Academy"}
            info={
              "Learn QA Fundamental| Testing principle, Bug Reporting, Agile & Deployment | Grade: 95.6"
            }
          />
        </ul>
      </div>
    </div>
  );
}

export default Education;
