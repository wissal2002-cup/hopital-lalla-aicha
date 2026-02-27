import {Link} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "../components/Header.css";
import React, { useEffect, useState,useRef } from 'react';
import "./ServicePages.css";
import urgenceHopital from "../assets/urgenceHopital.jpg";
import urgence_1 from "../assets/urgence_1.png";
import urgence_2 from "../assets/urgence_2.jpg";
import urgence_3 from "../assets/urgence_3.png";
import urgence_4 from "../assets/urgence_4.jpg";
//import backgroundService from "../assets/backgroundService.jpg";
import hopitalbackground from "../assets/hopitalbackground.jpg";


const Urgences=()=>{
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
    const ref4 = useRef();
    const ref5 = useRef();
   

  const [visible1, setVisible1] = useState(false);
  const [visible2, setVisible2] = useState(false);
  const [visible3, setVisible3] = useState(false);
  const [visible4, setVisible4] = useState(false);
  const [visible5, setVisible5] = useState(false);
  


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

const observer4 = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) 
          console.log("Section 4 is visible");

          setVisible4(true);
    
  },
    { threshold: 0.3 }
);
 const observer5 = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) 
          console.log("Section 5 is visible");

          setVisible5(true);
    
  },
    { threshold: 0.3 }
); 

    if (ref1.current) observer1.observe(ref1.current);
    if (ref2.current) observer2.observe(ref2.current);
    if (ref3.current) observer3.observe(ref3.current);
    if (ref4.current) observer4.observe(ref4.current);
    if (ref5.current) observer5.observe(ref5.current);
    


    return () => {
        observer1.disconnect(); 
        observer2.disconnect();
        observer3.disconnect();
        observer4.disconnect();
        observer5.disconnect();
       


    };


  }, []);
  
  
      return(
        
      <>
<div  className="nos-services-header"
style={{ backgroundImage: `url(${hopitalbackground})`,width:"100%" ,height:"490px"}}  >
<h1>Nos Services </h1>
</div>

<div className="px-3 py-5"style={{marginBottom:"150px"}}>
        <h2 className="service-title">Les Urgences</h2> {/* Grand titre du service */}
</div>

      {/* Première section */}

<div className="container mt-0 mb-2">
<div ref={ref1} className={`animated-section  row align-items-center ${visible1 ? "visible" : ""}`}>
<div className="col-md-6 image-container">
    <img
      src={urgenceHopital}
      alt="Consultation Médicale"
      className="img-fluid shadow"
    />
  </div>
  <div className="col-md-6 text-container">
    <h2>Entrée du service des urgences</h2>
    <p>
      Bienvenue au service des urgences. C’est ici que nous accueillons les patients en situation critique, 24h/24. Notre priorité est de garantir une prise en charge rapide et sécurisée. Comme vous pouvez le voir, l’accès est clairement indiqué pour les ambulances, afin de faciliter l’intervention du personnel médical dès l’arrivée. Notre équipe est toujours prête à agir efficacement dans les situations les plus urgentes.
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
            <h2>Espace de coordination</h2>
            <p>
              Voici l’un de nos bureaux administratifs internes. C’est dans cet espace que nous organisons les dossiers des patients, coordonnons les admissions et assurons le lien entre les différents services. Chaque jour, notre personnel travaille ici avec rigueur pour garantir une prise en charge fluide et bien structurée. La transparence des cloisons permet également une meilleure communication entre les collègues.
            </p>
          </div>
          <div className="col-md-6 image-container">
            <img
              src={urgence_1}
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
              src={urgence_2}
              alt="Service Médical"
              className="img-fluid shadow"
            />
          </div>
        <div className="col-md-6 text-container">
            <h2>Salle de stockage du matériel médical</h2>
            <p>
              Dans cette pièce, nous conservons tout le matériel médical nécessaire à nos interventions : pansements, seringues, gants stériles, et bien plus. Tout est trié, étiqueté et facilement accessible, car dans les urgences, chaque seconde compte. Notre équipe s'assure que chaque compartiment est réapprovisionné régulièrement pour être toujours prête à intervenir rapidement.
            </p>
          </div>
        </div>
      </div>
       {/* quatrieme section */}

<div className="container my-5" style={{ "paddingTop": "100px" }}>
<div ref={ref1} className={`animated-section  row align-items-center ${visible1 ? "visible" : ""}`}>
<div className="col-md-6 image-container">
    <img
      src={urgence_3}
      alt="Consultation Médicale"
      className="img-fluid shadow"
    />
  </div>
  <div className="col-md-6 text-container">
    <h2>Salle de Plâtre</h2>
    <p>
    Bienvenue dans notre Salle de Plâtre, un espace spécialement aménagé pour la prise en charge des fractures et autres traumatismes osseux nécessitant une immobilisation. Cette salle est équipée de matériel spécialisé permettant l’application de plâtres dans des conditions optimales d’hygiène et de sécurité. Notre personnel soignant est formé pour assurer un soin précis et confortable aux patients nécessitant une immobilisation temporaire ou prolongée.
    </p>
   </div>
  </div>
</div>

 {/* cinquieme section */}

 <div className="container my-5">
        <div
          ref={ref2}
          className={`animated-section-right row align-items-center ${
            visible2 ? "visible" : ""
          }`}
        >
        <div className="col-md-6 text-container">
            <h2>Salle de Prélèvement</h2>
            <p>
              Voici notre salle de prélèvement, un environnement calme et sécurisé dédié aux analyses médicales. Elle est équipée d’un fauteuil ergonomique conçu pour le confort du patient pendant les prises de sang ou autres examens biologiques. Le chariot médical contient tout le matériel stérile nécessaire pour garantir des prélèvements sûrs, rapides et efficaces. Nos professionnels veillent à rassurer chaque patient et à respecter les normes de qualité en vigueur.
            </p>
          </div>
          <div className="col-md-6 image-container">
            <img
              src={urgence_4}
              alt="Service Médical"
              className="img-fluid shadow"
            />
          </div>
          
        </div>
      </div>


</>

      );

};
export default Urgences;