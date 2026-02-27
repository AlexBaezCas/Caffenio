import React from 'react';
import './qr-scanner.css';

const QrScanner = ({ onBack }) => {
  // Simulación del escaneo de QR (esto se reemplazaría con la lógica real)
  const simulateScan = () => {
    console.log('Escaneando QR...');
    // Aquí iría la lógica real del escáner
  };

  return (
    <div className="qr-container">
      {/* Barra superior con instrucción */}
      <div className="qr-header">
        <h1 className="qr-title">Por favor, pasa tu código QR por el lector</h1>
      </div>

      {/* Área del escáner */}
      <div className="qr-scanner-area">
        <div className="qr-frame">
          <div className="qr-scanner-animation"></div>
          
          {/* ============================================ */}
          {/* ===== AQUÍ VA LA IMAGEN DEL LECTOR QR ===== */}
          {/* ============================================ */}
          <div className="qr-image-placeholder">
            {/* 
              INSTRUCCIÓN: Reemplaza este div con tu imagen del lector QR
              Puedes poner una imagen de cámara, un código QR de ejemplo, 
              o el ícono del escáner
              
              EJEMPLO CON IMAGEN:
              <img src="/images/qr-scanner.png" alt="Escáner QR" className="qr-image" />
              
              O CON BACKGROUND:
              <div className="qr-image" style={{ backgroundImage: 'url("/images/qr-scanner.jpg")' }}></div>
            */}
            <span className="qr-placeholder-icon">📷</span>
            <p className="qr-placeholder-text">Vista del escáner QR</p>
          </div>
        </div>

        {/* Pasos numerados */}
        <div className="qr-steps">
          <div className="step-item">
            <span className="step-number">1</span>
            <p className="step-text">¡Hola!</p>
          </div>
          
          <div className="step-item">
            <span className="step-number">2</span>
            <p className="step-text">¡Hola!</p>
          </div>
          
          <div className="step-item">
            <span className="step-number">3</span>
            <p className="step-text">¡Hola!</p>
          </div>
        </div>
      </div>

      {/* Botón de regresar */}
      <button className="qr-back-button" onClick={onBack}>
        <span className="back-arrow">←</span>
        REGRESAR
      </button>
    </div>
  );
};

export default QrScanner;