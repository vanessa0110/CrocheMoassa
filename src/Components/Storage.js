import React from 'react';
import "./Storage.css";

import boite from '../Image/boite.png';
import panier from '../Image/panier.jpeg';
import panier1 from '../Image/panier1.jpeg';
import panier1b from '../Image/panier1b.jpeg';
import panier2 from '../Image/panier2.jpeg';
import panier2b from '../Image/panier2b.jpeg';


const Storage = () => {
    return (
        <div>
            {/* Première section */}
            <section className="section-container">
                <div className="section-text">
                    <img src={boite} alt="" className="section-icon" />
                    <h2 className="section-title">Rangements</h2>
                    <p className="section-description">
                        Ce panier étant ma première réalisation de décoration a
                        plusieurs déclinaisons : votre panier décoratif, votre
                        panier permettant de vider vos poches à l'entrée de
                        votre logement et bien d'autres encore. Il existe en
                        plusieurs couleurs !
                    </p>
                </div>
                <div className="image-gallery">
                    <img src={panier} alt="panier" className="content-image" />
                </div>
            </section>

            {/* Deuxième section */}
            <section className="section-container">
                <div className="image-gallery">
                    <img src={panier1} alt="panier décoratif 1" className="content-image" />
                    <img src={panier1b} alt="panier décoratif 2" className="content-image" />
                </div>
                <div className="section-text">
                    <p className="section-description">
                        Ce pot peut prendre place dans vos salles de bains 
                        pour ranger vos contons tiges, contons démaquillant et 
                        bien d'autres produits. Il a été amidonné afin de le 
                        rendre plus solide.
                    </p>
                </div>
            </section>

            {/* Troisième section */}
            <section className="section-container">
                <div className="image-gallery">
                    <img src={panier2} alt="sac 1" className="content-image" />
                    <img src={panier2b} alt="sac 2" className="content-image" />
                </div>
                <div className="section-text">
                    <p className="section-description">
                        Suite à une demande, j'ai décidé de relever le défi de concevoir
                        un sac qui corresponde aux attentes tout en intégrant des 
                        motifs originaux. Si vous avez de nouvelles envies 
                        et/ou idées de couleurs, n'hésitez pas à 
                        me contacter.
                    </p>
                </div>
            </section>
        </div>
    );
};


export default Storage;