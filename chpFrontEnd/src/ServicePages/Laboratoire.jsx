import {Link} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "../components/Header.css";
import React, { useEffect, useState,useRef } from 'react';
import "./ServicePages.css";
import labo_1 from "../assets/labo_1.jpg";
import labo_2 from "../assets/labo_2.jpg";
import labo_3 from "../assets/labo_3.jpg";
import labo_4 from "../assets/labo_4.jpg";
import labo_5 from "../assets/labo_5.jpg";
import labo_6 from "../assets/labo_6.jpg";
import labo_7 from "../assets/labo_7.jpg";
//import backgroundService from "../assets/backgroundService.jpg";
import hopitalbackground from "../assets/hopitalbackground.jpg";

const Laboratoire=()=>{
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
    const ref6 = useRef();
    const ref7 = useRef();

  const [visible1, setVisible1] = useState(false);
  const [visible2, setVisible2] = useState(false);
  const [visible3, setVisible3] = useState(false);
  const [visible4, setVisible4] = useState(false);
  const [visible5, setVisible5] = useState(false);
  const [visible6, setVisible6] = useState(false);
  const [visible7, setVisible7] = useState(false);


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
const observer6 = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) 
          console.log("Section 6 is visible");

          setVisible6(true);
    
  },
    { threshold: 0.3 }
); 
const observer7 = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) 
          console.log("Section 7 is visible");

          setVisible7(true);
    
  },
    { threshold: 0.3 }
);
    if (ref1.current) observer1.observe(ref1.current);
    if (ref2.current) observer2.observe(ref2.current);
    if (ref3.current) observer3.observe(ref3.current);
    if (ref4.current) observer4.observe(ref4.current);
    if (ref5.current) observer5.observe(ref5.current);
    if (ref6.current) observer6.observe(ref6.current);
    if (ref7.current) observer7.observe(ref7.current);


    return () => {
        observer1.disconnect(); 
        observer2.disconnect();
        observer3.disconnect();
        observer4.disconnect();
        observer5.disconnect();
        observer6.disconnect();
        observer7.disconnect();


    };


  }, []);
  
  
      return(
        
      <>
<div  className="nos-services-header"
style={{ backgroundImage: `url(${hopitalbackground})`,width:"100%" ,height:"490px"}}>
<h1>Nos Services </h1>
</div>

<div className="px-3 py-5"style={{marginBottom:"150px"}}>
        <h2 className="service-title">Laboratoire</h2> {/* Grand titre du service */}
</div>

      {/* Première section */}

<div className="container mt-0 mb-2">
<div ref={ref1} className={`animated-section  row align-items-center ${visible1 ? "visible" : ""}`}>
<div className="col-md-6 image-container">
    <img
      src={labo_1}
      alt="Consultation Médicale"
      className="img-fluid shadow"
    />
  </div>
  <div className="col-md-6 text-container">
    <h2>Poste d’analyse automatisée des prélèvements sanguins</h2>
    <p>
      Cette zone du laboratoire est dédiée à l’analyse automatisée des échantillons sanguins. 
  Elle est équipée d’automates de dernière génération permettant d’effectuer rapidement et avec précision 
  des examens tels que la numération formule sanguine (NFS), les bilans biochimiques ou encore les marqueurs 
  infectieux. Ces outils assurent un traitement efficace des prélèvements tout en garantissant la fiabilité des résultats.
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
            <h2>Laboratoire d’analyse médicale – Section de diagnostic biologique</h2>
            <p>
              Cette section du laboratoire regroupe plusieurs appareils de diagnostic destinés à réaliser 
  des examens biologiques variés, allant de la biochimie aux analyses virologiques. Les automates connectés 
  aux systèmes informatiques permettent un suivi en temps réel des tests, assurant une traçabilité optimale 
  et une rapidité d’exécution pour les diagnostics médicaux.
            </p>
          </div>
          <div className="col-md-6 image-container">
            <img
              src={labo_2}
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
              src={labo_3}
              alt="Service Médical"
              className="img-fluid shadow"
            />
          </div>
        <div className="col-md-6 text-container">
            <h2>Observation microscopique d’échantillons sanguins</h2>
            <p>
               L’observation microscopique permet une analyse détaillée des cellules sanguines, essentielle pour détecter 
  d’éventuelles anomalies, infections ou parasites. Cette étape repose sur un savoir-faire humain précis, 
  qui complète les examens automatisés. C’est une pratique incontournable pour affiner les diagnostics 
  médicaux et garantir la qualité des soins.
            </p>
          </div>
        </div>
      </div>
       {/* quatrieme section */}

<div className="container my-5" style={{ "paddingTop": "100px" }}>
<div ref={ref4} className={`animated-section  row align-items-center ${visible1 ? "visible" : ""}`}>
<div className="col-md-6 image-container">
    <img
      src={labo_4}
      alt="Consultation Médicale"
      className="img-fluid shadow"
    />
  </div>
  <div className="col-md-6 text-container">
    <h2> Service de Laboratoire d'Analyses Médicales</h2>
    <p>
     Notre laboratoire d’analyses médicales est équipé de technologies modernes permettant un diagnostic rapide, fiable et précis. Grâce à une équipe qualifiée et à des équipements automatisés de dernière génération, nous assurons des examens biologiques essentiels pour le suivi et la prise en charge des patients.

Nous garantissons un environnement stérile, sécurisé et conforme aux normes d’hygiène les plus strictes, afin de répondre efficacement aux besoins médicaux et d’assurer la qualité des résultats.
    </p>
   </div>
  </div>
</div>

 {/* cinquieme section */}

 <div className="container my-5">
        <div
          ref={ref5}
          className={`animated-section-right row align-items-center ${
            visible2 ? "visible" : ""
          }`}
        >
        <div className="col-md-6 text-container">
            <h2>Salle d’Hémostase</h2>
            <p>
             Cette salle est spécialement dédiée aux analyses d’hémostase, permettant d’évaluer les processus de coagulation sanguine. Elle est équipée de centrifugeuses de haute précision pour la préparation des échantillons. L'organisation et la propreté de l’espace garantissent la fiabilité des résultats et la sécurité des manipulations.
            </p>
          </div>
          <div className="col-md-6 image-container">
            <img
              src={labo_5}
              alt="Service Médical"
              className="img-fluid shadow"
            />
          </div>
          
        </div>
      </div>

{/* sixieme section */}

<div className="container my-5" style={{ "paddingTop": "100px" }}>
<div ref={ref6} className={`animated-section  row align-items-center ${visible1 ? "visible" : ""}`}>
<div className="col-md-6 image-container">
    <img
      src={labo_6}
      alt="Consultation Médicale"
      className="img-fluid shadow"
    />
  </div>
  <div className="col-md-6 text-container">
    <h2>Salle de Sérologie</h2>
    <p>
     La salle de sérologie est conçue pour la détection d’anticorps et d’antigènes, essentiels dans le diagnostic des maladies infectieuses. Elle contient des équipements modernes, incluant des automates performants et un poste informatique centralisé pour la gestion et l’analyse des données. Ce laboratoire assure des tests sérologiques rapides, précis et sécurisés.
    </p>
   </div>
  </div>
</div>

{/* septieme section */}

<div className="container my-5">
        <div
          ref={ref7}
          className={`animated-section-right row align-items-center ${
            visible2 ? "visible" : ""
          }`}
        >
        <div className="col-md-6 text-container">
            <h2>Autoclave de Stérilisation</h2>
            <p>
             Cet autoclave de grande capacité est utilisé pour la stérilisation du matériel de laboratoire. Grâce à la vapeur à haute pression, il élimine efficacement tous les micro-organismes, garantissant des conditions aseptiques pour les analyses. Sa présence témoigne de l'engagement du laboratoire pour la qualité et la sécurité des procédures.
            </p>
          </div>
          <div className="col-md-6 image-container">
            <img
              src={labo_7}
              alt="Service Médical"
              className="img-fluid shadow"
            />
          </div>
          
        </div>
      </div>
</>

      );

};
export default Laboratoire;