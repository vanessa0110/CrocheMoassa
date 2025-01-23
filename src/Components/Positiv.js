import React from 'react';
import "./Positiv.css";

import patate1 from "../Image/patate1.jfif";
import patate2 from "../Image/patate2.jpeg";
import patate3 from "../Image/patate3.png";
import patate4 from "../Image/patate4.jfif";
import positiv from "../Image/pensee-positive.png";

const Positiv = () => {
    return (
        <div>
            {/* patate ligne 1 */}
            <section className="section-container">
                <div className="image-gallery">
                    <img src={patate1} alt = "patate1" className ="content-image" />
                </div>
                <div className="section-text">
                    <div className="decorative-line" />
                    <img src={positiv} alt="" className="section-icon" />
                    <h2 className="section-title">Énergie positive</h2>
                    <p className="section-description">
                    Les lundis matins étant toujours un peu difficiles au travail, 
                    j'ai réalisé une patate positive pour répandre la bonne humeur 
                    dès mon arrivée au bureau. Mes collègues ont adopté cette idée : 
                    un message encourageant venant d'une petite patate qui vous 
                    sourit est toujours le bienvenu.
                    </p>
                </div>
                <div className="image-gallery">
                    <img src={patate2} alt = "patate2" className ="content-image" />
                </div>
            </section>     


            {/* patate ligne 2 */}
            <section className="section-container">
                <div className="section-text">
                    <p className="section-description">
                    Finalement l'idée de la patate positive m'a 
                    poussée à en faire d'autres formats tels qu'une 
                    tomate ou une aubergine positive.
                    </p>
                </div>
                <div className="image-gallery">
                    <img src={patate3} alt = "patate3" className ="content-image" />
                    <img src={patate4} alt = "patate4" className ="content-image" />
                </div>
            </section>        
        </div>
    );
};

export default Positiv;