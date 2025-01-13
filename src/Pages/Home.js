import React from 'react';
import { useNavigate } from 'react-router-dom'; // Importer useNavigate
import"./Home.css";
import Banner from '../Components/Banner';
import Button from '../Components/Button';
import logo from "../Image/logo.png";
import reseaux1 from "../Image/reseaux1.png";
import reseaux2 from "../Image/reseaux2.png";
import reseaux3 from "../Image/reseaux3.png";
import pres1 from "../Image/pres1.jpeg";
import pres2 from "../Image/pres2.jpeg";

const Home=()=>{

    const navigate = useNavigate(); // Initialiser le hook pour la navigation
    
    // Fonction appelée lors du clic sur le bouton
    const handleButtonClick = () => {
        navigate('/contact'); // Utilisation de navigate pour aller à la page "Contact"
    };

    return(
    <div>
        <div className='home'>
            {/* Bannière */}
            <Banner 
                backgroundColor = "rgb(198, 84, 87, 0.6)"
                title = "Croche Moassa"
                description = "Décorations en crochet"
                images = {[logo]}
                pageStyle= "banner_image_1_4"
                margin= "350px"
            />
        </div>

        {/* Explications */}
        <div className='explications'> Les décorations en crochet sont de nouveau à la mode et offrent un large choix de possibilités. 
            À vous de choisir ce que vous désirez, et vous bénéficierez ainsi d'un cadeau unique. Ces décorations 
            sont des idées originales lors d'événements tels que les anniversaires ou les fêtes. Vous pouvez aussi offrir ces 
            créations lorsque vous rendez visite à des amis, ce genre d'attentions fait toujours plaisir.</div>

        {/* Image des réseaux */}
        <div className='reseaux'>
            <img src={reseaux1} alt = "reseaux1" className ="img" />
            <img src={reseaux2} alt = "reseaux2" className ="img" />
            <img src={reseaux3} alt = "reseaux3" className ="img" />
        </div>

        {/* Bouton de redirection vers la page de contact */}
        <Button
            label="Me contacter" 
            onClick={handleButtonClick} 
            variant="primary"   
        />

        {/* Ma présentation */}
        <div className='pres'>
            <img src={pres1} alt = "pres1" className ="imgb" />
            <div className='texte'>
                <div>
                Pour me présenter un peu, je m'appelle Vanessa et 
                je me suis lancée dans les décorations en crochet depuis
                quelques mois. En effet, la première de mes réalisations 
                a été une brassière entièrement en crochet. 
                </div>
                <br />
                <div>
                Puis, un an plus tard, j'ai voulu utiliser la laine qu'il me restait 
                mais pour faire quelque chose qui dure dans le temps et 
                non quelque chose qui devient trop petit ou trop grand après 
                un certain temps. Les décorations intérieures me sont 
                de suite venues en tête et je me suis lancée dans 
                un panier de Pâques.
                </div> 
                <br />
                <div>
                C'est ainsi que les idées me sont venues, 
                en puisant l'inspiration dans mon quotidien 
                et en écoutant les avis de mes proches sur mes créations.
                Je vous partage mes réalisations sur ce site web 
                et si vous avez des idées que je n'ai pas encore
                pu réaliser, n'hésitez pas à me contacter. Je souhaite
                progresser et relever de nouveaux défis.
                </div>
            </div>
            <img src={pres2} alt = "pres2" className ="imgb" />
        </div>
    </div>

    );
};

export default Home;

