

import {Link} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./header.css";
import React, { useEffect, useState } from 'react';

const Header = () => {

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
 

   


    return(
      <div class="header-container">

        <div className="d-flex align-items-center justify-content-between px-3 py-2" 
style={{"backgroundColor":"#263143","z-index": "1030px","positionTop":"fixed","top":0,"left":0,"height":"80px"}}>
            <div className="d-flex align-items-center gap-4">
                <img src="/logochp.png" alt="chp ibn sina" style={{width:"100px"}}/>
                {/*Emergency Ribbon */}
<div className="d-flex align-items-center gap-5 emergency-ribbon" style={{marginLeft:"550px"}} >
            <div className="d-flex align-items-center gap-1" >
              <span className="text-white " style={{fontSize:"1.5rem",lineHeight:"1"}}>📞</span>
              <h6 className="text-white text-decoration-none fw-bold">
                URGENCE ? <u>APPELER  0 (800) 123 45 67</u>
              </h6>
            </div>
            <button className="btn btn-sm p-1 text-white" style={{ 
              backgroundColor: "#e74c3c",
              border: "none"
            }}>
              <span style={{fontSize:"1.5rem",lineHeight:"1"}}>🚑</span> Ambulance: 15
            </button>
          </div>
        </div>


            </div>
        <header id="header" className={`navbar ${isSticky ? "fixed-navbar" : ""}`} >
            
        <nav class="navbar navbar-expand-lg navbar-light main-navbar "style={{borderRadius:"30px"}}>
  <div class="container-fluid" >
    <Link class="navbar-brand" to="/">
      <img src="/logo_1.png" style={{width:"100px"}}/>
      </Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
      <li class="nav-item dropdown">
          <Link class="nav-link dropdown-toggle" to="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Connaitre le CHP
          </Link>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink" >
            <li><Link class="dropdown-item" to="/MotDirecteur">Mot de directeur</Link></li>
            <li><a class="dropdown-item" href="/#presentation">A propos de nous</a></li>
            <li><a class="dropdown-item" href="/#Statistique">Statistique de l'hopital</a></li>
            <li><a class="dropdown-item" href="/#PublicationSection">Actualites</a></li>
          </ul>
        </li>

        <li class="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Nos services
          </Link>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink" style={{paddingRight:"50px"}}>
            <li><a className="dropdown-item" href="/#services">Services</a></li>
            <li><Link className="dropdown-item" to="/locauxtechniques">Locaux Techniques</Link></li>
            
          </ul>
        </li>

        <li class="nav-item">
          <a class="nav-link" href="/#Announce">Annonces</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/#SocialMedia">Publication</a>
        </li>
        <li class="nav-item" >
        <a class="nav-link" href="/admin/login">Login</a></li>
      
      </ul>
    </div>
  </div>
</nav>
        </header>
  
        </div>
    )
}
export default Header;
