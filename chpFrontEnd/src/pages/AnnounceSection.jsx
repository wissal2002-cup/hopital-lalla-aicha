import React from "react";

import AnnouncesCard from "./AnnouncesCard";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./Announces.css";
const AnnounceSection = () => {

  const items = [
    {
        image: "/logo_1.png",
        title: "Councours de residant",
        description: "administration",
        linkText: "Télécharger",
        fileLink: "/DocAnnonces/ConcoursdeRecrutement.pdf"
    },
    {
        image: "/logo_1.png",
        title: "Appel d'offre",
        description: "administration",
        linkText: "Télécharger",
        fileLink: "/DocAnnonces/AppelOffre.pdf"
    },
    {
        image: "/logo_1.png",
        title: "Examens Professionels",
        description: "administration",
        linkText: "Télécharger",
        fileLink: "/DocAnnonces/examenProfessionel.pdf"
    },
    {
        image: "/logo_1.png",
        title: "Appel Candidature",
        description: "administration",
        linkText: "Télécharger",
        fileLink: "/DocAnnonces/AppelCandidature.pdf"
    },
    {
        image: "/logo_1.png",
        title: "Councours de residant",
        description: "administration",
        linkText: "Télécharger",
        fileLink: "/DocAnnonces/ConcoursdeRecrutement.pdf",
        
    },
    {
        image: "/logo_1.png",
        title: "Councours de residant",
        description: "administration",
        linkText: "Télécharger",
        fileLink: "/DocAnnonces/ConcoursdeRecrutement.pdf"
    },
    {
        image: "/logo_1.png",
        title: "Councours de residant",
        description: "administration",
        linkText: "Télécharger",
        fileLink: "/DocAnnonces/ConcoursdeRecrutement.pdf"
    },
    {
        image: "/logo_1.png",
        title: "Councours de residant",
        description: "administration",
        linkText: "Télécharger",
        fileLink: "/DocAnnonces/ConcoursdeRecrutement.pdf"
    },
    {
        image: "/logo_1.png",
        title: "Councours de residant",
        description: "administration",       
        linkText: "Télécharger",
        fileLink: "/DocAnnonces/ConcoursdeRecrutement.pdf"
    },
    {
        image: "/logo_1.png",
        title: "Bloc Operatoire",
        description: "bloc operatoire",
        linkText: "Télécharger",
        fileLink: "En /DocAnnonces/ConcoursdeRecrutement.pdf"
    }
  ];
  const isMobile = window.innerWidth < 768;

  // 2. Group based on screen size
  const groupedItems = isMobile
    ? items.map((item) => [item]) // 1 per group
    : items.reduce((acc, curr, i) => {
        if (i % 3 === 0) acc.push([curr]);
        else acc[acc.length - 1].push(curr);
        return acc;
      }, []);

  
  
  return (
    <div  id="Announce" className="container my-5">
    <h1 className="text-center mb-4">Avis & Annonces</h1>
        <div id="announceCarousel" className="carousel slide" data-bs-ride="carousel">

    <div className="carousel-inner">
         {groupedItems.map((group, index) => (
            <div className={`carousel-item ${index === 0 ? "active" : ""}`} key={index}>
            <div className="row justify-content-center " >
              {group.map((item, idx) => (
            <div  key={idx}
            className={isMobile ? "col-12" : "col-md-4"}
            style={{ padding: "10px" }} >                
            <AnnouncesCard {...item} />
            </div>
          ))}
        </div>
        </div>
    ))}
    </div>

        <button className="carousel-control-prev" type="button" data-bs-target="#announceCarousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" />
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#announceCarousel" data-bs-slide="next">
          <span className="carousel-control-next-icon" />
        </button>
      </div>
    </div>
  );
};

export default AnnounceSection;