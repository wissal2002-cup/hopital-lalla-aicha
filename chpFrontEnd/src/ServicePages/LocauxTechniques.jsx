import {Link} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "../components/Header.css";
import React, { useEffect, useState,useRef } from 'react';
import "./ServicePages.css";
import hopitalbackground from "../assets/hopitalbackground.jpg";
//import backgroundService from "../assets/backgroundService.jpg";
import Sterilisation from "../assets/Sterilisation.jpg";
import Surveillance from "../assets/Surveillance.png";
import Reseau from "../assets/Reseau.jpg";
import Cuisine from "../assets/Cuisine.jpg";
import morgue from "../assets/morgue.jpg";
import biandrie from "../assets/biandrie.png";
/*
import labo_5 from "../assets/labo_5.jpg";
import labo_6 from "../assets/labo_6.jpg";
import labo_7 from "../assets/labo_7.jpg";
import        from  "../assets/......";
*/

const LocauxTechniques=()=>{
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
    const ref8 = useRef();


  const [visible1, setVisible1] = useState(false);
  const [visible2, setVisible2] = useState(false);
  const [visible3, setVisible3] = useState(false);
  const [visible4, setVisible4] = useState(false);
  const [visible5, setVisible5] = useState(false);
  const [visible6, setVisible6] = useState(false);
  const [visible7, setVisible7] = useState(false);
  const [visible8, setVisible8] = useState(false);



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
const observer8 = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) 
          console.log("Section 8 is visible");

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
    if (ref8.current) observer8.observe(ref8.current);


    return () => {
        observer1.disconnect(); 
        observer2.disconnect();
        observer3.disconnect();
        observer4.disconnect();
        observer5.disconnect();
        observer6.disconnect();
        observer7.disconnect();
        observer8.disconnect();



    };


  }, []);
  
  
      return(
        
      <>
<div  className="nos-services-header"
style={{ backgroundImage: `url(${hopitalbackground})`,width:"100%" ,height:"490px"}} >
<h1>Nos Services </h1>
</div>

<div className="px-3 py-5"style={{marginBottom:"150px"}}>
        <h2 className="service-title">Locaux Techniques</h2> {/* Grand titre du service */}
</div>

      {/* Première section */}

<div className="container mt-0 mb-2">
<div ref={ref1} className={`animated-section  row align-items-center ${visible1 ? "visible" : ""}`}>
<div className="col-md-6 image-container">
    <img
      src={biandrie}
      alt="Consultation Médicale"
      className="img-fluid shadow"
      style={{width:"1000px"}}
    />
  </div>
  <div className="col-md-6 text-container">
    <h2>Buanderie</h2>
    <p>
      Découvrez notre buanderie hospitalière, équipée de laveuses industrielles haute capacité conçues pour répondre 
      aux exigences strictes d’hygiène. Chaque étape du traitement du linge — lavage, rinçage et essorage — est 
      optimisée pour garantir une propreté irréprochable, essentielle en milieu médical. L’espace est pensé pour 
      la sécurité du personnel et l’efficacité du travail, avec des équipements robustes et ergonomiques. 
      Grâce à cette infrastructure, nous assurons une gestion rigoureuse et hygiénique du linge hospitalier.
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
            <h2>Sterilisation</h2>
            <p>
              Bienvenue dans notre salle de stérilisation, dédiée à la préparation et à la conservation de matériel 
              médical stérile. Dotée d’étagères en acier inoxydable et de conteneurs spécialisés, 
              cette zone respecte les normes les plus strictes en matière de sécurité et de contrôle des infections. 
              Le personnel formé y manipule et conditionne le matériel avec rigueur pour garantir une stérilité 
              parfaite. Cette salle est un maillon essentiel dans la chaîne de soins, assurant la disponibilité 
              constante d’instruments prêts à l’usage.

</p>
          </div>
          <div className="col-md-6 image-container">
            <img
              src={Sterilisation}
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
              src={Surveillance}
              alt="Service Médical"
              className="img-fluid shadow"
            />
          </div>
        <div className="col-md-6 text-container">
            <h2>Surveillance</h2>
            <p>
              Explorez notre salle de surveillance, un centre névralgique de supervision en temps réel. 
              Équipée de multiples écrans de contrôle, elle permet de surveiller différents secteurs 
              de l’établissement en permanence. Ce dispositif contribue à garantir la sécurité des patients, 
              du personnel et des installations. Gérée par des opérateurs qualifiés, la salle assure une réponse 
              rapide à toute situation inhabituelle, 
              renforçant ainsi la sûreté de notre environnement hospitalier.
            </p>
          </div>
        </div>
      </div>
       {/* quatrieme section */}

<div className="container my-5" style={{ "paddingTop": "100px" }}>
<div ref={ref4} className={`animated-section  row align-items-center ${visible1 ? "visible" : ""}`}>
<div className="col-md-6 image-container">
    <img
      src={Reseau}
      alt="Consultation Médicale"
      className="img-fluid shadow"
    />
  </div>
  <div className="col-md-6 text-container">
    <h2>Reseau</h2>
    <p>
      Voici notre salle réseau, cœur technologique de notre infrastructure numérique. 
      Dotée de baies informatiques modernes et d’un câblage structuré, elle centralise les systèmes
      informatiques et les flux de données essentiels à nos activités. Cette salle garantit 
      une connectivité fiable et sécurisée, soutenant les outils de gestion médicale, la téléphonie, 
      la vidéosurveillance et bien plus. 
      Grâce à cette base solide, notre établissement fonctionne avec efficacité et sécurité, 24h/24.
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
            <h2>Biomedical</h2>
            <p>
              Nous offrons une gamme complète de services médicaux spécialisés, allant des
              consultations à la chirurgie, tout en garantissant un environnement confortable
              et sécurisé pour nos patients.
            </p>
          </div>
          <div className="col-md-6 image-container">
            <img
              src="logo_1.png"
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
      src="logo_1.png"
      alt="Consultation Médicale"
      className="img-fluid shadow"
    />
  </div>
  <div className="col-md-6 text-container">
    <h2>Magasin de Materiel</h2>
    <p>
      Nos consultations sont assurées par des professionnels hautement qualifiés,
      avec une approche humaine et personnalisée. Nous mettons l’accent sur l’écoute,
      le diagnostic précis et l’accompagnement complet du patient.
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
            <h2>Morgue</h2>
            <p>
             Découvrez notre morgue hospitalière, un espace conçu dans le respect de la dignité humaine et 
             des normes sanitaires les plus rigoureuses. Cet environnement est spécialement aménagé pour 
             l’accueil temporaire des défunts, dans des conditions optimales de conservation. 
             L’accès est strictement encadré et réservé au personnel autorisé, afin de garantir confidentialité et respect. 
             Grâce à une gestion professionnelle et humaine, 
             nous assurons une prise en charge respectueuse et conforme aux exigences éthiques et réglementaires.
            </p>
          </div>
          <div className="col-md-6 image-container">
            <img
              src={morgue}
              alt="Service Médical"
              className="img-fluid shadow"
            />
          </div>
          
        </div>
      </div>

      {/* huitieme section */}

<div className="container my-5" style={{ "paddingTop": "100px" }}>
<div ref={ref6} className={`animated-section  row align-items-center ${visible1 ? "visible" : ""}`}>
<div className="col-md-6 image-container">
    <img
      src={Cuisine}
      alt="Consultation Médicale"
      className="img-fluid shadow"
    />
  </div>
  <div className="col-md-6 text-container">
    <h2>Cuisine</h2>
    <p>
      Découvrez notre cuisine hospitalière, équipée de matériel professionnel 
      de dernière génération pour garantir une alimentation saine, équilibrée et adaptée 
      aux besoins spécifiques de chaque patient. Chaque repas est préparé 
      dans le respect des normes d’hygiène les plus strictes, grâce à une organisation 
      rigoureuse et une équipe de cuisiniers qualifiés. L’environnement est conçu pour 
      assurer une production optimale, tout en veillant à la sécurité alimentaire. Cette cuisine contribue activement 
      au bien-être et à la récupération des patients en fournissant des repas savoureux et nutritifs.
    </p>
   </div>
  </div>
</div>
</>

      );

};
export default LocauxTechniques;