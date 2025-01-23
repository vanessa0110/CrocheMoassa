import React from 'react';
import "./Creations.css";
import { useNavigate } from 'react-router-dom'; // Importer useNavigate

// composants
import Banner from '../Components/Banner';
import Button from '../Components/Button';
import Line from '../Components/Line';
import Flowers from '../Components/Flowers';
import Storage from '../Components/Storage';
import Mushrooms from '../Components/Mushrooms';
import Love from '../Components/Love';
import Yoshi from '../Components/Yoshi';
import Octopus from '../Components/Octopus';
import Cactus from '../Components/Cactus';
import Positiv from '../Components/Positiv';
import Events from '../Components/Events';

//images
import img1 from "../Image/banc1.jfif";
import img2 from "../Image/banc2.jpeg";
import img3 from "../Image/banc3.jpeg";



const Creations = () => {

    const navigate = useNavigate(); // Initialiser le hook pour la navigation

    // Fonction appelée lors du clic sur le bouton
    const handleButtonClick = () => {
        navigate('/contact'); // Utilisation de navigate pour aller à la page "Contact"
    };

    return(
    <div className='cre'>
       <Banner 
            backgroundColor = "rgb(137, 57, 58, 0.6)"
            title = "Mes créations"
            description = "Aperçu de mes créations"
            images =  {[img1 , img2 , img3]}
            pageStyle= "banner_image_2_3"
            margin= "200px"
        />
        <Button
            label="Me contacter" 
            onClick={handleButtonClick} 
            variant="primary"   
        />
        <div id="yoshi"><Yoshi/></div>
        <Line/>
        <div id="coeur"><Love/></div>
        <div id="fleurs"><Flowers/></div>
        <div id="rangements"><Storage/></div>
        <Line/>
        <div id="recoltes-forestieres"><Mushrooms/></div>
        <Line/>
        <div id="animaux-de-la-mer"><Octopus/></div>
        <div id="plante-exotique"> <Cactus/> </div>
        <div id="energie-positive"><Positiv/></div>
        <Line/>
        <div id="evenements"> <Events/> </div>
        <Line/>
    </div>
    );
};

export default Creations;