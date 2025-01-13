import React from 'react';
import "./Contact.css";
import Banner from '../Components/Banner';
import contact from "../Image/cc.PNG";

import gmail from "../Image/gmail.webp"
import insta from "../Image/insta.png"
import facebook from "../Image/facebook.png"


const Contact = () => {
    return(
    <div className='contact'>
        {/* Bannière */}
        <Banner 
            backgroundColor = "rgb(88, 72, 78, 0.6)"
            title = "Contact"
            description = ""
            textOffset="0px"
            images = {[contact]} 
            pageStyle= "banner_image_1_4"
            margin= "350px"
        />

        {/* Explications */}
        <div className='explications'>Vous pouvez me contacter via les canaux ci-dessous :</div>

        {/* Image des réseaux */}
        <div className='site'>
            <div className='link'>
                <a> 
                    <img src={gmail} alt = "gmail" className ="logo" />
                </a>
                <div className='explications'>  vanessa.crochemoassa@gmail.com</div>
            </div>
            
            <div className='link'>
                <a href='https://www.instagram.com/croche__moassa/profilecard/?igsh=MWFpZXVuejlueHp4bg=='> 
                    <img src={insta} alt = "insta" className ="logo" />
                </a>
                <div className='explications'>croche_moassa</div>
            </div>

            <div className='link'>
                <a href='https://www.facebook.com/share/19pMk7M6xr/?mibextid=wwXIfr'> 
                    <img src={facebook} alt = "facebook" className ="logo" />
                </a>
                <div className='explications'>vanessa  Crochemoassa</div>
            </div>
            
            
        </div>
    </div>
    );
};

export default Contact;