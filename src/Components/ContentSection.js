import React from 'react';
import './ContentSection.css';

const ContentSection = ({ images, icon, title, description }) => {
    const topImages = images.slice(0, 3);
    const bottomImages = images.slice(3);

    return (
        <div className="page-container">
            {/* Section du haut avec 3 images */}
            <section className="section-container">
                <div className="top-row">
                    {topImages.map((img, index) => (
                        <img 
                            key={index}
                            src={img.src} 
                            alt={img.alt} 
                            className="content-image"
                        />
                    ))}
                </div>
            </section>

            {/* Section du bas avec texte et 2 images */}
            <section className="section-container">
                <div className="bottom-row">
                    {bottomImages[0] && (
                        <img 
                            src={bottomImages[0].src}
                            alt={bottomImages[0].alt}
                            className="content-image"
                        />
                    )}
                    
                    <div className="section-text">
                        <img src={icon} alt="" className="section-icon" />
                        <h2 className="section-title">{title}</h2>
                        <p className="section-description">{description}</p>
                    </div>

                    {bottomImages[1] && (
                        <img 
                            src={bottomImages[1].src}
                            alt={bottomImages[1].alt}
                            className="content-image"
                        />
                    )}
                </div>
            </section>
        </div>
    );
};

export default ContentSection;