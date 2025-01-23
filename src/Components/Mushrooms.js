import React from 'react';
import "./Mushrooms.css";

import champi from '../Image/champignon.png';
import champi1 from '../Image/champi1.jpeg';
import champi2 from '../Image/champi2.jpeg';
import champi3 from '../Image/champi3.jpeg';


const Mushrooms = () => {
    const mushrooms = [
        { src: champi1, alt: "Champignons colorés dans la forêt" },
        { src: champi2, alt: "Champignons sur un tronc d'arbre" },
        { src: champi3, alt: "Champignons sur une terrasse" }
    ];

    return (
        <div className="mushroom-container">
            <div className="content-wrapper">
                <div className="image-gallery">
                    {mushrooms.map((mushroom, index) => (
                        <img 
                            key={index}
                            src={mushroom.src}
                            alt={mushroom.alt}
                            className="gallery-image"
                            loading="lazy"
                        />
                    ))}
                </div>
                <div className="divider" />
                <div className="text-content">
                    <img 
                        src={champi} 
                        alt="Icône de champignon"
                        className="icon"
                        width="64"
                        height="64"
                    />
                    <h1 className="title">Récoltes Forestières</h1>
                    <p className="description">
                        Lors d'une promenade dans les bois à la recherche de 
                        champignons, j'ai pensé que ça pouvait être une bonne
                        idée de créer la famille champignon : Bolet, Bise, Amanite
                        tue-mouches. On peut même inventer des nouvelles variétés.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Mushrooms;