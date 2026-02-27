
import React, { useEffect,useState }  from "react";
import ServiceCard from "./ServiceCard";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./Services.css";
import traumatologie_1 from "../assets/traumatologie_1.jpeg";

const ServiceSection = () => {
    console.log("ServiceSection is being rendered");

  const newsItems = [
    {
        image: "/Admin.png",
        title: "Administration",
        description: "administration",
        linkText: "En savoir plus",
        servicePageLink:"/administration"
    },
    {
        image: "/SAA.png",
        title: "SAA (Service d'Acceuil et d'admission)",
        description: "Service d'Acceuil et d'admission",
        linkText: "En savoir plus",
        servicePageLink:"/ServiceAcceuil"
    },
    {
      image: "/sallejour.jpg",
      title: "Hopital du jour( Salle Consultation )",
      description: "Consultation generale",
      linkText: "En savoir plus",
      servicePageLink:"/HopitalduJour"
    },
    {
      image: "/laboratoire.jpg",
      title: "Laboratoire",
      description: "Laboratoir disponible pour les analyses",
      linkText: "En savoir plus",
      servicePageLink:"/Laboratoire"
    },
    {
      image: "/urgences.jpg",
      title: "Urgences",
      description: "Urgences.....",
      linkText: "En savoir plus",
      servicePageLink:"/Urgences"
    },
    {
        image: "/radio.jpg",
        title: "Radiologie",
        description: "la radiologie permet de voir l'interieur du corps pour diagnostiquer des maladies.",
        linkText: "En savoir plus",
        servicePageLink:"/Radiologie"
    },
    {
        image: "/maternite.jpg",
        title: "Maternite",
        description: "Maternite",
        linkText: "En savoir plus",
        servicePageLink:"/Maternite"
    },
    {
        image: "/pediatrie_1.jpg",
        title: "Pediatrie",
        description: "Pediatrie",
        linkText: "En savoir plus",
        servicePageLink:"/Pediatrie"
    },
    {
        image: "traumatologie_1.jpeg",
        title: "Traumat",
        description: "Traumat",
        linkText: "En savoir plus",
        servicePageLink:"/Traummat"
    },
    {
        image: "/reanimation_1.jpeg",
        title: "Reanimation",
        description: "la reanimation est service medical qui prend les patients en etat necessite ",
        linkText: "En savoir plus",
        servicePageLink:"/Reanimation"
    },
    {
        image: "/bloc1.jpg",
        title: "Bloc Operatoire",
        description: "bloc operatoire",
        linkText: "En savoir plus",
        servicePageLink:"/BlocOperatoire"
    },
    {
        image: "/logochp.jpg",
        title: "Chirurgie (CCHH)",
        description: "Chirurgie (CCHH)",
        linkText: "En savoir plus",
        servicePageLink:"/CCHH"
    },
    {
        image: "/logochp.jpg",
        title: "Chirurgie tHORASIQUE(CHH)",
        description: "Chirurgie tHORASIQUE(CHH)",
        linkText: "En savoir plus",
        servicePageLink:"/CHU"
    },
    {
        image: "/logochp.jpg",
        title: "Chirurgie Vasculaire (CHH)",
        description: "Chirurgie Vasculaire(CHH)",
        linkText: "En savoir plus",
        servicePageLink: "/CHV"
    },
    {
        image: "medcine.jpg",
        title: "Medcine",
        description: "medcine",
        linkText: "En savoir plus",
        servicePageLink:"/Medcine"
    },
    {
        image: "pharmacie.webp",
        title: "Pharmacie",
        description: "Pharmacie",
        linkText: "En savoir plus",
        servicePageLink:"/Pharmacie"
    },
  ];
  console.log("newsItems:", newsItems);

 
  const getGroupSize = () => {
    if (window.innerWidth < 576) return 1;
    if (window.innerWidth < 992) return 2;
    return 3;
  };

  const [groupSize, setGroupSize] = useState(getGroupSize());

  useEffect(() => {
    const handleResize = () => setGroupSize(getGroupSize());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const groupedItems = newsItems.reduce((acc, item, index) => {
    const groupIndex = Math.floor(index / groupSize);
    if (!acc[groupIndex]) acc[groupIndex] = [];
    acc[groupIndex].push(item);
    return acc;
  }, []);
 
  return (
    <div id= "services" className="container my-5">
      <h1 className="text-center mb-4">Nos Services</h1>
      <div 
      className="carousel slide" 
      id="serviceCarousel" 
      data-bs-ride="carousel" 
      data-bs-interval="5000"
      >
        <div className="carousel-inner">
          {groupedItems.map((group, index) => (
            <div key={index} className={`carousel-item ${index === 0 ? "active" : ""}`}>
              <div className="row g-4">
                {group.map((item, idx) => (
                  <div
                    key={idx}
                    className={
                      groupSize === 1
                        ? "col-12"
                        : groupSize === 2
                        ? "col-md-6"
                        : "col-md-4"
                    }
                  >
                    <ServiceCard {...item} />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <button 
        className="carousel-control-prev" 
        type="button"
         data-bs-target="#serviceCarousel" 
         data-bs-slide="prev"
         >
          <span className="carousel-control-prev-icon" />
        </button>
        <button 
        className="carousel-control-next" 
        type="button" 
        data-bs-target="#serviceCarousel" 
        data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" />
        </button>
      </div>
    </div>
  
  );
};

export default ServiceSection;