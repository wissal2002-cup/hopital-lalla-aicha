import { Navigate } from 'react-router-dom';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import ServiceSection from './pages/ServiceSection';
import Presentation from './pages/Presentation.jsx';
import Carousel from "./pages/PhotoCarousel.jsx";
import Contacts from "./pages/Contacts";
import Administration from "./ServicePages/Administration.jsx";
import ServiceAcceuil from "./ServicePages/SAA";
import HopitalduJour from "./ServicePages/HopitalduJour";
import Laboratoire from "./ServicePages/Laboratoire.jsx";
import Urgences from "./ServicePages/Urgences.jsx";
import Radiologie from "./ServicePages/Radiologie.jsx";
import Maternite from "./ServicePages/Maternite.jsx";
import Pediatrie from "./ServicePages/Pediatrie.jsx";
import Traummat from "./ServicePages/Traumat.jsx";
import Reanimation from "./ServicePages/Reanimation";
import BlocOperatoire from "./ServicePages/BlocOperatoire";
import CCHH from "./ServicePages/chirurgieCCHH";
import CHU from "./ServicePages/Chirurgiethorarique";
import CHV from "./ServicePages/ChirurgieVasculaire.jsx";
import Medcine from "./ServicePages/Medcine";
import Pharmacie from "./ServicePages/Pharmacie";
import LocauxTechniques from "./ServicePages/LocauxTechniques";
import MotDirecteur from "./pages/MotDirecteur";
import Statistique from "./pages/Statistique.jsx";
import PublicationSection from "./pages/PublicationSection.jsx";
import FAQ from "./pages/FAQ.jsx";
import Newsletter from './pages/AbonnerNewsLetter.jsx';
import Contact from './pages/ContactLink.jsx';
import SocialMedia from './pages/SocialMedia.jsx';
import ContactForm from './pages/ContactForm.jsx';
import NewsDetail from './pages/PublicationDetail';
import Histoire from "./pages/Histoire";
import AnnounceSection from './pages/AnnounceSection.jsx';
//admin
import AdminLogin from './AdminPages/Login.jsx';
import Dashboard from './AdminPages/Dashboard.jsx';
const PrivateRoute = ({ children }) => {
  const token = localStorage.getItem('adminToken');
  return token ? children : <Navigate to="/admin/login" />;
};

function App() {
  return (
    <div className="root">
      <Header />
      <main>
        <Routes>

<Route
  path="/admin/dashboard"
  element={
    <PrivateRoute>
      <Dashboard />
    </PrivateRoute>
  }
/>
<Route path="/admin/login" element={<AdminLogin/>}/>

          <Route path="/" element={<> 
            <Home />
            <Presentation />
            <Statistique />
            <ServiceSection />
            <PublicationSection />
            <AnnounceSection />
            <FAQ />
            <Newsletter />
            <Carousel />
            <Contact />
            <SocialMedia />
            <Contacts />
            <ContactForm />
          </>}
           />
<Route path="/AnnounceSection" element={<AnnounceSection />} />
          <Route path="/news/:id" element={<NewsDetail />} />
          <Route path="/ContactForm" element={<ContactForm />} />
          <Route path="/Statistique" element={<Statistique />} />
          <Route path="/service" element={<ServiceSection />} />
          <Route path="/PublicationSection" element={<PublicationSection />} />
          <Route path="/presentation" element={<Presentation />} />
          <Route path="/Carousel" element={<Carousel />} />
          <Route path="/Administration" element={<Administration />} />
          <Route path="/ServiceAcceuil" element={<ServiceAcceuil />} />
          <Route path="/HopitalduJour" element={<HopitalduJour />} />
          <Route path="/Laboratoire" element={<Laboratoire />} />
          <Route path="/Urgences" element={<Urgences />} />
          <Route path="/Radiologie" element={<Radiologie />} />
          <Route path="/Maternite" element={<Maternite />} />
          <Route path="/Pediatrie" element={<Pediatrie />} />
          <Route path="/Traummat" element={<Traummat />} />
          <Route path="/Reanimation" element={<Reanimation />} />
          <Route path="/BlocOperatoire" element={<BlocOperatoire />} />
          <Route path="/CCHH" element={<CCHH />} />
          <Route path="/CHU" element={<CHU />} />
          <Route path="/CHV" element={<CHV />} />
          <Route path="/Medcine" element={<Medcine />} />
          <Route path="/Pharmacie" element={<Pharmacie />} />
          <Route path="/locauxTechniques" element={<LocauxTechniques />} />
          <Route path="/histoire" element={<Histoire />} />
          <Route path="/MotDirecteur" element={<MotDirecteur />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
