import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";

import Header from "../components/Header";
import work1 from "../assets/images/mockup-raining.webp";
// import work2 from "../assets/images/mockup-purple-stars.webp";
import work3 from "../assets/images/mockup-dream.webp";

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

  return (
    <div>
      <Header />
      <div ref={pageRef}>
        <main></main>
      </div>
    </div>
  );
}
export default Work;
