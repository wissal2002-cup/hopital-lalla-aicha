import React from 'react';
import './Statistique.css';
import stethoscope from "../assets/stethoscope.jpg";
import baby from "../assets/baby.jpg";
import doctor from "../assets/doctor.jpg";
import surgery from "../assets/surgery.jpg";
import bed from "../assets/bed.jpg";
import ambulance from "../assets/ambulance.jpg";

const Statistique = () => {
    const statsData = [
        { img: stethoscope, number: "384.530+", label: "Consultations" },
        { img: baby, number: "18.938+", label: "Accouchements" },
        { img: doctor, number: "8.151+", label: "Professionnels de santé" },
        { img: surgery, number: "36.464+", label: "Interventions chirurgicales" },
        { img: bed, number: "2.148+", label: "Lits" },
        { img: ambulance, number: "231.690+", label: "Passages aux urgences" },
      ];
return(
    <div className='stats-container' id="Statistique">
        {statsData.map((stat,index)=>(
            <div key={index} className='stat-item'>
                <img src={stat.img} alt={stat.label}/>
                <h3>{stat.number}</h3>
                <p>{stat.label}</p>
            </div>
        ))}
    </div>
);
}
export default Statistique;