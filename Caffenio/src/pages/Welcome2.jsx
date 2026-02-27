import React, { useState } from 'react';
import './welcome2.css';
import QrScanner from './qr-scanner'; // Importamos la nueva pantalla

const Welcome2 = () => {
  const [currentScreen, setCurrentScreen] = useState('welcome'); // 'welcome' o 'qr'

  const handleOptionClick = (option) => {
    if (option === 'login') {
      console.log('Opción seleccionada: Identificarte con la app');
      // Si la opción de identificación lleva al QR
      setCurrentScreen('qr');
      // O si lleva a otra pantalla, cambia esto
    } else {
      console.log('Opción seleccionada: Realiza tu pedido como invitado');
      // Aquí va la lógica para continuar como invitado
      // Ejemplo: navigate('/guest-order');
    }
  };

  // Si estamos en la pantalla del QR, mostramos el escáner
  if (currentScreen === 'qr') {
    return <QrScanner onBack={() => setCurrentScreen('welcome')} />;
  }

  // Si no, mostramos la pantalla de bienvenida
  return (
    <div className="container">
      <h1>¡Bienvenido a CAFFENIO!</h1>
      
      <div className="options-container">
        {/* Opción 1: Identificarte con la app */}
        <div 
          className="option-card" 
          onClick={() => handleOptionClick('login')}
          role="button"
          tabIndex={0}
          aria-label="Identificarte con la app"
          onKeyPress={(e) => e.key === 'Enter' && handleOptionClick('login')}
        >
          {/* ============================================ */}
          {/* ===== PEGA AQUÍ TU PRIMERA IMAGEN ========= */}
          {/* ============================================ */}
          <div 
            className="option-image"
            style={{ 
              backgroundImage: 'url()' /* ← PEGA AQUÍ LA URL DE TU PRIMERA IMAGEN */
            }}
          />
          <h2 className="option-label">Identificarte con la app</h2>
          <p className="option-description">
            Accede a tu cuenta para disfrutar de beneficios exclusivos, 
            guardar tus pedidos favoritos y acumular puntos.
          </p>
        </div>

        {/* Opción 2: Realiza tu pedido como invitado */}
        <div 
          className="option-card" 
          onClick={() => handleOptionClick('guest')}
          role="button"
          tabIndex={0}
          aria-label="Realiza tu pedido como invitado"
          onKeyPress={(e) => e.key === 'Enter' && handleOptionClick('guest')}
        >
          {/* ============================================ */}
          {/* ===== PEGA AQUÍ TU SEGUNDA IMAGEN ========= */}
          {/* ============================================ */}
          <div 
            className="option-image"
            style={{ 
              backgroundImage: 'url()' /* ← PEGA AQUÍ LA URL DE TU SEGUNDA IMAGEN */
            }}
          />
          <h2 className="option-label">Realiza tu pedido como invitado</h2>
          <p className="option-description">
            Continúa sin registro, realiza tu pedido de forma rápida 
            y descubre nuestro delicioso café.
          </p>
        </div>
      </div>

      {/* Decoración opcional */}
      <div className="coffee-decoration">
        <span className="coffee-icon">☕</span>
        <span className="coffee-icon">☕</span>
        <span className="coffee-icon">☕</span>
      </div>
    </div>
  );
};

export default Welcome2;