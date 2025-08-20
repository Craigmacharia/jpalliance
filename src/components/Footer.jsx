import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer 
      className="text-white pt-5 pb-3" 
      style={{ 
        background: "linear-gradient(135deg, #0066CC 0%, #004C99 100%)",
        fontFamily: "'Quicksand', sans-serif"
      }}
    >
      <div className="container">
        <div className="row">

          {/* Company Info */}
          <div className="col-md-4 mb-4">
            <h5 className="fw-bold mb-3" style={{ fontSize: "1.25rem" }}>JP Alliance & Associates</h5>
            <p style={{ lineHeight: "1.6" }}>
              Delivering excellence in auditing, tax, and business advisory 
              with integrity and professionalism.
            </p>
            <div className="mt-3">
              <a 
                href="https://wa.me/254755453975" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-success btn-sm rounded-pill me-2"
                style={{
                  fontFamily: "'Quicksand', sans-serif",
                  fontWeight: "600",
                  padding: "0.25rem 1rem"
                }}
              >
                <i className="bi bi-whatsapp me-1"></i> WhatsApp
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-md-2 mb-4">
            <h6 className="fw-bold mb-3" style={{ fontSize: "1rem" }}>Quick Links</h6>
            <ul className="list-unstyled">
              <li className="mb-2">
                <Link 
                  className="text-white text-decoration-none hover-effect" 
                  to="/"
                  style={{ transition: "all 0.3s ease" }}
                >
                  Home
                </Link>
              </li>
              <li className="mb-2">
                <Link 
                  className="text-white text-decoration-none hover-effect" 
                  to="/services"
                  style={{ transition: "all 0.3s ease" }}
                >
                  Services
                </Link>
              </li>
              <li className="mb-2">
                <Link 
                  className="text-white text-decoration-none hover-effect" 
                  to="/team"
                  style={{ transition: "all 0.3s ease" }}
                >
                  Team
                </Link>
              </li>
              <li className="mb-2">
                <Link 
                  className="text-white text-decoration-none hover-effect" 
                  to="/careers"
                  style={{ transition: "all 0.3s ease" }}
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link 
                  className="text-white text-decoration-none hover-effect" 
                  to="/contact"
                  style={{ transition: "all 0.3s ease" }}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="col-md-3 mb-4">
            <h6 className="fw-bold mb-3" style={{ fontSize: "1rem" }}>Our Services</h6>
            <ul className="list-unstyled">
              <li className="mb-2">
                <Link 
                  className="text-white text-decoration-none hover-effect" 
                  to="/services/tax"
                  style={{ transition: "all 0.3s ease" }}
                >
                  Tax
                </Link>
              </li>
              <li className="mb-2">
                <Link 
                  className="text-white text-decoration-none hover-effect" 
                  to="/services/external-audit"
                  style={{ transition: "all 0.3s ease" }}
                >
                  External Audit
                </Link>
              </li>
              <li className="mb-2">
                <Link 
                  className="text-white text-decoration-none hover-effect" 
                  to="/services/internal-audit"
                  style={{ transition: "all 0.3s ease" }}
                >
                  Internal Audit
                </Link>
              </li>
              <li className="mb-2">
                <Link 
                  className="text-white text-decoration-none hover-effect" 
                  to="/services/payroll"
                  style={{ transition: "all 0.3s ease" }}
                >
                  Payroll
                </Link>
              </li>
              <li>
                <Link 
                  className="text-white text-decoration-none hover-effect" 
                  to="/services/accounting-bookkeeping"
                  style={{ transition: "all 0.3s ease" }}
                >
                  Accounting & Bookkeeping
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-md-3 mb-4">
            <h6 className="fw-bold mb-3" style={{ fontSize: "1rem" }}>Contact Us</h6>
            <div className="mb-3">
              <a 
                href="mailto:cmacharia482@gmail.com" 
                className="text-white text-decoration-none hover-effect d-block mb-2"
                style={{ transition: "all 0.3s ease" }}
              >
                <i className="bi bi-envelope-fill me-2"></i> info@jpalliance.com
              </a>
              <a 
                href="tel:+254700000000" 
                className="text-white text-decoration-none hover-effect d-block mb-2"
                style={{ transition: "all 0.3s ease" }}
              >
                <i className="bi bi-telephone-fill me-2"></i> +254 700 000 000
              </a>
              <p className="mb-2">
                <i className="bi bi-geo-alt-fill me-2"></i> Nairobi, Kenya
              </p>
            </div>
            
            {/* Social Icons */}
            <div>
              <a 
                href="https://www.linkedin.com/in/cpa-josphat-mwangi-ba60b435/?originalSubdomain=ke" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white me-3 social-icon"
                style={{ fontSize: "1.25rem", transition: "all 0.3s ease" }}
              >
                <i className="bi bi-linkedin"></i>
              </a>
              <a 
                href="#" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white me-3 social-icon"
                style={{ fontSize: "1.25rem", transition: "all 0.3s ease" }}
              >
                <i className="bi bi-facebook"></i>
              </a>
              <a 
                href="#" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white social-icon"
                style={{ fontSize: "1.25rem", transition: "all 0.3s ease" }}
              >
                <i className="bi bi-twitter-x"></i>
              </a>
            </div>
          </div>

        </div>

        <hr className="border-light opacity-25 my-4" />
        <p className="text-center mb-0" style={{ fontSize: "0.9rem" }}>
          &copy; {new Date().getFullYear()} JP Alliance & Associates. All Rights Reserved.
        </p>
      </div>

      {/* CSS for hover effects */}
      <style jsx>{`
        .hover-effect:hover {
          color: #ffffff !important;
          padding-left: 5px;
          text-decoration: underline !important;
        }
        .social-icon:hover {
          transform: translateY(-3px);
          opacity: 0.9;
        }
      `}</style>
    </footer>
  );
}

export default Footer;
