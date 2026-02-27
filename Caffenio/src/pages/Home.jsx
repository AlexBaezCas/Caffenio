// src/pages/Home.jsx
import { useNavigate } from "react-router-dom"

function Home() {
  const navigate = useNavigate()

  return (
    <div className="home-container">
      <div className="home-content">
        <h1 className="main-title">¡CUÍDATE!</h1>
        <h2 className="subtitle">DESINFECTA TUS MANOS</h2>
        <h3 className="highlight-text">
          ANTES Y DESPUÉS<br />DE USAR LA PANTALLA
        </h3>
        <img 
          src="/assets/hand.png" 
          alt="Desinfección" 
          className="hand-image"
        />
        <p className="note-text">
          *LA PANTALLA SE DESINFECTA<br />CADA 15 MINUTOS
        </p>
        <button 
          className="start-button"
          onClick={() => navigate("/welcome")}
        >
          TOCA PARA INICIAR
        </button>
      </div>
    </div>
  )
}

export default Home