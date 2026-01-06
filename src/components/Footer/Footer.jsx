import React, { useEffect, useState } from "react";
import "./Footer.css";
import { FaGithub, FaLinkedinIn, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <footer className="footerRoot">

      {/* Gradient divider */}
      <div className="footerGradientDivider"></div>

      <div className="footerInner">

        {/* Quote */}
        <p className={`footerQuote ${show ? "footerFade1" : ""}`}>
          Building clean, responsive, and user-focused web experiences.

        </p>

        {/* Built with */}
        <p className={`footerBuilt ${show ? "footerFade2" : ""}`}>
          Built with <span>React</span> & <span>CSS</span>

        </p>

        {/* Social icons */}
        <div className={`footerIcons ${show ? "footerFade3" : ""}`}>
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=monishakaruppusamy6374@gmail.com&su=Portfolio%20Contact"
            target="_blank"
            className="footerIcon"
            aria-label="Email"
          >
            <FaEnvelope />
          </a>

          <a
            href="https://www.linkedin.com/in/monishak309/"
            target="_blank"
            rel="noopener noreferrer"
            className="footerIcon"
            aria-label="LinkedIn"
          >
            <FaLinkedinIn />
          </a>

          <a
            href="https://github.com/MONISHA309"
            target="_blank"
            rel="noopener noreferrer"
            className="footerIcon"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
