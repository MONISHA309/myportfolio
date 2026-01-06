import React, { useMemo, useEffect, useState } from "react";
import "./Education.css";

const Education = () => {
  const boxRefs = useMemo(
    () => [React.createRef(), React.createRef(), React.createRef()],
    []
  );

  const [visible, setVisible] = useState([false, false, false]);

  useEffect(() => {
    const observers = boxRefs.map((ref, index) => {
      const obs = new IntersectionObserver(
        entries => {
          if (entries[0].isIntersecting) {
            setVisible(prev => {
              const updated = [...prev];
              updated[index] = true;
              return updated;
            });
            obs.disconnect();
          }
        },
        { threshold: 0.3 }
      );

      if (ref.current) obs.observe(ref.current);
      return obs;
    });

    return () => observers.forEach(o => o.disconnect());
  }, [boxRefs]);

  return (
    <section id="education" className="eduAltWrapper">

      <h2 className="eduAltMainTitle">Education</h2>

      {/* Vertical lines covering all boxes */}
      <div className="eduAltLeftLine"></div>
      <div className="eduAltRightLine"></div>

      <div className="eduAltBoxContainer">

        {/* BOX 1 — connects to LEFT */}
        <div className="eduAltBoxRow">
          <div className="eduAltConnectorLeft">
            <div className="eduAltLineH"></div>
            <div className="eduAltCircle"></div>
          </div>

          <div
            ref={boxRefs[0]}
            className={`eduAltCard ${visible[0] ? "eduAltFade" : ""}`}
          >
            <h3 className="eduAltHeading">
              Bachelor of Technology – Artificial Intelligence and Data Science
            </h3>

            <span className="eduAltRatingValue">8.77 CGPA</span>

            <p className="eduAltUniversity">
              Kongu Engineering College, Perundurai
            </p>

            <p className="eduAltDescription">
              2021 – 2025
            </p>

          </div>
        </div>

        {/* BOX 2 — connects to RIGHT, circle MUST be on LEFT of horizontal line */}
        <div className="eduAltBoxRow">
          <div className="eduAltConnectorRight">
            <div className="eduAltCircle"></div>
            <div className="eduAltLineH"></div>
          </div>

          <div
            ref={boxRefs[1]}
            className={`eduAltCard ${visible[1] ? "eduAltFade" : ""}`}
          >
            <h3 className="eduAltHeading">
              Higher Secondary Certificate (HSC)
            </h3>

            <span className="eduAltRatingValue">93.36 Percentage</span>

            <p className="eduAltUniversity">
              Municipal Girls HR SEC School, Gobichettipalayam
            </p>

            <p className="eduAltDescription">
              2020 - 2021
            </p>

          </div>
        </div>

        {/* BOX 3 — connects to LEFT */}
        <div className="eduAltBoxRow">
          <div className="eduAltConnectorLeft">
            <div className="eduAltLineH"></div>
            <div className="eduAltCircle"></div>
          </div>

          <div
            ref={boxRefs[2]}
            className={`eduAltCard ${visible[2] ? "eduAltFade" : ""}`}
          >
            <h3 className="eduAltHeading">
              Secondary School Leaving Certificate (SSLC)
            </h3>

            <span className="eduAltRatingValue">91.6 Percentage</span>

            <p className="eduAltUniversity">
              Municipal Girls HR SEC School, Gobichettipalayam
            </p>

            <p className="eduAltDescription">
              2018 - 2019
            </p>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Education;
