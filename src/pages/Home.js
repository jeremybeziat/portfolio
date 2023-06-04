import React, { useRef, useEffect, useState } from "react";
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
                  <a
                    href="https://www.behance.net/gallery/159684055/Raining-Stars"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <h2>Raining Stars N°07</h2>
                    <h3>Poster</h3>
                  </a>
                </div>
                <div>
                  <a
                    href="https://www.behance.net/gallery/161765241/Purple-Stars"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <h2>Purple Stars N°11</h2>
                    <h3>Poster</h3>
                  </a>
                </div>
                <div>
                  <a
                    href="https://www.behance.net/gallery/161021241/DREAM-II"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <h2>Dream II</h2>
                    <h3>Book</h3>
                  </a>
                </div>
              </section>
              <section className="services">
                <h2 className="title-services">Services</h2>
                <div
                  onClick={() => toggleAccordion(0)}
                  className={
                    expandedIndex === 0 ? "accordion active" : "accordion"
                  }
                >
                  <h2 className="accordion-content">Strategy</h2>
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
                  <h2 className="accordion-content">Brand Development</h2>
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
                  <h2 className="accordion-content">Graphic Design</h2>
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
                  <h2 className="accordion-content">Web & Digital Design</h2>
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
                  <h2 className="accordion-content">Web development</h2>
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
                        d="M5.87385 2.77901C5.87348 3.51568 5.58049 4.22204 5.05932 4.74268C4.53816 5.26333 3.83151 5.55562 3.09484 5.55525C2.35817 5.55488 1.65181 5.26188 1.13117 4.74072C0.610524 4.21955 0.318236 3.51291 0.318604 2.77624C0.318972 2.03956 0.611967 1.33321 1.13313 0.812565C1.6543 0.29192 2.36094 -0.000367988 3.09762 3.47705e-07C3.83429 0.000368683 4.54064 0.293363 5.06129 0.814529C5.58193 1.3357 5.87422 2.04234 5.87385 2.77901ZM5.95718 7.61208H0.401932V25H5.95718V7.61208ZM14.7345 7.61208H9.207V25H14.6789V15.8755C14.6789 10.7925 21.3035 10.3203 21.3035 15.8755V25H26.7894V13.9867C26.7894 5.41776 16.9843 5.73718 14.6789 9.94528L14.7345 7.61208Z"
                        fill="white"
                      />
                    </svg>
                  </a>
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
