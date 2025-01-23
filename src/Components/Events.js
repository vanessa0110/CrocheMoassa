import React from 'react';
import "./Events.css";

import paques from "../Image/paques.jpeg";
import hallo1 from "../Image/hallo1.jpeg";
import hallo2 from "../Image/hallo2.jpeg";
import noel1 from "../Image/noel.jfif";
import noel2 from "../Image/noel2.jfif";
import noel3 from "../Image/noel3.jpg";
import event from "../Image/plan-de-marketing.png";

const Events = () => {
    return (
        <div className="events-container">
            {/* Titre principal */}
            <div className="main-header">
                <img src={event} alt="Icône événements" className="section-icon" />
                <h2 className="main-title">Évènements</h2>
            </div>  

            {/* Pâques */}
            <section className="section-container easter-section">
                <div className="image-gallery">
                    <img src={paques} alt="paques" className="content-images" />
                </div>
                <div className="section-text">
                    <h4 className="section-title">Pâques</h4>
                    <p className="section-description">
                        Ce panier était l'une de mes premières idées de décoration. En effet, 
                        la période de Pâques m'a un peu aidé et j'ai tout de suite pensé 
                        à faire ce panier vêtu d'oreilles de lapin et rempli d'un œuf de Pâques.
                    </p>
                </div>
            </section> 

            {/* Halloween */}
            <section className="section-container halloween-section">
                <div className="image-gallery">
                    <img src={hallo1} alt="hallo1" className="content-images" />
                </div>
                <div className="section-text">
                    <h2 className="section-title">Halloween</h2>
                    <p className="section-description">
                        La période d'Halloween m'a donné une superbe idée qui était 
                        de réaliser des citrouilles en crochet de plusieurs couleurs
                        différentes. Des créations originales pour décorer votre 
                        intérieur facilement.
                    </p>
                </div>
                <div className="image-gallery">
                    <img src={hallo2} alt="hallo2" className="content-images" />
                </div>
            </section>     

            {/* Noël - Section améliorée */}
            <section className="section-container christmas-section">
                <div className="text-center">
                    <h4 className="section-title">Noël</h4>
                    <p className="section-description">
                    C'est la meilleure période de l'année et j'ai pu m'amuser à faire 
                    de multiples créations en passant par les gnômes, le sapin, 
                    le flocon de neige ou bien les boules de Noël.
                    </p>
                </div>
                <div className="image-grid">
                    <img src={noel1} alt="Sapin de Noël" className="content-images" />
                    <img src={noel2} alt="Boules de Noël" className="content-images" />
                    <img src={noel3} alt="Décorations de Noël" className="content-images" />
                </div>
            </section>
        </div>
    );
};

export default Events;