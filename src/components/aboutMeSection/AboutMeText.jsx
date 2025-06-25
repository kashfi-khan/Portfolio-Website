import { Link } from "react-scroll";

const AboutMeText = () => {
  return (
    <div className="flex flex-col md:items-start sm:items-center md:text-left sm:text-center">
      <h2 className="text-6xl text-cyan mb-10">About Me</h2>
      <p>
        I’m Kashfi Khan, a Computer Science graduate and passionate MERN stack
        developer focused on building robust, real-world web applications. I
        specialize in crafting seamless user experiences and scalable backend
        systems using React, Node.js, Express, and MongoDB. My projects reflect
        modern development practices and solve practical problems with clean,
        maintainable code. Beyond coding, I’m deeply committed to continuous
        learning, mentoring aspiring developers, and growing through consistency
        and purpose-driven work. I strive to create meaningful digital solutions
        and leave a lasting impact through my craft.
      </p>
      <button className="border border-orange rounded-full py-2 px-4 text-lg flex gap-2 items-center mt-10 hover:bg-orange transition-all duration-500 cursor-pointer md:self-start sm:self-center">
        <Link
          spy={true}
          smooth={true}
          duration={500}
          offset={-120}
          to="projects"
          className="cursor-pointer text-white hover:text-cyan transition-all duration-500"
        >
          My Projects
        </Link>
      </button>
    </div>
  );
};

export default AboutMeText;
