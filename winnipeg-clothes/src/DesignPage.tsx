import { Link } from "react-router-dom";
import "./DesignPage.css";

function DesignPage() {
  return (
    <div className="app">

      <div className="content">
        <h1>Design your own clothes</h1>
        <div className="buttons-container">
          <button>Take the quiz</button>
          <Link to="/customize">
            <button>Design your own</button>
          </Link>
        </div>
      </div>

    </div>
  );
}

export default DesignPage;
