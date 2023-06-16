import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";

import Header from "../components/Header";
import work1 from "../assets/images/mockup-raining.webp";
import work2 from "../assets/images/mockup-dream.webp";
import work3 from "../assets/images/mockup-purple.webp";
import work4 from "../assets/images/linear-design-mockup-poster.webp";
import work5 from "../assets/images/mock-up-help.webp";
import work6 from "../assets/images/mock-up-margueritte.webp";

function Work() {
  const pageRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();

    // Animation de la transition de la page
    tl.fromTo(
      pageRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1, ease: "power2.inOut" }
    );
  }, []);

  const newRef = useRef(null);
  const newMaskRef = useRef(null);

  useEffect(() => {
    gsap.set(newRef.current, { y: "100%", overflow: "hidden" });
    gsap.set(newMaskRef.current, { y: "-100%", overflow: "hidden" });
    gsap
      .timeline()
      .fromTo(
        newMaskRef.current,
        { y: "-100%" },
        { y: "0%", duration: 1.5, ease: "power4.out" }
      )
      .fromTo(
        newRef.current,
        { y: "100%" },
        { y: "0%", duration: 1, ease: "power4.out" },
        "-=1"
      );
  }, []);

  return (
    <div>
      <Header />
      <div ref={pageRef}>
        <main>
          <section className="work">
            <div ref={newMaskRef} className="mask">
              <h1 ref={newRef}>Work</h1>
            </div>
            <div className="work-container">
              <div className="work-name">
                <div className="work-title">
                  <h2>Raining Stars</h2>
                  <h3>poster</h3>
                </div>
              </div>
              <img src={work1} alt="raining stars" />
            </div>
            <div className="work-container">
              <div className="work-name">
                <div className="work-title">
                  <h2>Purple Stars</h2>
                  <h3>poster</h3>
                </div>
              </div>
              <img src={work3} alt="Purple Stars" />
            </div>
            <div className="work-container">
              <div className="work-name">
                <div className="work-title">
                  <h2>DREAM II</h2>
                  <h3>book</h3>
                </div>
              </div>
              <img src={work2} alt="Dream II" />
            </div>
            <div className="work-container">
              <div className="work-name">
                <div className="work-title">
                  <h2>Linear Design</h2>
                  <h3>poster</h3>
                </div>
              </div>
              <img src={work4} alt="Linear Design" />
            </div>
            <div className="work-container">
              <div className="work-name">
                <div className="work-title">
                  <h2>Help</h2>
                  <h3>poster</h3>
                </div>
              </div>
              <img src={work5} alt="Sometimes I need help" />
            </div>
            <div className="work-container">
              <div className="work-name">
                <div className="work-title">
                  <h2>Margueritte</h2>
                  <h3>poster</h3>
                </div>
              </div>
              <img src={work6} alt="Margueritte - Daysi" />
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
export default Work;
