import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import Header from "../components/Header";
import ScrollTrigger from "gsap-trial/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger); // Enregistrez le plugin ScrollTrigger

function Home() {
  const textRef = useRef(null);
  const maskRef = useRef(null);
  useEffect(() => {
    gsap.set(textRef.current, { y: "100%", overflow: "hidden" });
    gsap.set(maskRef.current, { y: "-100%", overflow: "hidden" });
    gsap
      .timeline()
      .fromTo(
        maskRef.current,
        { y: "0%" },
        { y: "0%", duration: 1.2, ease: "power4.out" }
      )
      .fromTo(
        textRef.current,
        { y: "100%" },
        { y: "0%", duration: 1, ease: "power4.out" },
        "-=1"
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
        { y: "0%", duration: 1.6, ease: "power4.out" }
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
      <main className="home">
        <section className="presentation">
          <h1>
            Jérémy Béziat <br />
          </h1>
          <span>Designer With 3 years of experience.</span>
          <span className="scroll">SCROLL DOWN</span>
        </section>
        <section></section>
        <section className="deux"></section>
      </main>
    </div>
  );
}
export default Home;
