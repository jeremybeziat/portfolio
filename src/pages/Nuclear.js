import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";

import Header from "../components/Header";
import nuclear from "../assets/images/mockup/affiche-nuclear-jeremy-beziat.webp";
import nuclear1 from "../assets/images/mockup/poster-nuclear.webp";
import nuclear2 from "../assets/images/mockup/nuclear-blackandyellow.webp";
import nuclear3 from "../assets/images/mockup/billboard2-mockup-nuclear-jeremy-beziat.webp";
import nuclear4 from "../assets/images/mockup/mockup-n2-nuclear.webp";
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
          <h1 className="nuclear-title">Nuclear</h1>
          <h2>Poster</h2>
          <span className="scroll" ref={scrollRef}>
            SCROLL DOWN
          </span>
        </div>
        <div className="presentation-work">
          <img rel="preload" src={nuclear} alt="poster Nuclear" />
          <img rel="preload" src={nuclear1} alt="flowers mock-up n°01" />
          <img rel="preload" src={nuclear2} alt="" />
          <img rel="preload" src={nuclear3} alt="" />
          <img rel="preload" src={nuclear4} alt="" />
          <h2>Nuclear - 2023</h2>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Flowers;
