import {Link} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "../components/Header.css";
import React, { useEffect, useState,useRef } from 'react';
import "./ServicePages.css";
import radio_1 from "../assets/radio_1.jpg";
import radio_2 from "../assets/radio_2.jpg";
//import backgroundService from "../assets/backgroundService.jpg";
import hopitalbackground from "../assets/hopitalbackground.jpg";


const Radiologie=()=>{
    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > 100) {
          setIsSticky(true);
        } else {
          setIsSticky(false);
        }
      };
  
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);
   
  /* pour l'effet d'image */
    const ref1 = useRef();
    const ref2 = useRef();
  const [visible1, setVisible1] = useState(false);
  const [visible2, setVisible2] = useState(false);

  useEffect(() => {
    const observer1 = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) 
            console.log("Section 1 is visible");

            setVisible1(true);
      
    },
      { threshold: 0.3 }
);
const observer2 = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) 
        console.log("Section 2 is visible");

          setVisible2(true);
    
  },
    { threshold: 0.3 }
);

    if (ref1.current) observer1.observe(ref1.current);
    if (ref2.current) observer2.observe(ref2.current);

    return () => {
        observer1.disconnect(); 
        observer2.disconnect();
    };


  }, []);
  
  
      return(
        
      <>
<div  className="nos-services-header"
style={{ backgroundImage: `url(${hopitalbackground})`,width:"100%" ,height:"490px"}} >
<h1>Nos Services </h1>
</div>
<div className="px-3 py-5"style={{marginBottom:"150px"}}>
        <h2 className="service-title">Radiologie</h2> {/* Grand titre du service */}
</div>

      {/* Première section */}

<div  className="container mt-0 mb-2">
<div ref={ref1} className={`animated-section  row align-items-center ${visible1 ? "visible" : ""}`}>
<div className="col-md-6 image-container">
    <img
      src={radio_1}
      alt="Consultation Médicale"
      className="img-fluid shadow"
    />
  </div>
  <div className="col-md-6 text-container">
    <h2>Salle de Scanner (Tomodensitométrie)</h2>
    <p>
      Découvrez notre salle de scanner, dotée d’un appareil de tomodensitométrie (TDM) de dernière génération. Cet équipement de pointe permet d’obtenir des images médicales précises en quelques secondes, facilitant le diagnostic rapide et fiable de nombreuses pathologies. La salle est entièrement équipée pour assurer la sécurité et le confort du patient, avec un personnel qualifié pour accompagner chaque étape de l’examen. Grâce à cette technologie avancée, nous contribuons à une prise en charge efficace et rapide des patients.
    </p>
   </div>
  </div>
</div>
 
       {/* Deuxième section */}

       <div className="container my-5">
        <div
          ref={ref2}
          className={`animated-section-right row align-items-center ${
            visible2 ? "visible" : ""
          }`}
        >
        <div className="col-md-6 text-container">
            <h2> Radiologie et Mammographie</h2>
            <p>
              Découvrez notre salle de radiologie polyvalente, équipée pour les examens de radiographie et de mammographie.
Dotée d’appareils modernes, cette salle permet de réaliser des examens d’imagerie médicale essentiels avec une grande précision. Le système de radiographie assure une visualisation claire des structures internes, tandis que l’équipement de mammographie permet un dépistage efficace du cancer du sein. Pensée pour le confort et la sécurité des patients, cette salle est gérée par une équipe expérimentée, garantissant un accompagnement attentif et professionnel tout au long du processus d’examen. Grâce à cette infrastructure, nous renforçons notre capacité à poser des diagnostics rapides et fiables.
            </p>
          </div>
          <div className="col-md-6 image-container">
            <img
              src={radio_2}
              alt="Service Médical"
              className="img-fluid shadow"
            />
          </div>
          
        </div>
      </div>

</>

      );

};
export default Radiologie;