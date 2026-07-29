import SingleExperience from "./SingleExperience";
import { FaArrowRightLong } from "react-icons/fa6";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const experiences = [
  {
    job: "React Native Developer",
    company: "DevExtra Solutions",
    date: "Oct 2022 - March 2023",
    responsibilities: [
      "Implementing reusable components.",
      "Participating in large scale application.",
      "Working on the performance of web & mobile applications.",
      "Generating new ideas for better user experience.",
    ],
  },
  {
    job: "Full-Stack Developer",
    company: "Monitr Technologies PVT",
    date: "June 2024 - Dec 2024",
    responsibilities: [
      "Developed full-stack web applications using MERN Stack",
  "Created RESTful APIs and integrated frontend with backend services.",
  "Optimized performance and debugged issues to ensure smooth user experience."
    ],
  },
  {
    job: "MERN Stack",
    company: "Local Freelancing",
    date: "Feb 2025 - Nov 2025",
    responsibilities: [
      "Built MERN stack projects for local clients via Facebook and freelancing sites.",  
  "Handled full project lifecycle from requirements to deployment.",
  "Built MERN stack projects for local clients."
    ],
  },
  {
    job: "Full Stack Developer | Shopify Developer",
    company: "Teqnite",
    date: "Dec 2025 - Feb 2026",
    responsibilities: [
      "Working as a Full-Stack Developer building custom Shopify apps for merchants.",
      "Developed Shopify apps using Remix, now transitioning to React Router for modern app architecture.",            
    ],
  },
];

const AllExperiences = () => {
  return (
    <div className="flex md:flex-row sm:flex-col items-center justify-between">
      {experiences.map((experience, index) => {
        return (
          <>
            <SingleExperience key={index} experience={experience} />
            {index < 3 ? (
              <motion.div
                variants={fadeIn("right", 0)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.7 }}
              >
                <FaArrowRightLong className="text-6xl text-orange lg:block sm:hidden" />
              </motion.div>
            ) : (
              ""
            )}
          </>
        );
      })}
    </div>
  );
};

export default AllExperiences;
