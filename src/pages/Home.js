import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import Header from "../components/Header";
import ScrollTrigger from "gsap-trial/ScrollTrigger";
import work1 from "../assets/images/mockup-raining.webp";
import work2 from "../assets/images/mockup-affiche-rbm.webp";
import work3 from "../assets/images/mockup-purple.webp";
import work4 from "../assets/images/mockup-dream.webp";

gsap.registerPlugin(ScrollTrigger); // Enregistrez le plugin ScrollTrigger

function Home() {
  const pageRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({});

    // Animation de la transition de la page
    tl.fromTo(
      pageRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1, ease: "expo.out" }
    );
  }, []);

  const textRef = useRef(null);
  const maskRef = useRef(null);
  useEffect(() => {
    gsap.set(textRef.current, { y: "100%", overflow: "hidden" });
    gsap.set(maskRef.current, { y: "-100%", overflow: "hidden" });
    gsap
      .timeline()
      .fromTo(
        maskRef.current,
        { y: "0%" },
        { y: "0%", duration: 1.2, ease: "power4.out" }
      )
      .fromTo(
        textRef.current,
        { y: "100%" },
        { y: "0%", duration: 1, ease: "power4.out" },
        "-=1"
      );
  }, []);

  const myElement = useRef(null);

  useEffect(() => {
    gsap.from(myElement.current, {
      opacity: 0,
      y: 100,
      duration: 1.2,
      scrollTrigger: {
        // markers: true,
        trigger: myElement.current,
        start: "top 80%",
        end: "50% 80%",
        toggleActions: "play none none reverse",
      },
    });
  }, []);

  const newRef = useRef(null);
  const newMaskRef = useRef(null);

  useEffect(() => {
    gsap.set(newRef.current, { y: "100%", overflow: "hidden" });
    gsap.set(newMaskRef.current, { y: "-100%", overflow: "hidden" });
    gsap
      .timeline()
      .fromTo(
        newMaskRef.current,
        { y: "-100%" },
        { y: "0%", duration: 1.6, ease: "power4.out" }
      )
      .fromTo(
        newRef.current,
        { y: "100%" },
        { y: "0%", duration: 1, ease: "power4.out" },
        "-=1"
      );
  }, []);

  return (
    <div>
      <Header />
      <div>
        <div ref={pageRef}>
          <div>
            <main className="home-about">
              <div className="container-presentation">
                <section className="presentation">
                  <div className="responsive-presentation">
                    <div className="title">
                      <div ref={maskRef} className="mask">
                        <h1 ref={textRef}>
                          Hello, I’m Jeremy Beziat, <br /> a Designer With 3
                          years <br /> of experience.
                        </h1>
                      </div>
                    </div>
                  </div>
                  <div ref={newMaskRef} className="container-image">
                    <div ref={newRef}>
                      <img src={work1} alt="Raining-stars" />
                      <img src={work2} alt="Configurer votre table" />
                      <img src={work3} alt="Purple stars" />
                      <img src={work4} alt="DREAM II" />
                    </div>
                  </div>
                </section>
              </div>
              <section className="works">
                <h2 className="title-works">My works</h2>
                <div>
                  <a href="https://www.behance.net/gallery/159684055/Raining-Stars">
                    <h2>Raining Stars N°07</h2>
                    <h3>Poster</h3>
                  </a>
                </div>
                {/* <div>
                  <a href="/">
                    <h2>RBM</h2>
                    <h3>Poster</h3>
                  </a>
                </div> */}
                <div>
                  <a href="https://www.behance.net/gallery/161765241/Purple-Stars">
                    <h2>Purple Stars N°11</h2>
                    <h3>Poster</h3>
                  </a>
                </div>
                <div>
                  <a href="https://www.behance.net/gallery/161021241/DREAM-II">
                    <h2>Dream II</h2>
                    <h3>Book</h3>
                  </a>
                </div>
              </section>
              <section className="services">
                <h2 className="title-services">Services</h2>
                <div>
                  <h3>Strategy</h3>
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M14 8H8V14H6V8H0V6H6V0H8V6H14V8Z" fill="white" />
                  </svg>
                </div>
                <div>
                  <h3>Brand Development</h3>
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M14 8H8V14H6V8H0V6H6V0H8V6H14V8Z" fill="white" />
                  </svg>
                </div>
                <div>
                  <h3>Graphic Design</h3>
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M14 8H8V14H6V8H0V6H6V0H8V6H14V8Z" fill="white" />
                  </svg>
                </div>
                <div>
                  <h3>Web & Digital Design</h3>
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M14 8H8V14H6V8H0V6H6V0H8V6H14V8Z" fill="white" />
                  </svg>
                </div>
                <div>
                  <h3>Web Development</h3>
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M14 8H8V14H6V8H0V6H6V0H8V6H14V8Z" fill="white" />
                  </svg>
                </div>
                <div>
                  <h3>Marketing</h3>
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M14 8H8V14H6V8H0V6H6V0H8V6H14V8Z" fill="white" />
                  </svg>
                </div>
              </section>
            </main>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Home;
