import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "../components/Header.css";
import React, { useEffect, useState,useRef } from 'react';
import "./ServicePages.css";
//import backgroundService from "../assets/backgroundService.jpg";
import hopitalbackground from "../assets/hopitalbackground.jpg";
import Admin from "../assets/Admin.png"

const Administration=()=>{
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
        <h2 className="service-title">Administration</h2> {/* Grand titre du service */}
</div>

      {/* Première section */}

<div className="container mt-0 mb-2">
<div ref={ref1} className={`animated-section  row align-items-center ${visible1 ? "visible" : ""}`}>
<div className="col-md-6 image-container">
    <img
      src={Admin}
      alt="Consultation Médicale"
      className="img-fluid shadow"
    />
  </div>
  <div className="col-md-6 text-container">
    <h2>Administration</h2>
    <p>
  Le service <strong>Administration</strong> du Centre Hospitalier Préfectoral Lalla Aïcha joue un rôle 
  essentiel dans le fonctionnement global de l’établissement. Il veille à la gestion efficace 
  des ressources humaines, matérielles, financières et informationnelles.
</p>
<p>
  Ses principales missions incluent l’organisation de la coordination entre les différents services,
  la gestion des dossiers administratifs des patients et du personnel, ainsi que le pilotage stratégique
  des activités administratives pour garantir un service public de qualité.
</p>
<p>
  L’objectif est d’assurer un accueil administratif professionnel, une prise en charge rapide
  et transparente, et une optimisation des processus pour améliorer l’expérience des usagers.
</p>
   </div>
  </div>
</div>
 
      

</>

      );

};
export default Administration;
