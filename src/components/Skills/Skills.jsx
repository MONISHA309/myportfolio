import React, { useEffect, useRef, useState } from "react";
import "./Skills.css";

const Skills = () => {
  const skillsRef = useRef(null);
  const [step, setStep] = useState(0);

  useEffect(() => {
    const target = skillsRef.current;
    if (!target) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          let timer = setInterval(() => {
            setStep((prev) => {
              if (prev >= 5) {
                clearInterval(timer);
                return prev;
              }
              return prev + 1;
            });
          }, 300);

          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(target);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="skills-section" ref={skillsRef}>

      {/* ================= TITLE ================= */}
      <div className="skills-title-wrapper">
        <h2 className={`seq ${step >= 1 ? "fade-up" : ""} skills-main-title`}>
          My Skills
        </h2>
      </div>

      {/* ================= CARD GRID ================= */}
      <div className="skills-card-grid">

        <div className={`skill-card seq ${step >= 2 ? "fade-up" : ""}`}>
          <span className="card-number">01.</span>
          <h3 className="card-title">LANGUAGES</h3>
          <ul className="card-list">
            <li>Java</li>
            <li>SQL</li>
          </ul>
          <div className="card-underline"></div>
        </div>

        <div className={`skill-card seq ${step >= 3 ? "fade-up" : ""}`}>
          <span className="card-number">02.</span>
          <h3 className="card-title">WEB DEVELOPMENT</h3>
          <ul className="card-list">
            <li>HTML, CSS</li>
            <li>Java Script</li>
            <li>ReactJS</li>
          </ul>
          <div className="card-underline"></div>
        </div>

        <div className={`skill-card seq ${step >= 4 ? "fade-up" : ""}`}>
          <span className="card-number">03.</span>
          <h3 className="card-title">Databases</h3>
          <ul className="card-list">
            <li>MongoDB</li>
            <li>MySQL</li>
          </ul>
          <div className="card-underline"></div>
        </div>

        <div className={`skill-card seq ${step >= 5 ? "fade-up" : ""}`}>
          <span className="card-number">04.</span>
          <h3 className="card-title">ARTIFICIAL INTELLIGENCE</h3>
          <ul className="card-list">
            <li>Machine Learning</li>
            <li>Deep Learning</li>
            <li>Data Science</li>
          </ul>
          <div className="card-underline"></div>
        </div>

      </div>
    </section>
  );
};

export default Skills;
