import React from 'react';
import './Presentation.css'

const Presentation = () => {
  return (
    <>
      <div id="presentation"className='pre-container'>
        <div className='pre-text'>
        <h1>CHP Lala Aicha</h1>
        <p>
          Le Centre hospitalier provincial (CHP) Lalla Aicha à Témara reçoit ses premiers patients à partir du vendredi 4 mars 2022, annonce le ministère de la santé et de la protection sociale. Ce centre permettra, selon la même source, de renforcer l’offre de soins au niveau de la région de Rabat-Salé-Kenitra, principalement au niveau de la préfecture de Skhirat-Témara, qui connaît une augmentation du taux de croissance démographique et une surcharge au niveau des établissements de santé relevant de cette province et ses environs.
        </p>
      </div>
      <div className='pre-image'>
        <img src='infohoptl.jpg' alt="CHP Lala Aicha" />
      </div>
      </div>
    </>
  );
};

export default Presentation;