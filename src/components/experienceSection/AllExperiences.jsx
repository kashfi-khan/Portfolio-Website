import SingleExperience from "./SingleExperience";
import { FaArrowRightLong } from "react-icons/fa6";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const experiences = [
  
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
    company: "Freelancing",
    date: "Feb 2025 - Nov 2025",
    responsibilities: [
      "Built projects on MERN for clients via Facebook and freelancing sites.",  
  "Handled full project lifecycle from requirements to deployment.",
  "Built MERN stack projects for local & international clients."
    ],
  },
  {
    job: "Full Stack Developer | Shopify Developer",
    company: "Teqnite",
    date: "Dec 2025 - Feb 2026",
    responsibilities: [
      "Worked as a Full-Stack Developer building custom Shopify apps for merchants.",
    "Developed a custom Shopify wishlist app using React Router and GraphQL, gaining hands-on API experience.",           
    ],
  },
  {
  job: "Self-Directed Developer",
  company: "Independent / Self-Learning",
  date: "Feb 2026 - Present",
  responsibilities: [
  "Building custom Shopify apps on free Partner development stores to strengthen practical skills.",
  "Exploring AI integration in MERN apps.",
  "Applying for remote developer roles.",
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
