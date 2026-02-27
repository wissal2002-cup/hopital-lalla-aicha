import "./SocialMedia.css";
import { Facebook, X, Instagram } from "lucide-react";
import { FaTiktok } from "react-icons/fa"; // ✅ TikTok icon ici

const SocialMedia = () => {
  return (
    <div className="social-container" id="SocialMedia" style={{margin:"150px"}}>
      <h2 className="title"style={{fontSize:"50px"}}>Suivez-nous sur les réseaux</h2>
      <div className="icons" >
        <a href="#" className="icon facebook"><Facebook /></a>
        <a href="#" className="icon twitter"><X /></a>
        <a href="#" className="icon instagram"><Instagram /></a>
        <a href="#" className="icon tiktok"><FaTiktok /></a> {/* TikTok avec react-icons */}
      </div>
    </div>
  );
};

export default SocialMedia;