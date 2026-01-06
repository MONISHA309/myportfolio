import React, { useEffect, useRef, useState } from "react";
import "./Projects.css";
import sample1 from "../images/image3.jpg";
import sample2 from "../images/image4.jpg";
import sample3 from "../images/image5.jpg";
import sample4 from "../images/image6.jpg";
import sample5 from "../images/image7.jpg";

const projectData = [
  {
    id: 1,
    title: "Import & Export Analysis of India",
    tag: "Data Analysis Dashboard",
    img: sample1,
    desc: "A data-driven dashboard built to analyze and visualize India’s import and export trade patterns, helping understand trends and economic dynamics using interactive visualizations.",
    githubLink: "https://github.com/MONISHA309/Import-and-export-analysis"
  },
  {
    id: 2,
    title: "KEC Laptop Service Management",
    tag: "Web Development",
    img: sample2,
    desc: "A web application developed to manage laptop service requests at KEC, enabling efficient tracking, service management, and user-friendly interactions using the MERN stack.",
    githubLink: "https://github.com/MONISHA309/Laptop_Service"
  },
  {
    id: 3,
    title: "Expense Tracker Application",
    tag: "Web Application",
    img: sample3,
    desc: "A user-friendly expense tracking application designed to simplify daily expense management, providing clear insights into spending patterns using the MERN stack.",
    githubLink: "https://github.com/MONISHA309/Expense_Tracker_Website"
  },
  {
    id: 4,
    title: "Cervical Cancer Detection System",
    tag: "Machine Learning",
    img: sample4,
    desc: "A machine learning-based system for early detection of cervical cancer, achieving 95.2% accuracy using Decision Tree classifiers with effective data preprocessing and sampling techniques.",
    githubLink: "https://github.com/MONISHA309/Cervical_Cancer"
  },
  {
    id: 5,
    title: "Lung Disease Detection from Respiratory Sounds",
    tag: "Deep Learning",
    img: sample5,
    desc: "A deep learning model developed to analyze respiratory sounds for lung disease detection, achieving 90.49% accuracy using CNNs and audio feature extraction techniques.",
    githubLink: "https://github.com/MONISHA309/Lung_Disease_Detection"
  }
];



const Projects = () => {
  const blocksRef = useRef([]);
  const [visible, setVisible] = useState({});

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = entry.target.getAttribute("data-index");
          if (entry.isIntersecting) {
            setVisible((p) => ({ ...p, [index]: true }));
          }
        });
      },
      { threshold: 0.3 }
    );

    blocksRef.current.forEach((el) => el && obs.observe(el));
    return () => obs.disconnect();
  }, []);

  const headingRef = useRef(null);
  const [headingVisible, setHeadingVisible] = useState(false);

  useEffect(() => {
    const headObs = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setHeadingVisible(true);
        }
      },
      { threshold: 0.4 }
    );

    if (headingRef.current) headObs.observe(headingRef.current);

    return () => headObs.disconnect();
  }, []);


  return (
    <section id="projects" className="projects-section">

      {/* Heading Section */}
      <div className="projects-heading" ref={headingRef}>

        <h2
          className={`projects-main fade-heading ${headingVisible ? "show" : ""}`}
        >
          Latest Projects
        </h2>
      </div>

      {/* Blocks */}
      <div className="projects-list">
        {projectData.map((proj, i) => {
          const isLeft = i % 2 === 0;
          const show = visible[i];

          return (
            <div
              className={`project-block ${!isLeft ? "reverse" : ""}`}
              data-index={i}
              ref={(el) => (blocksRef.current[i] = el)}
              key={proj.id}
            >
              {/* IMAGE */}
              <div
                className={`project-image-wrapper ${isLeft ? "img-left" : "img-right"} ${show ? "show-img" : ""
                  }`}
              >
                <img src={proj.img} alt="" className="project-image" />
              </div>

              {/* TEXT */}
              <div className="project-text">
                <p className={`project-tag ${show ? "fade-text" : ""}`}>
                  {proj.tag}
                </p>

                <h3 className={`project-title ${show ? "fade-text delay-1" : ""}`}>
                  {proj.title}
                </h3>

                <p className={`project-desc ${show ? "fade-text delay-2" : ""}`}>
                  {proj.desc}
                </p>

                <a
                  href={proj.githubLink}
                  className={`project-link ${show ? "fade-text delay-3" : ""}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  See More →
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
