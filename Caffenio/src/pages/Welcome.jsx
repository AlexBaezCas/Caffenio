// src/pages/Welcome.jsx
import { useNavigate } from "react-router-dom"

function Welcome() {
  const navigate = useNavigate()

  return (
    <div className="welcome-container">
      
      {/* Título principal */}
      <h1 className="welcome-main-title">
        ¡Bienvenido a tu CAFFENIO favorito!
      </h1>
      
      {/* Subtítulo */}
      <h2 className="welcome-subtitle">
        ¡Hola de nuevo, (Nombre)!
      </h2>
      
      {/* Línea decorativa con guión */}
      <div className="welcome-decorative-line">
        <span className="welcome-dash">-</span>
      </div>
      
      {/* Texto "¡Te reconocí!" */}
      <p className="welcome-recognition-text">
        ¡Te reconocí!
      </p>
      
      {/* IMAGEN DEL MONO */}
      <div className="welcome-monkey-container">
        <img 
          src="/assets/mono.png" 
          alt="Mono Caffenio" 
          className="welcome-monkey-image"
        />
      </div>
      
      {/* Información del vehículo - TEXTO NEGRO */}
      <div className="welcome-vehicle-info">
        <p className="welcome-pickup-text">
          Detectamos tu pick-up Color (Color del vehículo)
        </p>
        <p className="welcome-plates-text">
          Con placas (Número)
        </p>
      </div>
      
      {/* BOTONES EN ESQUINA INFERIOR DERECHA */}
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
  )
}

export default Welcome