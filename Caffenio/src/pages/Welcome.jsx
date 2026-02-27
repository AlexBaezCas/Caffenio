import { useNavigate } from "react-router-dom";
import "../styles/welcome.css";
import mono from "../assets/mono.png";

function Welcome() {
  const navigate = useNavigate();

  return (
    <div className="welcome-container">
      <h1 className="welcome-main-title">
        ¡Bienvenido a tu CAFFENIO favorito!
      </h1>

      <h2 className="welcome-subtitle">
        ¡Hola de nuevo, (Nombre)!
      </h2>

      <div className="welcome-decorative-line">
        <span className="welcome-dash">-</span>
      </div>

      <p className="welcome-recognition-text">
        ¡Te reconocí!
      </p>

      <div className="welcome-monkey-container">
        <img src={mono} alt="Mono Caffenio" className="welcome-monkey-image" />
      </div>

      <div className="welcome-vehicle-info">
        <p className="welcome-pickup-text">
          Detectamos tu pick-up Color (Color del vehículo)
        </p>
        <p className="welcome-plates-text">
          Con placas (Número)
        </p>
      </div>

      <div className="welcome-actions">
        <button
          className="welcome-button welcome-button-primary"
          onClick={() => navigate("/menu")}
        >
          ¡Hola! Soy yo
        </button>

        <button
          className="welcome-button welcome-button-secondary"
          onClick={() => navigate("/")}
        >
          No soy yo
        </button>
      </div>
    </div>
  );
}

export default Welcome;