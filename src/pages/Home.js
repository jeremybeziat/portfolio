import React, { useEffect, useState, useRef } from "react";
import Header from "../components/Header";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
// import LocomotiveScroll from "locomotive-scroll";
import transformers from "../assets/images/mockup/transformers.webp";
import humains from "../assets/images/mockup/humains.webp";
import autumn from "../assets/images/mockup/autumn.webp";
import smile from "../assets/images/mockup/smile.webp";
import nuke from "../assets/images/mockup/nuke.webp";

function Home() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const images = [transformers, humains, autumn, smile, nuke];
    let loadedResources = 0;

    const loadImage = (src) => {
      const image = new Image();
      image.onload = () => {
        loadedResources++;
        const newProgress = (loadedResources / images.length) * 100;
        setProgress(newProgress);
        if (loadedResources === images.length) {
          setTimeout(() => {
            setLoading(false);
          }, 3000); // Change the timeout value as needed
        }
      };
      image.src = src;
    };

    images.forEach((src) => loadImage(src));
  }, []);

  const titleRef = useRef(null);

  useEffect(() => {
    if (!loading) {
      const lines = titleRef.current.querySelectorAll("span");
      gsap.from(lines, {
        opacity: 0,
        x: 80, // Décaler chaque ligne de 20 pixels vers le bas
        duration: 1,
        ease: "power3.out",
        stagger: 0.4, // Délai entre chaque animation de ligne
      });
    }
  }, [loading]);

  return (
    <>
      {loading ? (
        <div className="loader-wrapper absolute">
          <video
            className="logo-animation-desktop"
            autoPlay={true}
            playsInline
            muted
            src="video/logo.mp4"
            type="video/mp4"
          ></video>
          <video
            className="logo-animation-phone"
            autoPlay={true}
            playsInline
            muted
            src="video/logo1.mp4"
            type="video/mp4"
          ></video>
          <div className="loader">
            <span className="loader__label">
              LOADING {Math.round(progress)}%
            </span>
            <div className="loader__bar">
              <div
                className="loader__progress"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          </div>
        </div>
      ) : (
        <div data-scroll-container>
          <Header />
          <main className="home">
            <section className="presentation">
              <div>
                <h1 ref={titleRef}>
                  Prêt à donner vie à votre <span>vision</span> ?<br />
                  Ensemble, créons <span>une identité graphique</span> et{" "}
                  <span>une expérience web</span> qui reflètent parfaitement
                  l'essence de votre projet.
                </h1>
                <a className="link-form" href="/contact">
                  VOTRE VISION
                </a>
              </div>

              <div className="link-social-container">
                <ul className="link-social">
                  <li>
                    <a
                      title="https://twitter.com/EpureVision"
                      href="https://twitter.com/EpureVision"
                      target="u_blank"
                    >
                      TWITER
                    </a>
                  </li>
                  <li>
                    <a
                      title="https://www.instagram.com/epurevision/"
                      href="https://www.instagram.com/epurevision/"
                      target="u_blank"
                    >
                      INSTAGRAM
                    </a>
                  </li>
                  <li>
                    <a
                      title="https://www.behance.net/jeremybeziat"
                      href="https://www.behance.net/jeremybeziat"
                      target="u_blank"
                    >
                      BEHANCE
                    </a>
                  </li>
                </ul>
              </div>
            </section>
            <section className="introduction">
              <h2>
                ABOUT THE PROCESS WITH <br /> <span>EPUREVISION</span>
              </h2>
              <div className="text-introduction">
                <p>
                  Votre partenaire créatif pour un univers numérique
                  exceptionnel. Spécialisés dans le développement web et le
                  design graphique, nous fusionnons innovation et esthétique
                  pour donner vie à vos idées. Du design épuré au code optimisé,
                  chaque projet est une œuvre d'art interactive. Confiez-nous
                  votre vision, et nous la transformerons en une expérience en
                  ligne immersive et mémorable, reflétant l'essence unique de
                  votre entreprise. (FR)
                </p>
                <div className="line"></div>
                <p>
                  Your creative partner for an exceptional digital universe.
                  Specialized in web development and graphic design, we merge
                  innovation and aesthetics to bring your ideas to life. From
                  sleek design to optimized code, each project is an interactive
                  work of art. Entrust us with your vision, and we will
                  transform it into an immersive and memorable online
                  experience, reflecting the unique essence of your business.
                  (EN)
                </p>
              </div>
              <ul className="application-phone">
                <li>ADOBE CREATIVE CLOUD</li>
                <li>FIGMA</li>
              </ul>
              <ul className="application-desktop">
                <li>INDESIGN</li>
                <li>ILLUSTRATOR</li>
                <li>PHOTOSHOP</li>
                <li>LIGHTROOM</li>
                <li>AFTER EFFECTS</li>
                <li>PREMIERE PRO</li>
                <li>FIGMA</li>
              </ul>
            </section>
            <section className="productivite">
              <div className="bg-productivite"> </div>
              <h2>productivité</h2>
              <div className="container-details">
                <div className="details">
                  <h3>WEB</h3>
                  <p>Développement</p>
                  <ul>
                    <li>- Web design</li>
                    <li>- Développement web</li>
                    <li>- Hébergement</li>
                    <li>- E-commerce</li>
                  </ul>
                </div>
                <div className="details">
                  <h3>BRANDING</h3>
                  <p>Graphisme</p>
                  <ul>
                    <li>- Design de logo</li>
                    <li>- Identité de marque</li>
                    <li>- Création de contenu</li>
                    <li>- Réalisation vidéo</li>
                  </ul>
                </div>
              </div>
            </section>
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
          </main>
        </div>
      )}
    </>
  );
}
export default Home;
