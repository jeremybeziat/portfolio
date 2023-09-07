import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";

import Header from "../components/Header";
import linear from "../assets/images/mockup/linear-design.webp";
import linear1 from "../assets/images/mockup/linear-design-mockup-poster.webp";
import linear2 from "../assets/images/mockup/linear-design-mockup-window-wall.webp";
import linear3 from "../assets/images/mockup/linear-mockup-affiche-wall-skarryx-design.webp";
import linear4 from "../assets/images/mockup/linear-design-mockup-bus.webp";
import Footer from "../components/Footer";

function LinearDesign() {
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
          <h1 className="linear-title">Linear Design</h1>
          <h2>Poster</h2>
          <span className="scroll" ref={scrollRef}>
            SCROLL DOWN
          </span>
        </div>
        <div className="presentation-work">
          <img rel="preload" src={linear} alt="poster Linear" />
          <img rel="preload" src={linear1} alt="LinearDesign mock-up n°01" />
          <img rel="preload" src={linear2} alt="" />
          <img rel="preload" src={linear3} alt="" />
          <img rel="preload" src={linear4} alt="" />
          <h2>Linear Design - 2023</h2>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default LinearDesign;
