import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";

import Header from "../components/Header";
import smile from "../assets/images/mockup/mockup-smile.webp";
import smile1 from "../assets/images/mockup/smile-logo.webp";
import smile2 from "../assets/images/mockup/smile-mockup-1.webp";
import smile3 from "../assets/images/mockup/smile-mockup-2.webp";
import smile4 from "../assets/images/mockup/smile-texte-1.webp";
import smile5 from "../assets/images/mockup/smile-texte-2.webp";
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
          <h1 className="smile-title">Smile</h1>
          <h2>Poster</h2>
          <span className="scroll" ref={scrollRef}>
            SCROLL DOWN
          </span>
        </div>
        <div className="presentation-work">
          <img rel="preload" src={smile} alt="poster Smile" />
          <img rel="preload" src={smile1} alt="" />
          <img rel="preload" src={smile2} alt="" />
          <img rel="preload" src={smile4} alt="" />
          <img rel="preload" src={smile3} alt="" />
          <img rel="preload" src={smile5} alt="" />
          <h2>Smile - 2023</h2>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Flowers;
