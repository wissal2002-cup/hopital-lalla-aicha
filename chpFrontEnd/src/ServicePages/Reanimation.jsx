import {Link} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "../components/Header.css";
import React, { useEffect, useState,useRef } from 'react';
import "./ServicePages.css";
import reanimation_1 from "../assets/reanimation_1.jpg";
import reanimation_2 from "../assets/reanimation_2.jpg";
import reanimation_3 from "../assets/reanimation_3.jpg";
//import backgroundService from "../assets/backgroundService.jpg";
import hopitalbackground from "../assets/hopitalbackground.jpg";

const Reanimation=()=>{
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
        <h2 className="service-title">Reanimation</h2> {/* Grand titre du service */}
</div>

      {/* Première section */}

<div className="container mt-0 mb-2">
<div ref={ref1} className={`animated-section  row align-items-center ${visible1 ? "visible" : ""}`}>
<div className="col-md-6 image-container">
    <img
      src={reanimation_1}
      alt="Consultation Médicale"
      className="img-fluid shadow"
    />
  </div>
  <div className="col-md-6 text-container">
    <h2>Découvrez notre service de réanimation – Salle de soins centrale</h2>
    <p>
      Située au cœur du service, cette salle de soins centralisée constitue un poste de surveillance 
      et de coordination essentiel. Elle permet au personnel médical de 
      superviser en temps réel l’ensemble des chambres de réanimation. 
      Entièrement équipée avec des postes informatiques, des dispositifs de désinfection et un accès direct aux unités de soins, 
      elle garantit une prise en charge rapide, efficace et sécurisée des patients.
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
            <h2>Unité de réanimation – Chambre de soins équipée</h2>
            <p>
              Chaque chambre de réanimation individuelle est dotée d’un lit médicalisé intelligent,
               de moniteurs de surveillance continue et de dispositifs d’assistance vitale. 
               Grâce à une architecture vitrée, elle offre une visibilité optimale pour le personnel tout en respectant l’intimité du patient. 
              L’environnement y est conçu pour favoriser la sécurité, la technicité et le confort, dans le cadre d’une prise en charge spécialisée.
            </p>
          </div>
          <div className="col-md-6 image-container">
            <img
              src={reanimation_3}
              alt="Service Médical"
              className="img-fluid shadow"
            />
          </div>
          
        </div>
      </div>


{/* troisieme section */}

<div className="container my-5" style={{ "paddingTop": "100px" }}>
<div ref={ref3} className={`animated-section  row align-items-center ${visible1 ? "visible" : ""}`}>
<div className="col-md-6 image-container">
    <img
      src={reanimation_2}
      alt="Consultation Médicale"
      className="img-fluid shadow"
    />
  </div>
  <div className="col-md-6 text-container">
    <h2>Prise en charge intensive – Chambre de soins en activité</h2>
    <p>
      Ici, on a un patient en pleine réanimation, sous surveillance continue. Tous les appareils sont en place : 
      scope, pousse-seringues, respirateur… tout ce qu’il faut pour gérer une situation critique. 
      L’équipe reste mobilisée 24h/24 pour surveiller 
      l’évolution et intervenir rapidement dès que nécessaire. On adapte les soins en fonction de l’état du patient, minute par minute.
    </p>
   </div>
  </div>
</div>

</>

      );

};
export default Reanimation;