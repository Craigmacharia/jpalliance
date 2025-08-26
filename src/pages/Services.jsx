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
      title: "Tax Services",
      description: "Comprehensive tax planning, compliance, and advisory services to optimize your financial position and ensure regulatory compliance.",
      link: "tax",
      icon: "bi-calculator",
      delay: "0.1s"
    },
    {
      id: 2,
      title: "External Audit",
      description: "Independent external audits providing assurance on financial statements, compliance, and operational effectiveness for stakeholders.",
      link: "external-audit",
      icon: "bi-file-earmark-check",
      delay: "0.2s"
    },
    {
      id: 3,
      title: "Internal Audit",
      description: "Internal audit services to evaluate and improve internal controls, risk management, and governance processes.",
      link: "internal-audit",
      icon: "bi-shield-check",
      delay: "0.3s"
    },
    {
      id: 4,
      title: "Payroll Services",
      description: "Professional payroll processing, tax calculations, and compliance management to streamline your HR operations.",
      link: "payroll",
      icon: "bi-people",
      delay: "0.4s"
    },
    {
      id: 5,
      title: "Business Advisory",
      description: "Strategic business consulting services to drive growth, optimize operations, and enhance financial performance.",
      link: "business-advisory",
      icon: "bi-graph-up",
      delay: "0.5s"
    },
    {
      id: 6,
      title: "Forensic Audit & Investigations",
      description: "Specialized forensic auditing and investigation services to detect fraud, resolve disputes, and ensure financial integrity.",
      link: "forensic-audit",
      icon: "bi-search",
      delay: "0.6s"
    }
  ];

  return (
    <div className="services-page" style={{ fontFamily: "'Quicksand', sans-serif" }}>
      {/* Hero Section */}
      <section 
        className="text-white py-5 d-flex align-items-center justify-content-center position-relative overflow-hidden" 
        style={{ 
          background: "linear-gradient(135deg, rgba(0, 76, 153, 0.9) 0%, rgba(0, 50, 100, 0.85) 100%), url('https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80') center/cover no-repeat",
          minHeight: "70vh"
        }}
      >
        <div className="container position-relative z-index-1 text-center">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <h1 className="display-4 fw-bold mb-4 animate__animated animate__fadeInDown">Our Professional Services</h1>
              <p className="lead mb-5 mx-auto fs-5" style={{ maxWidth: "700px", fontWeight: 500 }}>
                Comprehensive financial solutions tailored to your business needs, ensuring compliance, growth, and long-term success.
              </p>
              <div className="d-flex justify-content-center gap-3 flex-wrap">
                <Link 
                  to="/contact" 
                  className="btn btn-light btn-lg px-4 py-3 rounded-pill fw-semibold shadow-sm"
                  style={{ transition: "all 0.3s ease" }}
                >
                  Get in Touch
                </Link>
                <a 
                  href="#services" 
                  className="btn btn-outline-light btn-lg px-4 py-3 rounded-pill fw-semibold"
                  style={{ transition: "all 0.3s ease" }}
                >
                  Explore Services
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="position-absolute bottom-0 start-0 end-0 bg-white" style={{ height: "50px", clipPath: "polygon(0 100%, 100% 100%, 100% 0, 0 100%)" }}></div>
      </section>

      {/* Services Grid */}
      <div id="services" className="container py-5 my-4">
        <div className="text-center mb-5">
          <h2 className="fw-bold mb-4 display-5" style={{ color: "#004C99" }}>How We Can Help You</h2>
          <p className="text-muted mx-auto fs-5" style={{ maxWidth: "700px" }}>
            Our team of certified professionals delivers exceptional service across all areas of financial management
          </p>
        </div>

        <div className="row g-4">
          {services.map((service) => (
            <div key={service.id} className="col-md-6 col-lg-4">
              <div 
                className="card h-100 border-0 service-card"
                style={{ 
                  borderRadius: "12px",
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? "translateY(0)" : "translateY(30px)",
                  transition: `all 0.6s ease ${service.delay}`,
                  boxShadow: "0 5px 20px rgba(0, 76, 153, 0.1)"
                }}
              >
                <div className="card-body p-4 d-flex flex-column">
                  <div 
                    className="icon-wrapper mb-4 p-3 rounded-3 d-inline-flex align-items-center justify-content-center"
                    style={{ 
                      width: "70px",
                      height: "70px",
                      background: "linear-gradient(135deg, #004C99 0%, #0066CC 100%)",
                      transition: "all 0.3s ease",
                      boxShadow: "0 5px 15px rgba(0, 76, 153, 0.2)"
                    }}
                  >
                    <i className={`bi ${service.icon} text-white`} style={{ fontSize: "1.8rem" }}></i>
                  </div>
                  <h5 className="card-title fw-bold mb-3" style={{ color: "#004C99", minHeight: "60px", fontSize: "1.25rem" }}>
                    {service.title}
                  </h5>
                  <p className="card-text text-muted flex-grow-1 mb-4" style={{ lineHeight: "1.6", fontSize: "0.95rem" }}>
                    {service.description}
                  </p>
                  <Link 
                    to={service.link} 
                    className="btn btn-link text-decoration-none p-0 align-self-start mt-auto fw-semibold d-flex align-items-center"
                    style={{
                      color: "#004C99",
                      transition: "all 0.3s ease"
                    }}
                  >
                    Learn More
                    <i className="bi bi-arrow-right ms-2"></i>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Features Section */}
      <section className="py-5 bg-light position-relative">
        <div className="container position-relative z-index-1">
          <div className="text-center mb-5">
            <h2 className="fw-bold mb-4 display-5" style={{ color: "#004C99" }}>Why Choose Our Services?</h2>
          </div>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="text-center p-4 bg-white rounded-3 h-100 shadow-sm">
                <div className="icon-container mb-4 mx-auto rounded-circle d-flex align-items-center justify-content-center" 
                  style={{ width: "80px", height: "80px", background: "rgba(0, 76, 153, 0.1)" }}>
                  <i className="bi bi-star-fill text-primary fs-3"></i>
                </div>
                <h5 className="fw-bold mb-3">Quality Assurance</h5>
                <p className="text-muted">Rigorous quality control processes ensure exceptional service delivery</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="text-center p-4 bg-white rounded-3 h-100 shadow-sm">
                <div className="icon-container mb-4 mx-auto rounded-circle d-flex align-items-center justify-content-center" 
                  style={{ width: "80px", height: "80px", background: "rgba(0, 76, 153, 0.1)" }}>
                  <i className="bi bi-clock-fill text-primary fs-3"></i>
                </div>
                <h5 className="fw-bold mb-3">Timely Delivery</h5>
                <p className="text-muted">We respect deadlines and deliver results when you need them</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="text-center p-4 bg-white rounded-3 h-100 shadow-sm">
                <div className="icon-container mb-4 mx-auto rounded-circle d-flex align-items-center justify-content-center" 
                  style={{ width: "80px", height: "80px", background: "rgba(0, 76, 153, 0.1)" }}>
                  <i className="bi bi-person-check-fill text-primary fs-3"></i>
                </div>
                <h5 className="fw-bold mb-3">Expert Team</h5>
                <p className="text-muted">Certified professionals with extensive industry experience</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-5 text-white text-center position-relative overflow-hidden" style={{ 
        background: "linear-gradient(135deg, #004C99 0%, #0066CC 100%)" 
      }}>
        <div className="container py-5 position-relative z-index-1">
          <h2 className="fw-bold mb-4 display-5">Ready to Get Started?</h2>
          <p className="lead mb-5 mx-auto fs-5" style={{ maxWidth: "700px" }}>
            Contact us today to discuss how we can support your financial needs and drive your business forward
          </p>
          <div className="d-flex justify-content-center gap-3 flex-wrap">
            <Link 
              to="/contact" 
              className="btn btn-light btn-lg px-5 py-3 rounded-pill fw-semibold shadow"
              style={{
                transition: "all 0.3s ease",
                minWidth: "200px"
              }}
            >
              Contact Our Team
            </Link>
            <a 
              href="tel:+254755453975" 
              className="btn btn-outline-light btn-lg px-5 py-3 rounded-pill fw-semibold"
              style={{
                transition: "all 0.3s ease",
                minWidth: "200px"
              }}
            >
              <i className="bi bi-telephone me-2"></i> Call Now
            </a>
          </div>
        </div>
        <div className="position-absolute top-0 end-0 w-100 h-100" style={{ 
          background: "url('https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80') center/cover no-repeat",
          opacity: "0.05", 
          zIndex: 0 
        }}></div>
      </section>

      {/* CSS */}
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@400;500;600;700&display=swap');
          
          .service-card {
            transition: all 0.3s ease !important;
          }
          
          .service-card:hover {
            transform: translateY(-10px) !important;
            box-shadow: 0 15px 30px rgba(0, 76, 153, 0.15) !important;
          }
          
          .service-card:hover .icon-wrapper {
            transform: scale(1.1) rotate(5deg);
          }
          
          .btn-link:hover {
            letter-spacing: 0.5px;
          }
          
          .icon-container {
            transition: all 0.3s ease;
          }
          
          .icon-container:hover {
            transform: scale(1.1);
            background: rgba(0, 76, 153, 0.2) !important;
          }
          
          .btn-light:hover {
            background-color: #f8f9fa !important;
            transform: translateY(-2px);
            box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1) !important;
          }
          
          .btn-outline-light:hover {
            background-color: rgba(255, 255, 255, 0.1) !important;
            transform: translateY(-2px);
            box-shadow: 0 8px 15px rgba(255, 255, 255, 0.1) !important;
          }
        `}
      </style>
    </div>
  );
};

export default Services;