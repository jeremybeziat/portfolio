import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import works from "../assets/images/purplestars.webp";
import works2 from "../assets/images/rainingstars.webp";
import works3 from "../assets/images/roman.webp";
import works4 from "../assets/images/creartor.webp";

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
                <Link to="/profil" title="profil">
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
              <hr className="hr-last" />
              <p className="graphic-designer">Graphic Designer</p>
            </div>
          </div>
        </section>
        <section className="works">
          <p className="recent">Recent</p>
          <h2>wOrks</h2>
          <div className="works-container">
            <div className="works-cards">
              <figure>
                <img src={works2} alt="works" />
                <a href="/">
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
                <img src={works} alt="works" />
                <a href="/">
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
                <img src={works3} alt="works" />
                <a href="/">
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
              <figure>
                <img src={works4} alt="works" />
                <a href="/">
                  <figcaption>
                    <p>Creartor</p>
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
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
export default Home;
