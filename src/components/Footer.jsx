import React from "react";
import { Link } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";

function Footer() {
  return (
    <>
      {/* Top accent bar */}
      <div 
        style={{ 
          height: "4px", 
          background: "linear-gradient(90deg, #45B7D1 100%)",
          boxShadow: "0 -2px 8px rgba(0,0,0,0.15)"
        }}
      />

      <footer 
        className="text-white position-relative overflow-hidden" 
        style={{ 
          background: "linear-gradient(180deg, #004C99 0%, #003366 50%, #001a33 100%)",
          fontFamily: "'Quicksand', sans-serif"
        }}
      >
        {/* Background decorative elements */}
        <div 
          className="position-absolute top-0 start-0 w-100 h-100 opacity-5"
          style={{
            background: "radial-gradient(circle at 20% 80%, rgba(255,255,255,0.1) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(255,255,255,0.05) 0%, transparent 50%)",
            pointerEvents: "none"
          }}
        />

        <div className="container position-relative z-index-1">
          <div className="row py-5">
            {/* Company Info */}
            <div className="col-lg-4 col-md-6 mb-5">
              <div className="d-flex align-items-center mb-4">
                <img 
                  src="jplogo.jpg"  
                  className="rounded-circle me-3" 
                  style={{ 
                    height: "50px", 
                    width: "50px",
                    objectFit: "cover",
                    border: "2px solid rgba(255,255,255,0.2)"
                  }}
                />
                <div>
                  <h4 className="fw-bold mb-1" style={{ fontSize: "1.4rem", color: "white" }}>
                    JP Alliance
                  </h4>
                  <p className="mb-0 opacity-75" style={{ fontSize: "0.9rem" }}>& Associates</p>
                </div>
              </div>
              
              <p style={{ lineHeight: "1.7", fontSize: "0.95rem", opacity: "0.9" }}>
                Delivering excellence in auditing, tax, and business advisory 
                with integrity and professional expertise.
              </p>
              
              <div className="mt-4">
                <a 
                  href="https://wa.me/254755453975" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn btn-success btn-sm rounded-pill me-3 mb-2 footer-btn"
                  style={{
                    fontFamily: "'Quicksand', sans-serif",
                    fontWeight: "600",
                    padding: "0.5rem 1.2rem",
                    transition: "all 0.3s ease",
                    boxShadow: "0 4px 15px rgba(40, 167, 69, 0.3)"
                  }}
                >
                  <i className="bi bi-whatsapp me-2"></i> WhatsApp
                </a>
                <a 
                  href="tel:+254755453975" 
                  className="btn btn-outline-light btn-sm rounded-pill mb-2 footer-btn"
                  style={{
                    fontFamily: "'Quicksand', sans-serif",
                    fontWeight: "600",
                    padding: "0.5rem 1.2rem",
                    transition: "all 0.3s ease",
                    borderColor: "rgba(255,255,255,0.3)"
                  }}
                >
                  <i className="bi bi-telephone me-2"></i> Call Now
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="col-lg-2 col-md-6 mb-5">
              <h5 className="fw-bold mb-4 text-white" style={{ fontSize: "1.1rem" }}>
                <i className="bi bi-link-45deg me-2"></i>Quick Links
              </h5>
              <ul className="list-unstyled">
                {[
                  { to: "/", text: "Home", icon: "bi-house" },
                  { to: "/team", text: "Team", icon: "bi-people" },
                  { to: "/careers", text: "Careers", icon: "bi-briefcase" },
                  { to: "/contact", text: "Contact", icon: "bi-envelope" },
                  { to: "/services", text: "Services", icon: "bi-gear" }
                ].map((link, index) => (
                  <li key={index} className="mb-3">
                    <Link 
                      className="text-white text-decoration-none footer-link d-flex align-items-center" 
                      to={link.to}
                      style={{ 
                        transition: "all 0.3s ease",
                        fontSize: "0.95rem",
                        opacity: "0.9"
                      }}
                    >
                      <i className={`bi ${link.icon} me-2 text-white`} style={{ fontSize: "0.8rem" }}></i>
                      {link.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div className="col-lg-3 col-md-6 mb-5">
              <h5 className="fw-bold mb-4 text-white" style={{ fontSize: "1.1rem" }}>
                <i className="bi bi-stars me-2"></i>Our Services
              </h5>
              <ul className="list-unstyled">
                {[
                  { to: "/tax", text: "Tax Services", icon: "bi-calculator" },
                  { to: "/payroll", text: "Payroll", icon: "bi-people" },
                  { to: "/external-audit", text: "General Audit", icon: "bi-file-earmark-check" },
                  { to: "/business-advisory", text: "Business Advisory", icon: "bi-graph-up" },
                  { to: "/forensic-audit", text: "Forensic Audit", icon: "bi-search" }
                ].map((service, index) => (
                  <li key={index} className="mb-3">
                    <Link 
                      className="text-white text-decoration-none footer-link d-flex align-items-center" 
                      to={service.to}
                      style={{ 
                        transition: "all 0.3s ease",
                        fontSize: "0.95rem",
                        opacity: "0.9"
                      }}
                    >
                      <i className={`bi ${service.icon} me-2 text-white`} style={{ fontSize: "0.8rem" }}></i>
                      {service.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="col-lg-3 col-md-6 mb-5">
              <h5 className="fw-bold mb-4 text-white" style={{ fontSize: "1.1rem" }}>
                <i className="bi bi-geo-alt me-2"></i>Contact Us
              </h5>
              
              <div className="mb-4">
                <a 
                  href="mailto:cmacharia482@gmail.com" 
                  className="text-white text-decoration-none footer-link d-flex align-items-center mb-3"
                  style={{ 
                    transition: "all 0.3s ease",
                    fontSize: "0.95rem",
                    opacity: "0.9"
                  }}
                >
                  <i className="bi bi-envelope-fill me-3 text-white"></i> 
                  <span>info@jpalliance.com</span>
                </a>
                <a 
                  href="tel:+254755453975" 
                  className="text-white text-decoration-none footer-link d-flex align-items-center mb-3"
                  style={{ 
                    transition: "all 0.3s ease",
                    fontSize: "0.95rem",
                    opacity: "0.9"
                  }}
                >
                  <i className="bi bi-telephone-fill me-3 text-white"></i> 
                  <span>+254 755 453 975</span>
                </a>
                <div className="d-flex align-items-center mb-3">
                  <i className="bi bi-geo-alt-fill me-3 text-white"></i> 
                  <span style={{ fontSize: "0.95rem", opacity: "0.9" }}>Nairobi, Kenya</span>
                </div>
              </div>
              
              {/* Social Icons */}
              <div>
                <h6 className="fw-bold mb-3 text-white" style={{ fontSize: "1rem" }}>
                  <i className="bi bi-share me-2"></i>Follow Us
                </h6>
                <div className="d-flex gap-3">
                  {[
                    { href: "https://www.linkedin.com/in/cpa-josphat-mwangi-ba60b435/?originalSubdomain=ke", icon: "bi-linkedin", color: "#0077B5" },
                    { href: "#", icon: "bi-facebook", color: "#1877F2" },
                    { href: "#", icon: "bi-twitter-x", color: "#000000" },
                    { href: "#", icon: "bi-instagram", color: "#E4405F" }
                  ].map((social, index) => (
                    <a 
                      key={index}
                      href={social.href} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="social-icon d-flex align-items-center justify-content-center"
                      style={{ 
                        width: "40px",
                        height: "40px",
                        borderRadius: "50%",
                        background: "rgba(255,255,255,0.1)",
                        border: "1px solid rgba(255,255,255,0.2)",
                        transition: "all 0.3s ease",
                        textDecoration: "none"
                      }}
                    >
                      <i 
                        className={`bi ${social.icon} text-white`} 
                        style={{ fontSize: "1.1rem" }}
                      ></i>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-top border-light border-opacity-25 pt-4">
            <div className="row align-items-center">
              <div className="col-md-6 mb-3 mb-md-0">
                <p className="mb-0 opacity-75" style={{ fontSize: "0.9rem" }}>
                  &copy; {new Date().getFullYear()} JP Alliance & Associates. All Rights Reserved.
                </p>
              </div>
              <div className="col-md-6 text-md-end">
                <div className="d-flex gap-4 justify-content-md-end">
                  <Link to="/privacy" className="text-white text-decoration-none footer-link opacity-75" style={{ fontSize: "0.85rem" }}>
                    Privacy Policy
                  </Link>
                  <Link to="/terms" className="text-white text-decoration-none footer-link opacity-75" style={{ fontSize: "0.85rem" }}>
                    Terms of Service
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      

      {/* CSS Styles */}
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@400;500;600;700&display=swap');
          
          .z-index-1 {
            z-index: 1;
          }
          
          /* Footer Button Hover Effects */
          .footer-btn:hover {
            transform: translateY(-3px);
            box-shadow: 0 8px 25px rgba(0,0,0,0.2) !important;
          }
          
          .btn-success:hover {
            background-color: #28a745 !important;
            border-color: #28a745 !important;
          }
          
          .btn-outline-light:hover {
            background-color: rgba(255,255,255,0.1) !important;
            border-color: rgba(255,255,255,0.5) !important;
          }
          
          /* Footer Link Hover Effects */
          .footer-link:hover {
            color: #FFD700 !important;
            opacity: 1 !important;
            transform: translateX(8px);
            text-decoration: none !important;
          }
          
          /* Social Icon Hover Effects */
          .social-icon:hover {
            transform: translateY(-5px) scale(1.1);
            background: rgba(255,255,255,0.2) !important;
            border-color: rgba(255,255,255,0.4) !important;
            box-shadow: 0 8px 20px rgba(0,0,0,0.3);
          }
          
          /* Smooth transitions */
          * {
            transition: all 0.3s ease;
          }
          
          /* Responsive adjustments */
          @media (max-width: 768px) {
            .footer-link:hover {
              transform: translateX(5px);
            }
            
            .social-icon:hover {
              transform: translateY(-3px) scale(1.05);
            }
          }
        `}
      </style>
    </>
  );
}

export default Footer;
