import React from "react";


const AnnouncesCard = ({image, title,description, linkText,fileLink }) => {
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

        <h5 className="card-title fw-bold">{title}</h5>
      <p className="card-text">{description}</p>
      {fileLink &&(
          <a href={fileLink} className="btn btn-primary" download>
                 {linkText}
                 </a>
      )}
        
      </div>
    </div>
  );
};


export default AnnouncesCard;