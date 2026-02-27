import React from "react";
import PublicationCard from "./PublicationCard";
 
import "./Publication.css";
import newsItems from "./PublicationData";


const PublicationSection = () => {
  

  return (<>
    <div className="titre" id="PublicationSection">
        <h1>Actualités du CHP</h1>
    </div>
    <div className="news-grid">
        
      {newsItems.map((item) => (
        <PublicationCard
          key={item.id}
          id={item.id}
          image={item.image}
          title={item.title}
          date={item.date}
          description={item.description}
          linkText={item.linkText}
        />
      ))}
    </div>
    </>
  );
};

export default PublicationSection;