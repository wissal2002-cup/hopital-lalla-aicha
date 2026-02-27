import React from "react";
import "./Publication.css";
import { Link } from "react-router-dom";
const PublicationCard = ({id,image, title, date, description, linkText }) => {
  return (
    <div className="card news-card">
        {image &&(
        <img src={image} alt={title} className="news_image"/>
        )}
        <div className="card-body">
      <h2 className="card-title">{title}</h2>
      <div className="news-meta">
        <span className="news-date">{date}</span>
      </div>
      <p className="news-description">{description}</p>
      <div className="news-link">
        <Link to={`/news/${id}`} className="btn btn-primary" style={{marginLeft:"11px"}}>
            {linkText}
            </Link>
      </div>
    </div>
    </div>
  );
};

export default PublicationCard;