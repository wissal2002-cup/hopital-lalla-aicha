import {Link} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "../components/Header.css";
import React, { useEffect, useState,useRef } from 'react';
import "./ServicePages.css";
//import backgroundService from "../assets/backgroundService.jpg";
import hopitalbackground from "../assets/hopitalbackground.jpg";
import traumatologie_1 from "../assets/traumatologie_1.jpeg";
import traumatologie_2 from "../assets/traumatologie_2.jpeg";


const Traummat=()=>{
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
style={{ backgroundImage: `url(${hopitalbackground})`,width:"100%" ,height:"490px"}}  >
<h1>Nos Services </h1>
</div>
<div className="px-3 py-5"style={{marginBottom:"150px"}}>
        <h2 className="service-title">Traumat</h2> {/* Grand titre du service */}
</div>

      {/* Première section */}

<div className="container mt-0 mb-2">
<div ref={ref1} className={`animated-section  row align-items-center ${visible1 ? "visible" : ""}`}>
<div className="col-md-6 image-container">
    <img
      src={traumatologie_1}
      alt="Consultation Médicale"
      className="img-fluid shadow"
      style={{width:"500px"}}
    />
  </div>
  <div className="col-md-6 text-container">
    <h2>Service de Traumatologie</h2>
    <p>
      Découvrez notre service de traumatologie, 
      spécialement conçu pour la prise en charge rapide et efficace des blessures et urgences orthopédiques. Équipé d’un matériel de pointe et encadré par une équipe médicale expérimentée, ce service assure des soins adaptés à chaque situation, du diagnostic jusqu’à la rééducation. 
      Tout est mis en œuvre pour offrir un accompagnement optimal dans un environnement sécurisé et professionnel.
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
            <h2>Chambre de Soins – Traumatologie</h2>
            <p>
            Nos chambres de soins en traumatologie allient confort et technicité. 
            Conçues pour le bien-être du patient, elles sont équipées de lits médicalisés modernes, de dispositifs de surveillance et d’un mobilier ergonomique. Ce cadre apaisant favorise la récupération rapide et
             permet une surveillance continue dans les meilleures conditions.
            </p>
          </div>
          <div className="col-md-6 image-container">
            <img
              src={traumatologie_2}
              alt="Service Médical"
              className="img-fluid shadow"
              style={{width:"500px"}}
            />
          </div>
          
        </div>
      </div>

</>

      );

};
export default Traummat;