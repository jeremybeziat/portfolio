import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
// import messages from "../components/langue";

import Header from "../components/Header";
import work1 from "../assets/images/mockup-raining-phone.webp";
import work2 from "../assets/images/mockup-dream-phone.webp";
import work21 from "../assets/images/roman-couverture.webp";

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

  const [show, setShow] = useState(false);

  const toggleHandler = () => {
    setShow((prevState) => !prevState);
  };
  const [show2, setShow2] = useState(false);

  const toggleHandler2 = () => {
    setShow2((prevState) => !prevState);
  };

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
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M14 8H8V14H6V8H0V6H6V0H8V6H14V8Z" fill="white" />
                </svg>
              </div>
              <img src={work1} alt="raining stars" />
            </div>
            <div className="work-container">
              <div className="work-name">
                <div className="work-title">
                  <h2>DREAM II</h2>
                  <h3>book</h3>
                </div>
                <button title="en voir plus" onClick={toggleHandler}>
                  {show ? (
                    <svg
                      width="14"
                      height="2"
                      viewBox="0 0 14 2"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M14 2H0V0H14V2Z" fill="white" />
                    </svg>
                  ) : (
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M14 8H8V14H6V8H0V6H6V0H8V6H14V8Z" fill="white" />
                    </svg>
                  )}
                </button>
              </div>
              <img src={work2} alt="purple stars" />
              {show && (
                <div className="work-content">
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Cupiditate facilis, voluptas ipsum libero rem dolorem
                    incidunt. Quae quam esse nemo.
                  </p>
                  <img src={work21} alt="lol" />
                </div>
              )}
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
export default Work;
