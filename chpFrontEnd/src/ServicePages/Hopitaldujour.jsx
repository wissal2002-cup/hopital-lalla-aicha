import {Link} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "../components/Header.css";
import React, { useEffect, useState,useRef } from 'react';
import "./ServicePages.css";
import sallejour from "../assets/sallejour.jpg";
import partehopitaldejour from "../assets/partehopitaldejour.jpg";
import eluminersalle from "../assets/eluminersalle.jpg";
//import backgroundService from "../assets/backgroundService.jpg";
import hopitalbackground from "../assets/hopitalbackground.jpg";


const HopitalduJour=()=>{
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
    const ref3 = useRef();
  const [visible1, setVisible1] = useState(false);
  const [visible2, setVisible2] = useState(false);
  const [visible3, setVisible3] = useState(false);


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
const observer3 = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) 
        console.log("Section 3 is visible");

          setVisible3(true);
    
  },
    { threshold: 0.3 }
);

    if (ref1.current) observer1.observe(ref1.current);
    if (ref2.current) observer2.observe(ref2.current);
    if (ref3.current) observer3.observe(ref3.current);


    return () => {
        observer1.disconnect(); 
        observer2.disconnect();
        observer3.disconnect();

    };


  }, []);
  
  
      return(
        
      <>
<div  className="nos-services-header"
style={{ backgroundImage: `url(${hopitalbackground})`,width:"100%" ,height:"490px"}} >
<h1>Nos Services </h1>
</div>

<div className="px-3 py-5"style={{marginBottom:"150px"}}>
        <h2 className="service-title">Hopital du jour</h2> {/* Grand titre du service */}
</div>

      {/* Première section */}

<div className="container mt-0 mb-2">
<div ref={ref1} className={`animated-section  row align-items-center ${visible1 ? "visible" : ""}`}>
<div className="col-md-6 image-container">
    <img
      src={partehopitaldejour}
      alt="Consultation Médicale"
      className="img-fluid shadow"
    />
  </div>
  <div className="col-md-6 text-container">
    <h2>Qu’est-ce que l’Hôpital du Jour ?</h2>
    <p>
      Le service <strong>Hôpital du Jour</strong> permet aux patients de bénéficier de soins médicaux ou chirurgicaux 
  programmés dans la journée, sans nécessiter une hospitalisation prolongée.
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
            <h2>Pour quels types de soins ?</h2>
            <p>
             Il est destiné aux actes techniques, examens ou traitements nécessitant une surveillance temporaire. 
  Ce mode de prise en charge offre plus de confort au patient tout en optimisant l’utilisation des ressources hospitalières..
            </p>
          </div>
          <div className="col-md-6 image-container">
            <img
              src={sallejour}
              alt="Service Médical"
              className="img-fluid shadow"
            />
          </div>
          
        </div>
      </div>

       {/* troisieme section */}

       <div className="container my-5">
        <div
          ref={ref3}
          className={`animated-section row align-items-center ${
            visible3 ? "visible" : ""
          }`}
        >
        <div className="col-md-6 image-container">
            <img
              src={eluminersalle}
              alt="Service Médical"
              className="img-fluid shadow"
            />
          </div>
        <div className="col-md-6 text-container">
            <h2>Équipements et prise en charge</h2>
            <p>
              Notre Hôpital du Jour est équipé de <strong>salles modernes</strong>, d’une <strong>équipe médicale spécialisée</strong> 
  et d’un <strong>parcours patient fluide</strong>, de l’accueil à la sortie, pour garantir qualité et sécurité des soins.
            </p>
          </div>
          
          
        </div>
      </div>


</>

      );

};
export default HopitalduJour;