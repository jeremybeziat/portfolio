import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";

import Header from "../components/Header";
import marguerite from "../assets/images/mockup/marguerite-signature.webp";
import marguerite1 from "../assets/images/mockup/marguerite-mockup-affiche-skarrx-design.webp";
import marguerite2 from "../assets/images/mockup/marguerite-mockup-affiche-wall-skarryx-design.webp";
import marguerite3 from "../assets/images/mockup/marguerite-mockup-bus.webp";
import marguerite4 from "../assets/images/mockup/marguerite-mockup-affiche-bus-skarryx-design.webp";
import Footer from "../components/Footer";

function Marguerite() {
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
          <h1 className="marguerite-title">Marguerite</h1>
          <h2>Poster</h2>
          <span className="scroll" ref={scrollRef}>
            SCROLL DOWN
          </span>
        </div>
        <div className="presentation-work">
          <img rel="preload" src={marguerite} alt="poster Marguerite" />
          <img rel="preload" src={marguerite1} alt="Marguerite mock-up n°01" />
          <img rel="preload" src={marguerite2} alt="" />
          <img rel="preload" src={marguerite3} alt="" />
          <img rel="preload" src={marguerite4} alt="" />
          <h2>Marguerite - 2023</h2>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Marguerite;
