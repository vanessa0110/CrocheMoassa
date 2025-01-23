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
  const images = [
    { src: cactus1, alt: "cactus1" },
    { src: cactus2, alt: "cactus2" },
    { src: cactus3, alt: "cactus3" },
    { src: cactus4, alt: "cactus4" },
    { src: cactus5, alt: "cactus5" },
    { src: cactus6, alt: "cactus6" }
  ];

  /*return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="space-y-8">
        {/* En-tête avec icône et titre
        <div className="flex items-center gap-4">
          <img src={cactus} alt="Icône cactus" className="w-12 h-12" />
          <div>
            <h1 className="text-3xl font-bold">Plante exotique</h1>
            <Badge variant="secondary" className="mt-2">
              Collection Cactus
            </Badge>
          </div>
        </div>

        {/* Description 
        <Card className="bg-card">
          <CardContent className="pt-6">
            <p className="text-lg leading-relaxed text-card-foreground">
              Grâce aux cactus en crochet il est possible d'avoir des plantes exotiques
              même si vous manquez de luminosité chez vous. Si vous n'avez pas le temps
              de vous occuper de vraies plantes ou si vous êtes en déplacements régulièrement;
              ces réalisations sont faites pour vous. En petit ou en grand, c'est à vous
              de choisir. Vous pouvez même réaliser votre famille avec des cactus en crochet !
            </p>
          </CardContent>
        </Card>

        {/* Grille d'images 
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <Card key={image.alt} className="overflow-hidden">
              <div className="aspect-square relative">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
                />
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );*/
};

export default Cactus;