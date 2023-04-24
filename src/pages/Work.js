import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
// import messages from "../components/langue";

import Header from "../components/Header";
import work1 from "../assets/images/mockup-raining.webp";

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

  // const [language, setLanguage] = useState("Fr");

  // // Fonction pour basculer entre les langues
  // const toggleLanguage = () => {
  //   if (language === "Fr") {
  //     setLanguage("En");
  //   } else {
  //     setLanguage("Fr");
  //   }
  // };

  return (
    <div>
      <Header />
      {/* <button className="btn-translate" onClick={toggleLanguage}>
        {language === "Fr" ? "En" : "Fr"}
      </button> */}
      <div ref={pageRef}>
        <main className="work">
          <section className="last-project">
            <h1>
              My last <span>project</span>
            </h1>
            <figure>
              <a
                title="Behance raining stars"
                href="https://www.behance.net/gallery/159684055/Raining-Stars"
              >
                <img src={work1} alt="raining-stars" />
              </a>
              <figcaption>
                <div className="title-author">
                  <p>Title : Raining Stars - N°07</p>
                  <p>Name : Jeremy Beziat</p>
                </div>
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
              </figcaption>
            </figure>
          </section>
        </main>
      </div>
    </div>
  );
}
export default Work;
