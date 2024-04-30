import React from "react";

function productivite() {
  return (
    <div>
      <section className="productivite">
        <div className="bg-productivite"> </div>
        <h2>productivité</h2>
        <div className="container-details">
          <div className="details">
            <h3>WEB</h3>
            <p>Développement</p>
            <ul>
              <li>- Web design</li>
              <li>- Développement web</li>
              <li>- Hébergement</li>
              <li>- E-commerce</li>
            </ul>
          </div>
          <div className="details">
            <h3>BRANDING</h3>
            <p>Graphisme</p>
            <ul>
              <li>- Design de logo</li>
              <li>- Identité de marque</li>
              <li>- Création de contenu</li>
              <li>- Réalisation vidéo</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}

export default productivite;
