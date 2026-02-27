import React from "react";
import { useParams } from "react-router-dom";
import newsItems from "./PublicationData"; 

const NewsDetail = () => {
  const { id } = useParams(); // Get the id from URL parameters
  const news = newsItems.find(item => item.id === parseInt(id)); // Find the news by ID

  // If news not found (in case user navigates to an invalid link)
  if (!news) {
    return <p style={{ padding: "20px" }}>Actualité non trouvée</p>;
  }

  return (
    <div style={{ padding: "20px 20px 0 20px" }}>
      <h1 style={{textAlign:"center",padding:"30px"}}>{news.title}</h1>
      <p><strong>Date:</strong> {news.date}</p>
      <img src={news.image} alt={news.title} style={{ width: "300px", marginTop: "20px" }} />
      <p style={{ marginTop: "20px", fontSize: "25px",textAlign:"center",padding:"50px",lineHeight:"60px" }}>{news.fullContent}</p>
    </div>
  );
};

export default NewsDetail;
