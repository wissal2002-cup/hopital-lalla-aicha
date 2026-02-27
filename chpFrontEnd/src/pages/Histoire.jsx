import React from "react";
import { Row, Col } from "react-bootstrap"; // Make sure to import Row and Col
import "./histoire.css"; // optional, if you want to style it
import indorhopital_1 from "../assets/indorhopital_1.jpg"
import interfacebackhpt from"../assets/interfacebackhpt.jpg";
const Histoire = () => {
  return (
    <div className="histoire-container">
      <h2>Notre Histoire</h2>
      
      {/* Single row of images */}
      <Row className="gy-4">
        <Col md={4}>
          <img
            src="infohoptl.jpg" // Path to the first image
            alt="Histoire 1"
            
              className="histoire-img"
              />
        </Col>
        <Col md={4}>
          <img
            src={indorhopital_1} // Path to the second image
            alt="Histoire 2"
            className="histoire-img  taller-img"

          />
        </Col>
        <Col md={4}>
          <img
            src={interfacebackhpt} // Path to the third image
            alt="Histoire 3"
            className="histoire-img"

          />
        </Col>
      </Row>

      {/* Description text */}
      <p>
        Le Centre Hospitalier CHP a été fondé dans le but d'offrir des soins de
        santé de qualité à tous. Depuis sa création, il a grandi pour devenir
        un pilier de la communauté grâce à son engagement, ses services
        innovants, et son personnel dévoué.
      </p>
      <p>
        Notre mission est de toujours placer les patients au cœur de nos
        préoccupations, avec une attention particulière à l’écoute, la
        prévention, et l’accompagnement personnalisé.
      </p>
    </div>
  );
};

export default Histoire;
