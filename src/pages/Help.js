import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";

import Header from "../components/Header";
import help from "../assets/images/mockup/sometimes-i-need-help-signature.webp";
import help1 from "../assets/images/mockup/mockup-help1.webp";
import help2 from "../assets/images/mockup/mockup-help3.webp";
import help3 from "../assets/images/mockup/mockup-help.webp";
import help4 from "../assets/images/mockup/mock-up-help.webp";
import Footer from "../components/Footer";

function Help() {
  const scrollRef = useRef(null);

  useEffect(() => {
    const textElement = scrollRef.current;

    gsap.to(textElement, {
      opacity: 0,
      y: 20,
      duration: 0.5,
      ease: "power3.out",
      scrollTrigger: {
        // markers: true,
        trigger: textElement,
        start: "top 90%", // Démarrer l'animation lorsque 80% du texte est visible
      },
    });
  }, []);
  return (
    <div>
      <Header />
      <main>
        <div className="work-title">
          <h1 className="help-title">Sometimes I need help</h1>
          <h2>Poster</h2>
          <span className="scroll" ref={scrollRef}>
            SCROLL DOWN
          </span>
        </div>
        <div className="presentation-work">
          <img rel="preload" src={help} alt="poster Sometimes I nedd help" />
          <img rel="preload" src={help1} alt="Help mock-up n°01" />
          <img rel="preload" src={help2} alt="" />
          <img rel="preload" src={help3} alt="" />
          <img rel="preload" src={help4} alt="" />
          <h2>Sometime I need help - 2023</h2>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Help;
