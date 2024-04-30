import React from "react";
import transformers from "../../assets/images/mockup/transformers.webp";
import humains from "../../assets/images/mockup/humains.webp";
import autumn from "../../assets/images/mockup/autumn.webp";
import smile from "../../assets/images/mockup/smile.webp";
import nuke from "../../assets/images/mockup/nuke.webp";
import { Link } from "react-router-dom";

function projet() {
  return (
    <div>
      <section className="work-section">
        <div className="container-work">
          <h2>WORK</h2>
          <div className="container-work-phone">
            <ul>
              <li>
                <Link
                  to="https://www.behance.net/gallery/190210773/TRANSFORMERS-POSTER-CONCEPT"
                  target="u_blank"
                >
                  TRANSFORMERS
                </Link>
              </li>
              <li>
                <Link
                  to="https://www.behance.net/gallery/181684991/On-est-tout-humains"
                  target="u_blank"
                >
                  NOUS SOMMES TOUS HUMAINS
                </Link>
              </li>
              <li>
                <Link
                  to="https://www.behance.net/gallery/180310723/Autumn"
                  target="u_blank"
                >
                  AUTUMN
                </Link>
              </li>
              <li>
                <Link
                  to="https://www.behance.net/gallery/179017513/Smile"
                  target="u_blank"
                >
                  SMILE
                </Link>
              </li>
              <li>
                <Link
                  to="https://www.behance.net/gallery/178633613/Nuke"
                  target="u_blank"
                >
                  NUKE
                </Link>
              </li>
              <li>
                <Link
                  to="https://www.behance.net/jeremybeziat"
                  target="u_blank"
                >
                  OTHER WORK
                </Link>
              </li>
            </ul>
          </div>
          <div className="container-work-desktop">
            <div className="transformers">
              <a
                href="https://www.behance.net/gallery/190210773/TRANSFORMERS-POSTER-CONCEPT"
                target="u_blank"
              >
                <img
                  src={transformers}
                  alt="poster concept transformers EpureVision"
                />
                <div className="figcaption">
                  <h3>TRANSFORMERS</h3>
                  <p>2024</p>
                </div>
              </a>
            </div>
            <div className="humains">
              <a
                href="https://www.behance.net/gallery/181684991/On-est-tout-humains"
                target="u_blank"
              >
                <img src={humains} alt="poster humains EpureVision" />
                <div className="figcaption">
                  <h3>NOUS SOMMES TOUS HUMAINS</h3>
                  <p>2023 </p>
                </div>
              </a>
            </div>
            <div className="autumn">
              <a
                href="https://www.behance.net/gallery/180310723/Autumn"
                target="u_blank"
              >
                <img src={autumn} alt="poster autumn EpureVision" />
                <div className="figcaption">
                  <h3>AUTUMN</h3>
                  <p>2023</p>
                </div>
              </a>
            </div>
            <div className="smile">
              <a
                href="https://www.behance.net/gallery/179017513/Smile"
                target="u_blank"
              >
                <img src={smile} alt="poster smile EpureVision" />
                <div className="figcaption">
                  <h3>SMILE</h3>
                  <p>2023</p>
                </div>
              </a>
            </div>
            <div className="nuke">
              <a
                href="https://www.behance.net/gallery/178633613/Nuke"
                target="u_blank"
              >
                <img src={nuke} alt="poster nuke EpureVision" />
                <div className="figcaption">
                  <h3>NUKE</h3>
                  <p>2023</p>
                </div>
              </a>
            </div>
            <div className="other-work">
              <a href="/work">
                <div className="figcaption">
                  <p>OTHER WORK</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default projet;
