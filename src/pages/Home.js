import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import Header from "../components/Header";
import work1 from "../assets/images/mockup-raining.webp";

function Home() {
  const myElementRef = useRef(null);

  useEffect(() => {
    // Animation à effectuer une fois que le composant est monté
    const myElement = myElementRef.current;
    gsap.from(myElement, { opacity: 0, duration: 1, y: -50 });

    // Nettoyage de l'animation lors du démontage du composant
    return () => {
      gsap.killTweensOf(myElement);
    };
  }, []);
  return (
    <div>
      <Header />
      <main className="home-about">
        <div className="container-presentation">
          <section className="presentation">
            <h1 ref={myElementRef}>
              Hello, I'm Jérémy Béziat,
              <br /> a Designer With 3 years of experience.
            </h1>
            <div>
              <p>
                I started as a graphic designer in 2021 and I reconverted in
                2022 to become a front-end developer with the graduation of my
                web/web mobile developer. I am now a designer UI training with
                Formasup81.
              </p>
              <p>
                The technologies I use every day : SCSS, Javascript, Wordpress,
                InDesign, Illustrator, Photoshop, Première Pro, After effects,
                Figma.
              </p>
            </div>
            <span>Scroll Down</span>
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
            <img src={work1} loading="lazy" rel="preload" alt="raining stars N°07" />
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
