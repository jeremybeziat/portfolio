import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap-trial/ScrollTrigger";

import Header from "../components/Header";
import marguerite from "../assets/images/mockup/marguerite-mockup-affiche-skarrx-design.webp";
import linear from "../assets/images/mockup/linear-mockup-affiche-wall-skarryx-design.webp";
import joker from "../assets/images/mockup/joker-affiche-mock-up-skarrx-design.webp";
import flowers from "../assets/images/mockup/flowers-mockup-affiche-wall-jeremy-beziat.webp";
import nuclear from "../assets/images/mockup/billboard2-mockup-nuclear-jeremy-beziat.webp";
import help from "../assets/images/mockup/mockup-help3.webp";
import smile from "../assets/images/mockup/mockup-smile.webp";
import raining from "../assets/images/mockup/mockup-raining.webp";
import Footer from "../components/Footer";

gsap.registerPlugin(ScrollTrigger); // Enregistrez le plugin ScrollTrigger

function Work() {
  const titleRef = useRef(null);
  const titleMaskRef = useRef(null);
  useEffect(() => {
    gsap.set(titleRef.current, { y: "100%", overflow: "hidden" });
    gsap.set(titleMaskRef.current, { y: "-100%", overflow: "hidden" });
    gsap
      .timeline()
      .fromTo(
        titleMaskRef.current,
        { y: "0%" },
        { y: "0%", duration: 1.2, ease: "power4.out" }
      )
      .fromTo(
        titleRef.current,
        { y: "100%" },
        { y: "0%", duration: 1, ease: "power4.out" },
        "-=1"
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
        { y: "0%", duration: 1.5, ease: "power4.out" }
      )
      .fromTo(
        textRef.current,
        { y: "100%" },
        { y: "0%", duration: 1, ease: "power4.out" },
        "-=1"
      );
  }, []);

  const cardContainerRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    // Si la largeur de l'écran est supérieure ou égale à 768px, animer deux cartes à la fois
    const staggerValue = window.innerWidth >= 768 ? 2 : 1;

    cardsRef.current.forEach((card, index) => {
      gsap.from(card, {
        opacity: 0,
        y: 20,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: card,
          start: "top 50%",
          stagger: {
            each: staggerValue,
          },
        },
      });
    });
  }, []);

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
      <main className="work">
        <div className="work-titles">
          <div ref={titleMaskRef}>
            <h1 className="title-work" ref={titleRef}>
              Design and Graphics
            </h1>
          </div>
          <div ref={maskRef}>
            <h2 className="subtitle-work" ref={textRef}>
              Explore my work
            </h2>
          </div>
          <span className="scroll" ref={scrollRef}>
            SCROLL DOWN
          </span>
        </div>

        <section className="all-work">
          <div className="card-container" ref={cardContainerRef}>
            <a
              className="work-first-link"
              href="/work/smile"
              ref={(el) => (cardsRef.current[0] = el)}
            >
              <figure>
                <img src={smile} alt="Smile" />
                <figcaption>
                  <h3>Smile</h3>
                  <h4>2023</h4>
                </figcaption>
              </figure>
            </a>
            <a href="/work/nuclear" ref={(el) => (cardsRef.current[1] = el)}>
              <figure>
                <img src={nuclear} alt="Nuclear" />
                <figcaption>
                  <h3>Nuclear</h3>
                  <h4>2023</h4>
                </figcaption>
              </figure>
            </a>
            <a href="/work/flowers" ref={(el) => (cardsRef.current[2] = el)}>
              <figure>
                <img src={flowers} alt="Flowers" />
                <figcaption>
                  <h3>Flowers</h3>
                  <h4>2023</h4>
                </figcaption>
              </figure>
            </a>
            <a href="/work/joker" ref={(el) => (cardsRef.current[3] = el)}>
              <figure>
                <img src={joker} alt="Joker" />
                <figcaption>
                  <h3>Joker</h3>
                  <h4>2023</h4>
                </figcaption>
              </figure>
            </a>
            <a href="/work/marguerite" ref={(el) => (cardsRef.current[4] = el)}>
              <figure>
                <img src={marguerite} alt="Marguerite" />
                <figcaption>
                  <h3>Marguerite</h3>
                  <h4>2023</h4>
                </figcaption>
              </figure>
            </a>
            <a
              href="/work/help"
              ref={(el) => (cardsRef.current[5] = el)}
            >
              <figure>
                <img src={help} alt="Help" />
                <figcaption>
                  <h3>Sometimes I need help</h3>
                  <h4>2023</h4>
                </figcaption>
              </figure>
            </a>
            <a
              href="/work/linear-design"
              ref={(el) => (cardsRef.current[6] = el)}
            >
              <figure>
                <img src={linear} alt="Linear Design" />
                <figcaption>
                  <h3>Linear Design</h3>
                  <h4>2023</h4>
                </figcaption>
              </figure>
            </a>
            <a
              href="/work/raining-stars"
              ref={(el) => (cardsRef.current[7] = el)}
            >
              <figure>
                <img src={raining} alt="Raining Stars" />
                <figcaption>
                  <h3>Raining Stars N°07</h3>
                  <h4>2023</h4>
                </figcaption>
              </figure>
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Work;
