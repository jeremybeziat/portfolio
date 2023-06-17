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
            <div className="cards-works">
              <a
                href="https://www.behance.net/gallery/159684055/Raining-Stars"
                className="work-container raining"
              >
                <div className="work-name">
                  <div className="work-contain">
                    <h2 className="title-works">Raining Stars</h2>
                    <h3 className="subtitle-works">poster</h3>
                  </div>
                </div>
                <img src={work1} alt="raining stars" />
              </a>
              <a
                href="https://www.behance.net/gallery/161765241/Purple-Stars"
                className="work-container purple"
              >
                <div className="work-name">
                  <div className="work-contain">
                    <h2 className="title-works">Purple Stars</h2>
                    <h3 className="subtitle-works">poster</h3>
                  </div>
                </div>
                <img src={work3} alt="Purple Stars" />
              </a>
              <a href="https://www.behance.net/gallery/161021241/DREAM-II" className="work-container dream">
                <div className="work-name">
                  <div className="work-contain">
                    <h2 className="title-works">DREAM II</h2>
                    <h3 className="subtitle-works">book</h3>
                  </div>
                </div>
                <img src={work2} alt="Dream II" />
              </a>
              <a href="https://www.behance.net/gallery/172440105/Linear-Design" className="work-container linear">
                <div className="work-name">
                  <div className="work-contain">
                    <h2 className="title-works">Linear Design</h2>
                    <h3 className="subtitle-works">poster</h3>
                  </div>
                </div>
                <img src={work4} alt="Linear Design" />
              </a>
              <a href="https://www.behance.net/gallery/173071761/Sometines-I-need-help" className="work-container help">
                <div className="work-name">
                  <div className="work-contain">
                    <h2 className="title-works">Help</h2>
                    <h3 className="subtitle-works">poster</h3>
                  </div>
                </div>
                <img src={work5} alt="Sometimes I need help" />
              </a>
              <a href="https://www.behance.net/gallery/173258971/Margueritte-Daysi" className="work-container margueritte">
                <div className="work-name">
                  <div className="work-contain">
                    <h2 className="title-works">Margueritte</h2>
                    <h3 className="subtitle-works">poster</h3>
                  </div>
                </div>
                <img src={work6} alt="Margueritte - Daysi" />
              </a>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
export default Work;
