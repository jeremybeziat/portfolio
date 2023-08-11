import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import Header from "../components/Header";

function Contact() {
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
        { y: "0%" },
        { y: "0%", duration: 1.5, ease: "power4.out" }
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
      <main className="contact">
        <div ref={maskRef}>
          <h1 ref={textRef}>Let's talk</h1>
        </div>
        <div ref={newMaskRef}>
          <h2 ref={newRef}>Let's Collaborate on Your Next Project!</h2>
        </div>
        <a className="mail-about-link" href="mailto:jeremybeziat.pro@gmail.com">
          jeremybeziat.pro@gmail.com
        </a>
        <div>
          <ul>
            <li>
              <a href="https://twitter.com/SkarryxD" target="u_blank">
                Twitter
              </a>
              <a
                href="https://www.instagram.com/skarryx.design"
                target="u_blank"
              >
                Instagram
              </a>
              <a href="https://www.behance.net/jeremybeziat" target="u_blank">
                Behance
              </a>
            </li>
          </ul>
        </div>
      </main>
    </div>
  );
}

export default Contact;
