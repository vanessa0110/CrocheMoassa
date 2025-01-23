import React from "react";
import "./Banner.css";

function Banner({ backgroundColor, title, description, images, pageStyle, margin }) {
    return (
        <div className="banner-container">
            <div className="white_rectangle"></div>
            <div className="banner" style={{ backgroundColor: backgroundColor }}>
                <div className="text-section">
                    <h1>{title}</h1>
                    <p>{description}</p>
                </div>

                <div className="banner_images">
                    {images && images.map((image, index) => (
                        <img 
                            key={index} 
                            src={image} 
                            alt={`banner_${index}`} 
                            className={`${pageStyle} banner-image`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Banner;