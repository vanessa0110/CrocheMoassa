import React from 'react';
import { useNavigate } from 'react-router-dom'; // Importer useNavigate
import"./GiftIdeas.css";
import Banner from '../Components/Banner';
import Button from '../Components/Button';
import img1 from "../Image/bani1.jpeg";
import img2 from "../Image/bani2.jpeg";
import gift1 from "../Image/gift1.jpeg";
import gift2 from "../Image/gift2.jpeg";
import gift3 from "../Image/gift3.jpeg";
import gift4 from "../Image/gift4.jpeg";
import sac1 from "../Image/sac1.jpg";
import sac2 from "../Image/sac2.jpg";


const GiftIdeas = () => {

    const navigate = useNavigate(); // Initialiser le hook pour la navigation

    // Fonction appelée lors du clic sur le bouton
    const handleButtonClick = () => {
        navigate('/contact'); // Utilisation de navigate pour aller à la page "Contact"
    };


    return(
    <div className='idea'>

        {/* Bannière */}
        <Banner 
            backgroundColor = "rgb(136, 122, 129, 0.6)"
            title = "Idées cadeaux"
            description = "Voici quelques idées déjà réalisées"
            images={[img1 , img2]}
            pageStyle= "banner_image_2_3"
            margin= "300px"
        />


        {/* Description de cette page */}
        <div className='explications'>Voici quelques idées cadeaux pour vos proches, vos amis lors d'événements tels 
        que des anniversaires, des fêtes. J'ai déjà eu l'occasion de réaliser plusieurs 
        commandes pour mes collègues ou mêmes mes amis qui avaient des demandes 
        personnalisés. Vous pouvez en faire de même, je suis très curieuse d’apprendre 
        de nouvelles techniques !</div>

        {/* Lien vers la page contact */}
        <Button
            label="Me contacter" 
            onClick={handleButtonClick} 
            variant="primary"   
        />

        {/* Image d'exemple */}
        <div className='exemple'>
            <div className='G1'>
                <img src={gift1} alt = "gift1" className ="img" />
                <div className='text'>  Les pieuvres ont fait le bonheur<br/>
                d’enfants à qui j’ai rendu visite<br/> cet été</div>
            </div>
            <div className='G1'>
                <img src={gift2} alt = "gift2" className ="img" />
                <div className='text'> Pot de tulipes qui a été adopté <br/>par ma collègue en étant sur son <br/>bureau de travail </div>
            </div>
            <div className='G1'>
                <img src={gift3} alt = "gift3" className ="img" />
                <div className='text'> Les cactus ont permis<br /> de décorer un <br/>appartement</div>
            </div>
            <div className='G1'>
                <img src={gift4} alt = "gift4" className ="img" />
                <div className='text'>Celui-ci a pris place sur le piano<br/> de mon collègue comme<br/> décoration </div>
            </div>
        </div>

         {/* Sac */}
         <div className='sac'>
            <img src={sac1} alt = "sac1" className ="imgb" />
            <div className='texte'>
                Le sac entièrement personnalisé aux couleurs voulues 
                ainsi que la présence d'une poche est la dernière demande
                que j'ai dû réaliser.
            </div>
            <img src={sac2} alt = "sac2" className ="imgb" />
        </div>
    </div>
    );
};

export default GiftIdeas;