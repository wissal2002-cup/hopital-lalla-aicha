import React from 'react';
import './Carousel.css';
import interfacebackhpt from "../assets/interfacebackhpt.jpg";
import fronthopital_1 from "../assets/fronthopital_1.png";
import colidorehopital from "../assets/colidorehopital.png";
import urgencehopital from "../assets/urgencehopital.jpg";
import indorhopital from "../assets/indorhopital_1.jpg"
import eluminersalle from "../assets/eluminersalle.jpg";
import partehopitaldejour from "../assets/partehopitaldejour.jpg";
import sallejour from "../assets/sallejour.jpg";
import radio_1 from "../assets/radio_1.jpg";
import radio_2 from "../assets/radio_2.jpg";
import labo_1 from "../assets/labo_1.jpg";
import labo_2 from "../assets/labo_2.jpg";
import reanimation_3 from "../assets/reanimation_3.jpg";
import pd_1 from "../assets/pd_1.jpg";
import pd_2 from "../assets/pd_2.jpg";
import bloc_1 from "../assets/bloc_1.webp";
import reanimation_1 from "../assets/reanimation_1.jpg";


const Carousel = () => {
    return (
        <section>
            <div className="carousel">
                <ul className="gallery">
                    <li className="card" style={{ '--timer': '1' }}><img src={interfacebackhpt} alt="interfacebackhpt"/></li>
                    <li className="card" style={{ '--timer': '2' }}><img src={fronthopital_1} alt="fronthopital" /></li>
                    <li className="card" style={{ '--timer': '3' }}><img src={urgencehopital} alt="urgencehopital" /></li>
                    <li className="card" style={{ '--timer': '4' }}><img src={eluminersalle} alt="eluminersalle" /></li>
                    <li className="card" style={{ '--timer': '5' }}><img src={sallejour} alt="sallejour" /></li>
                    <li className="card" style={{ '--timer': '6' }}><img src={radio_1} alt="radio_1" /></li>
                    <li className="card" style={{ '--timer': '7' }}><img src={radio_2} alt="radio_2" /></li>
                    <li className="card" style={{ '--timer': '8' }}><img src={labo_1} alt="labo_2" /></li>
                    <li className="card" style={{ '--timer': '9' }}><img src={labo_2} alt="labo_2" /></li>
                    <li className="card" style={{ '--timer': '10' }}><img src={bloc_1} alt="bloc_1" /></li>
                    <li className="card" style={{ '--timer': '11' }}><img src={reanimation_3} alt="reanimationn" /></li>
                    <li className="card" style={{ '--timer': '12' }}><img src={pd_1} alt="pd_1" /></li>
                    <li className="card" style={{ '--timer': '13' }}><img src={pd_2} alt="pd_2" /></li>
                    <li className="card" style={{ '--timer': '14' }}><img src={reanimation_1} alt="reanimation_1" /></li>
                    <li className="card" style={{ '--timer': '15' }}><img src={colidorehopital} alt="colidorehopital" /></li>
                    <li className="card" style={{ '--timer': '16' }}><img src={indorhopital} alt="indorhopital" /></li>
                    <li className="card" style={{ '--timer': '17' }}><img src={partehopitaldejour} alt="portehopitaldejour" /></li>
                </ul>
            </div>
        </section>
    );
};

export default Carousel;