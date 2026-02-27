import {Link} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "../components/Header.css";
import React, { useEffect, useState,useRef } from 'react';
import "./ServicePages.css";
import pediatrie_1 from "../assets/pediatrie_1.jpg";
import pediatrie_2 from "../assets/pediatrie_2.jpg";
import pediatrie_3 from "../assets/pediatrie_3.jpg";
//import backgroundService from "../assets/backgroundService.jpg";
import hopitalbackground from "../assets/hopitalbackground.jpg";

const Pediatrie=()=>{
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
        <h2 className="service-title">Paternite</h2> {/* Grand titre du service */}
</div>

      {/* Première section */}

<div className="container mt-0 mb-2">
<div ref={ref1} className={`animated-section  row align-items-center ${visible1 ? "visible" : ""}`}>
<div className="col-md-6 image-container">
    <img
      src={pediatrie_1}
      alt="Consultation Médicale"
      className="img-fluid shadow"
    />
  </div>
  <div className="col-md-6 text-container">
    <h2> Entrée du service de pédiatrie</h2>
    <p>
      Découvrez notre service de pédiatrie et de chirurgie pédiatrique,
       dédié à la santé et au bien-être des enfants. 
       Ce service regroupe des professionnels hautement qualifiés, 
       spécialisés dans la prise en charge médicale et chirurgicale des plus jeunes.
        Grâce à un environnement adapté et une approche humaine, 
        nous offrons des soins de qualité dans une atmosphère rassurante et sécurisante 
        pour les enfants et leurs familles.
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
            <h2>Service de pédiatrie</h2>
            <p>
              Un sourire, une écoute attentive et une prise en charge bienveillante : 
              c’est ce que nous offrons à chaque enfant et à chaque parent.
              Nos équipes médicales mettent tout en œuvre pour créer une relation de confiance, 
              essentielle à un parcours de soin apaisé. Dans notre service, 
              l’humain est au cœur de la santé, car chaque petit patient mérite une attention particulière et chaleureuse.
            </p>
          </div>
          <div className="col-md-6 image-container">
            <img
              src={pediatrie_2}
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
      src={pediatrie_3}
      alt="Consultation Médicale"
      className="img-fluid shadow"
    />
  </div>
  <div className="col-md-6 text-container">
    <h2>Chambre d’hospitalisation </h2>
    <p>
     Nos chambres d’hospitalisation sont conçues pour offrir confort et sécurité à nos jeunes patients. 
     Chaque espace est équipé de lits modernes, de mobilier fonctionnel et d’un éclairage naturel apaisant,
      favorisant le repos et la récupération. Nous veillons à maintenir un environnement propre,
      calme et accueillant pour que l’hospitalisation se déroule dans les meilleures conditions possibles.
    </p>
   </div>
  </div>
</div>

</>

      );

};
export default Pediatrie;