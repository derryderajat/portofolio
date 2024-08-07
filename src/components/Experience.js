import React, { useRef } from "react";
import { useScroll, motion } from "framer-motion";
import Lilcon from "./Lilcon";
const Details = ({ position, company, companyLink, time, address, work }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%] "
    >
      <Lilcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">
          {position} &nbsp;
          <a
            target="_blank"
            href={companyLink}
            className="text-primary capitalize dark:text-primaryDark"
          >
            @{company}
          </a>
        </h3>
        <span className="capitalize font-medium text-dark/75  xs:text-sm">
          {time} | {address}
        </span>
        <p className="font-medium w-full xs:text-sm">{work}</p>
      </motion.div>
    </li>
  );
};

function Experience() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">
        Experience
      </h2>
      <div className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">
        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
          <motion.div
            style={{ scaleY: scrollYProgress }}
            ref={ref}
            className="absolute left-9 top-0 w-[4px] h-full bg-dark dark:bg-light origin-top
            md:w-[2px] md:left-[30px] xs:left-[20px]"
          />
            <Details
            position={"Software QA"}
            company={"PT. Krakatau Information Technology"}
            companyLink={"https://krakatau-it.co.id/"}
            time={"December 2023 - July 2024"}
            address={"Cilegon, Banten"}
            work={
              "Experienced in crafting test plans, test cases, and detailed bug reports for thorough QA. Proficient with Jira, Trello, and Confluence for seamless project and document management, ensuring efficient collaboration. Skilled in Katalon for automation testing to streamline processes and boost productivity. Familiar with SQL for effective database management, ensuring data integrity. Industry experience includes banking and healthcare sectors, providing insights into specific industry challenges and requirements."
            }
          />
          <Details
            position={"Internship QA"}
            company={"FGA-Binar Academy"}
            companyLink={"https://www.binaracademy.com/"}
            time={"March - April 2023"}
            address={"Tangerang Regency, Banten"}
            work={
              "Learning and applying various skills related to software testing, such as creating and executing test cases, developing test scenarios, and generating bug reports"
            }
          />
          <Details
            position={"Full-stack Developer Internship"}
            company={"PT PLN (Persero) UPT Cilegon"}
            companyLink={"https://portal.pln.co.id/"}
            time={"September - October 2022"}
            address={"Cilegon, Banten"}
            work={
              "Created a dashboard in a web application as part of the internship program at PT PLN (Persero).Utilized skills in MongoDB, Next.js, and Figma (software) to design and develop the dashboard. Contributed to the development of the company profile for PLN UPT."
            }
          />
          <Details
            position={"Hacker Internship"}
            company={"BISA AI Academy (PT BISA ARTIFISIAL INDONESIA)"}
            companyLink={"https://bisa.ai/"}
            time={"February - July 2022"}
            address={"Bandung, Jawa Barat"}
            work={
              "during the independent study program, I attended various learning sessions, created progress reports, and completed a real-case project on machine learning modeling. The program allowed me to enhance my skills and knowledge in the field of machine learning and work independently while also receiving guidance and support."
            }
          />
          <Details
            position={"Computer Lab Assistant"}
            company={"Universitas Serang Raya (UNSERA)"}
            companyLink={"https://unsera.ac.id/"}
            time={"February - July 2022"}
            address={"Serang, Banten"}
            work={
              "Provided support to lecturers and practitioners in activities that involved the use of the computer lab at Universitas Serang Raya. Assisted users with technical issues, such as software installation, system configuration, and hardware troubleshooting. Maintained the cleanliness and organization of the computer lab, ensuring that all equipment was in good working condition. Kept a journal report on the use of the lab, documenting issues that arose, actions taken to resolve them, and recommendations for improvement. Collaborated with other lab assistants and IT staff to ensure that the computer lab was running smoothly and efficiently."
            }
          />
          <Details
            position={"Student Ambassador"}
            company={"BISA AI Academy (PT BISA ARTIFISIAL INDONESIA)"}
            companyLink={"https://bisa.ai/"}
            time={"April - July 2021"}
            address={"Bandung, Jawa Barat"}
            work={
              "Worked as a Student Ambassador for the Academy Division at BISA AI Academy on a contract basis. Designed and conducted webinars related to AI and provided training related to the material provided. Demonstrated effective skills in time management to deliver webinars and training sessions on schedule. Managed a team of student volunteers and demonstrated excellent teamwork skills to ensure successful execution of webinars and training sessions. Developed and maintained positive relationships with stakeholders to promote BISA AI Academy's programs and services. Gained valuable experience in public speaking, event management, and leadership while representing BISA AI Academy as a Student Ambassador"
            }
          />
        </ul>
      </div>
    </div>
  );
}

export default Experience;
