import React from 'react';
import "./Love.css";

import coeur from "../Image/coeur.png";
import coeur1 from "../Image/love.jpeg";

const Love = () => {
    return (
        <div>
            {/* Coeur section */}
            <section className="section-container">
                <div className="image-gallery">
                    <img src={coeur1} alt="coeur1" className="content-image" />
                </div>
                <div className="section-text">
                    <img src={coeur} alt="" className="section-icon" />
                    <h2 className="section-title">Coeur</h2>
                    <p className="section-description">
                        Après avoir appris le mariage de l'un de mes collègues,
                        j'ai voulu lui offrir un cadeau personnalisé. C'est là que j'ai
                        pensé à réaliser des cœurs dans un pot. Un cadeau qui a
                        beaucoup plu et qui était très original !
                     </p>
                </div>
                
            </section>           
        </div>
    );
};

export default Love;
