import React from "react";
import { motion } from "framer-motion";
const Skill = ({ name, x, y }) => {
  return (
    <motion.div
      className="flex items-center justify-center rounded-full font-semibold bg-dark text-light py-3 px-6 shadow-dark cursor-pointer absolute dark:bg-light dark:text-dark dark:shadow-light"
      whileHover={{ scale: 1.05 }}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x: x, y: y, transition: { duration: 1.5 } }}
      viewport={{ once: true }}
    >
      {name}
    </motion.div>
  );
};
function Skills() {
  return (
    <>
      <h2 className="font-bold text-8xl mt-64 w-full text-center ">Skills</h2>
      <div className="w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight dark:bg-circularDark">
        <div
          className="flex items-center justify-center rounded-full font-semibold bg-dark text-light p-8 shadow-dark cursor-pointer absolute
        dark:bg-light dark:text-dark dark:shadow-light
        "
        >
          WEB
        </div>
        <Skill name={"HTML"} x="10vw" y="2vw" />
        <Skill name={"CSS"} x="-5vw" y="-2vw" />
        <Skill name={"Javascript"} x="-15vw" y="0vw" />
        <Skill name={"NextJS"} x="0vw" y="12vw" />
        <Skill name={"GIT"} x="0vw" y="-15vw" />
        <Skill name={"Python"} x="30vw" y="-5vw" />
        <Skill name={"Figma"} x="-15vw" y="-12vw" />
        <Skill name={"Flutter"} x="18vw" y="18vw" />
        <Skill name={"Cypress"} x="-25vw" y="18vw" />
      </div>
    </>
  );
}

export default Skills;
