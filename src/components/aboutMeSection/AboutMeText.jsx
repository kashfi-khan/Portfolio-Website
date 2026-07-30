import { Link } from "react-scroll";

const AboutMeText = () => {
  return (
    <div className="flex flex-col md:items-start sm:items-center md:text-left sm:text-center">
      <h2 className="text-6xl text-cyan mb-10">About Me</h2>
      <p>
        I'm Kashfi Khan, a Computer Science graduate and MERN stack developer
        who enjoys turning real problems into working products. My core stack is
        React, Node.js, Express, and MongoDB — and I recently expanded into
        Shopify app development, where I built a custom wishlist app from
        scratch within my first month on the job, despite having no prior
        Shopify experience. I care about writing clean, maintainable code and
        building things that actually solve a problem for the people using them
        — not just checking a feature off a list. Right now I'm focused on
        combining my full-stack skills with modern tools like AI integrations to
        build practical, market-relevant applications. I'm always learning, and
        I'm open to remote opportunities and collaborations where I can
        contribute real value.
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
