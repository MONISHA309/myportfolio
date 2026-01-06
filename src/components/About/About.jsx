import React, { useEffect, useRef, useState } from "react";
import "./About.css";
import sampleImg from "../images/image2.png";

const About = () => {
  const aboutRef = useRef(null);
  const [step, setStep] = useState(0);

  useEffect(() => {
    const section = aboutRef.current;
    const target = section;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          let timer = setInterval(() => {
            setStep((prev) => {
              if (prev >= 7) {
                clearInterval(timer);
                return prev;
              }
              return prev + 1;
            });
          }, 350);

          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (target) observer.observe(target);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="about-about-section" ref={aboutRef}>

      <div className="about-about-title-wrapper">
        <h2 className={`about-seq ${step >= 1 ? "about-fade-up" : ""} about-about-main-title`}>
          Who Am I?
        </h2>
      </div>

      <div className="about-about-container">

        <div className={`about-seq ${step >= 2 ? "about-fade-up" : ""}`}>
          <img src={sampleImg} alt="profile" className="about-about-img" loading="lazy"/>
        </div>

        <div className="about-about-right">

          <h3 className={`about-seq ${step >= 3 ? "about-fade-up" : ""} about-about-me`}>
            About Me
          </h3>

          <p className={`about-seq ${step >= 4 ? "about-fade-up" : ""} about-about-text`}>
            I am a passionate Front-End Developer with a strong foundation in Artificial Intelligence and Machine Learning.
            I enjoy building intuitive, responsive web applications while leveraging data-driven approaches to solve real-world problems.
            With hands-on experience in modern web technologies and analytical projects, I aim to create impactful digital solutions.
          </p>

          <div className="about-about-details-grid">

            <div className={`about-seq ${step >= 5 ? "about-fade-up" : ""} about-detail-box`}>
              <h4>Name</h4>
              <p>Monisha Karuppusamy</p>
            </div>

            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=monishakaruppusamy6374@gmail.com&su=Portfolio%20Contact"
              target="_blank"
              rel="noopener noreferrer"
              className={`about-seq ${step >= 5 ? "about-fade-up" : ""} about-detail-box about-detail-link`}
            >
              <h4>Email</h4>
              <p>monishakaruppusamy6374@gmail.com</p>
            </a>

            <a
              href="https://github.com/MONISHA309"
              target="_blank"
              rel="noopener noreferrer"
              className={`about-seq ${step >= 6 ? "about-fade-up" : ""} about-detail-box about-detail-link`}
            >
              <h4>Github</h4>
              <p>https://github.com/MONISHA309</p>
            </a>

            <a
              href="https://www.linkedin.com/in/monishak309/"
              target="_blank"
              rel="noopener noreferrer"
              className={`about-seq ${step >= 6 ? "about-fade-up" : ""} about-detail-box about-detail-link`}
            >
              <h4>LinkedIn</h4>
              <p>https://www.linkedin.com/in/monishak309/</p>
            </a>
          </div>

          <a
            href="https://drive.google.com/file/d/1m5gHaOu0P2i0PXZ0sqM5shdxMbAR7Nh2/view?usp=sharing"
            className={`about-seq about-about-cv-btn ${step >= 7 ? "about-fade-up" : ""}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            ⬇ Download CV
          </a>

        </div>
      </div>
    </section>
  );
};

export default About;