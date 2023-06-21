import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import Header from "../components/Header";

function Profil() {
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
      <div ref={pageRef}></div>
    </div>
  );
}
export default Profil;
