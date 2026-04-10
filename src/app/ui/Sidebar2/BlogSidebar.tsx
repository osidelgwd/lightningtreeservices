import Link from 'next/link';

export default function BlogSidebar() {
  // Definimos el estilo del color para no tener que repetirlo
  const brandBg = { backgroundColor: '#374836' };
  const brandLightBg = { backgroundColor: 'rgba(55, 72, 54, 0.1)' }; // Versión suave para iconos
  const brandTextColor = { color: '#374836' };

  return (
    <div className="cs_sidebar_ads">
      
      {/* 1. Banner Publicitario - CTA con tu color de marca */}
      <div className="card border-0 rounded-4 text-white p-4 mb-4 shadow-sm overflow-hidden position-relative" style={brandBg}>
        <div className="card-body p-0 position-relative" style={{ zIndex: 2 }}>
          <h3 className="h4 fw-bold mb-3 text-white">Is your tree ready for storm season?</h3>
          <p className="small mb-4 opacity-75 text-white">Expert tree removal and pruning services. Licensed & Insured.</p>
          <Link href="/contact" className="btn btn-light w-100 fw-bold py-2 shadow-sm" style={brandTextColor}>
            GET FREE ESTIMATE
          </Link>
        </div>
        {/* Adorno visual: Icono de árbol de Bootstrap */}
        <div className="position-absolute bottom-0 end-0 p-3 opacity-25">
          <i className="bi bi-tree-fill display-1 text-white"></i>
        </div>
      </div>

      {/* 2. Widget de Contacto */}
      <div className="card border rounded-4 p-4 mb-4 bg-white shadow-sm">
        <h4 className="h5 fw-bold mb-4 border-bottom pb-2" style={brandTextColor}>Direct Contact</h4>
        
        <div className="d-flex align-items-center mb-3">
          <div className="flex-shrink-0 rounded-circle p-2 px-3" style={brandLightBg}>
            <i className="bi bi-telephone-fill" style={brandTextColor}></i>
          </div>
          <div className="ms-3">
            <small className="text-muted d-block">Call Us</small>
            <a href="tel:+13609807886" className="text-decoration-none text-dark fw-bold">(360) 980-7886</a><br />
            <a href="tel:+13609044243" className="text-decoration-none text-dark fw-bold">(360) 904-4243</a>
          </div>
        </div>

        <div className="d-flex align-items-center mb-3">
          <div className="flex-shrink-0 rounded-circle p-2 px-3" style={brandLightBg}>
            <i className="bi bi-envelope-at-fill" style={brandTextColor}></i>
          </div>
          <div className="ms-3">
            <small className="text-muted d-block">Email</small>
            <a href="mailto:lightningtreeservice@outlook.com" className="text-decoration-none text-dark fw-bold">LightningTreeService@outlook.com</a>
          </div>
        </div>

        <div className="d-flex align-items-center">
          <div className="flex-shrink-0 rounded-circle p-2 px-3" style={brandLightBg}>
            <i className="bi bi-geo-alt-fill" style={brandTextColor}></i>
          </div>
          <div className="ms-3">
            <small className="text-muted d-block">Location</small>
            <span className="fw-bold">Vancouver, WA & Surrounding Areas</span>
          </div>
        </div>
      </div>

      {/* 3. Horario de Atención */}
      <div className="card border rounded-4 p-4 bg-light shadow-sm">
        <h4 className="h5 fw-bold mb-3" style={brandTextColor}>
          <i className="bi bi-clock-history me-2"></i> Working Hours
        </h4>
        <div className="d-flex justify-content-between mb-2 small">
          <span>Mon - Fri:</span>
          <span className="fw-bold">8:00 AM - 6:00 PM</span>
        </div>
        <div className="d-flex justify-content-between small text-danger fw-bold">
          <span>Emergency:</span>
          <span>24/7 Available</span>
        </div>
      </div>

    </div>
  );
}