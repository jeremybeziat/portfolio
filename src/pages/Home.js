import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import Header from "../components/Header";
import work1 from "../assets/images/mockup-raining.webp";

import { ScrollTrigger } from "gsap/ScrollTrigger"; // Importez ScrollTrigger

gsap.registerPlugin(ScrollTrigger); // Enregistrez le plugin ScrollTrigger

function Home() {

  // Animation avec GSAP pour la presentation

  const texteRefs = useRef([]); // Références pour les éléments de texte

  useEffect(() => {
    // Animation avec GSAP pour chaque élément de texte à l'arrivée du composant
    texteRefs.current.forEach((texteRef, index) => {
      gsap.from(texteRef, {
        opacity: 0, // Opacité initiale à 0
        y: 50, // Animation de déplacement vers le bas
        duration: 1, // Durée de l'animation en secondes
        delay: index * 0.5, // Délai d'animation pour chaque texte pour obtenir un effet de cascade
      });
    });
  }, []);
  const sectionRef = useRef(null);
  const textRefs = useRef([]);

  // Animation avec GSAP pour chaque élément de texte

  useEffect(() => {
    // Configuration de l'animation avec GSAP
    gsap.set(textRefs.current, { autoAlpha: 0 }); // Masquer les textes au début
    gsap.set(sectionRef.current, { overflow: "hidden" }); // Cacher le dépassement du texte
    gsap
      .timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          // markers: true,
          pin: true,
          anticipatePin: 1,
          start: "top", // Début de l'animation au centre de la section
          end: "bottom top", // Fin de l'animation au centre de la section
          scrub: true, // Animation en fonction du défilement
          onComplete: () => {
            gsap.set(sectionRef.current, { overflow: "auto" }); // Rétablir le défilement une fois l'animation terminée
          },
        },
      })
      .to(textRefs.current, { autoAlpha: 1, stagger: 8 }) // Faire apparaître les textes un par un avec un délai de 0.3s entre chaque
      .to({}, { duration: 8 }); // Ajouter un délai de 1s à la fin de l'animation pour bloquer la section
  }, []);
  return (
    <div>
      <Header />
      <main className="home-about">
        <div className="container-presentation">
          <section className="presentation">
            <h1 ref={(el) => (texteRefs.current[0] = el)}>
              Hello, I'm Jérémy Béziat,
              <br /> a Designer With 3 years of experience.
            </h1>
            <div>
              <p ref={(el) => (texteRefs.current[1] = el)}>
                I started as a graphic designer in 2021 and I reconverted in
                2022 to become a front-end developer with the graduation of my
                web/web mobile developer. I am now a designer UI training with
                Formasup81.
              </p>
              <p ref={(el) => (texteRefs.current[2] = el)}>
                The technologies I use every day : SCSS, Javascript, Wordpress,
                InDesign, Illustrator, Photoshop, Première Pro, After effects,
                Figma.
              </p>
              <div className="scroll">
                <span ref={(el) => (texteRefs.current[3] = el)}>Scroll Down</span>
              </div>
            </div>
          </section>
        </div>
        <section ref={sectionRef} className="introduction">
          <div ref={(el) => (textRefs.current[0] = el)}>
            <h2>
              When I start
              <br />
              <span>a project</span>
            </h2>
          </div>
          <div ref={(el) => (textRefs.current[1] = el)}>
            <h2>
              I search in my
              <br />
              <span>imagination</span>
            </h2>
          </div>
          <div ref={(el) => (textRefs.current[2] = el)}>
            <h2>
              I use my
              <br />
              <span>imagination</span>
            </h2>
          </div>
          <div ref={(el) => (textRefs.current[3] = el)}>
            <h2>
              And I create my
              <br />
              <span>universe</span>
            </h2>
          </div>
        </section>
        <section className="work-preview-container">
          <figure className="work-preview">
            <img
              src={work1}
              alt="raining stars N°07"
            />
            <figcaption>
              <a
                className="arrow-link"
                title="raining stars N°07"
                href="https://www.behance.net/gallery/159684055/Raining-Stars"
              >
                <svg
                  width="50"
                  height="50"
                  viewBox="0 0 50 50"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="25" cy="25" r="24.5" stroke="white" />
                  <path
                    d="M20.4 32L19 30.6L28.6 21H20V19H32V31H30V22.4L20.4 32Z"
                    fill="white"
                  />
                </svg>
              </a>
              <div className="work-preview-text">
                <p>Name : Raining Stars - N°07</p>
                <p>Author : Jérémy Béziat</p>
              </div>
            </figcaption>
          </figure>
        </section>
      </main>
    </div>
  );
}
export default Home;
