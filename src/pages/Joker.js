import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";

import Header from "../components/Header";
import joker from "../assets/images/mockup/joker-affiche.webp";
import joker1 from "../assets/images/mockup/joker-affiche-mock-up-skarrx-design.webp";
import joker2 from "../assets/images/mockup/joker-affiche-mockup-bus-skarryx-design.webp";
import joker3 from "../assets/images/mockup/joker-affiche-mockup-city-skarryx-design.webp";
import joker4 from "../assets/images/mockup/joker-affiche-mockup-bus2-skarryx-design.webp";
import Footer from "../components/Footer";

function Joker() {
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
          <h1 className="joker-title">Joker</h1>
          <h2>Poster</h2>
          <span className="scroll" ref={scrollRef}>
            SCROLL DOWN
          </span>
        </div>
        <div className="presentation-work">
          <img rel="preload" src={joker} alt="poster Joker" />
          <img rel="preload" src={joker1} alt="Joker mock-up n°01" />
          <img rel="preload" src={joker2} alt="" />
          <img rel="preload" src={joker3} alt="" />
          <img rel="preload" src={joker4} alt="" />
          <h2>Joker - 2023</h2>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Joker;
