import React from 'react';
import "./Mushrooms.css";

import champi from '../Image/champignon.png';
import champi1 from '../Image/champi1.jpeg';
import champi2 from '../Image/champi2.jpeg';
import champi3 from '../Image/champi3.jpeg';


const Mushrooms = () => {
    return(
        <div>
            <div className='Mush'>
                <div className='mush'>
                    <img src={champi1} alt = "champi1" className ="image1" />
                    <img src={champi2} alt = "champi2" className ="image2" />
                    <img src={champi3} alt = "champi3" className ="image1" />
                </div>
                <div className='explication'>
                    <img src={champi} alt = "" className ="courses" />
                    <div className='title'>Récoltes Forestières</div>
                    <div className='paragr'>Lors d'une promenade dans les bois à la recherche de   
                        <br/>champignons, j'ai pensé que ça pouvait être une bonne
                        <br/>idée de créer la famille champignon : Bolet, Bise, Amanite
                        <br/>tue-mouches. On peut même inventer des nouvelles variétés.</div>
                </div>
            </div>
        </div>
        
    );
};

export default Mushrooms;