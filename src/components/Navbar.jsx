import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Show/hide navbar based on scroll direction
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      
      // Background change logic
      setIsScrolled(currentScrollY > 50);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setIsServicesOpen(false);
  };

  const toggleServices = () => {
    setIsServicesOpen(!isServicesOpen);
  };

  return (
    <>
      {/* Top accent bar */}
      <div 
        className="d-none d-lg-block" 
        style={{ 
          height: "3px", 
          background: "linear-gradient(90deg, #004C99 0%, #0066CC 50%, #004C99 100%)",
        }}
      />

      <nav 
        className={`navbar navbar-expand-lg navbar-dark position-fixed top-0 w-100 ${isVisible ? 'nav-visible' : 'nav-hidden'}`}
        style={{ 
          background: isScrolled ? "rgba(0, 76, 153, 0.35)" : "rgba(0, 76, 153, 0.25)",
          fontFamily: "'Quicksand', sans-serif",
          padding: "0.5rem 0",
          boxShadow: isScrolled ? "0 4px 30px rgba(0, 0, 0, 0.15)" : "none",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          borderBottom: "1px solid rgba(255, 255, 255, 0.2)",
          zIndex: 1030,
          transition: "transform 0.3s ease, background-color 0.3s ease, box-shadow 0.3s ease"
        }}
      >
        <div className="container">
          {/* Logo Section */}
          <Link 
            className="navbar-brand d-flex align-items-center fw-bold text-white" 
            to="/"
            onClick={closeMobileMenu}
          >
            <div className="me-3">
              <img 
                src="jplogo.jpg"  
                className="rounded" 
                alt="JP Alliance Logo"
                style={{ 
                  height: "40px",
                  width: "40px",
                  objectFit: "cover",
                }}
              />
            </div>
            <div className="d-none d-md-block">
              <div style={{ 
                fontSize: "1.1rem", 
                fontWeight: "700",
                textShadow: "0 1px 2px rgba(0,0,0,0.2)"
              }}>
                JP Alliance
              </div>
              <div className="small opacity-90" style={{ 
                fontSize: "0.75rem",
                textShadow: "0 1px 1px rgba(0,0,0,0.2)"
              }}>
                & Associates
              </div>
            </div>
          </Link>

          {/* Mobile Toggle Button */}
          <button
            className="navbar-toggler border-0 d-lg-none"
            type="button"
            onClick={toggleMobileMenu}
            aria-label="Toggle navigation"
            style={{ 
              padding: "0.25rem",
              width: "40px",
              height: "40px",
              background: "rgba(255,255,255,0.15)",
              borderRadius: "6px"
            }}
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Navigation Menu */}
          <div className={`collapse navbar-collapse ${isMobileMenuOpen ? 'show' : ''}`}>
            <ul className="navbar-nav ms-auto align-items-lg-center">
              <li className="nav-item">
                <Link 
                  className="nav-link text-white fw-semibold" 
                  to="/"
                  onClick={closeMobileMenu}
                  style={{
                    padding: "0.75rem 1rem",
                    textShadow: "0 1px 2px rgba(0,0,0,0.2)"
                  }}
                >
                  <i className="bi bi-house-door me-2"></i>
                  Home
                </Link>
              </li>

              {/* Services Dropdown */}
              <li className="nav-item dropdown">
                <button
                  className="nav-link dropdown-toggle text-white d-flex align-items-center justify-content-between border-0 bg-transparent w-100 fw-semibold"
                  onClick={toggleServices}
                  style={{
                    padding: "0.75rem 1rem",
                    cursor: "pointer",
                    textAlign: "left",
                    textShadow: "0 1px 2px rgba(0,0,0,0.2)"
                  }}
                >
                  <span>
                    <i className="bi bi-gear me-2"></i>
                    Services
                  </span>
                  <i className={`bi bi-chevron-${isServicesOpen ? 'up' : 'down'} ms-2 small`}></i>
                </button>
                
                <ul 
                  className={`dropdown-menu shadow border-0 ${isServicesOpen ? 'show' : ''}`}
                  style={{
                    background: "rgba(255, 255, 255, 0.95)",
                    backdropFilter: "blur(10px)",
                    WebkitBackdropFilter: "blur(10px)",
                    borderRadius: "8px",
                    minWidth: "240px",
                    boxShadow: "0 12px 32px rgba(0,0,0,0.15)",
                    border: "1px solid rgba(255,255,255,0.3)"
                  }}
                >
                  <li className="dropdown-header text-dark fw-bold mb-2 px-3 py-2 small border-bottom">
                    <i className="bi bi-stars me-2 text-primary"></i>Our Professional Services
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
                        className="dropdown-item text-dark fw-medium py-2 px-3" 
                        to={service.to}
                        onClick={closeMobileMenu}
                        style={{
                          fontSize: "0.9rem",
                          borderLeft: "3px solid transparent",
                          transition: "all 0.2s ease"
                        }}
                      >
                        <i className={`bi ${service.icon} me-2 text-primary`}></i>
                        {service.text}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>

              {/* Other Navigation Items */}
              {[
                { to: "/team", icon: "bi-people-fill", text: "Our Team" },
                { to: "/news", icon: "bi-newspaper", text: "News & Events" },
                { to: "/careers", icon: "bi-briefcase", text: "Careers" }
              ].map((item, index) => (
                <li className="nav-item" key={index}>
                  <Link 
                    className="nav-link text-white fw-semibold" 
                    to={item.to}
                    onClick={closeMobileMenu}
                    style={{
                      padding: "0.75rem 1rem",
                      textShadow: "0 1px 2px rgba(0,0,0,0.2)"
                    }}
                  >
                    <i className={`bi ${item.icon} me-2`}></i>
                    {item.text}
                  </Link>
                </li>
              ))}

              {/* CTA Button - Enhanced Visibility */}
              <li className="nav-item ms-lg-2 mt-2 mt-lg-0">
                <Link 
                  className="btn btn-light px-4 py-2 rounded-pill fw-bold d-flex align-items-center justify-content-center" 
                  to="/contact"
                  onClick={closeMobileMenu}
                  style={{
                    background: "linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)",
                    border: "2px solid rgba(255,255,255,0.8)",
                    color: "#004C99",
                    minWidth: "130px",
                    fontSize: "0.9rem",
                    margin: "0.5rem 1rem",
                    boxShadow: "0 4px 15px rgba(0, 76, 153, 0.2)",
                    textShadow: "none"
                  }}
                >
                  <i className="bi bi-telephone me-2"></i>
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Spacer to prevent content from being hidden behind fixed navbar */}
      <div style={{ height: "80px" }} />

      {/* CSS Styles */}
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@400;500;600;700&display=swap');
          
          .navbar {
            transition: transform 0.3s ease, background-color 0.3s ease, box-shadow 0.3s ease;
          }
          
          .nav-visible {
            transform: translateY(0);
          }
          
          .nav-hidden {
            transform: translateY(-100%);
          }
          
          .nav-link {
            transition: all 0.2s ease;
            border-radius: 6px;
            margin: 0.1rem 0;
          }
          
          .nav-link:hover {
            background: rgba(255, 255, 255, 0.15) !important;
            transform: translateY(-1px);
          }
          
          .dropdown-item {
            transition: all 0.2s ease;
            border-left: 3px solid transparent !important;
            border-radius: 4px;
            margin: 0.1rem 0.25rem;
          }
          
          .dropdown-item:hover {
            background: linear-gradient(135deg, #004C99 0%, #0066CC 100%) !important;
            color: white !important;
            border-left-color: #004C99 !important;
            transform: translateX(4px);
          }
          
          .dropdown-item:hover i {
            color: white !important;
          }
          
          .btn-light {
            transition: all 0.3s ease !important;
          }
          
          .btn-light:hover {
            background: linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%) !important;
            transform: translateY(-2px);
            box-shadow: 0 6px 20px rgba(0, 76, 153, 0.3) !important;
            border-color: white !important;
          }
          
          /* Desktop dropdown styles */
          @media (min-width: 992px) {
            .nav-item.dropdown:hover .dropdown-menu {
              display: block;
              animation: fadeIn 0.2s ease;
            }
          }
          
          /* Mobile menu styles with enhanced glass effect */
          @media (max-width: 991.98px) {
            .navbar-collapse {
              background: rgba(255, 255, 255, 0.95) !important;
              backdrop-filter: blur(15px) !important;
              -webkit-backdrop-filter: blur(15px) !important;
              border-radius: 12px;
              box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
              border: 1px solid rgba(255, 255, 255, 0.3);
              margin: 1rem -1rem -0.5rem -1rem;
              padding: 1rem;
            }
            
            .nav-link {
              color: #004C99 !important;
              border-bottom: 1px solid rgba(0, 76, 153, 0.1);
              margin: 0.25rem 0;
              padding: 0.75rem 1rem !important;
              text-shadow: none !important;
              font-weight: 600 !important;
            }
            
            .nav-link:last-child {
              border-bottom: none;
            }
            
            .nav-link:hover {
              background: rgba(0, 76, 153, 0.1) !important;
              color: #002d66 !important;
            }
            
            .dropdown-menu {
              background: rgba(255, 255, 255, 0.95) !important;
              backdrop-filter: blur(10px) !important;
              -webkit-backdrop-filter: blur(10px) !important;
              border: 1px solid rgba(255,255,255,0.3);
              box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
              position: static !important;
              transform: none !important;
              margin: 0.5rem 0;
              border-radius: 8px;
              padding: 0.5rem;
            }
            
            .btn-light {
              background: linear-gradient(135deg, #004C99 0%, #0066CC 100%) !important;
              color: white !important;
              margin: 1rem 0 0.5rem 0 !important;
              border: 2px solid #004C99 !important;
              min-width: 150px !important;
              padding: 0.75rem 1.5rem !important;
              font-weight: 700 !important;
              box-shadow: 0 4px 15px rgba(0, 76, 153, 0.3) !important;
            }
            
            .btn-light:hover {
              background: linear-gradient(135deg, #0066CC 0%, #004C99 100%) !important;
              border-color: #0066CC !important;
              transform: translateY(-2px);
              box-shadow: 0 6px 20px rgba(0, 76, 153, 0.4) !important;
            }
            
            .navbar-toggler {
              background: rgba(255, 255, 255, 0.15) !important;
              transition: background-color 0.2s ease;
            }
            
            .navbar-toggler:hover {
              background: rgba(255, 255, 255, 0.25) !important;
            }
          }

          /* Animation for dropdown */
          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: translateY(-5px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          /* Square logo styling */
          .rounded {
            border-radius: 6px !important;
          }
          
          /* Improved dropdown toggle */
          .dropdown-toggle::after {
            display: none !important;
          }

          /* Enhanced text readability */
          .navbar-brand,
          .nav-link,
          .dropdown-toggle {
            text-shadow: 0 1px 2px rgba(0,0,0,0.2) !important;
          }

          .dropdown-header {
            text-shadow: none !important;
          }
        `}
      </style>
    </>
  );
}

export default Navbar;