import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import Header from "../components/Header";
import work1 from "../assets/images/mockup-raining-phone.webp";
import work1D from "../assets/images/mockup-raining.webp";
import work2 from "../assets/images/mockup-purple-phone.webp";
import work2D from "../assets/images/mockup-purple.webp";
import work3D from "../assets/images/mockup-dream.webp";
import work3 from "../assets/images/mockup-dream-phone.webp";
import ScrollTrigger from "gsap-trial/ScrollTrigger";

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

  const texteRefs = useRef([]); // Références pour les éléments de texte

  useEffect(() => {
    // Animation avec GSAP pour chaque élément de texte à l'arrivée du composant
    texteRefs.current.forEach((texteRef, index) => {
      gsap.from(texteRef, {
        opacity: 0, // Opacité initiale à 0
        y: 50, // Animation de déplacement vers le bas
        duration: 1, // Durée de l'animation en secondes
        delay: index * 0.4, // Délai d'animation pour chaque texte pour obtenir un effet de cascade
      });
    });
  }, []);

  useEffect(() => {
    // Fonction pour cacher l'élément lors du scroll
    const cacherElement = () => {
      gsap.to("#elementADisparaitre", { opacity: 0, duration: 2 }); // Animation de la disparition de l'élément avec GSAP
    };

    // Ajoute un écouteur d'événement pour le scroll lors du montage du composant
    window.addEventListener("scroll", cacherElement);

    // Nettoie l'écouteur d'événement lors du démontage du composant
    return () => {
      window.removeEventListener("scroll", cacherElement);
    };
  }, []);

  const sectionRef = useRef(null);
  const element1Ref = useRef(null);
  const element2Ref = useRef(null);
  const element3Ref = useRef(null);
  const element4Ref = useRef(null);

  useEffect(() => {
    // Animation d'apparition des éléments avec GSAP
    gsap.from(
      [
        element1Ref.current,
        element2Ref.current,
        element3Ref.current,
        element4Ref.current,
      ],
      {
        opacity: 0,
        y: 100,
        stagger: 0.8, // délai entre chaque élément
        duration: 1,
        scrollTrigger: {
          // markers: true,
          trigger: sectionRef.current, // section en tant que déclencheur
          start: "top 30%", // point de départ de l'animation
          end: "5% top", // point d'arrivée de l'animation
          // scrub: true, // effet d'effacement lors du scroll
        },
      }
    );
  }, []);

  const myElement = useRef(null);

  useEffect(() => {
    gsap.from(myElement.current, {
      opacity: 0,
      y: 100,
      duration: 1,
      scrollTrigger: {
        // markers: true,
        trigger: myElement.current,
        start: "top 80%",
        end: "50% bottom",
        toggleActions: "play none none reverse",
      },
    });
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
                  <h1 ref={(el) => (texteRefs.current[0] = el)}>
                    Hello, I’m Jérémy Béziat, a Designer With 3 years of
                    experience.
                  </h1>
                  <div>
                    <p ref={(el) => (texteRefs.current[1] = el)}>
                      I started as a graphic designer in 2021 and I reconverted
                      in 2022 to become a front-end developer with the
                      graduation of my web/web mobile developer. I am now a
                      designer UI training with Formasup81.
                    </p>
                    <p ref={(el) => (texteRefs.current[2] = el)}>
                      The technologies I use every day : SCSS, Javascript,
                      Wordpress, InDesign, Illustrator, Photoshop, Premiere Pro,
                      After Effects, Figma.
                    </p>
                    <div className="scroll">
                      <span
                        id="elementADisparaitre"
                        ref={(el) => (texteRefs.current[3] = el)}
                      >
                        Scroll Down
                      </span>
                    </div>
                  </div>
                </section>
              </div>
              <section ref={sectionRef} className="product section">
                <h2 ref={element1Ref}>
                  What <span>I products</span> ?
                </h2>
                <div className="work-product">
                  <figure ref={element2Ref}>
                    <a href="https://www.behance.net/gallery/159684055/Raining-Stars">
                      <img
                        className="img-phone"
                        height={500}
                        width={500}
                        src={work1}
                        alt="raining stars"
                      />
                      <img
                        className="img-desktop"
                        src={work1D}
                        alt="raining stars"
                      />
                    </a>
                    <figcaption>
                      <h3>Raining Stars N°07</h3>
                      <h4>21/12/22</h4>
                    </figcaption>
                  </figure>

                  <figure ref={element3Ref}>
                    <a href="https://www.behance.net/gallery/161021241/DREAM-II">
                      <img
                        className="img-phone"
                        height={500}
                        width={500}
                        src={work3}
                        alt="DREAM II"
                      />
                      <img
                        className="img-desktop"
                        src={work3D}
                        alt="DREAM II"
                      />
                    </a>
                    <figcaption>
                      <h3>DREAM II</h3>
                      <h4>11/01/23</h4>
                    </figcaption>
                  </figure>

                  <figure ref={element4Ref}>
                    <a href="https://www.behance.net/gallery/161765241/Purple-Stars">
                      <img
                        className="img-phone"
                        height={500}
                        width={500}
                        src={work2}
                        alt="purple stars"
                      />
                      <img
                        className="img-desktop"
                        src={work2D}
                        alt="purple stars"
                      />
                    </a>
                    <figcaption>
                      <h3>Purple Stars N°11</h3>
                      <h4>20/01/23</h4>
                    </figcaption>
                  </figure>
                </div>

                <div className="available">
                  <div className="test" ref={myElement}>
                    <h3>All available on</h3>
                    <div className="behance">
                      <a
                        title="jeremybeziat-Behance"
                        href="https://www.behance.net/jeremybeziat"
                      >
                        <svg
                          width="109"
                          height="20"
                          viewBox="0 0 109 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M8.93512 16.2883C9.36158 16.2883 9.76629 16.2503 10.1471 16.1655C10.5335 16.0804 10.8763 15.947 11.1656 15.7487C11.4548 15.5587 11.694 15.2978 11.8686 14.9653C12.043 14.6363 12.1264 14.2095 12.1264 13.6927C12.1264 12.6812 11.8418 11.9625 11.2758 11.5264C10.7085 11.0963 9.95208 10.8825 9.02168 10.8825H4.32221V16.2883H8.93512ZM8.69656 7.93168C9.46207 7.93168 10.0958 7.74991 10.5983 7.38067C11.0955 7.0186 11.337 6.41839 11.337 5.59546C11.337 5.13944 11.2566 4.76133 11.0955 4.4683C10.9293 4.17527 10.7085 3.94579 10.4298 3.78555C10.1533 3.61855 9.84082 3.50286 9.4777 3.441C9.12217 3.37091 8.74871 3.3441 8.36637 3.3441H4.32221V7.93168H8.69656ZM9.2556 0.000211117C10.1942 0.000211117 11.0417 0.0814914 11.8165 0.24933C12.5864 0.412524 13.2438 0.685287 13.7993 1.0596C14.3465 1.43307 14.7744 1.93025 15.0808 2.55642C15.3797 3.17373 15.5304 3.946 15.5304 4.85992C15.5304 5.84838 15.3058 6.67363 14.857 7.33338C14.4052 7.99227 13.7412 8.53273 12.8541 8.95265C14.0623 9.29994 14.9568 9.91197 15.5503 10.7811C16.1467 11.6562 16.4382 12.7044 16.4382 13.9323C16.4382 14.9281 16.2474 15.7846 15.8672 16.5056C15.4825 17.2354 14.9594 17.8272 14.3144 18.2834C13.6642 18.7441 12.9174 19.0819 12.081 19.3018C11.2437 19.5229 10.3811 19.6339 9.51506 19.632H0V0H9.2556V0.000211117ZM27.0864 8.75483C26.6219 8.24118 25.8363 7.96314 24.8777 7.96314C24.2536 7.96314 23.737 8.06828 23.324 8.28214C22.92 8.49326 22.5883 8.75631 22.3356 9.0656C22.0835 9.38016 21.9112 9.71183 21.8116 10.0667C21.7115 10.4127 21.652 10.7265 21.6334 11.0039H27.9862C27.893 10.0078 27.5523 9.27207 27.0864 8.75483ZM22.6001 16.2229C23.1847 16.7938 24.03 17.0815 25.1251 17.0815C25.9123 17.0815 26.593 16.8824 27.1639 16.4851C27.7296 16.0893 28.0742 15.6651 28.2076 15.2254H31.6457C31.0932 16.9363 30.2546 18.158 29.1101 18.8931C27.9802 19.6318 26.601 20 24.9946 20C23.8749 20 22.8672 19.8182 21.963 19.4617C21.0585 19.1002 20.3027 18.5933 19.6669 17.933C19.0472 17.2694 18.5665 16.4851 18.2237 15.5646C17.8844 14.6484 17.7128 13.6338 17.7128 12.5343C17.7128 11.4713 17.8911 10.4782 18.2378 9.56067C18.5925 8.63998 19.0823 7.84534 19.7264 7.17884C20.3728 6.50875 21.1383 5.98011 22.0299 5.59398C22.9223 5.20848 23.9055 5.01552 24.9946 5.01552C26.1971 5.01552 27.2504 5.24669 28.1531 5.71854C29.0529 6.183 29.7901 6.81276 30.3701 7.60171C30.9494 8.38939 31.3617 9.29001 31.6195 10.2994C31.8745 11.3079 31.9647 12.3614 31.891 13.4646H21.6332C21.6332 14.588 22.0132 15.6518 22.6001 16.2229ZM37.4364 0.000211117V7.40241H37.5259C38.0216 6.57884 38.6486 5.98011 39.4194 5.60897C40.1887 5.23466 40.9395 5.04972 41.6706 5.04972C42.7135 5.04972 43.5679 5.18694 44.235 5.46942C44.903 5.75717 45.4314 6.14647 45.8184 6.65252C46.1978 7.15646 46.4661 7.77144 46.6236 8.496C46.7777 9.21908 46.8575 10.0169 46.8575 10.8964V19.632H42.9341V11.6053C42.9341 10.4351 42.7515 9.55539 42.3877 8.97988C42.0233 8.40353 41.3763 8.1143 40.4429 8.1143C39.3873 8.1143 38.6239 8.43414 38.1512 9.0656C37.6699 9.69684 37.4364 10.7362 37.4364 12.1823V19.632H33.5145V0H37.4364M57.3298 13.0285C57.087 13.1089 56.8176 13.1769 56.5402 13.2358C56.2433 13.291 55.9448 13.3367 55.6451 13.373C55.334 13.4092 55.024 13.4542 54.7155 13.5079C54.4233 13.5651 54.1311 13.6367 53.8529 13.73C53.5698 13.8225 53.3215 13.9454 53.1171 14.1005C52.9063 14.2576 52.7325 14.4591 52.6081 14.6908C52.4827 14.9279 52.4158 15.2357 52.4158 15.5997C52.4158 15.947 52.4827 16.24 52.6079 16.4807C52.7371 16.7192 52.9056 16.9057 53.1269 17.0435C53.3475 17.1814 53.6061 17.2783 53.8941 17.3321C54.1862 17.3902 54.4881 17.4119 54.7976 17.4119C55.5653 17.4119 56.1572 17.2844 56.5791 17.0287C56.9988 16.7714 57.315 16.4644 57.5124 16.1066C57.7138 15.7487 57.8354 15.3879 57.8747 15.0242C57.9262 14.6581 57.9494 14.363 57.9494 14.1415V12.6812C57.7801 12.8311 57.581 12.9466 57.3298 13.0285ZM49.6449 7.4972C50.0356 6.89803 50.5603 6.39801 51.1776 6.03669C51.8008 5.66724 52.4971 5.40693 53.2797 5.25112C54.0534 5.09286 54.8412 5.01391 55.6309 5.01552C56.3428 5.01552 57.0629 5.06471 57.8048 5.16604C58.5344 5.26675 59.2018 5.46435 59.807 5.75865C60.4117 6.05464 60.9044 6.45956 61.2859 6.98799C61.6729 7.50312 61.869 8.20086 61.869 9.0656V16.4739C61.869 17.118 61.9077 17.7301 61.9763 18.3161C62.0537 18.9073 62.2543 19.3506 62.4437 19.6415L58.4557 19.6318C58.3385 19.4619 58.2416 19.1956 58.196 18.9638C58.1493 18.733 58.1172 18.4995 58.0999 18.2646C57.4788 18.9073 56.7507 19.359 55.9022 19.6168C55.0656 19.8711 54.1959 20.0002 53.3215 20C52.6459 20 52.0168 19.9143 51.428 19.7488C50.8481 19.5833 50.3329 19.327 49.8938 18.9803C49.4526 18.6269 49.1133 18.1886 48.8657 17.6579C48.6199 17.1242 48.493 16.4889 48.493 15.7555C48.493 14.9458 48.6385 14.2794 48.9254 13.7575C49.2049 13.2358 49.5681 12.8159 50.0222 12.5051C50.4687 12.192 50.9815 11.9564 51.5623 11.8029C52.1348 11.6472 52.7154 11.5225 53.3015 11.4295C53.8896 11.3393 54.462 11.2663 55.0339 11.2095C55.6071 11.1535 56.1036 11.074 56.5472 10.9621C56.9846 10.8531 57.3351 10.6876 57.5922 10.4782C57.8449 10.2681 57.9665 9.96242 57.9494 9.55539C57.9494 9.13484 57.8747 8.79959 57.7398 8.54899C57.6122 8.31284 57.4248 8.11438 57.1964 7.97348C56.9662 7.83478 56.7066 7.744 56.4076 7.69544C56.0864 7.64931 55.7623 7.62638 55.4378 7.62683C54.6737 7.62683 54.0691 7.79678 53.6405 8.12338C53.1999 8.45948 52.9466 9.0126 52.8682 9.78487H48.9516C49.0082 8.86292 49.2349 8.10163 49.6449 7.4972ZM67.7246 5.42107V7.40241H67.8118C68.306 6.57884 68.9434 5.98011 69.735 5.60897C70.52 5.23466 71.3332 5.04972 72.1578 5.04972C73.2052 5.04972 74.0646 5.18694 74.729 5.46942C75.405 5.75717 75.9307 6.14647 76.3116 6.65252C76.7021 7.15646 76.9705 7.77144 77.1271 8.496C77.285 9.21908 77.3636 10.0169 77.3636 10.8964V19.632H73.4385V11.6053C73.4385 10.4351 73.2544 9.55539 72.8883 8.97988C72.5172 8.40353 71.8768 8.03407 70.9367 8.03407C69.8744 8.03407 69.1006 8.43414 68.625 9.0656C68.1466 9.69684 67.9093 10.7362 67.9093 12.1823V19.632H64.0271V5.42107H67.7246ZM86.051 7.96314C85.4234 7.96314 84.9053 8.10163 84.4886 8.3896C84.0635 8.6735 83.7084 9.05016 83.4501 9.49121C83.1841 9.9392 82.9998 10.4349 82.8858 10.9777C82.7792 11.5196 82.7196 12.0565 82.7196 12.5902C82.7196 13.106 82.7792 13.6287 82.8858 14.1624C82.9998 14.6931 83.175 15.1724 83.4226 15.6092C83.6716 16.0353 84.0163 16.3975 84.4297 16.6671C84.8494 16.9437 85.3601 17.0815 85.966 17.0815C86.9061 17.0815 87.6262 16.8191 88.131 16.2995C88.6334 15.777 88.9442 15.0748 89.0753 14.1951H92.8459C92.5872 16.0804 91.8536 17.5206 90.6469 18.5135C89.4355 19.4999 87.8842 20 85.9951 20C84.9277 20 83.9578 19.8182 83.0633 19.4617C82.1703 19.1002 81.412 18.6024 80.7875 17.9598C80.1626 17.3156 79.678 16.5501 79.3232 15.6601C78.9765 14.7683 78.8021 13.7896 78.8021 12.7274C78.8021 11.6271 78.9638 10.6021 79.2852 9.65461C79.605 8.71092 80.0777 7.89305 80.7075 7.20713C81.3315 6.51677 82.0949 5.98011 82.9977 5.59398C83.8966 5.20848 84.9239 5.01552 86.0772 5.01552C86.9211 5.01552 87.7313 5.12952 88.5139 5.34275C89.2909 5.56041 89.9892 5.89672 90.6019 6.34767C91.2148 6.79328 91.727 7.363 92.1051 8.01972C92.4859 8.68537 92.7036 9.48297 92.7637 10.3948H88.9353C88.6818 8.77256 87.7201 7.96314 86.051 7.96314ZM20.835 1.31716H28.7928V3.2548H20.835V1.31716ZM103.251 8.75483C102.781 8.24118 101.989 7.96314 101.042 7.96314C100.419 7.96314 99.901 8.06828 99.4807 8.28214C99.0757 8.49326 98.7058 8.75631 98.4578 9.0656C98.2095 9.38016 98.0313 9.71183 97.9279 10.0667C97.8354 10.4127 97.7704 10.7265 97.7533 11.0039H104.154C104.049 10.0078 103.717 9.27207 103.251 8.75483H103.251ZM98.7164 16.2229C99.3033 16.7938 100.189 17.0815 101.292 17.0815C102.078 17.0815 102.757 16.8824 103.324 16.4851C103.892 16.0893 104.243 15.6651 104.369 15.2254H107.807C107.257 16.9363 106.413 18.158 105.276 18.8931C104.142 19.6318 102.769 20 101.156 20C100.034 20 99.0219 19.8182 98.1246 19.4617C97.2217 19.1002 96.4653 18.5933 95.8323 17.933C95.2062 17.2694 94.7261 16.4851 94.3845 15.5646C94.0454 14.6484 93.877 13.6338 93.877 12.5343C93.877 11.4713 94.0513 10.4782 94.3986 9.56067C94.7506 8.63998 95.2507 7.84534 95.8912 7.17884C96.5404 6.50875 97.2994 5.98011 98.1886 5.59398C99.0816 5.20848 100.073 5.01552 101.156 5.01552C102.357 5.01552 103.415 5.24669 104.309 5.71854C105.211 6.183 105.952 6.81276 106.527 7.60171C107.107 8.38939 107.523 9.29001 107.779 10.2994C108.031 11.3079 108.128 12.3614 108.056 13.4646H97.7533C97.7533 14.588 98.1282 15.6518 98.7164 16.2229Z"
                            fill="white"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
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
