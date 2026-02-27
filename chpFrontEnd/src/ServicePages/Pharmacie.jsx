import {Link} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "../components/Header.css";
import React, { useEffect, useState,useRef } from 'react';
import "./ServicePages.css";
//import backgroundService from "../assets/backgroundService.jpg";
import hopitalbackground from "../assets/hopitalbackground.jpg";
import pharmacie from "../assets/pharmacie.webp";
const Pharmacie=()=>{
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
  const [visible1, setVisible1] = useState(false);
  useEffect(() => {
    const observer1 = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) 
            console.log("Section 1 is visible");

            setVisible1(true);
      
    },
      { threshold: 0.3 });
    if (ref1.current) observer1.observe(ref1.current);
return () => {
        observer1.disconnect(); 
};


  }, []);
  
  
      return(
        
      <>
<div  className="nos-services-header"
style={{ backgroundImage: `url(${hopitalbackground})`,width:"100%" ,height:"490px"}}>
<h1>Nos Services </h1>
</div>

<div className="px-3 py-5"style={{marginBottom:"150px"}}>
        <h2 className="service-title">Pharmacie</h2> {/* Grand titre du service */}
</div>

      {/* Première section */}

<div className="container mt-0 mb-2">
<div ref={ref1} className={`animated-section  row align-items-center ${visible1 ? "visible" : ""}`}>
<div className="col-md-6 image-container">
    <img
      src={pharmacie}
      alt="Consultation Médicale"
      className="img-fluid shadow"
    />
  </div>
  <div className="col-md-6 text-container">
    <h2>Service de Pharmacie – Stockage et distribution des médicaments</h2>
    <p>
      Le service pharmacie assure la gestion rigoureuse des médicaments et dispositifs médicaux, 
      essentiels à la continuité des soins. Organisée et informatisée,
       notre pharmacie garantit une traçabilité optimale, un stockage sécurisé et un approvisionnement rapide. 
       Nos équipes veillent au respect des normes sanitaires, 
      assurant ainsi la qualité et la sécurité de la prise en charge médicamenteuse des patients hospitalisés.
    </p>
   </div>
  </div>
</div>
 
       
  

</>

      );

};
export default Pharmacie;