import React from 'react';
import "./Creations.css";
import { useNavigate } from 'react-router-dom'; // Importer useNavigate
import Banner from '../Components/Banner';
import Button from '../Components/Button';
import Line from '../Components/Line';
import Flowers from '../Components/Flowers';
import Storage from '../Components/Storage';

import img1 from "../Image/banc1.jfif";
import img2 from "../Image/banc2.jpeg";
import img3 from "../Image/banc3.jpeg";
import yoshi1 from "../Image/yoshi1.jpeg";
import yoshi2 from "../Image/yoshi2.jpeg";
import yoshi3 from "../Image/yoshi3.jpeg";
import courses from "../Image/courses.png";
import coeur from "../Image/coeur.png";
import coeur1 from "../Image/love.jpeg";
import Mushrooms from '../Components/Mushrooms';

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
        <div className='Yoshi'>
            <div className='yoshi'>
                <img src={yoshi1} alt = "yoshi1" className ="img1" />
                <img src={yoshi2} alt = "yoshi2" className ="img2" />
                <img src={yoshi3} alt = "yoshi3" className ="img1" />
            </div>
            <div className='explication'>
                <img src={coeur} alt = "" className ="courses" />
                <div className='titre'>Yoshi</div>
                <div className='para'>Voici une création ambitieuse : 
                    <br/>celle de Yoshi. Étant l'un des personnage 
                    <br/>emblématique de Mario kart j'ai voulu 
                    <br/>en faire une peluche. Le projet m'a pris 
                    <br/>quelques temps mais le résultat 
                    <br/>en vaut la peine.</div>
            </div>
        </div>
        <Line/>
        <div className='Love'>
            <img src={coeur1} alt = "coeur1" className ="coeur1" />
            <div className='explication1'>
                <img src={courses} alt = "" className ="courses" />
                <div className='titre'>Coeur</div>
                <div className='para1'>Après avoir appris le mariage de l'un de mes collègues,
                    <br/>j'ai voulu lui offrir un cadeau personnalisé. C'est là que j'ai
                    <br/>pensé à réaliser des cœurs dans un pot. Un cadeau qui a
                    <br/> beaucoup plu et qui était très original !</div>
            </div>
        </div>

        <Flowers/>
        <Storage/>
        <Line/>
        <Mushrooms/>
        <Line/>

        
    </div>
    );
};

export default Creations;