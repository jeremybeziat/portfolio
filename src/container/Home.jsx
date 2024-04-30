import React, { useEffect, useState, useRef } from "react";
import useLocoScroll from "../hooks/useLocoScroll";
import Header from "../components/Header";
import Presentation from "../components/Presentation";
import Introduction from "../components/Intro";
import Productivite from "../components/Capacities";
import Projet from "../components/Project";

function Home() {
  const ref = useRef(null);
  const [preloader, setPreload] = useState(true);

  useLocoScroll(!preloader);

  useEffect(() => {
    if (!preloader && ref) {
      if (typeof window === "undefined" || !window.document) {
        return;
      }
    }
  }, [preloader]);

  const [timer, setTimer] = React.useState(3);

  const id = React.useRef(null);

  const clear = () => {
    window.clearInterval(id.current);
    setPreload(false);
  };

  React.useEffect(() => {
    id.current = window.setInterval(() => {
      setTimer((time) => time - 1);
    }, 1000);
    return () => clear();
  }, []);

  React.useEffect(() => {
    if (timer === 0) {
      clear();
    }
  }, [timer]);

  if (typeof window === "undefined" || !window.document) {
    return null;
  }

  return (
    <>
      {preloader ? (
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
        </div>
      ) : (
        <div
          className="main-container"
          id="main-container"
          data-scroll-container
          ref={ref}
        >
          <div id="header">
            <Header />
          </div>
          <Presentation />
          <Introduction />
          <Productivite />
          <Projet />
        </div>
      )}
    </>
  );
}
export default Home;
