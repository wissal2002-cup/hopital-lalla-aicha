import {Link} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "../components/Header.css";
import React, { useEffect, useState,useRef } from 'react';
import "./ServicePages.css";
import bloc_1 from "../assets/bloc_1.webp";
import bloc_2 from "../assets/bloc_2.jpg";
import hopitalbackground from "../assets/hopitalbackground.jpg";

//import backgroundService from "../assets/backgroundService.jpg";

const BlocOperatoire=()=>{
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
        <h2 className="service-title">Bloc Operatoire</h2> {/* Grand titre du service */}
</div>

      {/* Première section */}

<div className="container mt-0 mb-2">
<div ref={ref1} className={`animated-section  row align-items-center ${visible1 ? "visible" : ""}`}>
<div className="col-md-6 image-container">
    <img
      src={bloc_1}
      alt="Consultation Médicale"
      className="img-fluid shadow"
    />
  </div>
  <div className="col-md-6 text-container">
    <h2>Salle d’opération</h2>
    <p>
     Bienvenue dans notre salle d’opération moderne, conçue pour répondre aux exigences des interventions chirurgicales
      les plus complexes. Équipée d’une table opératoire de dernière génération, 
      de systèmes d’éclairage adaptés et de dispositifs de monitoring avancés, 
     cette salle offre un environnement stérile et sécurisé, garantissant une prise en charge optimale des patients.
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
            <h2>Anesthésie et surveillance – Bloc opératoire</h2>
            <p>
              Notre bloc opératoire dispose d’un espace entièrement dédié à l’anesthésie,
               équipé de respirateurs, de moniteurs multiparamétriques et de colonnes techniques suspendues. 
               Grâce à cette technologie de pointe, nos équipes assurent une surveillance continue et précise de l’état du patient,
               tout au long de l’intervention, dans les meilleures conditions de sécurité.
            </p>
          </div>
          <div className="col-md-6 image-container">
            <img
              src={bloc_2}
              alt="Service Médical"
              className="img-fluid shadow"
            />
          </div>
          
        </div>
      </div>

</>

      );

};
export default BlocOperatoire;