import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
        className="navbar navbar-expand-lg navbar-dark position-sticky top-0"
        style={{ 
          background: isScrolled ? "rgba(0, 76, 153, 0.98)" : "#004C99",
          fontFamily: "'Segoe UI', sans-serif",
          padding: "0.5rem 0",
          boxShadow: isScrolled ? "0 2px 10px rgba(0,0,0,0.1)" : "none",
          backdropFilter: isScrolled ? "blur(10px)" : "none",
          zIndex: 1030
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
              <div style={{ fontSize: "1.1rem", fontWeight: "600" }}>JP Alliance</div>
              <div className="small opacity-85" style={{ fontSize: "0.75rem" }}>& Associates</div>
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
              height: "40px"
            }}
          >
            <span className="navbar-toggler-icon"></span>
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
                    fontWeight: "500",
                  }}
                >
                  <i className="bi bi-house-door me-2"></i>
                  Home
                </Link>
              </li>

              {/* Services Dropdown */}
              <li className="nav-item dropdown">
                <button
                  className="nav-link dropdown-toggle text-white d-flex align-items-center border-0 bg-transparent"
                  onClick={toggleServices}
                  style={{
                    padding: "0.5rem 1rem",
                    fontWeight: "500",
                    cursor: "pointer",
                    width: "100%",
                    textAlign: "left"
                  }}
                >
                  <i className="bi bi-gear me-2"></i>
                  Services
                </button>
                
                <ul 
                  className={`dropdown-menu shadow border-0 ${isServicesOpen ? 'show' : ''}`}
                  style={{
                    background: "white",
                    borderRadius: "8px",
                    minWidth: "220px",
                  }}
                >
                  <li className="dropdown-header text-muted fw-bold mb-2 px-3 py-2 small">
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
                        className="dropdown-item text-dark py-2 px-3" 
                        to={service.to}
                        onClick={closeMobileMenu}
                        style={{
                          fontSize: "0.9rem",
                          borderLeft: "3px solid transparent"
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
                      fontWeight: "500",
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
                  className="btn btn-light px-3 py-2 rounded-1 fw-semibold" 
                  to="/contact"
                  onClick={closeMobileMenu}
                  style={{
                    background: "white",
                    border: "none",
                    color: "#004C99",
                    minWidth: "100px",
                    fontSize: "0.9rem"
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
          .navbar {
            transition: background-color 0.3s ease;
          }
          
          .nav-link {
            transition: none;
          }
          
          .nav-link:hover {
            background: rgba(255, 255, 255, 0.1);
          }
          
          .dropdown-item {
            transition: none;
            border-left: 3px solid transparent !important;
          }
          
          .dropdown-item:hover {
            background: #f8f9fa !important;
            color: #004C99 !important;
            border-left-color: #004C99 !important;
          }
          
          .btn-light:hover {
            background: #f8f9fa !important;
          }
          
          /* Desktop dropdown styles */
          @media (min-width: 992px) {
            .nav-item.dropdown:hover .dropdown-menu {
              display: block;
            }
          }
          
          /* Mobile menu styles */
          @media (max-width: 991.98px) {
            .navbar-collapse {
              background: white;
              margin-top: 1rem;
              border-radius: 8px;
              box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
            }
            
            .nav-link {
              color: #333 !important;
              border-bottom: 1px solid #f8f9fa;
            }
            
            .nav-link:hover {
              background: #f8f9fa !important;
              color: #004C99 !important;
            }
            
            .dropdown-menu {
              background: #f8f9fa !important;
              border: none;
              box-shadow: none;
              position: static !important;
              transform: none !important;
              margin: 0.5rem 0;
            }
            
            .dropdown-menu.show {
              display: block !important;
            }
            
            .btn-light {
              background: #004C99 !important;
              color: white !important;
              margin-top: 0.5rem;
            }
            
            .btn-light:hover {
              background: #0066CC !important;
            }
          }

          /* Remove all complex animations */
          .navbar-toggler {
            transition: none;
          }

          .dropdown-menu {
            animation: none;
          }

          /* Square logo styling */
          .rounded {
            border-radius: 6px !important;
          }
        `}
      </style>
    </>
  );
}

export default Navbar;