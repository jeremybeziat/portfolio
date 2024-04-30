import React from "react";

function index() {
  return (
    <div>
      <div className="presentation-bg"></div>
      <section className="presentation">
        <div className="title">
          <h1>
            Prêt à donner vie à votre <span>vision</span> ?<br />
            Créons <span>une identité graphique</span> et{" "}
            <span>une expérience web</span> qui reflètent parfaitement{" "}
            <span>votre projet</span>
          </h1>
          <a className="link-form" href="/formulaire">
            VOTRE VISION
          </a>
        </div>
        <div className="link-social-container">
          <ul className="link-social">
            <li>
              <a
                title="https://twitter.com/EpureVision"
                href="https://twitter.com/EpureVision"
                target="u_blank"
              >
                TWITER
              </a>
            </li>
            <li>
              <a
                title="https://www.instagram.com/epurevision/"
                href="https://www.instagram.com/epurevision/"
                target="u_blank"
              >
                INSTAGRAM
              </a>
            </li>
            <li>
              <a
                title="https://www.behance.net/jeremybeziat"
                href="https://www.behance.net/jeremybeziat"
                target="u_blank"
              >
                BEHANCE
              </a>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}

export default index;
