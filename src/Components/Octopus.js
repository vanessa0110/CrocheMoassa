import React from 'react';
import ContentSection from './ContentSection';  // Assurez-vous que le chemin est correct

import pieuvre1 from "../Image/pieuvre1.jpeg";
import pieuvre2 from "../Image/pieuvre2.jpeg";
import pieuvre3 from "../Image/pieuvre3.jpeg";
import pieuvre4 from "../Image/pieuvre4.jpeg";
import pieuvre5 from "../Image/pieuvre5.jpeg";
import pieuvre from "../Image/pieuvre.png";

const Octopus = () => {
    const images = [
        { src: pieuvre1, alt: "pieuvre1" },
        { src: pieuvre2, alt: "pieuvre2" },
        { src: pieuvre3, alt: "pieuvre3" },
        { src: pieuvre4, alt: "pieuvre4" },
        { src: pieuvre5, alt: "pieuvre5" }
    ];

    const sectionData = {
        icon: pieuvre,
        title: "Animaux de la mer",
        description: "Pour tous les fans de pieuvres/poulpes, voici une armée de petites créatures prêtes à vous accompagner sur votre bureau. J'ai eu l'occasion de réaliser la famille de pieuvres. Chaque pieuvre est unique, alors n'hésitez pas à me faire savoir celle qui vous attire le plus."
    };

    return (
        <ContentSection 
            images={images}
            icon={sectionData.icon}
            title={sectionData.title}
            description={sectionData.description}
        />
    );
};

export default Octopus;
