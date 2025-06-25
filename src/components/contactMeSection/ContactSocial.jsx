import SingleContactSocial from "./SingleContactSocial";
import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";

const ContactSocial = () => {
  return (
    <div className="flex gap-4">
  <SingleContactSocial link="https://www.linkedin.com/in/kashfi-khan-09ab6422a/" Icon={FaLinkedinIn} />
  <SingleContactSocial link="https://github.com/kashfi-khan" Icon={FiGithub} />
  <SingleContactSocial link="https://www.instagram.com/kashfikhan.js/" Icon={FaInstagram} />
</div>

  );
};

export default ContactSocial;
