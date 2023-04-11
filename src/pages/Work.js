import React from "react";
import Header from "../components/Header";
import work1 from "../assets/images/mockup-raining.webp";

function Work() {
  return (
    <div>
      <Header />
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
      </main>
    </div>
  );
}
export default Work;
