import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";

import Header from "../components/Header";
import work1 from "../assets/images/mockup-raining.webp";
import work2 from "../assets/images/mockup-purple-stars.webp";
import work3 from "../assets/images/mockup-dream.webp";

function Work() {
  const pageRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();

    // Animation de la transition de la page
    tl.fromTo(
      pageRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1, ease: "power2.inOut" }
    );
  }, []);

  return (
    <div>
      <Header />
      <div ref={pageRef}>
        <main>
          <section className="work">
            <h1 className="last-work">
              Last <span>Work</span>
            </h1>
            <figure className="work-preview">
              <img src={work1} alt="raining stars N°07" />
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
          <section className="other-works">
            <h2 className="title-other-works">
              Other <span>Works</span>
            </h2>
            <figure className="work-preview">
              <img src={work2} alt="raining stars N°07" />
              <figcaption>
                <a
                  className="arrow-link"
                  title="purple stars N°11"
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
                  <p>Name : Purple Stars - N°11</p>
                  <p>Author : Jérémy Béziat</p>
                </div>
              </figcaption>
            </figure>
            <figure className="work-preview">
              <img src={work3} alt="DREAM II" />
              <figcaption>
                <a
                  className="arrow-link"
                  title="dream II Roman"
                  href="https://www.behance.net/gallery/161021241/DREAM-II"
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
                  <p>Name : DREAM II - Roman</p>
                  <p>Author : Jérémy Béziat</p>
                </div>
              </figcaption>
            </figure>
          </section>
        </main>
      </div>
    </div>
  );
}
export default Work;
