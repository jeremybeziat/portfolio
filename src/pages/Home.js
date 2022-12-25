import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import jeremy from "../assets/images/jeremy-n&b.webp";
import works2 from "../assets/images/rainingstars.webp";
// import works3 from "../assets/images/murale.jpg";

function Home() {
  return (
    <div>
      <Header />
      <main>
        <section className="presentation">
          <div className="name">
            <h1>jErEmy bEziAt</h1>
            <Link to="/profil">
              <svg
                width="25"
                height="25"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.4454 10.9099L12.9264 10.8657L12.9264 4.59014L2.18718 15.3293L0.419417 13.5616L11.1586 2.82237L4.88303 2.82237L4.83883 0.303301H15.4454V10.9099Z"
                  fill="white"
                  fillOpacity="0.6"
                />
              </svg>
            </Link>
          </div>
          <div className="presentation-content">
            <div>
              <p>Web Developer</p>
              <hr />
              <p>Designer UI</p>
              <hr />
              <p>Graphic Designer</p>
            </div>
            <img src={jeremy} alt="jeremy-beziat" />
          </div>
        </section>
        <section className="works">
          <h2>wOrks</h2>
          <hr />
          <div className="works-cards">
            <figure>
              <img src={works2} alt="works" />
              <a href="/">
                <figcaption>
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
            <figure>
              <img src={works2} alt="works" />
              <a href="/">
                <figcaption>
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
            <figure>
              <img src={works2} alt="works" />
              <a href="/">
                <figcaption>
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
        </section>
      </main>
      <Footer />
    </div>
  );
}
export default Home;
