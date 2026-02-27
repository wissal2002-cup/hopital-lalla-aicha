import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import "../App.css";
const Footer = () => {
  return (
    <div style={{ backgroundColor: "#263143", color: "#fff"}}>
      <Container>
        <div className="bg-transparent rounded-4 text-white p-4 text-center text-md-start">
          <Row className="gy-4">
            {/* Logo & Info */}
            <Col md={3}>
              <img src="/logochp.png" alt="Logo CHP" style={{ height: "200px", marginBottom: "10px",marginLeft:"-90px" }} />
              <h4 className="fw-bold text-white" style={{margin:""}}>Notre établissement</h4>
              <p className="mb-1">Centre Hospitalier</p>
              <p className="mb-1">Prefectoral Princesse Lalla Aïcha</p>
              <p className="mb-1">Témara, Maroc</p>
              <p className="mb-1">Téléphone: +212 ---</p>
              <p className="mb-1">Fax: +212 ---</p>
              <p className="mb-0">info@chplallaaicha.co</p>
            </Col>

            {/* Avis et annonces */}
            <Col md={3} style={{marginRight:"200px",marginLeft:"70px"}}>
              <h4 className="fw-bold text-white" style={{marginTop: "2rem"}}>Avis et annonces</h4>
              <ul className="list-unstyled" style={{lineHeight: "1.8"}}>
                <li><a href="/DocAnnonces/ConcoursdeRecrutement.pdf" className="text-decoration-none text-white ">Councours de residant</a></li>
                <li><a href="/DocAnnonces/AppelOffre.pdf" className="text-decoration-none text-white ">Appels d'offre</a></li>
                <li><a href="/DocAnnonces/examenProfessionel.pdf" className="text-decoration-none text-white ">Examens Professionnels</a></li>
                <li><a href="/DocAnnonces/AppelCandidature.pdf" className="text-decoration-none text-white ">Appel Candidature</a></li>
              </ul>
            </Col>

            {/* Publications 
            <Col md={3}>
              <h4 className="fw-bold text-white" style={{marginTop: "2rem"}}>Publications</h4>
              <ul className="list-unstyled"style={{lineHeight: "1.8"}}>
                <li><a href="#" className="text-decoration-none text-white">Bulletins d'information</a></li>
                <li><a href="#" className="text-decoration-none text-white">Rapports d’activité</a></li>
                <li><a href="#" className="text-decoration-none text-white">Projets de plan d’action</a></li>
                <li><a href="#" className="text-decoration-none text-white">Brochures & Diplômes</a></li>
              </ul>
            </Col>
*/}
            {/* Nos Services */}
            <Col md={3}>
              <h4 className="fw-bold text-white" style={{marginTop: "2rem"}}>Nos Services</h4>
              <ul className="list-unstyled"style={{lineHeight: "1.8"}}>
                <li><a href="/Administration" className="text-decoration-none text-white">Administration</a></li>
                <li><a href="/ServiceAcceuil" className="text-decoration-none text-white">Service d’accueil et admission</a></li>
                <li><a href="/Laboratoire" className="text-decoration-none text-white">Laboratoire</a></li>
                <li><a href="/HopitalduJour" className="text-decoration-none text-white">Hopital du jour</a></li>
                <li><a href="/Urgences" className="text-decoration-none text-white">Urgences</a></li>
                <li><a href="/Radiologie" className="text-decoration-none text-white">Radiologie</a></li>
                <li><a href="/Maternite" className="text-decoration-none text-white">Maternité</a></li>
                <li><a href="/Pediatrie" className="text-decoration-none text-white">Pédiatrie</a></li>
                <li><a href="/BlocOperatoire" className="text-decoration-none text-white">Bloc opératoire</a></li>
                <li><a href="/Pharmacie" className="text-decoration-none text-white">Pharmacie</a></li>
              </ul>
            </Col>
          </Row>

          {/* Footer bottom */}
          <hr />
          <div className="text-center mt-3">
            <div className="d-flex justify-content-center gap-3 mb-2">
              <a href="#" className="text-decoration-none text-white"><FaFacebookF /></a>
              <a href="#" className="text-decoration-none text-white"><FaTwitter /></a>
              <a href="#" className="text-decoration-none text-white"><FaLinkedinIn /></a>
            </div>
            <small  className="mb-0">© Copyright 2025 Mobirso - All Rights Reserved</small>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
