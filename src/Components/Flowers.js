import React from 'react';
import "./Flowers.css";

import fleur from '../Image/fleur.png';
import fleur1 from '../Image/flow.jpeg';
import fleur2a from '../Image/flow1.jpeg';
import fleur2b from '../Image/flow2.jfif';
import fleur3 from '../Image/flow3.jpeg';
import fleur4a from '../Image/lys2.jpg';
import fleur4b from '../Image/lys3.jpg';

const Flowers = () => {
    return (
        <div>
            {/* Première section */}
            <section className="section-container">
                <div className="section-text">
                    <img src={fleur} alt="" className="section-icon" />
                    <h2 className="section-title">Fleurs</h2>
                    <p className="section-description">
                        Lors d'un pique nique dans un parc avec mon compagnon
                        et entouré de marguerites j'ai voulu apprendre à mon compagnon
                        ma passion pour le crochet. Simple et efficace pour
                        mettre un peu de couleurs dans votre intérieur.
                    </p>
                </div>
                <div className="image-gallery">
                    <img src={fleur1} alt="fleur1" className="content-image" />
                </div>
            </section>

            {/* Deuxième section */}
            <section className="section-container">
                <div className="image-gallery">
                    <img src={fleur2a} alt="tournesol 1" className="content-image" />
                </div>
                <div className="section-text">
                    <p className="section-description">
                        Pendant la saison des tournesols, ils ne durent pas 
                        dans le temps si vous voulez les cueillir. Une solution 
                        s'offre à vous avec le pot de tournesols éternels !
                    </p>
                </div>
                <div className="image-gallery">
                    <img src={fleur2b} alt="tournesol 2" className="content-image" />
                </div>
            </section>

            {/* Troisième section */}
            <section className="section-container">
                <div className="image-gallery">
                    <img src={fleur4a} alt="fleur4a" className="content-image" />
                </div>
                <div className="section-text">
                    <p className="section-description">
                        L'une des créations pour laquelle j'ai pris le plus de
                        plaisir à réaliser est les lys. Cela fait plaisir 
                        lorsqu'à chaque étape de la conception on visualise 
                        beaucoup mieux le projet.
                    </p>
                </div>
                <div className="image-gallery">
                    <img src={fleur4b} alt="fleur4b" className="content-image" />
                </div>
            </section>
            
            {/* Quatrième section */}
            <section className="section-container">
                <div className="image-gallery">
                    <img src={fleur3} alt="fleur3" className="content-image" />
                </div>
                <div className="section-text">
                    <p className="section-description">
                        Une nouvelle déclinaison des tulipes qui peuvent sécher 
                        rapidement dans vos vases. En voici une option éternelle 
                        qui sera prête à mettre en couleur
                        vos intérieurs, même en hors-saison.
                    </p>
                </div>
            </section>
        </div>
    );
};


export default Flowers;