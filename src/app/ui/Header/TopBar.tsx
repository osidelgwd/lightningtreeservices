import React from 'react';

const TopBar = () => {
  const brandGreen = '#374836';

  return (
    <div className="cs_top_bar" style={{ 
      backgroundColor: brandGreen, 
      color: 'white', 
      position: 'absolute', // Cambiado a absolute para que el header baje
      top: 0,
      left: 0,
      width: '100%',
      zIndex: 1001,         // Por encima del header (999)
      height: '48px',       // Altura aumentada para mejor padding visual
      display: 'flex',
      alignItems: 'center',
      fontSize: '14px'
    }}>
      <div className="container">
        {/* Usamos px-2 o px-md-0 para asegurar que en móviles no toque el borde */}
        <div className="d-flex justify-content-between align-items-center flex-wrap px-2 px-md-0">
          
          {/* Lado Izquierdo: Ubicación / Horario */}
          <div className="cs_top_header_left d-none d-md-flex gap-4">
            <div className="d-flex align-items-center gap-2">
              <i className="bi bi-geo-alt-fill" style={{ color: '#ffffffb3' }}></i>
              <span>Vancouver, WA & Surrounding Areas</span>
            </div>
            <div className="d-flex align-items-center gap-2">
              <i className="bi bi-clock-fill" style={{ color: '#ffffffb3' }}></i>
              <span>Mon - Sat: 7:00 AM - 6:00 PM</span>
            </div>
          </div>

          {/* Lado Derecho: Teléfono y Redes */}
          <div className="cs_top_header_right d-flex align-items-center justify-content-between w-100 w-md-auto gap-4">
            <a 
              href="tel:+13609807886" 
              className="text-white text-decoration-none d-flex align-items-center gap-2 hover-opacity"
              style={{ transition: 'opacity 0.2s' }}
            >
              <i className="bi bi-telephone-fill"></i>
              <span>Call Us: <strong>(360) 980-7886</strong></span>
            </a>
            
           <div className="cs_social_links d-flex gap-3 border-start ps-4" style={{ borderColor: '#ffffff26' }}>
            <a 
              href="https://www.facebook.com/LightningTreeServiceLLC" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-white text-decoration-none"
            >
              <i className="bi bi-facebook"></i>
            </a>
            {/* <a 
              href="https://instagram.com/TU_PERFIL" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-white text-decoration-none"
            >
              <i className="bi bi-instagram"></i>
            </a>*/}
                         <a 
                href="https://wa.me/13609807886" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-white text-decoration-none"
              >
                <i className="bi bi-whatsapp"></i>
              </a>
          </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default TopBar;