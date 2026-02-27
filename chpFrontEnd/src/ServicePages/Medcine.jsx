import {Link} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "../components/Header.css";
import React, { useEffect, useState,useRef } from 'react';
import "./ServicePages.css";
//import backgroundService from "../assets/backgroundService.jpg";
import hopitalbackground from "../assets/hopitalbackground.jpg";
import medcine from"../assets/medcine.jpg";
const Medcine=()=>{
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
      { threshold: 0.3 }
);

    if (ref1.current) observer1.observe(ref1.current);

    return () => {
        observer1.disconnect(); 
    };


  }, []);
  
  
      return(
        
      <>
<div  className="nos-services-header"
style={{ backgroundImage: `url(${hopitalbackground})`,width:"100%" ,height:"490px"}} >
<h1>Nos Services </h1>
</div>

<div className="px-3 py-5"style={{marginBottom:"150px"}}>
        <h2 className="service-title">Medcine</h2> {/* Grand titre du service */}
</div>

      {/* Première section */}

<div className="container mt-0 mb-2">
<div ref={ref1} className={`animated-section  row align-items-center ${visible1 ? "visible" : ""}`}>
<div className="col-md-6 image-container">
    <img
      src={medcine}
      alt="Consultation Médicale"
      className="img-fluid shadow"
    />
  </div>
  <div className="col-md-6 text-container">
    <h2>Médecine Interne – Prise en charge globale des patients</h2>
    <p>
      Le service de médecine constitue un pilier central dans la prise en charge des patients adultes
       nécessitant un suivi médical hospitalier. Il assure la gestion des pathologies chroniques,
        infectieuses ou métaboliques, ainsi que des bilans diagnostiques complexes. 
        Nos équipes pluridisciplinaires — médecins, infirmiers, 
        aides-soignants — travaillent en étroite collaboration pour garantir une prise en charge personnalisée, 
      centrée sur le patient, dans un environnement sécurisé et bienveillant.
    </p>
   </div>
  </div>
</div>
 
       

</>

      );

};
export default Medcine;