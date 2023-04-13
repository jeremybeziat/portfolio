import './assets/styles/App.scss'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Work from "./pages/Work";
import Contact from "./pages/Contact";
import React, { useEffect } from "react";
import { gsap } from "gsap";

function App() {
  useEffect(() => {
    // Utiliser gsap pour créer une animation de défilement sur window
    gsap.to(window, {
      scrollTop: 0, // La position de défilement finale
      duration: 5, // La durée de l'animation en secondes
      delay: 2, // Le délai avant que l'animation ne commence en secondes
      ease: "power1.out", // L'animation d'accélération/décélération
    });
  }, []);
  return (
    <BrowserRouter>
        <Routes>
          <Route path="*" element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/work" element={<Work />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
