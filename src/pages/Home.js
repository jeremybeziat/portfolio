import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import Header from "../components/Header";
import ScrollTrigger from "gsap-trial/ScrollTrigger";
import work1 from "../assets/images/mockup-raining.webp";
import work2 from "../assets/images/marguerite-mockup-affiche-skarrx-design.webp";
import work3 from "../assets/images/joker-affiche-mock-up-skarrx-design.webp";
import work4 from "../assets/images/mockup-dream.webp";
import work1Phone from "../assets/images/mockup-rainingstars-phone.webp";
import work2Phone from "../assets/images/mockup-purple-phone.webp";
import work3Phone from "../assets/images/linear-design-mockup-phone.webp";
import work4Phone from "../assets/images/mockup-dream-phone.webp";

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

  const [expandedIndex, setExpandedIndex] = useState(null);
  const [svgStates, setSvgStates] = useState(Array(3).fill("normal"));

  const toggleAccordion = (index) => {
    if (index === expandedIndex) {
      setExpandedIndex(null); // Rétracte si déjà ouvert
    } else {
      setExpandedIndex(index); // Sinon, étend l'élément correspondant
    }

    // Mise à jour de l'état du SVG
    const newSvgStates = svgStates.map((state, i) =>
      i === index ? (state === "normal" ? "expanded" : "normal") : state
    );
    setSvgStates(newSvgStates);
  };

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
                      <div className="presentation-img-desktop">
                        <img rel="preload" src={work1} alt="Raining-stars" />
                        <img rel="preload" src={work2} alt="Linear Design" />
                        <img rel="preload" src={work3} alt="Purple stars" />
                        <img rel="preload" src={work4} alt="DREAM II" />
                      </div>
                      <div className="presentation-img-phone">
                        <img src={work1Phone} alt="Raining-stars" />
                        <img src={work2Phone} alt="Linear Design" />
                        <img src={work3Phone} alt="Purple stars" />
                        <img src={work4Phone} alt="DREAM II" />
                      </div>
                    </div>
                  </div>
                </section>
              </div>
              <section className="aboutmore">
                <div className="aboutmore-title">
                  <svg
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M14 8H8V14H6V8H0V6H6V0H8V6H14V8Z" fill="white" />
                  </svg>
                  <h2>about me</h2>
                </div>
                <p>
                  I started as a graphic designer in 2021 and I reconverted in
                  2022 to become a front-end developer with the graduation of my
                  web/web mobile developer. I am now a designer UI training with
                  Formasup81.
                </p>
                <p>
                  The technologies I use every day : SCSS, Javascript,
                  Wordpress, InDesign, Illustrator, Photoshop, Premiere Pro,
                  After Effects, Figma.
                </p>
              </section>
              <section className="works">
                <h2 className="title-works">My works</h2>
                <div>
                  <a
                    className="raining"
                    href="https://www.behance.net/gallery/159684055/Raining-Stars"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <h3>Raining Stars N°07</h3>
                    <h4>Poster</h4>
                  </a>
                </div>
                <div>
                  <a
                    className="purple"
                    href="https://www.behance.net/gallery/161765241/Purple-Stars"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <h3>Purple Stars N°11</h3>
                    <h4>Poster</h4>
                  </a>
                </div>
                <div>
                  <a
                    className="dream"
                    href="https://www.behance.net/gallery/161021241/DREAM-II"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <h3>Dream II</h3>
                    <h4>Book</h4>
                  </a>
                </div>
                <div>
                  <a
                    className="linear"
                    href="https://www.behance.net/gallery/172440105/Linear-Design"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <h3>Linear Design</h3>
                    <h4>poster</h4>
                  </a>
                </div>
                <div>
                  <a
                    className="help"
                    href="https://www.behance.net/gallery/173071761/Sometines-I-need-help"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <h3>Help</h3>
                    <h4>poster</h4>
                  </a>
                </div>
                <div>
                  <a
                    className="margueritte"
                    href="https://www.behance.net/gallery/173258971/Margueritte-Daysi"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <h3>Marguerite</h3>
                    <h4>poster</h4>
                  </a>
                </div>
                <div>
                  <a
                    className="joker"
                    href="https://www.behance.net/gallery/173258971/Margueritte-Daysi"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <h3>Joker</h3>
                    <h4>poster</h4>
                  </a>
                </div>
              </section>
              <section className="services">
                <svg
                  width="241"
                  height="206"
                  viewBox="0 0 241 206"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_847_173)">
                    <g opacity="0.6" clipPath="url(#clip1_847_173)">
                      <path
                        d="M370.02 17.7198C370.02 17.7198 240.814 27.9234 240.814 -99.8517"
                        stroke="url(#paint0_linear_847_173)"
                        strokeMiterlimit="10"
                      />
                      <path
                        d="M368.588 22.3706C368.588 22.3706 235.717 32.8634 235.717 -98.5372"
                        stroke="url(#paint1_linear_847_173)"
                        strokeMiterlimit="10"
                      />
                      <path
                        d="M367.157 27.0194C367.157 27.0194 230.617 37.8012 230.617 -97.2266"
                        stroke="url(#paint2_linear_847_173)"
                        strokeMiterlimit="10"
                      />
                      <path
                        d="M365.727 31.6702C365.727 31.6702 225.521 42.7412 225.521 -95.9122"
                        stroke="url(#paint3_linear_847_173)"
                        strokeMiterlimit="10"
                      />
                      <path
                        d="M364.296 36.3188C364.296 36.3188 220.421 47.6807 220.421 -94.6017"
                        stroke="url(#paint4_linear_847_173)"
                        strokeMiterlimit="10"
                      />
                      <path
                        d="M362.865 40.9676C362.865 40.9676 215.323 52.6186 215.323 -93.2892"
                        stroke="url(#paint5_linear_847_173)"
                        strokeMiterlimit="10"
                      />
                      <path
                        d="M361.434 45.6184C361.434 45.6184 210.225 57.5585 210.225 -91.9765"
                        stroke="url(#paint6_linear_847_173)"
                        strokeMiterlimit="10"
                      />
                      <path
                        d="M360.004 50.267C360.004 50.267 205.128 62.498 205.128 -90.6643"
                        stroke="url(#paint7_linear_847_173)"
                        strokeMiterlimit="10"
                      />
                      <path
                        d="M358.575 54.9179C358.575 54.9179 200.03 67.438 200.03 -89.3515"
                        stroke="url(#paint8_linear_847_173)"
                        strokeMiterlimit="10"
                      />
                      <path
                        d="M357.145 59.5666C357.145 59.5666 194.934 72.3759 194.934 -88.0391"
                        stroke="url(#paint9_linear_847_173)"
                        strokeMiterlimit="10"
                      />
                      <path
                        d="M355.714 64.2169C355.714 64.2169 189.834 77.3153 189.834 -86.727"
                        stroke="url(#paint10_linear_847_173)"
                        strokeMiterlimit="10"
                      />
                      <path
                        d="M354.283 68.8661C354.283 68.8661 184.736 82.2553 184.736 -85.4142"
                        stroke="url(#paint11_linear_847_173)"
                        strokeMiterlimit="10"
                      />
                      <path
                        d="M352.851 73.5148C352.851 73.5148 179.637 87.1932 179.637 -84.1035"
                        stroke="url(#paint12_linear_847_173)"
                        strokeMiterlimit="10"
                      />
                      <path
                        d="M351.421 78.1651C351.421 78.1651 174.54 92.1326 174.54 -82.7896"
                        stroke="url(#paint13_linear_847_173)"
                        strokeMiterlimit="10"
                      />
                      <path
                        d="M349.99 82.8139C349.99 82.8139 169.44 97.0705 169.44 -81.479"
                        stroke="url(#paint14_linear_847_173)"
                        strokeMiterlimit="10"
                      />
                      <path
                        d="M348.559 87.4646C348.559 87.4646 164.343 102.012 164.343 -80.1646"
                        stroke="url(#paint15_linear_847_173)"
                        strokeMiterlimit="10"
                      />
                      <path
                        d="M347.13 92.1133C347.13 92.1133 159.246 106.95 159.246 -78.854"
                        stroke="url(#paint16_linear_847_173)"
                        strokeMiterlimit="10"
                      />
                      <path
                        d="M345.699 96.7641C345.699 96.7641 154.148 111.89 154.148 -77.5395"
                        stroke="url(#paint17_linear_847_173)"
                        strokeMiterlimit="10"
                      />
                      <path
                        d="M344.269 101.413C344.269 101.413 149.05 116.829 149.05 -76.229"
                        stroke="url(#paint18_linear_847_173)"
                        strokeMiterlimit="10"
                      />
                      <path
                        d="M342.839 106.062C342.839 106.062 143.953 121.767 143.953 -74.9166"
                        stroke="url(#paint19_linear_847_173)"
                        strokeMiterlimit="10"
                      />
                      <path
                        d="M341.408 110.712C341.408 110.712 138.854 126.707 138.854 -73.6039"
                        stroke="url(#paint20_linear_847_173)"
                        strokeMiterlimit="10"
                      />
                      <path
                        d="M339.977 115.361C339.977 115.361 133.756 131.647 133.756 -72.2915"
                        stroke="url(#paint21_linear_847_173)"
                        strokeMiterlimit="10"
                      />
                      <path
                        d="M338.545 120.012C338.545 120.012 128.656 136.585 128.656 -70.9788"
                        stroke="url(#paint22_linear_847_173)"
                        strokeMiterlimit="10"
                      />
                      <path
                        d="M337.117 124.661C337.117 124.661 123.56 141.525 123.56 -69.6665"
                        stroke="url(#paint23_linear_847_173)"
                        strokeMiterlimit="10"
                      />
                      <path
                        d="M335.686 129.311C335.686 129.311 118.462 146.464 118.462 -68.3543"
                        stroke="url(#paint24_linear_847_173)"
                        strokeMiterlimit="10"
                      />
                      <path
                        d="M334.256 133.96C334.256 133.96 113.363 151.404 113.363 -67.0415"
                        stroke="url(#paint25_linear_847_173)"
                        strokeMiterlimit="10"
                      />
                      <path
                        d="M332.825 138.61C332.825 138.61 108.267 156.342 108.267 -65.731"
                        stroke="url(#paint26_linear_847_173)"
                        strokeMiterlimit="10"
                      />
                      <path
                        d="M331.394 143.26C331.394 143.26 103.169 161.282 103.169 -64.4182"
                        stroke="url(#paint27_linear_847_173)"
                        strokeMiterlimit="10"
                      />
                      <path
                        d="M329.963 147.908C329.963 147.908 98.0693 166.221 98.0693 -63.1059"
                        stroke="url(#paint28_linear_847_173)"
                        strokeMiterlimit="10"
                      />
                      <path
                        d="M328.533 152.559C328.533 152.559 92.9727 171.159 92.9726 -61.7936"
                        stroke="url(#paint29_linear_847_173)"
                        strokeMiterlimit="10"
                      />
                      <path
                        d="M327.102 157.208C327.102 157.208 87.873 176.099 87.873 -60.4808"
                        stroke="url(#paint30_linear_847_173)"
                        strokeMiterlimit="10"
                      />
                      <path
                        d="M325.672 161.858C325.672 161.858 82.7754 181.039 82.7754 -59.1686"
                        stroke="url(#paint31_linear_847_173)"
                        strokeMiterlimit="10"
                      />
                      <path
                        d="M324.242 166.507C324.242 166.507 77.6787 185.978 77.6787 -57.8563"
                        stroke="url(#paint32_linear_847_173)"
                        strokeMiterlimit="10"
                      />
                      <path
                        d="M322.811 171.158C322.811 171.158 72.5791 190.916 72.5791 -56.5435"
                        stroke="url(#paint33_linear_847_173)"
                        strokeMiterlimit="10"
                      />
                      <path
                        d="M321.38 175.806C321.38 175.806 67.4814 195.856 67.4814 -55.2313"
                        stroke="url(#paint34_linear_847_173)"
                        strokeMiterlimit="10"
                      />
                      <path
                        d="M319.95 180.455C319.95 180.455 62.3828 200.795 62.3828 -53.9189"
                        stroke="url(#paint35_linear_847_173)"
                        strokeMiterlimit="10"
                      />
                      <path
                        d="M318.52 185.106C318.52 185.106 57.2861 205.734 57.2861 -52.6061"
                        stroke="url(#paint36_linear_847_173)"
                        strokeMiterlimit="10"
                      />
                      <path
                        d="M317.088 189.754C317.088 189.754 52.1885 210.673 52.1885 -51.2939"
                        stroke="url(#paint37_linear_847_173)"
                        strokeMiterlimit="10"
                      />
                      <path
                        d="M315.657 194.405C315.657 194.405 47.0889 215.613 47.0889 -49.9812"
                        stroke="url(#paint38_linear_847_173)"
                        strokeMiterlimit="10"
                      />
                      <path
                        d="M314.229 199.054C314.229 199.054 41.9922 220.553 41.9922 -48.6688"
                        stroke="url(#paint39_linear_847_173)"
                        strokeMiterlimit="10"
                      />
                      <path
                        d="M312.798 203.704C312.798 203.704 36.8945 225.491 36.8945 -47.3583"
                        stroke="url(#paint40_linear_847_173)"
                        strokeMiterlimit="10"
                      />
                    </g>
                  </g>
                  <defs>
                    <linearGradient
                      id="paint0_linear_847_173"
                      x1="240.814"
                      y1="-40.9692"
                      x2="370.02"
                      y2="-40.9692"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#121212" />
                      <stop offset="1" stopColor="white" />
                    </linearGradient>
                    <linearGradient
                      id="paint1_linear_847_173"
                      x1="235.717"
                      y1="-37.9838"
                      x2="368.588"
                      y2="-37.9838"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#121212" />
                      <stop offset="1" stopColor="white" />
                    </linearGradient>
                    <linearGradient
                      id="paint2_linear_847_173"
                      x1="230.617"
                      y1="-35.0014"
                      x2="367.157"
                      y2="-35.0014"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#121212" />
                      <stop offset="1" stopColor="white" />
                    </linearGradient>
                    <linearGradient
                      id="paint3_linear_847_173"
                      x1="225.521"
                      y1="-32.016"
                      x2="365.727"
                      y2="-32.016"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#121212" />
                      <stop offset="1" stopColor="white" />
                    </linearGradient>
                    <linearGradient
                      id="paint4_linear_847_173"
                      x1="220.421"
                      y1="-29.0337"
                      x2="364.296"
                      y2="-29.0337"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#121212" />
                      <stop offset="1" stopColor="white" />
                    </linearGradient>
                    <linearGradient
                      id="paint5_linear_847_173"
                      x1="215.323"
                      y1="-26.0503"
                      x2="362.865"
                      y2="-26.0504"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#121212" />
                      <stop offset="1" stopColor="white" />
                    </linearGradient>
                    <linearGradient
                      id="paint6_linear_847_173"
                      x1="210.225"
                      y1="-23.0659"
                      x2="361.434"
                      y2="-23.0659"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#121212" />
                      <stop offset="1" stopColor="white" />
                    </linearGradient>
                    <linearGradient
                      id="paint7_linear_847_173"
                      x1="205.128"
                      y1="-20.0826"
                      x2="360.004"
                      y2="-20.0826"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#121212" />
                      <stop offset="1" stopColor="white" />
                    </linearGradient>
                    <linearGradient
                      id="paint8_linear_847_173"
                      x1="200.03"
                      y1="-17.0981"
                      x2="358.575"
                      y2="-17.0981"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#121212" />
                      <stop offset="1" stopColor="white" />
                    </linearGradient>
                    <linearGradient
                      id="paint9_linear_847_173"
                      x1="194.934"
                      y1="-14.1148"
                      x2="357.145"
                      y2="-14.1148"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#121212" />
                      <stop offset="1" stopColor="white" />
                    </linearGradient>
                    <linearGradient
                      id="paint10_linear_847_173"
                      x1="189.834"
                      y1="-11.1308"
                      x2="355.714"
                      y2="-11.1308"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#121212" />
                      <stop offset="1" stopColor="white" />
                    </linearGradient>
                    <linearGradient
                      id="paint11_linear_847_173"
                      x1="184.736"
                      y1="-8.14706"
                      x2="354.282"
                      y2="-8.14707"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#121212" />
                      <stop offset="1" stopColor="white" />
                    </linearGradient>
                    <linearGradient
                      id="paint12_linear_847_173"
                      x1="179.637"
                      y1="-5.16465"
                      x2="352.851"
                      y2="-5.16466"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#121212" />
                      <stop offset="1" stopColor="white" />
                    </linearGradient>
                    <linearGradient
                      id="paint13_linear_847_173"
                      x1="174.54"
                      y1="-2.17984"
                      x2="351.421"
                      y2="-2.17985"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#121212" />
                      <stop offset="1" stopColor="white" />
                    </linearGradient>
                    <linearGradient
                      id="paint14_linear_847_173"
                      x1="169.44"
                      y1="0.802612"
                      x2="349.99"
                      y2="0.802604"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#121212" />
                      <stop offset="1" stopColor="white" />
                    </linearGradient>
                    <linearGradient
                      id="paint15_linear_847_173"
                      x1="164.343"
                      y1="3.78793"
                      x2="348.559"
                      y2="3.78792"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#121212" />
                      <stop offset="1" stopColor="white" />
                    </linearGradient>
                    <linearGradient
                      id="paint16_linear_847_173"
                      x1="159.246"
                      y1="6.77036"
                      x2="347.13"
                      y2="6.77035"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#121212" />
                      <stop offset="1" stopColor="white" />
                    </linearGradient>
                    <linearGradient
                      id="paint17_linear_847_173"
                      x1="154.148"
                      y1="9.75573"
                      x2="345.699"
                      y2="9.75572"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#121212" />
                      <stop offset="1" stopColor="white" />
                    </linearGradient>
                    <linearGradient
                      id="paint18_linear_847_173"
                      x1="149.05"
                      y1="12.7381"
                      x2="344.269"
                      y2="12.7381"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#121212" />
                      <stop offset="1" stopColor="white" />
                    </linearGradient>
                    <linearGradient
                      id="paint19_linear_847_173"
                      x1="143.953"
                      y1="15.7214"
                      x2="342.839"
                      y2="15.7214"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#121212" />
                      <stop offset="1" stopColor="white" />
                    </linearGradient>
                    <linearGradient
                      id="paint20_linear_847_173"
                      x1="138.854"
                      y1="18.7059"
                      x2="341.408"
                      y2="18.7059"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#121212" />
                      <stop offset="1" stopColor="white" />
                    </linearGradient>
                    <linearGradient
                      id="paint21_linear_847_173"
                      x1="133.756"
                      y1="21.6892"
                      x2="339.977"
                      y2="21.6892"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#121212" />
                      <stop offset="1" stopColor="white" />
                    </linearGradient>
                    <linearGradient
                      id="paint22_linear_847_173"
                      x1="128.656"
                      y1="24.6737"
                      x2="338.545"
                      y2="24.6737"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#121212" />
                      <stop offset="1" stopColor="white" />
                    </linearGradient>
                    <linearGradient
                      id="paint23_linear_847_173"
                      x1="123.56"
                      y1="27.657"
                      x2="337.117"
                      y2="27.6569"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#121212" />
                      <stop offset="1" stopColor="white" />
                    </linearGradient>
                    <linearGradient
                      id="paint24_linear_847_173"
                      x1="118.462"
                      y1="30.6409"
                      x2="335.686"
                      y2="30.6409"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#121212" />
                      <stop offset="1" stopColor="white" />
                    </linearGradient>
                    <linearGradient
                      id="paint25_linear_847_173"
                      x1="113.363"
                      y1="33.6247"
                      x2="334.256"
                      y2="33.6247"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#121212" />
                      <stop offset="1" stopColor="white" />
                    </linearGradient>
                    <linearGradient
                      id="paint26_linear_847_173"
                      x1="108.267"
                      y1="36.6078"
                      x2="332.825"
                      y2="36.6078"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#121212" />
                      <stop offset="1" stopColor="white" />
                    </linearGradient>
                    <linearGradient
                      id="paint27_linear_847_173"
                      x1="103.169"
                      y1="39.5916"
                      x2="331.394"
                      y2="39.5916"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#121212" />
                      <stop offset="1" stopColor="white" />
                    </linearGradient>
                    <linearGradient
                      id="paint28_linear_847_173"
                      x1="98.0693"
                      y1="42.5749"
                      x2="329.963"
                      y2="42.5748"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#121212" />
                      <stop offset="1" stopColor="white" />
                    </linearGradient>
                    <linearGradient
                      id="paint29_linear_847_173"
                      x1="92.9727"
                      y1="45.5589"
                      x2="328.533"
                      y2="45.5588"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#121212" />
                      <stop offset="1" stopColor="white" />
                    </linearGradient>
                    <linearGradient
                      id="paint30_linear_847_173"
                      x1="87.873"
                      y1="48.5426"
                      x2="327.102"
                      y2="48.5426"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#121212" />
                      <stop offset="1" stopColor="white" />
                    </linearGradient>
                    <linearGradient
                      id="paint31_linear_847_173"
                      x1="82.7754"
                      y1="51.5266"
                      x2="325.672"
                      y2="51.5266"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#121212" />
                      <stop offset="1" stopColor="white" />
                    </linearGradient>
                    <linearGradient
                      id="paint32_linear_847_173"
                      x1="77.6787"
                      y1="54.5098"
                      x2="324.242"
                      y2="54.5098"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#121212" />
                      <stop offset="1" stopColor="white" />
                    </linearGradient>
                    <linearGradient
                      id="paint33_linear_847_173"
                      x1="72.5791"
                      y1="57.4944"
                      x2="322.811"
                      y2="57.4944"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#121212" />
                      <stop offset="1" stopColor="white" />
                    </linearGradient>
                    <linearGradient
                      id="paint34_linear_847_173"
                      x1="67.4814"
                      y1="60.4776"
                      x2="321.38"
                      y2="60.4776"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#121212" />
                      <stop offset="1" stopColor="white" />
                    </linearGradient>
                    <linearGradient
                      id="paint35_linear_847_173"
                      x1="62.3828"
                      y1="63.4609"
                      x2="319.95"
                      y2="63.4609"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#121212" />
                      <stop offset="1" stopColor="white" />
                    </linearGradient>
                    <linearGradient
                      id="paint36_linear_847_173"
                      x1="57.2861"
                      y1="66.4454"
                      x2="318.52"
                      y2="66.4454"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#121212" />
                      <stop offset="1" stopColor="white" />
                    </linearGradient>
                    <linearGradient
                      id="paint37_linear_847_173"
                      x1="52.1885"
                      y1="69.4287"
                      x2="317.088"
                      y2="69.4287"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#121212" />
                      <stop offset="1" stopColor="white" />
                    </linearGradient>
                    <linearGradient
                      id="paint38_linear_847_173"
                      x1="47.0889"
                      y1="72.4132"
                      x2="315.657"
                      y2="72.4131"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#121212" />
                      <stop offset="1" stopColor="white" />
                    </linearGradient>
                    <linearGradient
                      id="paint39_linear_847_173"
                      x1="41.9922"
                      y1="75.3964"
                      x2="314.229"
                      y2="75.3964"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#121212" />
                      <stop offset="1" stopColor="white" />
                    </linearGradient>
                    <linearGradient
                      id="paint40_linear_847_173"
                      x1="36.8945"
                      y1="78.3796"
                      x2="312.798"
                      y2="78.3796"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#121212" />
                      <stop offset="1" stopColor="white" />
                    </linearGradient>
                    <clipPath id="clip0_847_173">
                      <rect
                        width="240.467"
                        height="206"
                        fill="white"
                        transform="translate(0.533203)"
                      />
                    </clipPath>
                    <clipPath id="clip1_847_173">
                      <rect
                        width="295"
                        height="323.299"
                        fill="white"
                        transform="translate(36.3838 206) rotate(-90)"
                      />
                    </clipPath>
                  </defs>
                </svg>

                <h2 className="title-services">Services</h2>
                <div
                  onClick={() => toggleAccordion(0)}
                  className={
                    expandedIndex === 0 ? "accordion active" : "accordion"
                  }
                >
                  <h3 className="accordion-content">Strategy</h3>
                </div>
                {expandedIndex === 0 && (
                  <ul>
                    <li>Art Direction</li>
                    <li>Digital Strategy</li>
                    <li>Content Strategy</li>
                    <li>Research & Discovery</li>
                  </ul>
                )}

                <div
                  onClick={() => toggleAccordion(1)}
                  className={
                    expandedIndex === 1 ? "accordion active" : "accordion"
                  }
                >
                  <h3 className="accordion-content">Brand Development</h3>
                </div>
                {expandedIndex === 1 && (
                  <ul>
                    <li>Discovery & Brand Positioning</li>
                    <li>Brand Naming</li>
                    <li>Brand Guidelines Development</li>
                    <li>Audience Segmentation</li>
                  </ul>
                )}
                <div
                  onClick={() => toggleAccordion(2)}
                  className={
                    expandedIndex === 2 ? "accordion active" : "accordion"
                  }
                >
                  <h3 className="accordion-content">Graphic Design</h3>
                </div>
                {expandedIndex === 2 && (
                  <ul>
                    <li>Logo Design</li>
                    <li>Image Treatment</li>
                    <li>graphical Charter</li>
                    <li>Print</li>
                  </ul>
                )}
                <div
                  onClick={() => toggleAccordion(3)}
                  className={
                    expandedIndex === 2 ? "accordion active" : "accordion"
                  }
                >
                  <h3 className="accordion-content">Web & Digital Design</h3>
                </div>
                {expandedIndex === 3 && (
                  <ul>
                    <li>Digital Design</li>
                    <li>Site maps and Wireframing</li>
                    <li>Modern Ui/UX Design</li>
                    <li>Interaction Design</li>
                  </ul>
                )}

                <div
                  onClick={() => toggleAccordion(4)}
                  className={
                    expandedIndex === 4 ? "accordion active" : "accordion"
                  }
                >
                  <h3 className="accordion-content">Web development</h3>
                </div>
                {expandedIndex === 4 && (
                  <ul>
                    <li>HTML, CSS and JS</li>
                    <li>Sass</li>
                    <li>GSAP Animations</li>
                    <li>Wordpress, eCommerce</li>
                    <li>React</li>
                    <li>SEO</li>
                  </ul>
                )}
              </section>
              <section className="contact">
                <h2>Contact</h2>
                <h3>
                  You want contact me for a project or a question, contact me
                  now on my mail or socials
                </h3>
                <a className="mail" href="mailto:jeremybeziat.pro@gmail.com">
                  jeremybeziat.pro@gmail.com
                </a>
                <div className="socials">
                  <a title="Twitter" href="/">
                    <svg
                      width="31"
                      height="25"
                      viewBox="0 0 31 25"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        className="icon-social"
                        d="M30.7647 2.94118C29.6324 3.45588 28.4118 3.79412 27.1471 3.95588C28.4412 3.17647 29.4412 1.94118 29.9118 0.455882C28.6912 1.19118 27.3382 1.70588 25.9118 2C24.75 0.735294 23.1177 0 21.2647 0C17.8088 0 14.9853 2.82353 14.9853 6.30882C14.9853 6.80882 15.0441 7.29412 15.1471 7.75C9.91177 7.48529 5.25 4.97059 2.14706 1.16176C1.60294 2.08824 1.29412 3.17647 1.29412 4.32353C1.29412 6.51471 2.39706 8.45588 4.10294 9.55882C3.05882 9.55882 2.08824 9.26471 1.23529 8.82353V8.86765C1.23529 11.9265 3.41177 14.4853 6.29412 15.0588C5.36872 15.3121 4.3972 15.3473 3.45588 15.1618C3.8553 16.4154 4.63756 17.5124 5.69267 18.2984C6.74779 19.0845 8.02272 19.5201 9.33824 19.5441C7.10828 21.3095 4.34411 22.2637 1.5 22.25C1 22.25 0.5 22.2206 0 22.1618C2.79412 23.9559 6.11765 25 9.67647 25C21.2647 25 27.6324 15.3824 27.6324 7.04412C27.6324 6.76471 27.6324 6.5 27.6177 6.22059C28.8529 5.33823 29.9118 4.22059 30.7647 2.94118Z"
                        fill="white"
                      />
                    </svg>
                  </a>
                  <a title="Behance" href="/">
                    <svg
                      width="41"
                      height="25"
                      viewBox="0 0 41 25"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        className="icon-social"
                        d="M12.27 0C13.4111 0 14.4665 0.0892855 15.4308 0.353571C16.3058 0.514365 17.141 0.844339 17.8897 1.325C18.5932 1.76607 19.12 2.38571 19.47 3.18035C19.8218 3.97499 19.9968 4.9482 19.9968 6.00713C19.9968 7.24463 19.7343 8.30356 19.12 9.0982C18.5932 9.89462 17.7147 10.6 16.6611 11.1303C18.154 11.5732 19.295 12.3678 19.9968 13.4268C20.7004 14.4875 21.1397 15.8125 21.1397 17.3143C21.1397 18.5518 20.8754 19.6107 20.4361 20.4946C19.9968 21.3785 19.295 22.1732 18.504 22.7035C17.6447 23.272 16.6948 23.6899 15.695 23.9392C14.6415 24.2053 13.5879 24.3821 12.5343 24.3821H0.764709V0H12.27ZM11.5665 9.89284C12.5325 9.89284 13.3236 9.62855 13.9379 9.18748C14.5522 8.74641 14.8165 7.94999 14.8165 6.97856C14.8165 6.4482 14.7272 5.91785 14.5522 5.56606C14.3772 5.21249 14.1129 4.94642 13.7629 4.68213C13.4111 4.50535 13.0593 4.32856 12.62 4.24106C12.1808 4.15178 11.7433 4.15178 11.2147 4.15178H6.12184V9.89462H11.5683L11.5665 9.89284ZM11.8308 20.3178C12.3575 20.3178 12.8843 20.2285 13.3236 20.141C13.7671 20.0567 14.1866 19.8756 14.5522 19.6107C14.91 19.3522 15.2094 19.0212 15.4308 18.6392C15.6058 18.1982 15.7825 17.6678 15.7825 17.05C15.7825 15.8125 15.4308 14.9285 14.729 14.3107C14.0254 13.7803 13.0593 13.516 11.9183 13.516H6.12184V20.3196L11.8308 20.3178ZM28.7807 20.2285C29.4825 20.9357 30.5361 21.2892 31.9414 21.2892C32.9075 21.2892 33.7861 21.025 34.4879 20.5839C35.1914 20.0535 35.6307 19.5232 35.8057 18.9928H40.1093C39.4057 21.1125 38.3521 22.6142 36.9486 23.5857C35.5414 24.4696 33.8736 25 31.8539 25C30.5617 25.0039 29.2804 24.764 28.0772 24.2928C26.9945 23.8866 26.029 23.2192 25.2665 22.35C24.4509 21.5367 23.8481 20.5352 23.5111 19.4339C23.0718 18.2857 22.895 17.05 22.895 15.6357C22.895 14.3107 23.0718 13.075 23.5111 11.925C23.9334 10.818 24.5584 9.79942 25.354 8.92141C26.145 8.12677 27.1111 7.42142 28.1647 6.97856C29.3373 6.50724 30.5901 6.26712 31.8539 6.27142C33.3468 6.27142 34.6646 6.53749 35.8057 7.15534C36.9486 7.7732 37.8254 8.48034 38.5289 9.54105C39.2466 10.5599 39.7814 11.6959 40.1093 12.8982C40.2843 14.1339 40.3718 15.3714 40.2843 16.7839H27.5504C27.5504 18.1982 28.0772 19.5232 28.7807 20.2303V20.2285ZM34.3129 10.9536C33.6986 10.3357 32.7325 9.98212 31.5897 9.98212C30.9196 9.97208 30.2569 10.1234 29.6575 10.4232C29.1307 10.6893 28.7807 11.0428 28.4289 11.3964C28.1057 11.7379 27.8918 12.1682 27.8147 12.6321C27.7254 13.075 27.6379 13.4268 27.6379 13.7803H35.5414C35.3664 12.4553 34.9271 11.5732 34.3129 10.9536ZM26.5843 1.67857H36.42V4.06428H26.5861V1.67857H26.5843Z"
                        fill="white"
                      />
                    </svg>
                  </a>
                  <a title="Instagram" href="/">
                    <svg
                      width="26"
                      height="25"
                      viewBox="0 0 26 25"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        className="icon-social"
                        d="M7.5686 0H18.0686C22.0686 0 25.3186 3.25 25.3186 7.25V17.75C25.3186 19.6728 24.5548 21.5169 23.1951 22.8765C21.8355 24.2362 19.9914 25 18.0686 25H7.5686C3.5686 25 0.318604 21.75 0.318604 17.75V7.25C0.318604 5.32718 1.08244 3.48311 2.44208 2.12348C3.80172 0.763837 5.64578 0 7.5686 0ZM7.3186 2.5C6.12513 2.5 4.98054 2.97411 4.13662 3.81802C3.29271 4.66193 2.8186 5.80653 2.8186 7V18C2.8186 20.4875 4.8311 22.5 7.3186 22.5H18.3186C19.5121 22.5 20.6567 22.0259 21.5006 21.182C22.3445 20.3381 22.8186 19.1935 22.8186 18V7C22.8186 4.5125 20.8061 2.5 18.3186 2.5H7.3186ZM19.3811 4.375C19.7955 4.375 20.1929 4.53962 20.486 4.83265C20.779 5.12567 20.9436 5.5231 20.9436 5.9375C20.9436 6.3519 20.779 6.74933 20.486 7.04235C20.1929 7.33538 19.7955 7.5 19.3811 7.5C18.9667 7.5 18.5693 7.33538 18.2762 7.04235C17.9832 6.74933 17.8186 6.3519 17.8186 5.9375C17.8186 5.5231 17.9832 5.12567 18.2762 4.83265C18.5693 4.53962 18.9667 4.375 19.3811 4.375ZM12.8186 6.25C14.4762 6.25 16.0659 6.90848 17.238 8.08058C18.4101 9.25268 19.0686 10.8424 19.0686 12.5C19.0686 14.1576 18.4101 15.7473 17.238 16.9194C16.0659 18.0915 14.4762 18.75 12.8186 18.75C11.161 18.75 9.57129 18.0915 8.39919 16.9194C7.22708 15.7473 6.5686 14.1576 6.5686 12.5C6.5686 10.8424 7.22708 9.25268 8.39919 8.08058C9.57129 6.90848 11.161 6.25 12.8186 6.25ZM12.8186 8.75C11.824 8.75 10.8702 9.14509 10.167 9.84835C9.46369 10.5516 9.0686 11.5054 9.0686 12.5C9.0686 13.4946 9.46369 14.4484 10.167 15.1517C10.8702 15.8549 11.824 16.25 12.8186 16.25C13.8132 16.25 14.767 15.8549 15.4703 15.1517C16.1735 14.4484 16.5686 13.4946 16.5686 12.5C16.5686 11.5054 16.1735 10.5516 15.4703 9.84835C14.767 9.14509 13.8132 8.75 12.8186 8.75Z"
                        fill="white"
                      />
                    </svg>
                  </a>
                  <a title="Linkedin" href="/">
                    <svg
                      width="27"
                      height="25"
                      viewBox="0 0 27 25"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        className="icon-social"
                        d="M5.87385 2.77901C5.87348 3.51568 5.58049 4.22204 5.05932 4.74268C4.53816 5.26333 3.83151 5.55562 3.09484 5.55525C2.35817 5.55488 1.65181 5.26188 1.13117 4.74072C0.610524 4.21955 0.318236 3.51291 0.318604 2.77624C0.318972 2.03956 0.611967 1.33321 1.13313 0.812565C1.6543 0.29192 2.36094 -0.000367988 3.09762 3.47705e-07C3.83429 0.000368683 4.54064 0.293363 5.06129 0.814529C5.58193 1.3357 5.87422 2.04234 5.87385 2.77901ZM5.95718 7.61208H0.401932V25H5.95718V7.61208ZM14.7345 7.61208H9.207V25H14.6789V15.8755C14.6789 10.7925 21.3035 10.3203 21.3035 15.8755V25H26.7894V13.9867C26.7894 5.41776 16.9843 5.73718 14.6789 9.94528L14.7345 7.61208Z"
                        fill="white"
                      />
                    </svg>
                  </a>
                </div>
                <svg
                  className="pattern"
                  width="420"
                  height="500"
                  viewBox="0 0 320 641"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M265.327 981.82C265.327 981.82 237.337 627.373 587.859 627.373"
                    stroke="url(#paint1_linear_847_173)"
                    strokeWidth="2.66759"
                    strokeMiterlimit="10"
                  />
                  <path
                    d="M252.924 978.002C252.924 978.002 224.163 613.77 584.362 613.77"
                    stroke="url(#paint2_linear_847_173)"
                    strokeWidth="2.66759"
                    strokeMiterlimit="10"
                  />
                  <path
                    d="M240.519 974.187C240.519 974.187 210.986 600.174 580.856 600.174"
                    stroke="url(#paint3_linear_847_173)"
                    strokeWidth="2.66759"
                    strokeMiterlimit="10"
                  />
                  <path
                    d="M228.118 970.369C228.118 970.369 197.809 586.57 577.36 586.57"
                    stroke="url(#paint4_linear_847_173)"
                    strokeWidth="2.66759"
                    strokeMiterlimit="10"
                  />
                  <path
                    d="M215.717 966.552C215.717 966.552 184.637 572.972 573.859 572.972"
                    stroke="url(#paint5_linear_847_173)"
                    strokeWidth="2.66759"
                    strokeMiterlimit="10"
                  />
                  <path
                    d="M203.31 962.736C203.31 962.736 171.459 559.37 570.357 559.37"
                    stroke="url(#paint6_linear_847_173)"
                    strokeWidth="2.66759"
                    strokeMiterlimit="10"
                  />
                  <path
                    d="M190.909 958.921C190.909 958.921 158.282 545.775 566.856 545.775"
                    stroke="url(#paint7_linear_847_173)"
                    strokeWidth="2.66759"
                    strokeMiterlimit="10"
                  />
                  <path
                    d="M178.504 955.109C178.504 955.109 145.105 532.176 563.355 532.176"
                    stroke="url(#paint8_linear_847_173)"
                    strokeWidth="2.66759"
                    strokeMiterlimit="10"
                  />
                  <path
                    d="M166.101 951.293C166.101 951.293 131.931 518.58 559.853 518.58"
                    stroke="url(#paint9_linear_847_173)"
                    strokeWidth="2.66759"
                    strokeMiterlimit="10"
                  />
                  <path
                    d="M153.698 947.475C153.698 947.475 118.757 504.977 556.354 504.977"
                    stroke="url(#paint10_linear_847_173)"
                    strokeWidth="2.66759"
                    strokeMiterlimit="10"
                  />
                  <path
                    d="M141.294 943.658C141.294 943.658 105.577 491.378 552.85 491.378"
                    stroke="url(#paint11_linear_847_173)"
                    strokeWidth="2.66759"
                    strokeMiterlimit="10"
                  />
                  <path
                    d="M128.893 939.84C128.893 939.84 92.4049 477.775 549.354 477.775"
                    stroke="url(#paint12_linear_847_173)"
                    strokeWidth="2.66759"
                    strokeMiterlimit="10"
                  />
                  <path
                    d="M116.49 936.025C116.49 936.025 79.2303 464.179 545.851 464.179"
                    stroke="url(#paint13_linear_847_173)"
                    strokeWidth="2.66759"
                    strokeMiterlimit="10"
                  />
                  <path
                    d="M104.088 932.207C104.088 932.207 66.0576 450.575 542.354 450.575"
                    stroke="url(#paint14_linear_847_173)"
                    strokeWidth="2.66759"
                    strokeMiterlimit="10"
                  />
                  <path
                    d="M91.6832 928.389C91.6832 928.389 52.8765 436.977 538.849 436.977"
                    stroke="url(#paint15_linear_847_173)"
                    strokeWidth="2.66759"
                    strokeMiterlimit="10"
                  />
                  <path
                    d="M79.2808 924.579C79.2808 924.579 39.7028 423.381 535.351 423.381"
                    stroke="url(#paint16_linear_847_173)"
                    strokeWidth="2.66759"
                    strokeMiterlimit="10"
                  />
                  <path
                    d="M66.8735 920.761C66.8735 920.761 26.5243 409.782 531.844 409.782"
                    stroke="url(#paint17_linear_847_173)"
                    strokeWidth="2.66759"
                    strokeMiterlimit="10"
                  />
                  <path
                    d="M54.4733 916.946C54.4733 916.946 13.3481 396.181 528.349 396.181"
                    stroke="url(#paint18_linear_847_173)"
                    strokeWidth="2.66759"
                    strokeMiterlimit="10"
                  />
                  <path
                    d="M42.0719 913.131C42.0719 913.131 0.175385 382.585 524.847 382.585"
                    stroke="url(#paint19_linear_847_173)"
                    strokeWidth="2.66759"
                    strokeMiterlimit="10"
                  />
                  <path
                    d="M29.6666 909.313C29.6666 909.313 -13.0013 368.982 521.346 368.982"
                    stroke="url(#paint20_linear_847_173)"
                    strokeWidth="2.66759"
                    strokeMiterlimit="10"
                  />
                  <path
                    d="M17.2644 905.495C17.2644 905.495 -26.1793 355.383 517.844 355.383"
                    stroke="url(#paint21_linear_847_173)"
                    strokeWidth="2.66759"
                    strokeMiterlimit="10"
                  />
                  <path
                    d="M4.85882 901.677C4.85882 901.677 -39.3515 341.78 514.343 341.78"
                    stroke="url(#paint22_linear_847_173)"
                    strokeWidth="2.66759"
                    strokeMiterlimit="10"
                  />
                  <path
                    d="M-7.54335 897.867C-7.54335 897.867 -52.5297 328.184 510.841 328.184"
                    stroke="url(#paint23_linear_847_173)"
                    strokeWidth="2.66759"
                    strokeMiterlimit="10"
                  />
                  <path
                    d="M-19.9467 894.05C-19.9467 894.05 -65.7043 314.585 507.343 314.585"
                    stroke="url(#paint24_linear_847_173)"
                    strokeWidth="2.66759"
                    strokeMiterlimit="10"
                  />
                  <path
                    d="M-32.3499 890.235C-32.3499 890.235 -78.8834 300.984 503.84 300.984"
                    stroke="url(#paint25_linear_847_173)"
                    strokeWidth="2.66759"
                    strokeMiterlimit="10"
                  />
                  <path
                    d="M-44.7535 886.419C-44.7535 886.419 -92.0536 287.388 500.345 287.388"
                    stroke="url(#paint26_linear_847_173)"
                    strokeWidth="2.66759"
                    strokeMiterlimit="10"
                  />
                  <path
                    d="M-57.1576 882.602C-57.1576 882.602 -105.234 273.79 496.841 273.79"
                    stroke="url(#paint27_linear_847_173)"
                    strokeWidth="2.66759"
                    strokeMiterlimit="10"
                  />
                  <path
                    d="M-69.5559 878.784C-69.5559 878.784 -118.408 260.186 493.343 260.186"
                    stroke="url(#paint28_linear_847_173)"
                    strokeWidth="2.66759"
                    strokeMiterlimit="10"
                  />
                  <path
                    d="M-81.9634 874.969C-81.9634 874.969 -131.582 246.591 489.84 246.591"
                    stroke="url(#paint29_linear_847_173)"
                    strokeWidth="2.66759"
                    strokeMiterlimit="10"
                  />
                  <path
                    d="M-94.3636 871.151C-94.3636 871.151 -144.758 232.987 486.34 232.987"
                    stroke="url(#paint30_linear_847_173)"
                    strokeWidth="2.66759"
                    strokeMiterlimit="10"
                  />
                  <path
                    d="M-106.77 867.338C-106.77 867.338 -157.936 219.388 482.838 219.388"
                    stroke="url(#paint31_linear_847_173)"
                    strokeWidth="2.66759"
                    strokeMiterlimit="10"
                  />
                  <path
                    d="M-119.17 863.523C-119.17 863.523 -171.112 205.793 479.338 205.793"
                    stroke="url(#paint32_linear_847_173)"
                    strokeWidth="2.66759"
                    strokeMiterlimit="10"
                  />
                  <path
                    d="M-131.578 859.705C-131.578 859.705 -184.286 192.189 475.835 192.189"
                    stroke="url(#paint33_linear_847_173)"
                    strokeWidth="2.66759"
                    strokeMiterlimit="10"
                  />
                  <path
                    d="M-143.978 855.887C-143.978 855.887 -197.462 178.59 472.335 178.59"
                    stroke="url(#paint34_linear_847_173)"
                    strokeWidth="2.66759"
                    strokeMiterlimit="10"
                  />
                  <path
                    d="M-156.379 852.072C-156.379 852.072 -210.639 164.989 468.834 164.989"
                    stroke="url(#paint35_linear_847_173)"
                    strokeWidth="2.66759"
                    strokeMiterlimit="10"
                  />
                  <path
                    d="M-168.785 848.257C-168.785 848.257 -223.812 151.394 465.333 151.394"
                    stroke="url(#paint36_linear_847_173)"
                    strokeWidth="2.66759"
                    strokeMiterlimit="10"
                  />
                  <path
                    d="M-181.187 844.439C-181.187 844.439 -236.99 137.795 461.831 137.795"
                    stroke="url(#paint37_linear_847_173)"
                    strokeWidth="2.66759"
                    strokeMiterlimit="10"
                  />
                  <path
                    d="M-193.592 840.621C-193.592 840.621 -250.166 124.191 458.33 124.191"
                    stroke="url(#paint38_linear_847_173)"
                    strokeWidth="2.66759"
                    strokeMiterlimit="10"
                  />
                  <path
                    d="M-205.99 836.811C-205.99 836.811 -263.34 110.596 454.832 110.596"
                    stroke="url(#paint39_linear_847_173)"
                    strokeWidth="2.66759"
                    strokeMiterlimit="10"
                  />
                  <path
                    d="M-218.398 832.993C-218.398 832.993 -276.515 96.9971 451.334 96.9971"
                    stroke="url(#paint40_linear_847_173)"
                    strokeWidth="2.66759"
                    strokeMiterlimit="10"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_847_173"
                      x1="434.29"
                      y1="640.972"
                      x2="434.29"
                      y2="985.638"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#121212" />
                      <stop offset="1" stopColor="white" />
                    </linearGradient>
                    <linearGradient
                      id="paint1_linear_847_173"
                      x1="426.328"
                      y1="627.373"
                      x2="426.328"
                      y2="981.82"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#121212" />
                      <stop offset="1" stopColor="white" />
                    </linearGradient>
                    <linearGradient
                      id="paint2_linear_847_173"
                      x1="418.37"
                      y1="613.77"
                      x2="418.37"
                      y2="978.002"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#121212" />
                      <stop offset="1" stopColor="white" />
                    </linearGradient>
                    <linearGradient
                      id="paint3_linear_847_173"
                      x1="410.408"
                      y1="600.174"
                      x2="410.408"
                      y2="974.187"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#121212" />
                      <stop offset="1" stopColor="white" />
                    </linearGradient>
                    <linearGradient
                      id="paint4_linear_847_173"
                      x1="402.451"
                      y1="586.57"
                      x2="402.451"
                      y2="970.369"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#121212" />
                      <stop offset="1" stopColor="white" />
                    </linearGradient>
                    <linearGradient
                      id="paint5_linear_847_173"
                      x1="394.494"
                      y1="572.972"
                      x2="394.494"
                      y2="966.552"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#121212" />
                      <stop offset="1" stopColor="white" />
                    </linearGradient>
                    <linearGradient
                      id="paint6_linear_847_173"
                      x1="386.531"
                      y1="559.37"
                      x2="386.531"
                      y2="962.736"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#121212" />
                      <stop offset="1" stopColor="white" />
                    </linearGradient>
                    <linearGradient
                      id="paint7_linear_847_173"
                      x1="378.573"
                      y1="545.775"
                      x2="378.573"
                      y2="958.921"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#121212" />
                      <stop offset="1" stopColor="white" />
                    </linearGradient>
                    <linearGradient
                      id="paint8_linear_847_173"
                      x1="370.613"
                      y1="532.176"
                      x2="370.613"
                      y2="955.108"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#121212" />
                      <stop offset="1" stopColor="white" />
                    </linearGradient>
                    <linearGradient
                      id="paint9_linear_847_173"
                      x1="362.653"
                      y1="518.58"
                      x2="362.653"
                      y2="951.293"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#121212" />
                      <stop offset="1" stopColor="white" />
                    </linearGradient>
                    <linearGradient
                      id="paint10_linear_847_173"
                      x1="354.695"
                      y1="504.977"
                      x2="354.695"
                      y2="947.475"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#121212" />
                      <stop offset="1" stopColor="white" />
                    </linearGradient>
                    <linearGradient
                      id="paint11_linear_847_173"
                      x1="346.733"
                      y1="491.378"
                      x2="346.733"
                      y2="943.658"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#121212" />
                      <stop offset="1" stopColor="white" />
                    </linearGradient>
                    <linearGradient
                      id="paint12_linear_847_173"
                      x1="338.778"
                      y1="477.775"
                      x2="338.778"
                      y2="939.84"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#121212" />
                      <stop offset="1" stopColor="white" />
                    </linearGradient>
                    <linearGradient
                      id="paint13_linear_847_173"
                      x1="330.817"
                      y1="464.179"
                      x2="330.817"
                      y2="936.025"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#121212" />
                      <stop offset="1" stopColor="white" />
                    </linearGradient>
                    <linearGradient
                      id="paint14_linear_847_173"
                      x1="322.861"
                      y1="450.575"
                      x2="322.861"
                      y2="932.207"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#121212" />
                      <stop offset="1" stopColor="white" />
                    </linearGradient>
                    <linearGradient
                      id="paint15_linear_847_173"
                      x1="314.898"
                      y1="436.977"
                      x2="314.898"
                      y2="928.389"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#121212" />
                      <stop offset="1" stopColor="white" />
                    </linearGradient>
                    <linearGradient
                      id="paint16_linear_847_173"
                      x1="306.941"
                      y1="423.381"
                      x2="306.941"
                      y2="924.579"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#121212" />
                      <stop offset="1" stopColor="white" />
                    </linearGradient>
                    <linearGradient
                      id="paint17_linear_847_173"
                      x1="298.976"
                      y1="409.782"
                      x2="298.976"
                      y2="920.761"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#121212" />
                      <stop offset="1" stopColor="white" />
                    </linearGradient>
                    <linearGradient
                      id="paint18_linear_847_173"
                      x1="291.021"
                      y1="396.181"
                      x2="291.021"
                      y2="916.946"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#121212" />
                      <stop offset="1" stopColor="white" />
                    </linearGradient>
                    <linearGradient
                      id="paint19_linear_847_173"
                      x1="283.062"
                      y1="382.585"
                      x2="283.062"
                      y2="913.131"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#121212" />
                      <stop offset="1" stopColor="white" />
                    </linearGradient>
                    <linearGradient
                      id="paint20_linear_847_173"
                      x1="275.102"
                      y1="368.982"
                      x2="275.102"
                      y2="909.313"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#121212" />
                      <stop offset="1" stopColor="white" />
                    </linearGradient>
                    <linearGradient
                      id="paint21_linear_847_173"
                      x1="267.142"
                      y1="355.383"
                      x2="267.142"
                      y2="905.495"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#121212" />
                      <stop offset="1" stopColor="white" />
                    </linearGradient>
                    <linearGradient
                      id="paint22_linear_847_173"
                      x1="259.182"
                      y1="341.78"
                      x2="259.182"
                      y2="901.677"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#121212" />
                      <stop offset="1" stopColor="white" />
                    </linearGradient>
                    <linearGradient
                      id="paint23_linear_847_173"
                      x1="251.222"
                      y1="328.184"
                      x2="251.222"
                      y2="897.867"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#121212" />
                      <stop offset="1" stopColor="white" />
                    </linearGradient>
                    <linearGradient
                      id="paint24_linear_847_173"
                      x1="243.264"
                      y1="314.585"
                      x2="243.264"
                      y2="894.05"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#121212" />
                      <stop offset="1" stopColor="white" />
                    </linearGradient>
                    <linearGradient
                      id="paint25_linear_847_173"
                      x1="235.304"
                      y1="300.984"
                      x2="235.304"
                      y2="890.234"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#121212" />
                      <stop offset="1" stopColor="white" />
                    </linearGradient>
                    <linearGradient
                      id="paint26_linear_847_173"
                      x1="227.347"
                      y1="287.388"
                      x2="227.347"
                      y2="886.419"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#121212" />
                      <stop offset="1" stopColor="white" />
                    </linearGradient>
                    <linearGradient
                      id="paint27_linear_847_173"
                      x1="219.386"
                      y1="273.79"
                      x2="219.386"
                      y2="882.602"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#121212" />
                      <stop offset="1" stopColor="white" />
                    </linearGradient>
                    <linearGradient
                      id="paint28_linear_847_173"
                      x1="211.43"
                      y1="260.186"
                      x2="211.43"
                      y2="878.784"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#121212" />
                      <stop offset="1" stopColor="white" />
                    </linearGradient>
                    <linearGradient
                      id="paint29_linear_847_173"
                      x1="203.468"
                      y1="246.591"
                      x2="203.468"
                      y2="874.969"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#121212" />
                      <stop offset="1" stopColor="white" />
                    </linearGradient>
                    <linearGradient
                      id="paint30_linear_847_173"
                      x1="195.51"
                      y1="232.987"
                      x2="195.51"
                      y2="871.151"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#121212" />
                      <stop offset="1" stopColor="white" />
                    </linearGradient>
                    <linearGradient
                      id="paint31_linear_847_173"
                      x1="187.549"
                      y1="219.388"
                      x2="187.549"
                      y2="867.338"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#121212" />
                      <stop offset="1" stopColor="white" />
                    </linearGradient>
                    <linearGradient
                      id="paint32_linear_847_173"
                      x1="179.591"
                      y1="205.793"
                      x2="179.591"
                      y2="863.523"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#121212" />
                      <stop offset="1" stopColor="white" />
                    </linearGradient>
                    <linearGradient
                      id="paint33_linear_847_173"
                      x1="171.629"
                      y1="192.189"
                      x2="171.629"
                      y2="859.705"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#121212" />
                      <stop offset="1" stopColor="white" />
                    </linearGradient>
                    <linearGradient
                      id="paint34_linear_847_173"
                      x1="163.672"
                      y1="178.59"
                      x2="163.672"
                      y2="855.887"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#121212" />
                      <stop offset="1" stopColor="white" />
                    </linearGradient>
                    <linearGradient
                      id="paint35_linear_847_173"
                      x1="155.713"
                      y1="164.989"
                      x2="155.713"
                      y2="852.072"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#121212" />
                      <stop offset="1" stopColor="white" />
                    </linearGradient>
                    <linearGradient
                      id="paint36_linear_847_173"
                      x1="147.753"
                      y1="151.394"
                      x2="147.753"
                      y2="848.257"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#121212" />
                      <stop offset="1" stopColor="white" />
                    </linearGradient>
                    <linearGradient
                      id="paint37_linear_847_173"
                      x1="139.793"
                      y1="137.795"
                      x2="139.793"
                      y2="844.439"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#121212" />
                      <stop offset="1" stopColor="white" />
                    </linearGradient>
                    <linearGradient
                      id="paint38_linear_847_173"
                      x1="131.833"
                      y1="124.191"
                      x2="131.833"
                      y2="840.621"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#121212" />
                      <stop offset="1" stopColor="white" />
                    </linearGradient>
                    <linearGradient
                      id="paint39_linear_847_173"
                      x1="123.877"
                      y1="110.596"
                      x2="123.877"
                      y2="836.811"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#121212" />
                      <stop offset="1" stopColor="white" />
                    </linearGradient>
                    <linearGradient
                      id="paint40_linear_847_173"
                      x1="115.917"
                      y1="96.9971"
                      x2="115.917"
                      y2="832.993"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#121212" />
                      <stop offset="1" stopColor="white" />
                    </linearGradient>
                    <clipPath id="clip0_847_173">
                      <rect
                        width="641"
                        height="325"
                        fill="white"
                        transform="translate(325) rotate(90)"
                      />
                    </clipPath>
                    <clipPath id="clip1_847_173">
                      <rect
                        width="786.939"
                        height="862.43"
                        fill="white"
                        transform="translate(-224.523 95.6338)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </section>
            </main>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Home;
