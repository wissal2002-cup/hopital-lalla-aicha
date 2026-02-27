
import "./home.css";
import { Link } from "react-router-dom";

const Home = ()=>{
return(
    <>
 
    <div class="video-container">
        
        <video autoPlay loop muted playsInline className="background-video">
                <source src="/background.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        <div className="overlay">
        <h1>Bienvenue CHP </h1>
        <p>Votre sante, notre priorite.Decouvrez nos srvices exceptionnels ! </p>
        <button className="btn-historique">
            <Link to="/histoire" alt="histoire" >en savoir plus </Link>
        </button>

        </div>
        
    </div>
    
</>
)
}
export default Home;