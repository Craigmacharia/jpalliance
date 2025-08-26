import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

export default function ForensicAudit() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    window.scrollTo(0, 0);
  }, []);

  const forensicServices = [
    {
      id: 1,
      icon: "bi-search",
      title: "Fraud Detection & Investigation",
      description: "Comprehensive fraud detection through data analysis, interviews, and forensic accounting techniques",
      benefits: ["Data analytics", "Interview techniques", "Document review"]
    },
    {
      id: 2,
      icon: "bi-shield-exclamation",
      title: "Financial Crime Investigations",
      description: "Investigation of money laundering, corruption, and other financial crimes with evidence preservation",
      benefits: ["Evidence preservation", "Chain of custody", "Legal compliance"]
    },
    {
      id: 3,
      icon: "bi-graph-down",
      title: "Asset Tracing & Recovery",
      description: "Track and recover misappropriated assets through forensic analysis and legal proceedings",
      benefits: ["Asset identification", "Recovery strategies", "Legal support"]
    },
    {
      id: 4,
      icon: "bi-file-earmark-text",
      title: "Expert Witness Services",
      description: "Professional expert witness testimony and report preparation for legal proceedings",
      benefits: ["Court testimony", "Expert reports", "Cross-examination support"]
    },
    {
      id: 5,
      icon: "bi-laptop",
      title: "Digital Forensics",
      description: "Computer and digital device forensics to recover and analyze electronic evidence",
      benefits: ["Data recovery", "Digital evidence", "Chain of custody"]
    },
    {
      id: 6,
      icon: "bi-building",
      title: "Corporate Investigations",
      description: "Internal corporate investigations for misconduct, compliance violations, and governance issues",
      benefits: ["Misconduct investigation", "Compliance review", "Governance assessment"]
    }
  ];

  const forensicProcess = [
    {
      step: 1,
      title: "Initial Assessment & Planning",
      description: "We assess the scope, gather preliminary information, and develop a comprehensive investigation plan."
    },
    {
      step: 2,
      title: "Evidence Collection & Preservation",
      description: "Systematic collection and preservation of all relevant evidence following forensic standards."
    },
    {
      step: 3,
      title: "Analysis & Investigation",
      description: "Detailed forensic analysis, interviews, and investigation to uncover the truth."
    },
    {
      step: 4,
      title: "Reporting & Legal Support",
      description: "Comprehensive reporting and ongoing support for legal proceedings and recovery actions."
    }
  ];

  return (
    <div className="forensic-audit-page" style={{ fontFamily: "'Quicksand', sans-serif" }}>
      {/* Hero Section */}
      <section 
        className="text-white py-5 d-flex align-items-center justify-content-center position-relative overflow-hidden" 
        style={{ 
          background: "linear-gradient(135deg, rgba(0, 76, 153, 0.9) 0%, rgba(0, 50, 100, 0.85) 100%), url('https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80') center/cover no-repeat",
          minHeight: "60vh"
        }}
      >
        <div className="container position-relative z-index-1 text-center">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <h1 className="display-4 fw-bold mb-4">Forensic Audit & Investigations</h1>
              <p className="lead mb-5 mx-auto fs-5" style={{ maxWidth: "700px", fontWeight: 500 }}>
                Professional forensic investigation services to detect fraud, preserve evidence, and support legal proceedings
              </p>
            </div>
          </div>
        </div>
        <div className="position-absolute bottom-0 start-0 end-0 bg-white" style={{ height: "50px", clipPath: "polygon(0 100%, 100% 100%, 100% 0, 0 100%)" }}></div>
      </section>

      {/* Intro Section */}
      <section className="py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-5 mb-lg-0">
              <h2 className="fw-bold mb-4 display-5" style={{ color: "#004C99" }}>Uncover the Truth with Professional Forensics</h2>
              <p className="text-muted mb-4 fs-5">
                At <span className="fw-bold text-dark">JP Alliance & Associates</span>, we provide comprehensive 
                forensic audit and investigation services that help organizations detect fraud, investigate misconduct, 
                and preserve evidence for legal proceedings.
              </p>
              <p className="text-muted mb-4 fs-5">
                Our certified forensic professionals use advanced techniques, data analytics, and industry best practices 
                to conduct thorough investigations that stand up to legal scrutiny and help you recover losses.
              </p>
              <div className="d-flex flex-wrap gap-3">
                <a
                  href="https://wa.me/254755453975?text=Hello%20JP%20Alliance!%20I%20am%20interested%20in%20your%20Forensic%20Audit%20Services."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary btn-lg px-4 py-3 rounded-pill fw-semibold shadow-sm"
                  style={{ transition: "all 0.3s ease" }}
                >
                  <i className="bi bi-whatsapp me-2"></i> WhatsApp Consultation
                </a>
                <a 
                  href="tel:+254755453975" 
                  className="btn btn-outline-primary btn-lg px-4 py-3 rounded-pill fw-semibold"
                  style={{ transition: "all 0.3s ease" }}
                >
                  <i className="bi bi-telephone me-2"></i> Call Directly
                </a>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="rounded-3 overflow-hidden shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                  alt="Forensic Audit Services" 
                  className="img-fluid" 
                  style={{ width: "100%", height: "400px", objectFit: "cover" }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className="py-5 bg-light">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="fw-bold mb-4 display-5" style={{ color: "#004C99" }}>Our Forensic Services</h2>
            <p className="text-muted mx-auto fs-5" style={{ maxWidth: "700px" }}>
              Comprehensive forensic investigation services designed to detect fraud and support legal proceedings
            </p>
          </div>

          <div className="row g-4">
            {forensicServices.map((service) => (
              <div key={service.id} className="col-md-6 col-lg-4">
                <div 
                  className="card h-100 border-0 service-card"
                  style={{ 
                    borderRadius: "12px",
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? "translateY(0)" : "translateY(30px)",
                    transition: `all 0.6s ease ${service.delay || "0.1s"}`,
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
                    <div className="mt-auto">
                      <h6 className="fw-semibold mb-3" style={{ color: "#004C99" }}>Key Features:</h6>
                      <ul className="list-unstyled">
                        {service.benefits.map((benefit, index) => (
                          <li key={index} className="d-flex align-items-center mb-2">
                            <i className="bi bi-check-circle-fill text-success me-2"></i>
                            <span className="text-muted">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-5">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="fw-bold mb-4 display-5" style={{ color: "#004C99" }}>Our Forensic Investigation Process</h2>
            <p className="text-muted mx-auto fs-5" style={{ maxWidth: "700px" }}>
              A systematic approach to forensic investigations that ensures evidence integrity and legal compliance
            </p>
          </div>

          <div className="row">
            <div className="col-lg-10 mx-auto">
              <div className="d-flex flex-column flex-md-row justify-content-between position-relative">
                {/* Connecting line */}
                <div className="position-absolute top-50 start-0 end-0 bg-primary" style={{ height: "3px", zIndex: 0, transform: "translateY(-50%)" }}></div>
                
                {/* Step 1 */}
                <div className="d-flex flex-column align-items-center position-relative z-index-1 mb-5 mb-md-0" style={{ flex: "1" }}>
                  <div className="rounded-circle bg-primary text-white d-flex align-items-center justify-content-center mb-3" style={{ width: "70px", height: "70px" }}>
                    <span className="fs-4 fw-bold">1</span>
                  </div>
                  <h5 className="fw-bold mb-3 text-center">Initial Assessment & Planning</h5>
                  <p className="text-muted text-center">{forensicProcess[0].description}</p>
                </div>

                {/* Step 2 */}
                <div className="d-flex flex-column align-items-center position-relative z-index-1 mb-5 mb-md-0" style={{ flex: "1" }}>
                  <div className="rounded-circle bg-primary text-white d-flex align-items-center justify-content-center mb-3" style={{ width: "70px", height: "70px" }}>
                    <span className="fs-4 fw-bold">2</span>
                  </div>
                  <h5 className="fw-bold mb-3 text-center">Evidence Collection & Preservation</h5>
                  <p className="text-muted text-center">{forensicProcess[1].description}</p>
                </div>

                {/* Step 3 */}
                <div className="d-flex flex-column align-items-center position-relative z-index-1 mb-5 mb-md-0" style={{ flex: "1" }}>
                  <div className="rounded-circle bg-primary text-white d-flex align-items-center justify-content-center mb-3" style={{ width: "70px", height: "70px" }}>
                    <span className="fs-4 fw-bold">3</span>
                  </div>
                  <h5 className="fw-bold mb-3 text-center">Analysis & Investigation</h5>
                  <p className="text-muted text-center">{forensicProcess[2].description}</p>
                </div>

                {/* Step 4 */}
                <div className="d-flex flex-column align-items-center position-relative z-index-1" style={{ flex: "1" }}>
                  <div className="rounded-circle bg-primary text-white d-flex align-items-center justify-content-center mb-3" style={{ width: "70px", height: "70px" }}>
                    <span className="fs-4 fw-bold">4</span>
                  </div>
                  <h5 className="fw-bold mb-3 text-center">Reporting & Legal Support</h5>
                  <p className="text-muted text-center">{forensicProcess[3].description}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mb-5 mb-lg-0">
              <h2 className="fw-bold mb-4 display-5" style={{ color: "#004C99" }}>Why Choose Our Forensic Services?</h2>
              
              <div className="d-flex align-items-start mb-4">
                <div className="me-4">
                  <div className="bg-primary bg-opacity-10 rounded-3 p-3">
                    <i className="bi bi-award-fill text-primary fs-3"></i>
                  </div>
                </div>
                <div>
                  <h5 className="fw-bold">Certified Forensic Professionals</h5>
                  <p className="text-muted mb-0">Our team consists of certified forensic accountants and investigators with extensive experience.</p>
                </div>
              </div>
              
              <div className="d-flex align-items-start mb-4">
                <div className="me-4">
                  <div className="bg-primary bg-opacity-10 rounded-3 p-3">
                    <i className="bi bi-shield-fill-check text-primary fs-3"></i>
                  </div>
                </div>
                <div>
                  <h5 className="fw-bold">Evidence Preservation</h5>
                  <p className="text-muted mb-0">We maintain strict chain of custody and evidence preservation protocols for legal proceedings.</p>
                </div>
              </div>
              
              <div className="d-flex align-items-start mb-4">
                <div className="me-4">
                  <div className="bg-primary bg-opacity-10 rounded-3 p-3">
                    <i className="bi bi-graph-up text-primary fs-3"></i>
                  </div>
                </div>
                <div>
                  <h5 className="fw-bold">Advanced Analytics</h5>
                  <p className="text-muted mb-0">We use cutting-edge data analytics and forensic tools to uncover hidden patterns and evidence.</p>
                </div>
              </div>
            </div>
            
            <div className="col-lg-6">
              <h2 className="fw-bold mb-4 display-5" style={{ color: "#004C99" }}>Industries We Serve</h2>
              
              <div className="row">
                <div className="col-sm-6 mb-4">
                  <div className="bg-white rounded-3 p-4 h-100 shadow-sm">
                    <i className="bi bi-building text-primary fs-1 mb-3"></i>
                    <h5 className="fw-bold">Corporate</h5>
                    <p className="text-muted mb-0">Internal fraud investigations and compliance reviews</p>
                  </div>
                </div>
                
                <div className="col-sm-6 mb-4">
                  <div className="bg-white rounded-3 p-4 h-100 shadow-sm">
                    <i className="bi bi-bank text-primary fs-1 mb-3"></i>
                    <h5 className="fw-bold">Financial Services</h5>
                    <p className="text-muted mb-0">Banking fraud and money laundering investigations</p>
                  </div>
                </div>
                
                <div className="col-sm-6 mb-4">
                  <div className="bg-white rounded-3 p-4 h-100 shadow-sm">
                    <i className="bi bi-shield text-primary fs-1 mb-3"></i>
                    <h5 className="fw-bold">Insurance</h5>
                    <p className="text-muted mb-0">Claims fraud investigation and assessment</p>
                  </div>
                </div>
                
                <div className="col-sm-6 mb-4">
                  <div className="bg-white rounded-3 p-4 h-100 shadow-sm">
                    <i className="bi bi-gavel text-primary fs-1 mb-3"></i>
                    <h5 className="fw-bold">Legal Firms</h5>
                    <p className="text-muted mb-0">Expert witness and litigation support services</p>
                  </div>
                </div>
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
          <h2 className="fw-bold mb-4 display-5">Need Professional Forensic Investigation?</h2>
          <p className="lead mb-5 mx-auto fs-5" style={{ maxWidth: "700px" }}>
            Contact us today for expert forensic services that help you uncover the truth and protect your interests
          </p>
          <div className="d-flex justify-content-center gap-3 flex-wrap">
            <a
              href="https://wa.me/254755453975?text=Hello%20JP%20Alliance!%20I%20am%20interested%20in%20your%20Forensic%20Audit%20Services."
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-light btn-lg px-5 py-3 rounded-pill fw-semibold shadow"
              style={{
                transition: "all 0.3s ease",
                minWidth: "200px"
              }}
            >
              <i className="bi bi-whatsapp me-2"></i> WhatsApp Consultation
            </a>
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
          
          .btn-primary {
            background: linear-gradient(135deg, #004C99 0%, #0066CC 100%);
            border: none;
          }
          
          .btn-primary:hover {
            background: linear-gradient(135deg, #003366 0%, #004C99 100%);
            transform: translateY(-2px);
            box-shadow: 0 8px 15px rgba(0, 76, 153, 0.3) !important;
          }
          
          .btn-outline-primary {
            color: #004C99;
            border-color: #004C99;
          }
          
          .btn-outline-primary:hover {
            background-color: #004C99;
            color: white;
            transform: translateY(-2px);
          }
          
          .btn-light:hover {
            background-color: #f8f9fa !important;
            transform: translateY(-2px);
            box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1) !important;
          }
        `}
      </style>
    </div>
  );
}
