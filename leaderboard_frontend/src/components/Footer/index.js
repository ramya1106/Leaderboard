import { FooterSection, FooterLinks } from "./styledComponents";

import { FaLinkedin, FaInstagram, FaYoutube } from "react-icons/fa";

import { FaEnvelope } from "react-icons/fa6"; 

import { FiGlobe } from "react-icons/fi";

function Footer() {
  return (
    <FooterSection>
      <FooterLinks>
        <a
          href="https://www.linkedin.com/company/gdg-on-campus-necn"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://www.instagram.com/gdg_on_campus_necn"
          target="_blank"
          rel="noreferrer"
        >
          <FaInstagram />
        </a>
        <a
          href="mailto:gdgoncampusnecn@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          <FaEnvelope />
        </a>
        <a
          href="https://www.youtube.com/@gdg-on-campus-necn"
          target="_blank"
          rel="noreferrer"
        >
          <FaYoutube />
        </a>
        <a
          href="https://gdg.community.dev/gdg-on-campus-narayana-engineering-college-nellore-india/"
          target="_blank"
          rel="noreferrer"
          aria-label="Community Page"
        >
          <FiGlobe />
        </a>
      </FooterLinks>
      <p>
        © Built by <strong>Ramya Sree</strong> (GDG On-Campus Web/App Dev. Lead)
      </p>
    </FooterSection>
  );
  
}

export default Footer;
