import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";

import Header from "../components/Header";
import nuclear from "../assets/images/mockup/affiche-nuclear-jeremy-beziat.webp";
import nuclear1 from "../assets/images/mockup/poster-nuclear.webp";
import nuclear2 from "../assets/images/mockup/nuclear-blackandyellow.webp";
import nuclear3 from "../assets/images/mockup/billboard2-mockup-nuclear-jeremy-beziat.webp";
import nuclear4 from "../assets/images/mockup/mockup-n2-nuclear.webp";
import Footer from "../components/Footer";
function Flowers() {
  const scrollRef = useRef(null);

  useEffect(() => {
    const textElement = scrollRef.current;

    gsap.to(textElement, {
      opacity: 0,
      y: 20,
      duration: 0.5,
      ease: "power3.out",
      scrollTrigger: {
        // markers: true,
        trigger: textElement,
        start: "top 90%", // Démarrer l'animation lorsque 80% du texte est visible
      },
    });
  }, []);
  return (
    <div>
      <Header />
      <main>
        <div className="work-title">
          <h1 className="nuclear-title">Nuclear</h1>
          <h2>Poster</h2>
          <span className="scroll" ref={scrollRef}>
            SCROLL DOWN
          </span>
        </div>
        <div className="presentation-work">
          <img rel="preload" src={nuclear} alt="poster Nuclear" />
          <img rel="preload" src={nuclear1} alt="flowers mock-up n°01" />
          <img rel="preload" src={nuclear2} alt="" />
          <img rel="preload" src={nuclear3} alt="" />
          <img rel="preload" src={nuclear4} alt="" />
          <h2>Nuclear - 2023</h2>
          <a
            className="link-behance"
            href="https://www.behance.net/gallery/178633613/Nuclear"
          >
            <h3>Available on</h3>
            <svg
              width="108"
              height="20"
              viewBox="0 0 108 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.9286 16.2883C9.35474 16.2883 9.75916 16.2503 10.1397 16.1655C10.5258 16.0804 10.8684 15.947 11.1574 15.7487C11.4464 15.5587 11.6855 15.2978 11.8599 14.9653C12.0342 14.6364 12.1175 14.2095 12.1175 13.6927C12.1175 12.6812 11.8331 11.9625 11.2675 11.5264C10.7007 11.0963 9.94481 10.8825 9.01509 10.8825H4.31905V16.2883H8.9286ZM8.69021 7.93168C9.45516 7.93168 10.0885 7.74991 10.5906 7.38067C11.0874 7.0186 11.3287 6.41839 11.3287 5.59546C11.3287 5.13944 11.2483 4.76133 11.0874 4.4683C10.9214 4.17527 10.7007 3.94579 10.4222 3.78555C10.1459 3.61855 9.83363 3.50286 9.47077 3.441C9.11551 3.37091 8.74232 3.3441 8.36026 3.3441H4.31905V7.93168H8.69021ZM9.24884 0.000211117C10.1868 0.000211117 11.0336 0.0814914 11.8078 0.24933C12.5772 0.412524 13.2341 0.685287 13.7892 1.0596C14.336 1.43307 14.7636 1.93025 15.0697 2.55642C15.3685 3.17373 15.5191 3.946 15.5191 4.85992C15.5191 5.84838 15.2946 6.67363 14.8461 7.33338C14.3947 7.99227 13.7312 8.53273 12.8447 8.95265C14.052 9.29994 14.9459 9.91197 15.5389 10.7811C16.1349 11.6562 16.4262 12.7044 16.4262 13.9323C16.4262 14.9281 16.2355 15.7846 15.8556 16.5056C15.4712 17.2354 14.9484 17.8272 14.3039 18.2834C13.6542 18.7441 12.908 19.0819 12.0722 19.3018C11.2354 19.5229 10.3735 19.6339 9.50811 19.632H0V0H9.24884V0.000211117ZM27.0666 8.75483C26.6025 8.24118 25.8175 7.96314 24.8595 7.96314C24.2359 7.96314 23.7197 8.06828 23.307 8.28214C22.9032 8.49326 22.5718 8.75631 22.3193 9.0656C22.0674 9.38016 21.8952 9.71183 21.7957 10.0667C21.6957 10.4127 21.6362 10.7265 21.6176 11.0039H27.9657C27.8727 10.0078 27.5322 9.27207 27.0666 8.75483ZM22.5836 16.2229C23.1678 16.7938 24.0125 17.0815 25.1067 17.0815C25.8934 17.0815 26.5736 16.8824 27.144 16.4851C27.7094 16.0893 28.0537 15.6651 28.187 15.2254H31.6225C31.0705 16.9363 30.2325 18.158 29.0889 18.8931C27.9598 19.6318 26.5816 20 24.9764 20C23.8574 20 22.8505 19.8182 21.9469 19.4617C21.0432 19.1002 20.2879 18.5933 19.6525 17.933C19.0333 17.2694 18.553 16.4851 18.2103 15.5646C17.8713 14.6484 17.6998 13.6338 17.6998 12.5343C17.6998 11.4713 17.8781 10.4782 18.2245 9.56067C18.5789 8.63998 19.0683 7.84534 19.712 7.17884C20.358 6.50875 21.1229 5.98011 22.0138 5.59398C22.9055 5.20848 23.888 5.01552 24.9764 5.01552C26.178 5.01552 27.2305 5.24669 28.1326 5.71854C29.0317 6.183 29.7684 6.81276 30.3479 7.60171C30.9268 8.38939 31.3388 9.29001 31.5964 10.2994C31.8512 11.3079 31.9413 12.3613 31.8677 13.4646H21.6174C21.6174 14.588 21.9971 15.6518 22.5836 16.2229ZM37.4091 0.000211117V7.40241H37.4985C37.9938 6.57884 38.6204 5.98011 39.3906 5.60897C40.1594 5.23466 40.9096 5.04972 41.6401 5.04972C42.6823 5.04972 43.5361 5.18694 44.2027 5.46942C44.8702 5.75717 45.3982 6.14647 45.7849 6.65252C46.164 7.15646 46.4322 7.77144 46.5895 8.496C46.7435 9.21908 46.8233 10.0169 46.8233 10.8964V19.632H42.9027V11.6053C42.9027 10.4351 42.7203 9.55539 42.3568 8.97988C41.9927 8.40353 41.3461 8.1143 40.4134 8.1143C39.3586 8.1143 38.5957 8.43414 38.1234 9.0656C37.6424 9.69684 37.4091 10.7362 37.4091 12.1823V19.632H33.49V0H37.4091M57.2879 13.0285C57.0453 13.1089 56.7761 13.1769 56.4989 13.2358C56.2023 13.291 55.904 13.3367 55.6044 13.373C55.2936 13.4092 54.9838 13.4542 54.6756 13.5079C54.3836 13.5651 54.0916 13.6367 53.8136 13.73C53.5307 13.8225 53.2826 13.9454 53.0784 14.1005C52.8676 14.2576 52.694 14.4591 52.5697 14.6908C52.4444 14.9279 52.3775 15.2357 52.3775 15.5997C52.3775 15.947 52.4444 16.24 52.5695 16.4807C52.6986 16.7192 52.867 16.9057 53.0881 17.0435C53.3085 17.1814 53.5669 17.2783 53.8547 17.3321C54.1467 17.3902 54.4483 17.4119 54.7576 17.4119C55.5247 17.4119 56.1162 17.2844 56.5377 17.0287C56.9571 16.7714 57.2731 16.4644 57.4704 16.1066C57.6717 15.7487 57.7932 15.3879 57.8324 15.0242C57.8839 14.6581 57.9071 14.363 57.9071 14.1415V12.6812C57.7379 12.8311 57.539 12.9466 57.2879 13.0285ZM49.6086 7.4972C49.999 6.89803 50.5234 6.39801 51.1402 6.03669C51.763 5.66724 52.4587 5.40693 53.2408 5.25112C54.0139 5.09286 54.8012 5.01391 55.5903 5.01552C56.3017 5.01552 57.0213 5.06471 57.7626 5.16604C58.4917 5.26675 59.1585 5.46435 59.7634 5.75865C60.3676 6.05464 60.8599 6.45956 61.2412 6.98799C61.6278 7.50312 61.8238 8.20086 61.8238 9.0656V16.4739C61.8238 17.118 61.8624 17.7301 61.931 18.3161C62.0084 18.9073 62.2088 19.3506 62.3981 19.6415L58.413 19.6318C58.2959 19.4619 58.1991 19.1956 58.1535 18.9638C58.1068 18.733 58.0747 18.4995 58.0575 18.2646C57.4368 18.9073 56.7092 19.359 55.8614 19.6168C55.0253 19.8711 54.1563 20.0002 53.2826 20C52.6075 20 51.9788 19.9143 51.3904 19.7488C50.8109 19.5833 50.2962 19.327 49.8574 18.9803C49.4165 18.6269 49.0774 18.1886 48.83 17.6579C48.5844 17.1242 48.4576 16.4889 48.4576 15.7555C48.4576 14.9458 48.603 14.2794 48.8897 13.7575C49.169 13.2358 49.5318 12.8159 49.9856 12.5051C50.4318 12.192 50.9442 11.9564 51.5246 11.8029C52.0968 11.6472 52.6769 11.5225 53.2625 11.4295C53.8503 11.3393 54.4222 11.2663 54.9937 11.2095C55.5665 11.1535 56.0626 11.074 56.5059 10.9621C56.943 10.8531 57.2932 10.6876 57.5501 10.4782C57.8027 10.2681 57.9242 9.96242 57.9071 9.55539C57.9071 9.13484 57.8324 8.79959 57.6976 8.54899C57.5701 8.31284 57.3829 8.11438 57.1546 7.97348C56.9246 7.83478 56.6651 7.744 56.3664 7.69544C56.0454 7.64931 55.7215 7.62638 55.3973 7.62683C54.6338 7.62683 54.0296 7.79678 53.6013 8.12338C53.161 8.45948 52.9079 9.0126 52.8296 9.78487H48.9158C48.9724 8.86292 49.1989 8.10163 49.6086 7.4972ZM67.6751 5.42107V7.40241H67.7622C68.2561 6.57884 68.893 5.98011 69.6841 5.60897C70.4685 5.23466 71.2811 5.04972 72.1051 5.04972C73.1517 5.04972 74.0105 5.18694 74.6744 5.46942C75.3499 5.75717 75.8752 6.14647 76.2558 6.65252C76.6461 7.15646 76.9142 7.77144 77.0708 8.496C77.2286 9.21908 77.3071 10.0169 77.3071 10.8964V19.632H73.3848V11.6053C73.3848 10.4351 73.2009 9.55539 72.8351 8.97988C72.4642 8.40353 71.8243 8.03408 70.8849 8.03408C69.8233 8.03408 69.0502 8.43414 68.5749 9.0656C68.0968 9.69684 67.8597 10.7362 67.8597 12.1823V19.632H63.9803V5.42107H67.6751ZM85.9882 7.96314C85.361 7.96314 84.8433 8.10163 84.4269 8.3896C84.0021 8.6735 83.6473 9.05016 83.3891 9.49121C83.1233 9.9392 82.9391 10.4349 82.8252 10.9777C82.7187 11.5196 82.6592 12.0565 82.6592 12.5902C82.6592 13.106 82.7187 13.6287 82.8252 14.1624C82.9391 14.6931 83.1142 15.1724 83.3617 15.6092C83.6104 16.0353 83.955 16.3975 84.368 16.6671C84.7874 16.9437 85.2977 17.0815 85.9032 17.0815C86.8426 17.0815 87.5622 16.8191 88.0666 16.2995C88.5687 15.777 88.8792 15.0748 89.0102 14.1951H92.778C92.5196 16.0804 91.7865 17.5206 90.5807 18.5135C89.3701 19.4999 87.82 20 85.9323 20C84.8657 20 83.8965 19.8182 83.0026 19.4617C82.1103 19.1002 81.3525 18.6024 80.7285 17.9598C80.104 17.3156 79.6198 16.5501 79.2652 15.6601C78.9188 14.7683 78.7446 13.7896 78.7446 12.7274C78.7446 11.6271 78.9062 10.6021 79.2272 9.65461C79.5468 8.71092 80.0192 7.89305 80.6485 7.20713C81.2721 6.51677 82.035 5.98011 82.937 5.59398C83.8353 5.20848 84.8619 5.01552 86.0144 5.01552C86.8576 5.01552 87.6673 5.12952 88.4493 5.34275C89.2256 5.56041 89.9235 5.89672 90.5357 6.34767C91.1482 6.79328 91.66 7.363 92.0378 8.01972C92.4184 8.68537 92.6359 9.48297 92.696 10.3948H88.8704C88.617 8.77256 87.6561 7.96314 85.9882 7.96314ZM20.8198 1.31716H28.7718V3.2548H20.8198V1.31716ZM103.176 8.75483C102.706 8.24118 101.914 7.96314 100.968 7.96314C100.346 7.96314 99.828 8.06828 99.408 8.28214C99.0034 8.49326 98.6337 8.75631 98.3859 9.0656C98.1378 9.38016 97.9597 9.71183 97.8564 10.0667C97.764 10.4127 97.699 10.7265 97.6819 11.0039H104.078C103.973 10.0078 103.641 9.27207 103.176 8.75483H103.176ZM98.6443 16.2229C99.2308 16.7938 100.116 17.0815 101.218 17.0815C102.003 17.0815 102.682 16.8824 103.249 16.4851C103.816 16.0893 104.167 15.6651 104.292 15.2254H107.728C107.179 16.9363 106.336 18.158 105.2 18.8931C104.066 19.6318 102.694 20 101.082 20C99.9607 20 98.9496 19.8182 98.053 19.4617C97.1507 19.1002 96.3948 18.5933 95.7623 17.933C95.1366 17.2694 94.6569 16.4851 94.3155 15.5646C93.9767 14.6484 93.8084 13.6338 93.8084 12.5343C93.8084 11.4713 93.9826 10.4782 94.3297 9.56067C94.6814 8.63998 95.1811 7.84534 95.8212 7.17884C96.4699 6.50875 97.2283 5.98011 98.1169 5.59398C99.0093 5.20848 100 5.01552 101.082 5.01552C102.283 5.01552 103.34 5.24669 104.233 5.71854C105.134 6.183 105.874 6.81276 106.45 7.60171C107.028 8.38939 107.445 9.29001 107.7 10.2994C107.952 11.3079 108.049 12.3613 107.977 13.4646H97.6819C97.6819 14.588 98.0566 15.6518 98.6443 16.2229Z"
                fill="white"
              />
            </svg>
          </a>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Flowers;
