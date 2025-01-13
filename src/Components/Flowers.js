import React from 'react';
import "./Flowers.css";

import fleur from '../Image/fleur.png';
import fleur1 from '../Image/flow.jpeg';
import fleur2a from '../Image/flow1.jpeg';
import fleur2b from '../Image/flow2.jfif';
import fleur3 from '../Image/flow3.jpeg';


const Flowers = () => {
    return(
        <div>
            <div className='Flowers'>
                <div className='explications'>
                    <img src={fleur} alt = "" className ="courses" />
                    <div className='titre'>Fleurs</div>
                    <div className='parag'>Lors d'un pique nique dans un parc avec mon compagnon
                        <br/>et entouré de marguerites j'ai voulu apprendre à mon compagnon
                        <br/>ma passion pour le crochet. Simple et efficace pour
                        <br/>mettre un peu de couleurs dans votre intérieur.</div>
                </div>
                <div className='flower'>
                    <img src={fleur1} alt = "fleur1" className ="flowers" />
                </div>
            </div>

            <div className='Flowers1'>
                <img src={fleur2a} alt = "fleur1" className ="flowers1" />
                <div className='explications1'>
                    <div className='parag'> Pendant la saison des tournesols, ils ne durent pas 
                        <br/>dans le temps si vous voulez les cueillir. Une solution 
                        <br/>s'offre à vous avec le pot de tournesols éternels !</div>
                </div>
                <img src={fleur2b} alt = "fleur1" className ="flowers1" />
            </div>

            <div className='Flowers'>
                <img src={fleur3} alt = "fleur2" className ="flowers1" />
                <div className='explications2'>
                    <div className='parag'>Une nouvelle déclinaison des tulipes qui peuvent sécher 
                        <br/>rapidement dans vos vases. En voici une option éternelle 
                        <br/>qui sera prête à mettre en couleur
                        <br/>vos intérieurs, même en hors-saison.</div>
                </div>
            </div>
        </div>  

    );
};

export default Flowers;