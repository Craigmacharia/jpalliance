import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const Services = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    window.scrollTo(0, 0);
  }, []);

  const services = [
    {
      id: 1,
      title: "Auditing & Assurance",
      description: "We provide independent audits to ensure accuracy, transparency, and compliance with financial regulations.",
      link: "/services/auditing",
      icon: "bi-file-earmark-check",
      delay: "0.1s"
    },
    {
      id: 2,
      title: "Tax Consultancy",
      description: "Expert tax planning and compliance services to minimize liabilities and maximize efficiency.",
      link: "/services/tax",
      icon: "bi-calculator",
      delay: "0.2s"
    },
    {
      id: 3,
      title: "Advisory Services",
      description: "Strategic advisory solutions to guide businesses in decision-making, growth, and risk management.",
      link: "/services/advisory",
      icon: "bi-graph-up",
      delay: "0.3s"
    },
    {
      id: 4,
      title: "Accounting & Bookkeeping",
      description: "Professional accounting and bookkeeping services to keep your business financially sound.",
      link: "/services/accounting",
      icon: "bi-journal-bookmark",
      delay: "0.4s"
    },
    {
      id: 5,
      title: "Risk Management",
      description: "Comprehensive risk assessment and mitigation strategies for your business operations.",
      link: "/services/risk-management",
      icon: "bi-shield-exclamation",
      delay: "0.5s"
    },
    {
      id: 6,
      title: "Business Valuation",
      description: "Accurate business valuation services for mergers, acquisitions, and financial reporting.",
      link: "/services/valuation",
      icon: "bi-cash-stack",
      delay: "0.6s"
    }
  ];

  return (
    <div className="services-page" style={{ fontFamily: "'Quicksand', sans-serif" }}>
      {/* Hero Section */}
      <section 
    className="text-white py-5 text-center position-relative" 
    style={{ 
      background: "linear-gradient(rgba(0, 76, 153, 0.85), rgba(0, 70, 149, 0.5)), url('/uzima.png') center/cover no-repeat",
      minHeight: "60vh",
      display: "flex",
      alignItems: "center"
    }}
  >
    <div className="container py-4 position-relative z-index-1">
      <h1 className="display-5 fw-bold mb-3">Services at JP</h1>
      <p className="lead mx-auto mb-4" style={{ maxWidth: "700px" }}>
        Expert tax solutions to ensure compliance, minimize liabilities, and maximize your financial benefits
      </p>
      <div className="mt-4">
        
      </div>
    </div>
  </section>

      {/* Services Grid */}
      <div className="container py-5">
        <div className="text-center mb-5">
          <h2 className="fw-bold mb-3" style={{ color: "#004C99" }}>How We Can Help You</h2>
          <p className="text-muted mx-auto" style={{ maxWidth: "700px" }}>
            Our team of certified professionals delivers exceptional service across all areas of financial management
          </p>
        </div>

        <div className="row g-4">
          {services.map((service) => (
            <div key={service.id} className="col-md-6 col-lg-4">
              <div 
                className="card h-100 border-0 shadow-sm service-card"
                style={{ 
                  borderRadius: "15px",
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? "translateY(0)" : "translateY(30px)",
                  transition: `all 0.6s ease ${service.delay}`
                }}
              >
                <div className="card-body p-4 d-flex flex-column">
                  <div 
                    className="icon-wrapper mb-4 p-3 rounded-circle d-inline-flex align-items-center justify-content-center"
                    style={{ 
                      width: "70px",
                      height: "70px",
                      backgroundColor: "rgba(0, 76, 153, 0.1)",
                      transition: "all 0.3s ease"
                    }}
                  >
                    <i className={`bi ${service.icon} text-primary`} style={{ fontSize: "1.8rem" }}></i>
                  </div>
                  <h5 className="card-title fw-bold mb-3" style={{ color: "#004C99", minHeight: "60px" }}>
                    {service.title}
                  </h5>
                  <p className="card-text text-muted flex-grow-1 mb-4" style={{ lineHeight: "1.6" }}>
                    {service.description}
                  </p>
                  <Link 
                    to={service.link} 
                    className="btn btn-outline-primary align-self-start mt-auto px-4 py-2 rounded-pill"
                    style={{
                      fontWeight: "600",
                      borderColor: "#004C99",
                      color: "#004C99",
                      transition: "all 0.3s ease"
                    }}
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Features Section */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="fw-bold mb-3" style={{ color: "#004C99" }}>Why Choose Our Services?</h2>
          </div>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="text-center p-4">
                <i className="bi bi-star-fill text-primary display-4 mb-3"></i>
                <h5 className="fw-bold mb-3">Quality Assurance</h5>
                <p className="text-muted">Rigorous quality control processes ensure exceptional service delivery</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="text-center p-4">
                <i className="bi bi-clock-fill text-primary display-4 mb-3"></i>
                <h5 className="fw-bold mb-3">Timely Delivery</h5>
                <p className="text-muted">We respect deadlines and deliver results when you need them</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="text-center p-4">
                <i className="bi bi-person-check-fill text-primary display-4 mb-3"></i>
                <h5 className="fw-bold mb-3">Expert Team</h5>
                <p className="text-muted">Certified professionals with extensive industry experience</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-5 text-white text-center" style={{ 
        background: "linear-gradient(135deg, #004C99 0%, #003366 100%)" 
      }}>
        <div className="container py-4">
          <h2 className="fw-bold mb-3">Ready to Get Started?</h2>
          <p className="lead mb-4 mx-auto" style={{ maxWidth: "700px" }}>
            Contact us today to discuss how we can support your financial needs and drive your business forward
          </p>
          <div className="d-flex justify-content-center gap-3 flex-wrap">
            <Link 
              to="/contact" 
              className="btn btn-light btn-lg px-4 py-3 rounded-pill"
              style={{
                fontWeight: "600",
                transition: "all 0.3s ease"
              }}
            >
              Contact Our Team
            </Link>
            <a 
              href="tel:+254755453975" 
              className="btn btn-outline-light btn-lg px-4 py-3 rounded-pill"
              style={{
                fontWeight: "600",
                transition: "all 0.3s ease"
              }}
            >
              <i className="bi bi-telephone me-2"></i> Call Now
            </a>
          </div>
        </div>
      </section>

      {/* CSS */}
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@400;500;600;700&display=swap');
          
          .service-card {
            transition: all 0.3s ease !important;
          }
          
          .service-card:hover {
            transform: translateY(-8px) !important;
            box-shadow: 0 15px 30px rgba(0,0,0,0.1) !important;
          }
          
          .service-card:hover .icon-wrapper {
            transform: scale(1.1);
            background: rgba(0, 76, 153, 0.2) !important;
          }
          
          .btn-outline-primary:hover {
            background-color: #004C99 !important;
            color: white !important;
            transform: translateY(-2px);
          }
          
          .btn-light:hover {
            background-color: #ffffff !important;
            transform: translateY(-2px);
            box-shadow: 0 4px 8px rgba(0,0,0,0.1);
          }
          
          .btn-outline-light:hover {
            background-color: rgba(255,255,255,0.1) !important;
            transform: translateY(-2px);
          }
          
          .animate-fade-in {
            opacity: 0;
            animation: fadeInUp 1s ease-out forwards;
          }
          
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}
      </style>
    </div>
  );
};

export default Services;