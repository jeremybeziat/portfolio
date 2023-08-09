import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import portrait from "../assets/images/portrait-jeremy_beziat.webp";
import logo from "../assets/images/icon/logo-jeremybeziat-white2.webp";

function About() {
  return (
    <div>
      <Header />
      <main className="about">
        <div className="container-about">
          <div className="content">
            <h1 className="title-about">About me</h1>
            <h2 className="subtitle-about">Petite description</h2>
            <p className="text-about">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus
              sequi reiciendis voluptatum fugiat, nobis earum aut iusto
              temporibus a soluta recusandae aspernatur vero odit, ipsa dicta
              quasi molestiae quidem rerum.
            </p>
          </div>
          <div className="portrait-logo">
            <img
              className="portrait-about"
              src={portrait}
              alt="jeremy beziat"
            />
            <img className="logo-about" src={logo} alt="logo" />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default About;
