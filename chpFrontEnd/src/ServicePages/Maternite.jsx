import {Link} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "../components/Header.css";
import React, { useEffect, useState,useRef } from 'react';
import "./ServicePages.css";
import maternite_1 from "../assets/maternite_1.jpg";
import maternite_2 from "../assets/maternite_2.jpg";
import maternite_3 from "../assets/maternite_3.jpg";
//import backgroundService from "../assets/backgroundService.jpg";
import hopitalbackground from "../assets/hopitalbackground.jpg";


const Maternite=()=>{
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
        <h2 className="service-title">Maternité</h2> {/* Grand titre du service */}
</div>

      {/* Première section */}

<div className="container mt-0 mb-2">
<div ref={ref1} className={`animated-section  row align-items-center ${visible1 ? "visible" : ""}`}>
<div className="col-md-6 image-container">
    <img
      src={maternite_1}
      alt="Consultation Médicale"
      className="img-fluid shadow"
    />
  </div>
  <div className="col-md-6 text-container">
    <h2> Espace d'accueil et de soins centralisé</h2>
    <p>
      Bienvenue dans notre service de maternité, où chaque détail est pensé pour le confort et la sécurité des mamans et de leurs bébés. L’espace présenté est un poste de soins centralisé, permettant à notre équipe de sages-femmes et de soignants de surveiller et accompagner les patientes tout au long de leur séjour. Sa position stratégique facilite une intervention rapide et une coordination optimale des soins.
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
            <h2>Chambres de maternité modernes et numérotées</h2>
            <p>
                    Chaque chambre est clairement identifiée (3, 4, 5, 6…) et aménagée pour accueillir les mamans dans un environnement calme et intime. Grâce à des cloisons vitrées, l’intimité est préservée tout en permettant une surveillance discrète. Les chambres sont équipées pour le repos post-accouchement, l’allaitement et les soins au nouveau-né dans les meilleures conditions.

            </p>
          </div>
          <div className="col-md-6 image-container">
            <img
              src={maternite_2}
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
      src={maternite_3}
      alt="Consultation Médicale"
      className="img-fluid shadow"
    />
  </div>
  <div className="col-md-6 text-container">
    <h2>Un environnement adapté aux besoins des mamans

</h2>
    <p>
Le service est conçu pour allier fonctionnalité et bien-être. Les couloirs spacieux, l'éclairage naturel et les équipements mobiles permettent une prise en charge efficace et douce. Notre équipe vous accompagne avec bienveillance, dans un cadre rassurant et chaleureux, pour faire de chaque naissance un moment unique et serein.    </p>
   </div>
  </div>
</div>

</>

      );

};
export default Maternite;