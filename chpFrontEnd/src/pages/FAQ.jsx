import React, { useState } from "react";
import "./FAQ.css"; // lien vers le fichier CSS

const faqs = [
  {
    question: "Quels services offrez-vous ?",
    answer:
      "Le Centre Hospitalier Provincial offre une large gamme de services médicaux, chirurgicaux, maternité, urgences, et consultations spécialisées.",
  },
  {
    question: "Comment contacter le CHP ?",
    answer:
      "Vous pouvez nous contacter via le formulaire de contact sur notre site web ou appeler directement notre standard au numéro indiqué dans la section contact.",
  },
  {
    question: "Où sont situés vos hôpitaux ?",
    answer:
      "Nos hôpitaux sont répartis sur la province de Rabat. Vous trouverez les adresses exactes sur la page 'Nos établissements'.",
  },
  {
    question: "Qu'est-ce que la pharmacovigilance ?",
    answer:
      "La pharmacovigilance est la surveillance continue des effets indésirables des médicaments afin d'assurer leur sécurité pour les patients.",
  },
  {
    question: "Comment faire une réclamation ?",
    answer:
      "Vous pouvez déposer une réclamation via notre formulaire en ligne, ou directement auprès du bureau d’accueil dans l’un de nos établissements.",
  },
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
      <h2 className="faq-title">Questions Fréquemment Posées</h2>
      {faqs.map((faq, index) => (
        <div key={index} className="faq-item">
          <div className="faq-question" onClick={() => toggleFAQ(index)}>
            {faq.question}
            <span className={`arrow ${activeIndex === index ? "open" : ""}`}>
              ▼
            </span>
          </div>
          <div
            className={`faq-answer ${
              activeIndex === index ? "visible" : "hidden"
            }`}
          >
            {faq.answer}
          </div>
        </div>
      ))}
    </div>
  );
}