// pages/ExternalAudit.jsx
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const ExternalAudit = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    window.scrollTo(0, 0);
  }, []);

  const auditServices = [
    {
      icon: "bi-file-earmark-check",
      title: "Statutory Audits",
      description: "Ensure compliance with regulatory requirements through thorough statutory audits conducted by certified professionals."
    },
    {
      icon: "bi-clipboard-data",
      title: "Financial Statement Audits",
      description: "We evaluate and verify the accuracy of financial statements to provide assurance for investors, boards, and regulators."
    },
    {
      icon: "bi-shield-check",
      title: "Compliance Audits",
      description: "Assess your organization's adherence to laws, regulations, and internal policies with our structured audit approach."
    },
    {
      icon: "bi-graph-up",
      title: "Risk & Internal Control Evaluation",
      description: "Identify weaknesses in internal controls and provide practical recommendations for risk mitigation and stronger governance."
    },
    {
      icon: "bi-building",
      title: "Special Purpose Audits",
      description: "Customized audit services for specific needs including donor-funded projects, grant compliance, and regulatory inspections."
    },
    {
      icon: "bi-people",
      title: "Stakeholder Assurance",
      description: "Build trust with stakeholders through transparent, independent verification of your financial and operational processes."
    }
  ];

  const auditProcess = [
    { step: 1, title: "Planning", description: "We define objectives, scope, and timelines aligned to your regulatory and stakeholder needs." },
    { step: 2, title: "Fieldwork", description: "Our team performs evidence-based testing and evaluates internal controls and risks." },
    { step: 3, title: "Reporting", description: "We deliver a clear report with findings, qualifications (if any), and practical recommendations." },
    { step: 4, title: "Follow-ups", description: "We support implementation and monitor remediation for sustained improvements." }
  ];

  return (
    <div className="external-audit-page" style={{ fontFamily: "'Quicksand', sans-serif" }}>
      {/* Hero Section */}
      <section 
        className="text-white py-5 d-flex align-items-center justify-content-center position-relative overflow-hidden" 
        style={{ 
          background: "linear-gradient(135deg, rgba(0, 76, 153, 0.9) 0%, rgba(0, 50, 100, 0.85) 100%), url('/services.jpg') center/cover no-repeat",
          minHeight: "60vh"
        }}
      >
        <div className="container position-relative z-index-1 text-center">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <h1 className="display-4 fw-bold mb-4">External Audit Services</h1>
              <p className="lead mb-5 mx-auto fs-5" style={{ maxWidth: "700px", fontWeight: 500 }}>
            Independent and objective audit services that ensure compliance, improve financial reporting, and build trust with stakeholders
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
              <h2 className="fw-bold mb-4 display-5" style={{ color: "#004C99" }}>Independent Assurance You Can Trust</h2>
              <p className="text-muted mb-4 fs-5">
                At <span className="fw-bold text-dark">JP Alliance & Associates</span>, we deliver rigorous, standards-driven audits that strengthen governance,
                enhance transparency, and build confidence with regulators, investors, and your board.
              </p>
              <p className="text-muted mb-4 fs-5">
                Our team follows International Standards on Auditing (ISA) and tailors engagement plans to your industry and risk profile,
                ensuring high-quality outcomes and actionable recommendations.
              </p>
              <div className="d-flex flex-wrap gap-3">
                <a
                  href="https://wa.me/+254738462705?text=Hello%20JP%20Alliance!%20I%20am%20interested%20in%20your%20External%20Audit%20Services."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary btn-lg px-4 py-3 rounded-pill fw-semibold shadow-sm"
                  style={{ transition: "all 0.3s ease" }}
                >
                  <i className="bi bi-whatsapp me-2"></i> Consultation
                </a>
                <a 
                  href="tel:+254738462705" 
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
                  src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                  alt="External Audit Services" 
                  className="img-fluid" 
                  style={{ width: "100%", height: "400px", objectFit: "cover" }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            {/* Introduction */}
            <div className="card border-0 shadow-lg mb-5" style={{ borderRadius: "15px" }}>
              <div className="card-body p-5">
                <h2 className="fw-bold mb-4" style={{ color: "#004C99" }}>
                  Professional External Audit Services
                </h2>
                <p className="lead text-muted mb-4">
                  At <span className="fw-bold text-dark">JP Alliance & Associates</span>, we
                  provide independent and objective external audit services that help
                  organizations maintain compliance, improve financial reporting, and
                  build trust with stakeholders.
                </p>
                
                <div className="row mt-4">
                  <div className="col-md-6">
                    <div className="d-flex align-items-center mb-3">
                      <i className="bi bi-check-circle-fill text-primary me-3"></i>
                      <span>Certified audit professionals</span>
                    </div>
                    <div className="d-flex align-items-center mb-3">
                      <i className="bi bi-check-circle-fill text-primary me-3"></i>
                      <span>Compliance with international standards</span>
                    </div>
                    <div className="d-flex align-items-center mb-3">
                      <i className="bi bi-check-circle-fill text-primary me-3"></i>
                      <span>Thorough risk assessment</span>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="d-flex align-items-center mb-3">
                      <i className="bi bi-check-circle-fill text-primary me-3"></i>
                      <span>Detailed reporting and recommendations</span>
                    </div>
                    <div className="d-flex align-items-center mb-3">
                      <i className="bi bi-check-circle-fill text-primary me-3"></i>
                      <span>Stakeholder confidence building</span>
                    </div>
                    <div className="d-flex align-items-center mb-3">
                      <i className="bi bi-check-circle-fill text-primary me-3"></i>
                      <span>Ongoing support and consultation</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Services Grid */}
            <section id="services" className="py-2">
              <div className="text-center mb-5">
                <h2 className="fw-bold mb-4 display-5" style={{ color: "#004C99" }}>Our Audit Services</h2>
                <p className="text-muted mx-auto fs-5" style={{ maxWidth: "700px" }}>
                Comprehensive external audit solutions tailored to meet regulatory requirements and organizational needs
              </p>
            </div>

              <div className="row g-4 mb-4">
              {auditServices.map((service, index) => (
                <div key={index} className="col-md-6 col-lg-4">
                  <div 
                      className="card h-100 border-0 service-card"
                      style={{ 
                        borderRadius: "12px",
                        opacity: isVisible ? 1 : 0,
                        transform: isVisible ? "translateY(0)" : "translateY(30px)",
                        transition: `all 0.6s ease ${index * 0.05}s`,
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
                        <p className="card-text text-muted flex-grow-1 mb-0" style={{ lineHeight: "1.6", fontSize: "0.95rem" }}>
                          {service.description}
                        </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            </section>

            {/* Process Section */}
            <section className="py-2">
              <div className="text-center mb-5">
                <h2 className="fw-bold mb-4 display-5" style={{ color: "#004C99" }}>Our Audit Process</h2>
                <p className="text-muted mx-auto fs-5" style={{ maxWidth: "700px" }}>
                  A structured approach to deliver high-quality assurance and practical recommendations
                </p>
                </div>
                
              <div className="row">
                <div className="col-lg-10 mx-auto">
                  <div className="d-flex flex-column flex-md-row justify-content-between position-relative">
                    {/* Connecting line */}
                    
                    {auditProcess.map((step, idx) => (
                      <div key={idx} className={`d-flex flex-column align-items-center position-relative z-index-1 ${idx < auditProcess.length - 1 ? 'mb-5 mb-md-0' : ''}`} style={{ flex: "1" }}>
                        <div className="rounded-circle bg-primary text-white d-flex align-items-center justify-content-center mb-3" style={{ width: "70px", height: "70px" }}>
                          <span className="fs-4 fw-bold">{step.step}</span>
                        </div>
                        <h5 className="fw-bold mb-3 text-center">{step.title}</h5>
                        <p className="text-muted text-center">{step.description}</p>
                      </div>
                    ))}
                </div>
              </div>
            </div>
            </section>

            

            {/* Additional Info */}
            <div className="row mt-5 pt-4">
              <div className="col-md-6 mb-4">
                <div className="card border-0 shadow-sm h-100" style={{ borderRadius: "15px" }}>
                  <div className="card-body p-4">
                    <h5 className="fw-bold mb-3" style={{ color: "#004C99" }}>Why Choose Our Audit Services?</h5>
                    <ul className="list-unstyled">
                      <li className="mb-2"><i className="bi bi-check-circle text-primary me-2"></i>Certified audit professionals</li>
                      <li className="mb-2"><i className="bi bi-check-circle text-primary me-2"></i>Compliance with international standards</li>
                      <li className="mb-2"><i className="bi bi-check-circle text-primary me-2"></i>Thorough risk assessment</li>
                      <li className="mb-2"><i className="bi bi-check-circle text-primary me-2"></i>Detailed reporting and recommendations</li>
                      <li className="mb-2"><i className="bi bi-check-circle text-primary me-2"></i>Stakeholder confidence building</li>
                      <li><i className="bi bi-check-circle text-primary me-2"></i>Ongoing support and consultation</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="col-md-6 mb-4">
                <div className="card border-0 shadow-sm h-100" style={{ borderRadius: "15px" }}>
                  <div className="card-body p-4">
                    <h5 className="fw-bold mb-3" style={{ color: "#004C99" }}>Industries We Serve</h5>
                    <div className="row">
                      <div className="col-6">
                        <ul className="list-unstyled">
                          <li className="mb-2"><i className="bi bi-building text-primary me-2"></i>Corporate</li>
                          <li className="mb-2"><i className="bi bi-shop text-primary me-2"></i>SMEs</li>
                          <li className="mb-2"><i className="bi bi-heart text-primary me-2"></i>NGOs</li>
                        </ul>
                      </div>
                      <div className="col-6">
                        <ul className="list-unstyled">
                          <li className="mb-2"><i className="bi bi-bank text-primary me-2"></i>Financial Institutions</li>
                          <li className="mb-2"><i className="bi bi-gear text-primary me-2"></i>Manufacturing</li>
                          <li className="mb-2"><i className="bi bi-cart text-primary me-2"></i>Retail</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

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
};

export default ExternalAudit;
