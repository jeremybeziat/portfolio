import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import works from "../assets/images/purplestars.webp";
import works2 from "../assets/images/rainingstars.webp";
import works3 from "../assets/images/roman.webp";
function Home() {
  return (
    <div>
      <Header />
      <main>
        <section className="presentation">
          <div className="presentation-content">
            <div className="works-name">
              <div className="name">
                <h1>jErEmy bEziAt</h1>
                <Link to="/profil" title="about">
                  <svg
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15.4454 10.9099L12.9264 10.8657L12.9264 4.59014L2.18718 15.3293L0.419417 13.5616L11.1586 2.82237L4.88303 2.82237L4.83883 0.303301H15.4454V10.9099Z"
                      fill="white"
                    />
                  </svg>
                </Link>
              </div>
              <p className="web-developer">Front-End Developer</p>
              <hr />
              <p className="designer-ui">Designer UI</p>
              <hr className="hr" />
              <p className="graphic-designer">Graphic Designer</p>
            </div>
          </div>
        </section>
        <section className="about">
          <h2>AbOut</h2>
          <p>
            I started as a graphic designer in 2021 and I reconverted in 2022 to
            become a front-end developer with the graduation of my web/web
            mobile developer. I am now a designer UI training with Formasup81.
            <br />
            <br />
            The technologies I use every day : SCSS, Javascript, Wordpress,
            InDesign, Illustrator, Photoshop, Figma.
          </p>
        </section>
        <section className="works">
          <p className="recent">Recent</p>
          <h2>wOrks</h2>
          <div className="works-container">
            <div className="works-cards">
              <figure>
                <a href="/">
                  <img
                    fetchpriority="high"
                    rel="preload"
                    src={works2}
                    alt="works"
                    as="image"
                    type="image/webp"
                  />
                  <figcaption>
                    <p>Raining stars 07</p>
                    <svg
                      width="39"
                      height="39"
                      viewBox="0 0 39 39"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        cx="19.5"
                        cy="19.5"
                        r="18.525"
                        stroke="white"
                        strokeWidth="1.95"
                      />
                      <path
                        d="M22.037 26.4444L20.3519 24.6991L24.625 20.4259H10V18.0185H24.625L20.3519 13.7454L22.037 12L29.2593 19.2222L22.037 26.4444Z"
                        fill="white"
                      />
                    </svg>
                  </figcaption>
                </a>
              </figure>
            </div>
            <div className="works-cards">
              <figure>
                <a href="/">
                  <img
                    fetchpriority="high"
                    rel="preload"
                    src={works}
                    alt="works"
                    as="image"
                    type="image/webp"
                  />
                  <figcaption>
                    <p>Purple stars</p>
                    <svg
                      width="39"
                      height="39"
                      viewBox="0 0 39 39"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        cx="19.5"
                        cy="19.5"
                        r="18.525"
                        stroke="white"
                        strokeWidth="1.95"
                      />
                      <path
                        d="M22.037 26.4444L20.3519 24.6991L24.625 20.4259H10V18.0185H24.625L20.3519 13.7454L22.037 12L29.2593 19.2222L22.037 26.4444Z"
                        fill="white"
                      />
                    </svg>
                  </figcaption>
                </a>
              </figure>
            </div>
            <div className="works-cards">
              <figure>
                <a href="/">
                  <img
                    fetchpriority="high"
                    rel="preload"
                    src={works3}
                    alt="works"
                    as="image"
                    type="image/webp"
                  />
                  <figcaption>
                    <p>Dream II</p>
                    <div>
                      <svg
                        width="39"
                        height="39"
                        viewBox="0 0 39 39"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle
                          cx="19.5"
                          cy="19.5"
                          r="18.525"
                          stroke="white"
                          strokeWidth="1.95"
                        />
                        <path
                          d="M22.037 26.4444L20.3519 24.6991L24.625 20.4259H10V18.0185H24.625L20.3519 13.7454L22.037 12L29.2593 19.2222L22.037 26.4444Z"
                          fill="white"
                        />
                      </svg>
                    </div>
                  </figcaption>
                </a>
              </figure>
            </div>
            <div className="works-cards">
              <a className="other-projects" href="/">
                See other projects
                <svg
                  width="39"
                  height="39"
                  viewBox="0 0 39 39"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="19.5"
                    cy="19.5"
                    r="18.525"
                    stroke="white"
                    strokeWidth="1.95"
                  />
                  <path
                    d="M22.037 26.4444L20.3519 24.6991L24.625 20.4259H10V18.0185H24.625L20.3519 13.7454L22.037 12L29.2593 19.2222L22.037 26.4444Z"
                    fill="white"
                  />
                </svg>
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
export default Home;
