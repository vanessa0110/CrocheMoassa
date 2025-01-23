import React from 'react';
import "./Yoshi.css";

import yoshi1 from "../Image/yoshi1.jpeg";
import yoshi2 from "../Image/yoshi2.jpeg";
import yoshi3 from "../Image/yoshi3.jpeg";
import courses from "../Image/courses.png";

const Yoshi = () => {
    const yoshii = [
        { src: yoshi1, alt: "yoshi1" },
        { src: yoshi2, alt: "yoshi2" },
        { src: yoshi3, alt: "yoshi3" }
    ];

    return (
        <div className="yoshi-container">
            <div className="content-wrapper">
                <div className="image-gallery">
                    {yoshii.map((yoshii, index) => (
                        <img 
                            key={index}
                            src={yoshii.src}
                            alt={yoshii.alt}
                            className="gallery-image"
                            loading="lazy"
                        />
                    ))}
                </div>
                <div className="divider" />
                <div className="text-content">
                    <img 
                        src={courses} 
                        alt="Icône de champignon"
                        className="icon"
                        width="64"
                        height="64"
                    />
                    <h1 className="title">Yoshi</h1>
                    <p className="description">
                        Voici une création ambitieuse : 
                        celle de Yoshi. Étant l'un des personnage 
                        emblématique de Mario kart j'ai voulu 
                        en faire une peluche. Le projet m'a pris 
                        quelques temps mais le résultat 
                        en vaut la peine.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Yoshi;

