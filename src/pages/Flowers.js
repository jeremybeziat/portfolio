import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";

import Header from "../components/Header";
import flowers1 from "../assets/images/mockup/flowers-mockup-affiche-wall-jeremy-beziat.webp";
import flowers from "../assets/images/flowers.webp";
import flowers2 from "../assets/images/mockup/flowers-mockup-affiche-wall2-jeremy-beziat.webp";
import flowers3 from "../assets/images/mockup/flowers-mockup-affiche-wall3-jeremy-beziat.webp";
import flowers4 from "../assets/images/mockup/flowers-mockup-affiche-wall4-jeremy-beziat.webp";
import Footer from "../components/Footer";
function Flowers() {
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
          <h1 className="flowers-title">Flowers</h1>
          <h2>Poster</h2>
          <span className="scroll" ref={scrollRef}>
            SCROLL DOWN
          </span>
        </div>
        <div className="presentation-work">
          <img rel="preload" src={flowers} alt="poster Flowers" />
          <img rel="preload" src={flowers1} alt="flowers mock-up n°01" />
          <img rel="preload" src={flowers2} alt="" />
          <img rel="preload" src={flowers3} alt="" />
          <img rel="preload" src={flowers4} alt="" />
          <h2>Flowers - 2023</h2>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Flowers;
