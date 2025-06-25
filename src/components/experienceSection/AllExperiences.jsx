import SingleExperience from "./SingleExperience";
import { FaArrowRightLong } from "react-icons/fa6";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const experiences = [
  {
    job: "React Native Developer",
    company: "DevExtra Solutions",
    date: "2022 - 2023",
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
    date: "2024 - 2024",
    responsibilities: [
      "Developed full-stack web applications using MERN Stack",
  "Created RESTful APIs and integrated frontend with backend services.",
  "Optimized performance and debugged issues to ensure smooth user experience."
    ],
  },
  {
    job: "MERN Stack",
    company: "Local Freelancing",
    date: "2025 - Present",
    responsibilities: [
      "Built MERN stack projects for local clients via Facebook and freelancing sites.",  
  "Handled full project lifecycle from requirements to deployment.",
  "Built MERN stack projects for local clients."
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
            {index < 2 ? (
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
