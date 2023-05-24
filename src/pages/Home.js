import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import Header from "../components/Header";
import ScrollTrigger from "gsap-trial/ScrollTrigger";
import work1 from "../assets/images/mockup-raining.webp";
import work2 from "../assets/images/mockup-affiche-rbm.webp";
import work3 from "../assets/images/mockup-purple.webp";
import work4 from "../assets/images/mockup-dream.webp";

gsap.registerPlugin(ScrollTrigger); // Enregistrez le plugin ScrollTrigger

function Home() {
  const pageRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({});

    // Animation de la transition de la page
    tl.fromTo(
      pageRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1, ease: "expo.out" }
    );
  }, []);

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

  const myElement = useRef(null);

  useEffect(() => {
    gsap.from(myElement.current, {
      opacity: 0,
      y: 100,
      duration: 1,
      scrollTrigger: {
        // markers: true,
        trigger: myElement.current,
        start: "top 80%",
        end: "50% 80%",
        toggleActions: "play none none reverse",
      },
    });
  }, []);

  return (
    <div>
      <Header />
      <div>
        <div ref={pageRef}>
          <div>
            <main className="home-about">
              <div className="container-presentation">
                <section className="presentation">
                  <div className="responsive-presentation">
                    <div className="title">
                      <div ref={maskRef} className="mask">
                        <h1 ref={textRef}>
                          Hello, I’m Jeremy Beziat, <br /> a Designer With 3
                          years <br /> of experience.
                        </h1>
                      </div>
                    </div>
                  </div>
                  <div className="container-image">
                    <img src={work1} alt="Raining-stars" />
                    <img src={work2} alt="Configurer votre table" />
                    <img src={work3} alt="Purple stars" />
                    <img src={work4} alt="DREAM II" />
                  </div>
                </section>
              </div>
            </main>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Home;
