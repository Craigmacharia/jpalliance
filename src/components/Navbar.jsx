import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav 
      className="navbar navbar-expand-lg navbar-dark" 
      style={{ 
        backgroundColor: "#004C99",
        fontFamily: "'Quicksand', sans-serif",
        fontWeight: "400",
        padding: "0.5rem 0",
        boxShadow: "0 2px 10px rgba(0,0,0,0.1)"
      }}
    >
      <div className="container">
        {/* Logo */}
        <Link 
          className="navbar-brand d-flex align-items-center fw-bold text-white" 
          to="/"
          style={{
            fontFamily: "'Quicksand', sans-serif",
            fontWeight: "700",
            fontSize: "1rem"
          }}
        >
          <img 
            src="jplogo.jpg" 
            alt="JP Alliance Logo" 
            className="me-2" 
            style={{ height: "40px" }}
          />
          JP Alliance & Associates
        </Link>

        {/* Toggler (Mobile Hamburger) */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
          style={{ borderColor: "rgba(255,255,255,0.5)" }}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Nav Links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link 
                className="nav-link text-white" 
                to="/"
                style={{
                  transition: "all 0.2s ease",
                  borderRadius: "4px",
                  margin: "2px",
                  padding: "8px 12px"
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = "rgba(255, 255, 255, 0.15)";
                  e.target.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = "transparent";
                  e.target.style.transform = "translateY(0)";
                }}
              >
                Home
              </Link>
            </li>

            {/* Dropdown for Services */}
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle text-white"
                to="/services"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                style={{
                  transition: "all 0.2s ease",
                  borderRadius: "4px",
                  margin: "2px",
                  padding: "8px 12px"
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = "rgba(255, 255, 255, 0.15)";
                  e.target.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = "transparent";
                  e.target.style.transform = "translateY(0)";
                }}
              >
                Services
              </Link>
              <ul 
                className="dropdown-menu" 
                style={{
                  backgroundColor: "#004C99",
                  border: "1px solid rgba(255,255,255,0.1)"
                }}
              >
                <li>
                  <Link 
                    className="dropdown-item text-white" 
                    to="/services/tax"
                    style={{
                      transition: "all 0.2s ease",
                      backgroundColor: "transparent"
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.backgroundColor = "rgba(255, 255, 255, 0.15)";
                      e.target.style.paddingLeft = "15px";
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.backgroundColor = "transparent";
                      e.target.style.paddingLeft = "12px";
                    }}
                  >
                    Tax
                  </Link>
                </li>
                <li>
                  <Link 
                    className="dropdown-item text-white" 
                    to="/services/external-audit"
                    style={{
                      transition: "all 0.2s ease",
                      backgroundColor: "transparent"
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.backgroundColor = "rgba(255, 255, 255, 0.15)";
                      e.target.style.paddingLeft = "15px";
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.backgroundColor = "transparent";
                      e.target.style.paddingLeft = "12px";
                    }}
                  >
                    External Audit
                  </Link>
                </li>
                <li>
                  <Link 
                    className="dropdown-item text-white" 
                    to="/services/internal-audit"
                    style={{
                      transition: "all 0.2s ease",
                      backgroundColor: "transparent"
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.backgroundColor = "rgba(255, 255, 255, 0.15)";
                      e.target.style.paddingLeft = "15px";
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.backgroundColor = "transparent";
                      e.target.style.paddingLeft = "12px";
                    }}
                  >
                    Internal Audit
                  </Link>
                </li>
                <li>
                  <Link 
                    className="dropdown-item text-white" 
                    to="/services/payroll"
                    style={{
                      transition: "all 0.2s ease",
                      backgroundColor: "transparent"
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.backgroundColor = "rgba(255, 255, 255, 0.15)";
                      e.target.style.paddingLeft = "15px";
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.backgroundColor = "transparent";
                      e.target.style.paddingLeft = "12px";
                    }}
                  >
                    Payroll
                  </Link>
                </li>
                <li>
                  <Link 
                    className="dropdown-item text-white" 
                    to="/services/business-advisory"
                    style={{
                      transition: "all 0.2s ease",
                      backgroundColor: "transparent"
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.backgroundColor = "rgba(255, 255, 255, 0.15)";
                      e.target.style.paddingLeft = "15px";
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.backgroundColor = "transparent";
                      e.target.style.paddingLeft = "12px";
                    }}
                  >
                    Business Advisory
                  </Link>
                </li>
                <li>
                  <Link 
                    className="dropdown-item text-white" 
                    to="/services/accounting-bookkeeping"
                    style={{
                      transition: "all 0.2s ease",
                      backgroundColor: "transparent"
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.backgroundColor = "rgba(255, 255, 255, 0.15)";
                      e.target.style.paddingLeft = "15px";
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.backgroundColor = "transparent";
                      e.target.style.paddingLeft = "12px";
                    }}
                  >
                    Accounting & Bookkeeping
                  </Link>
                </li>
              </ul>
            </li>

            <li className="nav-item">
              <Link 
                className="nav-link text-white" 
                to="/team"
                style={{
                  transition: "all 0.2s ease",
                  borderRadius: "4px",
                  margin: "2px",
                  padding: "8px 12px"
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = "rgba(255, 255, 255, 0.15)";
                  e.target.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = "transparent";
                  e.target.style.transform = "translateY(0)";
                }}
              >
                Team
              </Link>
            </li>

            <li className="nav-item">
              <Link 
                className="nav-link text-white" 
                to="/testimonials"
                style={{
                  transition: "all 0.2s ease",
                  borderRadius: "4px",
                  margin: "2px",
                  padding: "8px 12px"
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = "rgba(255, 255, 255, 0.15)";
                  e.target.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = "transparent";
                  e.target.style.transform = "translateY(0)";
                }}
              >
                Testimonials
              </Link>
            </li>

            <li className="nav-item">
              <Link 
                className="nav-link text-white" 
                to="/news"
                style={{
                  transition: "all 0.2s ease",
                  borderRadius: "4px",
                  margin: "2px",
                  padding: "8px 12px"
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = "rgba(255, 255, 255, 0.15)";
                  e.target.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = "transparent";
                  e.target.style.transform = "translateY(0)";
                }}
              >
                News & Events
              </Link>
            </li>

            <li className="nav-item">
              <Link 
                className="nav-link text-white" 
                to="/careers"
                style={{
                  transition: "all 0.2s ease",
                  borderRadius: "4px",
                  margin: "2px",
                  padding: "8px 12px"
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = "rgba(255, 255, 255, 0.15)";
                  e.target.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = "transparent";
                  e.target.style.transform = "translateY(0)";
                }}
              >
                Careers
              </Link>
            </li>

            <li className="nav-item">
              <Link 
                className="nav-link text-white" 
                to="/contact"
                style={{
                  transition: "all 0.2s ease",
                  borderRadius: "4px",
                  margin: "2px",
                  padding: "8px 12px"
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = "rgba(255, 255, 255, 0.15)";
                  e.target.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = "transparent";
                  e.target.style.transform = "translateY(0)";
                }}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;