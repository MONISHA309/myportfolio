import React, { useEffect, useState } from "react";
import "./Hero.css";
import myImage from "../images/image1.png";

const Hero = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => setLoaded(true), 200);
  }, []);

  const [scrollNav, setScrollNav] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);


  useEffect(() => {
    const handleScroll = () => {
      setScrollNav(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="hero-section">

      <nav className={`hero-navbar ${scrollNav ? "hero-nav-scroll" : ""}`}>

        <div className="hero-nav-left">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
        </div>

        <div className="hero-nav-center">
          <h1 className="hero-logo">Monisha</h1>
        </div>

        <div className="hero-nav-right">
          <a href="#projects">Projects</a>
          <a href="#education">Education</a>
        </div>

        {/* HAMBURGER */}
        <div
          className={`hero-hamburger ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* MOBILE MENU */}
        <div className={`hero-mobile-menu ${menuOpen ? "show" : ""}`}>
          <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
          <a href="#skills" onClick={() => setMenuOpen(false)}>Skills</a>
          <a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a>
          <a href="#education" onClick={() => setMenuOpen(false)}>Education</a>
        </div>

      </nav>


      {/* ===== HERO GRID ===== */}
      <div className="hero-container">

        {/* LEFT SIDE */}
        <div className={`hero-left ${loaded ? "hero-show" : ""}`}>
          <h1 className="hero-hello hero-fade-up">Hello, I'm.</h1>

          <h2 className="hero-name hero-fade-up">Monisha Karuppusamy</h2>

          <p className="hero-title hero-fade-up">Front-End Developer | AI & Machine Learning Enthusiast</p>

          <a
            href="https://drive.google.com/file/d/1m5gHaOu0P2i0PXZ0sqM5shdxMbAR7Nh2/view?usp=sharing"
            className="hero-download-btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            ⬇ Download CV
          </a>
        </div>

        {/* CENTER */}
        <div className="hero-center">
          <img src={myImage} alt="portrait" className="hero-image" />
          <div className="hero-bottom-fade"></div>
        </div>

        {/* RIGHT SIDE */}
        <div className="hero-right">
          <p className="hero-about-text hero-fade-up">
            I am a motivated Front-End Developer and AI enthusiast passionate about building clean, data-driven, and user-focused digital solutions that solve real-world problems.
          </p>

          <div className="hero-floating-chips hero-fade-up">
            <span className="hero-chip hero-chip1">Front-End Development
            </span>
            <span className="hero-chip hero-chip2">Machine Learning
            </span>
            <span className="hero-chip hero-chip3">Data Science</span>
          </div>

          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=monishakaruppusamy6374@gmail.com&su=Portfolio%20Contact&body=Hello%20Monisha,%0A%0AI%20visited%20your%20portfolio%20and%20would%20like%20to%20connect."
            className="hero-talk-link hero-fade-up"
            target="_blank"
            rel="noopener noreferrer"
          >
            Let's Connect →
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
