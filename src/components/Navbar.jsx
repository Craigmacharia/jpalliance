import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Top accent bar */}
      <div 
        className="d-none d-lg-block" 
        style={{ 
          height: "4px", 
          background: "linear-gradient(90deg, #FFD700 0%, #FFA500 25%, #FF6B6B 50%, #4ECDC4 75%, #45B7D1 100%)",
          boxShadow: "0 2px 8px rgba(0,0,0,0.15)"
        }}
      />

      <nav 
        className={`navbar navbar-expand-lg navbar-dark position-sticky top-0 transition-all`}
        style={{ 
          background: isScrolled 
            ? "linear-gradient(135deg, rgba(0, 76, 153, 0.98) 0%, rgba(0, 50, 100, 0.95) 100%)" 
            : "linear-gradient(135deg, #004C99 0%, #0066CC 100%)",
          fontFamily: "'Quicksand', sans-serif",
          fontWeight: "500",
          padding: isScrolled ? "0.2rem 0" : "0.5rem 0",
          boxShadow: isScrolled 
            ? "0 4px 20px rgba(0,0,0,0.15)" 
            : "0 2px 15px rgba(0,0,0,0.1)",
          backdropFilter: isScrolled ? "blur(10px)" : "none",
          transition: "all 0.3s ease"
        }}
      >
        <div className="container">
          {/* Logo Section */}
          <Link 
            className="navbar-brand d-flex align-items-center fw-bold text-white position-relative z-index-1" 
            to="/"
            style={{
              fontFamily: "'Quicksand', sans-serif",
              fontWeight: "700",
              fontSize: isScrolled ? "1rem" : "1.2rem",
              transition: "all 0.3s ease"
            }}
          >
            <div className="position-relative me-3">
              <img 
                src="jplogo.jpg"  
                className="rounded-circle shadow-sm" 
                style={{ 
                  height: isScrolled ? "30px" : "38px",
                  width: isScrolled ? "30px" : "38px",
                  objectFit: "cover",
                  border: "2px solid rgba(255,255,255,0.2)",
                  transition: "all 0.3s ease"
                }}
              />
              {/* Logo glow effect */}
              <div 
                className="position-absolute top-50 start-50 translate-middle rounded-circle"
                style={{
                  width: isScrolled ? "40px" : "48px",
                  height: isScrolled ? "40px" : "48px",
                  background: "radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%)",
                  zIndex: -1,
                  transition: "all 0.3s ease"
                }}
              />
            </div>
            <div className="d-none d-md-block">
              <div className="fw-bold">JP Alliance</div>
              <div className="small opacity-75" style={{ fontSize: "0.7rem" }}>& Associates</div>
            </div>
          </Link>

          {/* Mobile Toggle Button */}
          <button
            className="navbar-toggler border-0 position-relative z-index-1 d-lg-none"
            type="button"
            onClick={toggleMobileMenu}
            style={{ 
              padding: "0.25rem",
              borderRadius: "4px",
              background: "rgba(255,255,255,0.1)",
              backdropFilter: "blur(10px)"
            }}
          >
            <div className={`hamburger ${isMobileMenuOpen ? 'open' : ''}`}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </button>

          {/* Navigation Menu */}
          <div className={`collapse navbar-collapse ${isMobileMenuOpen ? 'show' : ''}`}>
            <ul className="navbar-nav ms-auto align-items-lg-center">
              <li className="nav-item">
                <Link 
                  className="nav-link text-white" 
                  to="/"
                  onClick={closeMobileMenu}
                  style={{
                    padding: "0.5rem 1rem",
                    fontWeight: "600",
                    borderRadius: "6px",
                    margin: "0.1rem"
                  }}
                >
                  <i className="bi bi-house-door me-2"></i>
                  Home
                </Link>
              </li>

              {/* Services Dropdown */}
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle text-white d-flex align-items-center"
                  to="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  style={{
                    padding: "0.5rem 1rem",
                    fontWeight: "600",
                    borderRadius: "6px",
                    margin: "0.1rem"
                  }}
                >
                  <i className="bi bi-gear me-2"></i>
                  Services
                </Link>
                
                <ul 
                  className="dropdown-menu shadow-lg border-0" 
                  style={{
                    background: "linear-gradient(135deg, rgba(0, 76, 153, 0.98) 0%, rgba(0, 50, 100, 0.95) 100%)",
                    borderRadius: "12px",
                    padding: "0.5rem",
                    minWidth: "250px",
                    border: "1px solid rgba(255,255,255,0.1)"
                  }}
                >
                  <li className="dropdown-header text-white-50 fw-bold mb-2 px-3 py-2">
                    <i className="bi bi-stars me-2"></i>Our Services
                  </li>
                  
                  {[
                    { to: "/services/tax", icon: "bi-calculator", text: "Tax Services" },
                    { to: "/services/external-audit", icon: "bi-file-earmark-check", text: "External Audit" },
                    { to: "/services/internal-audit", icon: "bi-shield-check", text: "Internal Audit" },
                    { to: "/services/payroll", icon: "bi-people", text: "Payroll Services" },
                    { to: "/services/business-advisory", icon: "bi-graph-up", text: "Business Advisory" },
                    { to: "/services/forensic-audit", icon: "bi-search", text: "Forensic Audit" }
                  ].map((service, index) => (
                    <li key={index}>
                      <Link 
                        className="dropdown-item text-white py-2 px-3 rounded" 
                        to={service.to}
                        onClick={closeMobileMenu}
                        style={{
                          transition: "all 0.2s ease"
                        }}
                      >
                        <i className={`bi ${service.icon} me-2`}></i>
                        {service.text}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>

              {/* Other Navigation Items */}
              {[
                { to: "/team", icon: "bi-people-fill", text: "Team" },
                { to: "/news", icon: "bi-newspaper", text: "News & Events" },
                { to: "/careers", icon: "bi-briefcase", text: "Careers" }
              ].map((item, index) => (
                <li className="nav-item" key={index}>
                  <Link 
                    className="nav-link text-white" 
                    to={item.to}
                    onClick={closeMobileMenu}
                    style={{
                      padding: "0.5rem 1rem",
                      fontWeight: "600",
                      borderRadius: "6px",
                      margin: "0.1rem"
                    }}
                  >
                    <i className={`bi ${item.icon} me-2`}></i>
                    {item.text}
                  </Link>
                </li>
              ))}

              {/* CTA Button */}
              <li className="nav-item ms-lg-2">
                <Link 
                  className="btn btn-warning px-3 py-2 rounded-pill fw-semibold" 
                  to="/contact"
                  onClick={closeMobileMenu}
                  style={{
                    background: "linear-gradient(135deg, #FFD700 0%, #FFA500 100%)",
                    border: "none",
                    color: "#004C99",
                    minWidth: "120px"
                  }}
                >
                  <i className="bi bi-telephone me-1"></i>
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* CSS Styles */}
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@400;500;600;700&display=swap');
          
          .navbar {
            z-index: 1030;
          }
          
          .nav-link {
            transition: all 0.2s ease;
          }
          
          .nav-link:hover {
            background: rgba(255, 255, 255, 0.15) !important;
          }
          
          .dropdown-item:hover {
            background: rgba(255, 255, 255, 0.1) !important;
          }
          
          .btn-warning:hover {
            transform: translateY(-2px);
            box-shadow: 0 4px 8px rgba(255, 215, 0, 0.3);
          }
          
          /* Mobile menu styles */
          @media (max-width: 991.98px) {
            .navbar-collapse {
              background: linear-gradient(135deg, rgba(0, 76, 153, 0.98) 0%, rgba(0, 50, 100, 0.95) 100%);
              backdrop-filter: blur(10px);
              border-radius: 0 0 12px 12px;
              padding: 1rem;
              margin-top: 0.5rem;
              border-top: 1px solid rgba(255,255,255,0.1);
            }
            
            .dropdown-menu {
              background: rgba(0, 50, 100, 0.9) !important;
              margin: 0.5rem 0;
              border: 1px solid rgba(255,255,255,0.1);
            }
          }

          /* Custom Hamburger Animation */
          .hamburger {
            width: 20px;
            height: 16px;
            position: relative;
            cursor: pointer;
          }
          
          .hamburger span {
            display: block;
            position: absolute;
            height: 2px;
            width: 100%;
            background: white;
            border-radius: 1px;
            transition: all 0.3s ease;
          }
          
          .hamburger span:nth-child(1) {
            top: 0px;
          }
          
          .hamburger span:nth-child(2) {
            top: 7px;
          }
          
          .hamburger span:nth-child(3) {
            top: 14px;
          }
          
          .hamburger.open span:nth-child(1) {
            transform: rotate(45deg);
            top: 7px;
          }
          
          .hamburger.open span:nth-child(2) {
            opacity: 0;
          }
          
          .hamburger.open span:nth-child(3) {
            transform: rotate(-45deg);
            top: 7px;
          }
        `}
      </style>
    </>
  );
}

export default Navbar;