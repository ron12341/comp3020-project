import "./TechnologySection.css";

const TechnologySection = () => {
  return (
    <div className="technology-section">
      <div className="section-title">
        <p>Our Technology</p>
      </div>

      <div className="section-content-container">
        <div className="section-content">
          <p className="section-content-title">3D Printing</p>
          <p className="section-content-text">
            La technologie 3D est un élément essentiel de Prairie Custom
            Threads. Cette technologie nous permet non seulement de
            personnaliser les matériaux de nos produits, mais également
            d'imprimer les logos et les broderies personnalisés demandés par nos
            clients. Si vous souhaitez visiter nos installations d’impression,
            contactez-nous dès aujourd’hui et nous serons plus qu’heureux de
            vous faire visiter !
          </p>
        </div>

        <div className="section-content">
          <p className="section-content-title">Photo Scanning</p>
          <p className="section-content-text">
          La numérisation de photos est un outil de cartographie que nous utilisons pour créer des empreintes de pointe sur nos vêtements. Cette technique est largement utilisée dans nos tee-shirts. Notre produit le plus vendu, la numérisation de photos, peut permettre aux utilisateurs de créer une haute définition ou d'utiliser une imagerie précise pour leurs photos. Essayez notre numérisation de photos dès aujourd'hui !
          </p>
        </div>
      </div>
    </div>
  );
};

export default TechnologySection;
