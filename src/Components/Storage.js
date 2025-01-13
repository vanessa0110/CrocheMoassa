import React from 'react';
import "./Storage.css";

import boite from '../Image/boite.png';
import panier from '../Image/panier.jpeg';
import panier1 from '../Image/panier1.jpeg';
import panier1b from '../Image/panier1b.jpeg';
import panier2 from '../Image/panier2.jpeg';
import panier2b from '../Image/panier2b.jpeg';



const Storage = () => {
    return(
        <div>
            <div className='Storage'>
                <div className='explications'>
                    <img src={boite} alt = "" className ="courses" />
                    <div className='titre'>Rangements</div>
                    <div className='parag'>Ce panier étant ma première réalisation de décoration a
                        <br/>plusieurs déclinaisons : votre panier décoratif, votre
                        <br/>panier permettant de vider vos poches à l'entrée de
                        <br/>votre logement et bien d'autres encore. Il existe en
                        <br/>plusieurs couleurs !</div>
                </div>
                <img src={panier} alt = "panier" className ="panier" />
            </div>

            <div className='Flowers1'>
                <img src={panier1} alt = "fleur1" className ="flowers1" />
                <div className='explications1'>
                    <div className='parag'> Ce pot peut prendre place dans vos salles de bains 
                        <br/>pour ranger vos contons tiges, contons démaquillant et 
                        <br/>bien d'autres produits. Il a été amidonné afin de le 
                        <br/>rendre plus solide.</div>
                </div>
                <img src={panier1b} alt = "fleur1" className ="flowers1" />
            </div>

            <div className='Flowers'>
                <img src={panier2} alt = "fleur2" className ="flowers1" />
                <img src={panier2b} alt = "fleur2" className ="flowers1" />
                <div className='explications2'>
                    <div className='parag'>Suite à une demande, j'ai décidé de relever le défi de concevoir
                        <br/>un sac qui corresponde aux attentes tout en intégrant des 
                        <br/>motifs originaux. Si vous avez de nouvelles envies 
                        <br/>et/ou idées de couleurs, n'hésitez pas à 
                        <br/>me contacter.</div>
                </div>
            </div>
        </div>  

    );
};

export default Storage;