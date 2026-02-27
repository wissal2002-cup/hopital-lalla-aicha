import {Link} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "../components/Header.css";
import React, { useEffect, useState,useRef } from 'react';
import "./ServicePages.css";
//import backgroundService from "../assets/backgroundService.jpg";
import hopitalbackground from "../assets/hopitalbackground.jpg";
import SAA from "../assets/SAA.png"


const ServiceAcceuil=()=>{
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

<div className="px-3 py-5"style={{marginBottom:"150px"}} >
        <h2 className="service-title">Service d'Accueil et d'Admission</h2> {/* Grand titre du service */}
</div>

      {/* Première section */}

<div className="container mt-0 mb-2">
<div ref={ref1} className={`animated-section  row align-items-center ${visible1 ? "visible" : ""}`}>
<div className="col-md-6 image-container">
    <img
      src={SAA}
      alt="Consultation Médicale"
      className="img-fluid shadow"
    />
  </div>
  <div className="col-md-6 text-container">
    <h2>Administration</h2>
    <p>
  Le service <strong>d’Accueil et d’Admission</strong> constitue le premier point de contact entre le patient et l’hôpital.
  Il joue un rôle crucial dans l’orientation, l’information et l’enregistrement des patients à leur arrivée.
</p>
<p>
  Ce service assure l’identification administrative des patients, la création ou la mise à jour de leur dossier médical,
  et les guide vers les unités de soins appropriées selon leur besoin.
</p>
<p>
  Son objectif principal est de garantir une prise en charge rapide, humaine et efficace,
  tout en facilitant le parcours du patient dans l’établissement.
</p>
   </div>
  </div>
</div>
</>

      );

};
export default ServiceAcceuil;