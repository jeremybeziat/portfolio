import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import Header from "../components/Header";
// import work1 from "../assets/images/mockup-raining-phone.webp";
// import work1D from "../assets/images/mockup-raining.webp";
// import work2 from "../assets/images/mockup-purple-phone.webp";
// import work2D from "../assets/images/mockup-purple.webp";
// import work3D from "../assets/images/mockup-dream.webp";
// import work3 from "../assets/images/mockup-dream-phone.webp";
import ScrollTrigger from "gsap-trial/ScrollTrigger";
import { Link } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger); // Enregistrez le plugin ScrollTrigger

function Home() {
  const pageRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({});

    // Animation de la transition de la page
    tl.fromTo(
      pageRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1, ease: "expo.out" }
    );
  }, []);

  const textRef = useRef(null);
  const maskRef = useRef(null);
  useEffect(() => {
    gsap.set(textRef.current, { y: "100%", overflow: "hidden" });
    gsap.set(maskRef.current, { y: "-100%", overflow: "hidden" });
    gsap
      .timeline()
      .fromTo(
        maskRef.current,
        { y: "0%" },
        { y: "0%", duration: 1.2, ease: "power4.out" }
      )
      .fromTo(
        textRef.current,
        { y: "100%" },
        { y: "0%", duration: 1, ease: "power4.out" },
        "-=1"
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

  const myElement = useRef(null);

  useEffect(() => {
    gsap.from(myElement.current, {
      opacity: 0,
      y: 100,
      duration: 1,
      scrollTrigger: {
        // markers: true,
        trigger: myElement.current,
        start: "top 80%",
        end: "50% 80%",
        toggleActions: "play none none reverse",
      },
    });
  }, []);

  return (
    <div>
      <Header />
      <div>
        <div ref={pageRef}>
          <div>
            <main className="home-about">
              <div className="container-presentation">
                <section className="presentation">
                  <div className="responsive-presentation">
                    <div className="title">
                      <div ref={maskRef} className="mask">
                        <h1 ref={textRef}>
                          Hello, I’m Jeremy Beziat, <br /> a Designer With 3
                          years <br /> of experience.
                        </h1>
                      </div>
                    </div>
                    <div className="intro">
                      <div ref={newMaskRef} className="mask">
                        <div ref={newRef}>
                          <p>
                            I started as a graphic designer in 2021 and I
                            reconverted in 2022 to become a front-end developer
                            with the graduation of my web/web mobile developer.
                            I am now a designer UI training with Formasup81.
                          </p>
                          <p>
                            The technologies I use every day : SCSS, Javascript,
                            Wordpress, InDesign, Illustrator, Photoshop,
                            Premiere Pro, After Effects, Figma.
                          </p>
                          <div className="link-work">
                            <Link to="/work">
                              See my work
                              <span>
                                <svg
                                  width="13"
                                  height="13"
                                  viewBox="0 0 13 13"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M1.4 13L0 11.6L9.6 2H1V0H13V12H11V3.4L1.4 13Z"
                                    fill="white"
                                  />
                                </svg>
                              </span>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <div className="scroll">
                    <span id="elementADisparaitre">Scroll Down</span>
                  </div> */}
                </section>
              </div>
            </main>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Home;
