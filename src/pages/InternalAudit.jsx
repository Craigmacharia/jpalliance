// pages/ExternalAudit.jsx
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const InternalAudit = () => {
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

  return (
    <div className="external-audit-page" style={{ fontFamily: "'Quicksand', sans-serif" }}>
      {/* Hero Section */}
      <section 
        className="text-white py-5 text-center position-relative" 
        style={{ 
          background: "linear-gradient(rgba(0, 76, 153, 0.85), rgba(0, 76, 153, 0.9)), url('/branch.png') center/cover no-repeat",
          minHeight: "60vh",
          display: "flex",
          alignItems: "center"
        }}
      >
        <div className="container py-4 position-relative z-index-1">
          <h1 className="display-5 fw-bold mb-3">Internal Audit Services</h1>
          <p className="lead mx-auto mb-4" style={{ maxWidth: "700px" }}>
            Independent and objective audit services that ensure compliance, improve financial reporting, and build trust with stakeholders
          </p>
          <div className="mt-4">
            <a
              href="#services"
              className="btn btn-light px-4 py-2 fw-bold rounded-pill"
              style={{ color: "#004C99" }}
            >
              Explore Our Services <i className="bi bi-arrow-down ms-2"></i>
            </a>
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
            <div id="services" className="text-center mb-5">
              <h2 className="fw-bold mb-3" style={{ color: "#004C99" }}>Our Audit Services</h2>
              <p className="text-muted mx-auto" style={{ maxWidth: "700px" }}>
                Comprehensive external audit solutions tailored to meet regulatory requirements and organizational needs
              </p>
            </div>

            <div className="row g-4 mb-5">
              {auditServices.map((service, index) => (
                <div key={index} className="col-md-6 col-lg-4">
                  <div 
                    className="card border-0 shadow-sm h-100 service-card"
                    style={{ 
                      borderRadius: "15px",
                      transition: "all 0.3s ease"
                    }}
                  >
                    <div className="card-body p-4 text-center">
                      <div className="icon-wrapper mb-3">
                        <i className={`bi ${service.icon} text-primary`} style={{ fontSize: "2.5rem" }}></i>
                      </div>
                      <h5 className="card-title fw-bold mb-3" style={{ color: "#004C99" }}>
                        {service.title}
                      </h5>
                      <p className="card-text text-muted">{service.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Section */}
            <div className="card border-0 shadow-lg mt-5" style={{ 
              borderRadius: "15px",
              background: "linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)"
            }}>
              <div className="card-body p-5 text-center">
                <h3 className="fw-bold mb-4" style={{ color: "#004C99" }}>
                  Ready for a Trusted External Audit Partner?
                </h3>
                <p className="lead mb-4 mx-auto" style={{ maxWidth: "600px" }}>
                  Contact us today and let our audit team help you strengthen compliance
                  and build confidence with your stakeholders.
                </p>
                
                <div className="d-flex justify-content-center gap-3 flex-wrap">
                  <a
                    href="https://wa.me/254755453975?text=Hello%20JP%20Alliance!%20I%20am%20interested%20in%20your%20External%20Audit%20Services."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary px-4 py-3 fw-bold"
                    style={{
                      backgroundColor: "#004C99",
                      border: "none",
                      borderRadius: "10px",
                      transition: "all 0.3s ease",
                      minWidth: "250px"
                    }}
                  >
                    <i className="bi bi-whatsapp me-2"></i>
                    Inquire via WhatsApp
                  </a>
                  
                  <a
                    href="tel:+254755453975"
                    className="btn btn-outline-primary px-4 py-3 fw-bold"
                    style={{
                      borderColor: "#004C99",
                      color: "#004C99",
                      borderRadius: "10px",
                      transition: "all 0.3s ease",
                      minWidth: "200px"
                    }}
                  >
                    <i className="bi bi-telephone me-2"></i>
                    Call Us Now
                  </a>
                </div>
                
                <div className="mt-4">
                  <small className="text-muted">
                    📧 Or email us at: <a href="mailto:cmacharia482@gmail.com" className="text-primary">cmacharia482@gmail.com</a>
                  </small>
                </div>
              </div>
            </div>

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
          
          .service-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 15px 30px rgba(0,0,0,0.1) !important;
          }
          
          .service-card:hover .icon-wrapper {
            transform: scale(1.1);
          }
          
          .icon-wrapper {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            width: 80px;
            height: 80px;
            background: rgba(0, 76, 135, 0.1);
            border-radius: 50%;
            transition: all 0.3s ease;
          }
          
          .btn-primary:hover {
            background-color: #003366 !important;
            transform: translateY(-2px);
          }
          
          .btn-outline-primary:hover {
            background-color: #004C99 !important;
            color: white !important;
            transform: translateY(-2px);
          }
        `}
      </style>
    </div>
  );
};

export default InternalAudit;