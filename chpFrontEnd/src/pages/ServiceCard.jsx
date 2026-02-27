
import React from "react";
import { Link } from "react-router-dom";

const ServiceCard = ({image, title,description, linkText, servicePageLink }) => {
  return (
    <div className="card shadow border-0 h-100" >
        {image && (
            <img 
            src={image}
             alt={title} 
             className="card-img-top"
             />
            )}
    
    <div className="card-body text-center">

        <h2  className="card-title fw-bold">{title}</h2>
      <p className="card-text">{description}</p>
      
        {/* Use Link to navigate to the service detail page */}

        <a href={servicePageLink} className="btn btn-primary" >
            {linkText}
            </a>
      </div>
    </div>
  );
};


export default ServiceCard;