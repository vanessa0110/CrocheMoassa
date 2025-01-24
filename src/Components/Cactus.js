import React from 'react';
import "./Cactus.css";

import cactus1 from "../Image/cactus1.jpeg";
import cactus2 from "../Image/cactus2.jpeg";
import cactus3 from "../Image/cactus3.jpeg";
import cactus4 from "../Image/cactus4.jpeg";
import cactus5 from "../Image/cactus5.jpeg";
import cactus6 from "../Image/cactus6.jpeg";
import cactus from "../Image/cactus.png";

const Cactus = () => {
    return (
        <div>
            {/* cactus ligne 1 */}
            <section className="section-container">
                <div className="image-gallery">
                    <img src={cactus1} alt = "cactus1" className ="content-image" />
                    <img src={cactus2} alt = "cactus2" className ="content-image" />
                    <img src={cactus3} alt = "cactus3" className ="content-image" />
                    <img src={cactus4} alt = "cactus4" className ="content-image" />
                </div>
            </section>  

            {/* cactus ligne 2 */}
            <section className="section-container">
                <div className="image-gallery">
                    <img src={cactus5} alt = "cactus5" className ="content-image" />
                </div>
                <div className="section-text">
                    <img src={cactus} alt="" className="section-icon" />
                    <h2 className="section-title">Plante exotique</h2>
                    <p className="section-description">
                        Grâce aux cactus en crochet il est possible d'avoir des plantes exotiques 
                        même si vous manquez de luminosité chez vous. Si vous n'avez pas 
                        le temps de vous occuper de vraies plantes ou si vous êtes en déplacements régulièrement; ces réalisations sont faites pour vous. En petit ou en grand, 
                        c’est à vous de choisir. Vous pouvez même réaliser votre famille avec 
                        des cactus en crochet !
                    </p>
                </div>
                <div className="image-gallery">
                    <img src={cactus6} alt = "cactus6" className ="content-image" />
                </div>
            </section>           
        </div>
    );
};

export default Cactus;