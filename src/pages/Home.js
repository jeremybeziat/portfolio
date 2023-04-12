import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import Header from "../components/Header";
import work1 from "../assets/images/mockup-raining.webp";

function Home() {
  const texteRef1 = useRef(null); // Référence pour le premier élément de texte
  const texteRef2 = useRef(null); // Référence pour le deuxième élément de texte
  const texteRef3 = useRef(null); // Référence pour le troisième élément de texte

  useEffect(() => {
    // Animation avec GSAP pour le premier élément de texte
    gsap.from(texteRef1.current, {
      opacity: 0,
      duration: 1,
      delay: 0.5,
    });

    // Animation avec GSAP pour le deuxième élément de texte
    gsap.from(texteRef2.current, {
      opacity: 0,
      duration: 1,
      delay: 1,
    });

    // Animation avec GSAP pour le troisième élément de texte
    gsap.from(texteRef3.current, {
      opacity: 0,
      duration: 1,
      delay: 1.5,
    });
  }, []);
  return (
    <div>
      <Header />
      <main className="home-about">
        <div className="container-presentation">
          <section className="presentation">
            <h1 ref={texteRef1}>
              Hello, I'm Jérémy Béziat,
              <br /> a Designer With 3 years of experience.
            </h1>
            <div>
              <p ref={texteRef2}>
                I started as a graphic designer in 2021 and I reconverted in
                2022 to become a front-end developer with the graduation of my
                web/web mobile developer. I am now a designer UI training with
                Formasup81.
              </p>
              <p ref={texteRef3}>
                The technologies I use every day : SCSS, Javascript, Wordpress,
                InDesign, Illustrator, Photoshop, Première Pro, After effects,
                Figma.
              </p>
              <div className="scroll">
                <span>Scroll Down</span>
              </div>
            </div>
          </section>
        </div>
        <section className="introduction">
          <h2>
            When I start
            <br />
            <span>a project</span>
          </h2>
          <h2 className="">
            I search in my
            <br />
            <span>imagination</span>
          </h2>
          <h2>
            I use my
            <br />
            <span>imagination</span>
          </h2>
          <h2>
            And I create my
            <br />
            <span>universe</span>
          </h2>
        </section>
        <section className="work-preview-container">
          <figure className="work-preview">
            <img
              src={work1}
              loading="lazy"
              rel="preload"
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
