import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import Header from "../components/Header";
import ScrollTrigger from "gsap-trial/ScrollTrigger";
import marguerite from "../assets/images/mockup/marguerite-mockup-affiche-skarrx-design.webp";
import linear from "../assets/images/mockup/linear-mockup-affiche-wall-skarryx-design.webp";
import flowers from "../assets/images/mockup/flowers-mockup-affiche-wall-jeremy-beziat.webp";
import joker from "../assets/images/mockup/joker-affiche-mock-up-skarrx-design.webp";
import Footer from "../components/Footer";

gsap.registerPlugin(ScrollTrigger); // Enregistrez le plugin ScrollTrigger

function Home() {
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

  const newRef = useRef(null);
  const newMaskRef = useRef(null);

  useEffect(() => {
    gsap.set(newRef.current, { y: "100%", overflow: "hidden" });
    gsap.set(newMaskRef.current, { y: "-100%", overflow: "hidden" });
    gsap
      .timeline()
      .fromTo(
        newMaskRef.current,
        { y: "0%" },
        { y: "0%", duration: 1.5, ease: "power4.out" }
      )
      .fromTo(
        newRef.current,
        { y: "100%" },
        { y: "0%", duration: 1, ease: "power4.out" },
        "-=1"
      );
  }, []);

  const scrollRef = useRef(null);

  useEffect(() => {
    const textElement = scrollRef.current;

    gsap.to(textElement, {
      opacity: 0,
      y: 20,
      duration: 0.8,
      ease: "power3.out",
      scrollTrigger: {
        // markers: true,
        trigger: textElement,
        start: "top 90%", // Démarrer l'animation lorsque 80% du texte est visible
      },
    });
  }, []);

  const cardContainerRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    // Si la largeur de l'écran est supérieure ou égale à 768px, animer deux cartes à la fois
    const staggerValue = window.innerWidth >= 768 ? 2 : 1;

    cardsRef.current.forEach((card, index) => {
      gsap.from(card, {
        opacity: 0,
        y: 20,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: card,
          start: "top 50%",
          stagger: {
            each: staggerValue,
          },
        },
      });
    });
  }, []);

  return (
    <div>
      <Header />
      <main className="home">
        <section className="presentation">
          <div ref={maskRef}>
            <h1 ref={textRef}>Jérémy Béziat</h1>
          </div>
          <div ref={newMaskRef}>
            <div ref={newRef}>
              <span>Designer With 3 years of experience.</span>
            </div>
          </div>
          <span className="scroll" ref={scrollRef}>
            SCROLL DOWN
          </span>
        </section>

        <section className="featured-work">
          <h2>Featured work</h2>
          <div className="card-container" ref={cardContainerRef}>
            <a href="/work/flowers" ref={(el) => (cardsRef.current[0] = el)}>
              <figure>
                <img src={flowers} alt="Sometimes i need help" />
                <figcaption>
                  <h3>Sometimes I need help</h3>
                  <h4>2023</h4>
                </figcaption>
              </figure>
            </a>
            <a href="/work/marguerite" ref={(el) => (cardsRef.current[1] = el)}>
              <figure>
                <img src={marguerite} alt="Marguerite" />
                <figcaption>
                  <h3>Marguerite</h3>
                  <h4>2023</h4>
                </figcaption>
              </figure>
            </a>
            <a
              href="/work/linear-design"
              ref={(el) => (cardsRef.current[2] = el)}
            >
              <figure>
                <img src={linear} alt="Linear Design" />
                <figcaption>
                  <h3>Linear Design</h3>
                  <h4>2023</h4>
                </figcaption>
              </figure>
            </a>
            <a href="/work/joker" ref={(el) => (cardsRef.current[3] = el)}>
              <figure>
                <img src={joker} alt="Joker" />
                <figcaption>
                  <h3>Joker</h3>
                  <h4>2023</h4>
                </figcaption>
              </figure>
            </a>
          </div>
          <a href="/work">
            <svg
              viewBox="0 0 343 56"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.27161 54.3849H0.870728L20.026 1.92567H27.9347L47.1625 54.3849H39.6891L34.9728 41.3245H12.9153L8.27161 54.3849ZM23.0734 13.2447L15.092 35.1571H32.8687L24.8148 13.2447C24.452 12.2289 24.0892 10.9954 23.9441 10.1973C23.799 10.9228 23.4362 12.1563 23.0734 13.2447Z"
                fill="#121212"
              />
              <path
                d="M59.9406 54.3849H53.1202V0.982422H59.9406V54.3849Z"
                fill="#121212"
              />
              <path
                d="M76.9463 54.3849H70.1259V0.982422H76.9463V54.3849Z"
                fill="#121212"
              />
              <path
                d="M114.445 54.3849L102.836 18.9042H109.874L115.751 37.3338C116.549 39.9459 117.275 42.6305 117.928 45.7505C118.508 42.6305 119.452 39.6557 120.25 37.3338L126.199 18.9042H133.165L139.042 37.3338C139.623 39.0752 140.784 43.211 141.364 45.7505C141.944 42.9208 142.597 40.4538 143.613 37.3338L149.563 18.9042H156.674L144.557 54.3849H138.099L131.931 35.3748C130.771 31.8194 130.045 29.0623 129.682 27.1032C129.319 28.8446 128.666 31.1664 127.36 35.4473L121.193 54.3849H114.445Z"
                fill="#121212"
              />
              <path
                d="M158.569 36.6083C158.569 25.652 166.405 17.9609 177.071 17.9609C187.664 17.9609 195.501 25.652 195.501 36.6083C195.501 47.5645 187.664 55.2556 177.071 55.2556C166.405 55.2556 158.569 47.5645 158.569 36.6083ZM165.462 36.6083C165.462 44.0091 170.178 49.1607 177.071 49.1607C183.891 49.1607 188.68 44.0091 188.68 36.6083C188.68 29.2074 183.891 24.0558 177.071 24.0558C170.178 24.0558 165.462 29.2074 165.462 36.6083Z"
                fill="#121212"
              />
              <path
                d="M223.367 18.6139V24.8539H220.319C213.862 24.8539 209.871 28.772 209.871 35.5924V54.3849H203.05V18.9767H209.436L209.871 24.346C211.322 20.6456 214.877 18.1786 219.739 18.1786C220.972 18.1786 221.988 18.3237 223.367 18.6139Z"
                fill="#121212"
              />
              <path
                d="M236.729 54.3849H229.909V0.982422H236.729V35.5924L252.474 18.9042H261.036L247.468 33.0529L260.963 54.3849H253.127L242.751 37.9869L236.729 44.2994V54.3849Z"
                fill="#121212"
              />
              <path
                d="M294.29 2.38473V10.5031H329.158L290.231 49.4305L295.954 55.154L334.882 16.2265V51.0948H343V2.38473H294.29Z"
                fill="#121212"
              />
            </svg>
          </a>
        </section>
      </main>
      <Footer />
    </div>
  );
}
export default Home;
