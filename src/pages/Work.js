import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";

import Header from "../components/Header";
import work1 from "../assets/images/mockup-raining.webp";
import work2 from "../assets/images/mockup-dream.webp";

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
                  <h2>DREAM II</h2>
                  <h3>book</h3>
                </div>
              </div>
              <img src={work2} alt="purple stars" />
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
export default Work;
