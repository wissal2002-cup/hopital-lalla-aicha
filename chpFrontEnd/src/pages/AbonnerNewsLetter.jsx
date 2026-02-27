import React, { useState } from "react";
import axios from "axios";
import "./AbonnerNewsLetter.css"

const Newsletter=()=>{
    const [email,setEmail]=useState("");
    const [responseMessage,setResponseMessage]=useState("");


    const handleSubmit= async (e)=>{
        e.preventDefault();
        try {
            const response = await axios.post("http://127.0.0.1:8000/api/subscribe", { email });
            setResponseMessage(response.data.message); // assuming your backend sends a message
            setEmail(""); // Clear the email field
        } catch (error) {
            setResponseMessage("Erreur lors de l’inscription.");
            console.error("There was an error!", error);
        }

    }

    return (
        <div className="newsletter">
            <h2>soyez les premiers a etre notifies de toute nouvelle publication, rejoignez notre newsletter</h2>
            <form onSubmit={handleSubmit} className="newsletter-form">
                <input type="email" name="email" 
                placeholder="Adresse email" 
                value={email} 
                onChange={(e)=>setEmail(e.target.value)} required/>
                <button type="submit">Abonnez-vous</button>
            </form>
            {responseMessage && <p>{responseMessage}</p>} 
        </div>
    )
}
export default Newsletter;