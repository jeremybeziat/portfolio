import React from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap-trial/ScrollTrigger";

import Header from "../components/Header";

gsap.registerPlugin(ScrollTrigger); // Enregistrez le plugin ScrollTrigger

function Work() {
  return (
    <div>
      <Header />
      <main className="work">
        <h1>COMING SOON</h1>
      </main>
    </div>
  );
}

export default Work;
