import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "../components/Header.css";
import hopitalbackground from "../assets/hopitalbackground.jpg";
import "../App.css";

const MotDirecteur = ()=>{

    return(

        <>
<div  className="nos-services-header"
style={{ backgroundImage: `url(${hopitalbackground})` }} >
<h1 >Mot de Directeur </h1>
</div>

<div className="container py-5">
      <div className="row">
        {/* Texte */}
        <div className="col-lg-8">
          <h1 className="mb-4 fw-bold position-relative pb-3" >Mot du directeur</h1>
          <div className="position-absolute bottom-0 start-50 translate-x bg-primary" 
       style={{ width: "80px", height: "2px",marginLeft:"-559px" }} />

          <p>
Chers citoyens, chers partenaires, chers visiteurs,
          </p>
          <p>
C’est avec honneur et responsabilité que je m’adresse à vous à travers ce message pour vous souhaiter la bienvenue sur le site officiel du Centre Hospitalier Préfectoral Princesse Lalla Aïcha de Témara.          </p>
          <p>
En tant qu’établissement public de santé, notre mission première est de garantir l’accès aux soins pour tous, sans distinction, avec une attention particulière portée à l’humain, à l’écoute, et au respect de la dignité du patient. À une époque où les attentes de la population en matière de santé sont de plus en plus élevées, nous nous devons d’être à la hauteur des défis sanitaires actuels, et d’anticiper ceux de demain.
          </p>
          <p>
Depuis plusieurs années, notre hôpital connaît une dynamique de transformation continue : rénovation des infrastructures, renforcement des équipements médicaux, amélioration des parcours de soins, et développement des compétences de notre personnel. Nous plaçons la qualité, la sécurité des soins et la bienveillance au cœur de notre action quotidienne.
          </p>
          <p>
Le lancement de ce site web s’inscrit dans cette volonté d’ouverture et de transparence. Il a été conçu comme un outil pratique, clair et accessible à tous, permettant à nos patients, à leurs familles et à nos partenaires de s’informer sur nos services, nos équipes, nos actualités, nos projets et nos valeurs. Il vise aussi à faciliter les démarches et la prise de contact avec nos services.
          </p>
          <p>
Mais au-delà de l’information, ce site est un pont entre vous et nous, une invitation à mieux connaître notre établissement, à dialoguer, à proposer, et à construire ensemble un hôpital moderne, humain et ancré dans son territoire.
          </p>
          <p>
Je tiens à exprimer toute ma reconnaissance à l’ensemble de notre personnel, administratif, médical, paramédical et technique, pour son dévouement, sa compétence et son engagement constant au service des usagers. Leur professionnalisme et leur sens du devoir font la richesse et la force de notre établissement.
          </p>
          <p>
À tous nos usagers, je souhaite une excellente navigation sur ce site et surtout, une prise en charge de qualité au sein de notre hôpital.
          </p>
          <p>
Merci pour votre confiance.
          </p>
          <p>
  <strong>Le Directeur du Centre Hospitalier Préfectoral Princesse Lalla Aïcha</strong>
          </p>
          <p>Docteur Alaae Boutayeb</p>
            </div>

        {/* Image */}
        <div className="col-lg-4 text-center">
          <div className="border-start ps-3" style={{paddingTop:"160px"}}>
            <img
              src="/AlaaeBouayd.png"
              alt="Directeur du CHP"
              className="img-fluid rounded mb-4"
              style={{marginLeft:"70px"}}
            />
            <div className="fw-semibold"style={{marginLeft:"130px"}}>Docteur Alaae Boutayeb</div>
            <div className="text-muted"style={{marginLeft:"130px"}}>Directeur du CHP Lalla Aicha</div>
          </div>
        </div>
      </div>
    </div>
        </>
    )
}
export default MotDirecteur;