// pages/InternalAudit.jsx
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const InternalAudit = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    window.scrollTo(0, 0);
  }, []);

  const auditServices = [
    {
      icon: "bi-clipboard-check",
      title: "Risk-Based Internal Audits",
      description: "End-to-end, risk-focused audits aligned to your risk register and business priorities."
    },
    {
      icon: "bi-shield-lock",
      title: "Internal Controls Testing",
      description: "Design and operating effectiveness testing across key financial and operational processes."
    },
    {
      icon: "bi-diagram-3",
      title: "Process & SOP Reviews",
      description: "Process walkthroughs, SOP reviews, and control redesign for efficiency and compliance."
    },
    {
      icon: "bi-journal-check",
      title: "Compliance Monitoring",
      description: "Ongoing compliance checks against policies, regulations, and industry standards."
    },
    {
      icon: "bi-people",
      title: "Governance & Board Reporting",
      description: "Clear reporting to the Audit Committee and Board with actionable insights and dashboards."
    },
    {
      icon: "bi-graph-up-arrow",
      title: "Data Analytics & Continuous Auditing",
      description: "Analytics-driven testing and continuous auditing for proactive issue detection."
    }
  ];

  return (
    <div className="internal-audit-page" style={{ fontFamily: "'Quicksand', sans-serif" }}>
      {/* Hero Section */}
      <section 
        className="text-white py-5 d-flex align-items-center justify-content-center position-relative overflow-hidden" 
        style={{ 
          background: "linear-gradient(135deg, rgba(0, 76, 153, 0.9) 0%, rgba(0, 50, 100, 0.85) 100%), url('/branch.png') center/cover no-repeat",
          minHeight: "60vh"
        }}
      >
        <div className="container position-relative z-index-1 text-center">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <h1 className="display-4 fw-bold mb-4">Internal Audit Services</h1>
              <p className="lead mb-5 mx-auto fs-5" style={{ maxWidth: "700px", fontWeight: 500 }}>
                Strengthen governance, enhance controls, and manage risk with a modern, risk-based internal audit function
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
              <h2 className="fw-bold mb-4 display-5" style={{ color: "#004C99" }}>Build a High-Impact Internal Audit Function</h2>
              <p className="text-muted mb-4 fs-5">
                We help organizations design and run internal audit programs that are risk-based, independent, and value-adding—
                focused on strengthening controls, improving processes, and safeguarding assets.
              </p>
              <p className="text-muted mb-4 fs-5">
                From annual audit plans to targeted reviews, our team brings practical insights, data analytics,
                and clear recommendations aligned with your business objectives.
              </p>
              <div className="d-flex flex-wrap gap-3">
                <a
                  href="https://wa.me/254755453975?text=Hello%20JP%20Alliance!%20I%20am%20interested%20in%20your%20Internal%20Audit%20Services."
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
                  alt="Internal Audit" 
                  className="img-fluid" 
                  style={{ width: "100%", height: "400px", objectFit: "cover" }}
                />
                    </div>
                  </div>
                </div>
              </div>
      </section>

            {/* Services Grid */}
            <section id="services" className="py-2">
              <div className="text-center mb-5">
                <h2 className="fw-bold mb-4 display-5" style={{ color: "#004C99" }}>Our Internal Audit Services</h2>
                <p className="text-muted mx-auto fs-5" style={{ maxWidth: "700px" }}>
                  Practical, risk-based internal audit services that strengthen controls and enhance operational efficiency
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
<section className="py-5">
  <div className="container">
    <div className="text-center mb-5">
      <h2 className="fw-bold mb-4 display-5" style={{ color: "#004C99" }}>Our Internal Audit Approach</h2>
      <p className="text-muted mx-auto fs-5" style={{ maxWidth: "700px" }}>
        A pragmatic, risk-based approach that delivers actionable insights and measurable control improvements
      </p>
    </div>
    
    <div className="row">
      <div className="col-lg-10 mx-auto">
        <div className="position-relative">
          {/* Connecting line - positioned behind the circles */}
          
          
          <div className="d-flex flex-column flex-md-row justify-content-between position-relative">
            {/* Step 1 */}
            <div className="d-flex flex-column align-items-center position-relative z-index-1 mb-5 mb-md-0" style={{ flex: "1" }}>
              <div className="rounded-circle bg-primary text-white d-flex align-items-center justify-content-center mb-3" style={{ 
                width: "70px", 
                height: "70px", 
                zIndex: 2,
                position: "relative"
              }}>
                <span className="fs-4 fw-bold">1</span>
              </div>
              <h5 className="fw-bold mb-3 text-center">Risk Assessment</h5>
              <p className="text-muted text-center">Define scope and priorities aligned to strategic and operational risks.</p>
            </div>
            <br></br>
            
            {/* Step 2 */}
            <div className="d-flex flex-column align-items-center position-relative z-index-1 mb-5 mb-md-0" style={{ flex: "1" }}>
              
              <div className="rounded-circle bg-primary text-white d-flex align-items-center justify-content-center mb-3" style={{ 
                width: "70px", 
                height: "70px", 
                zIndex: 2,
                position: "relative"
              }}>
                <span className="fs-4 fw-bold">2</span>
              </div>
              <h5 className="fw-bold mb-3 text-center">Fieldwork & Testing</h5>
              <p className="text-muted text-center">Walkthroughs, sampling, analytics, and testing of key controls.</p>
            </div>
            <br></br>
            
            {/* Step 3 */}
            <div className="d-flex flex-column align-items-center position-relative z-index-1 mb-5 mb-md-0" style={{ flex: "1" }}>
              
              <div className="rounded-circle bg-primary text-white d-flex align-items-center justify-content-center mb-3" style={{ 
                width: "70px", 
                height: "70px", 
                zIndex: 2,
                position: "relative"
              }}>
                <span className="fs-4 fw-bold">3</span>
              </div>
              <h5 className="fw-bold mb-3 text-center">Reports</h5>
              <p className="text-muted text-center">Clear findings, root causes, risk ratings, and practical actions.</p>
            </div>
            
            {/* Step 4 */}
            <div className="d-flex flex-column align-items-center position-relative z-index-1" style={{ flex: "1" }}>
              <div className="rounded-circle bg-primary text-white d-flex align-items-center justify-content-center mb-3" style={{ 
                width: "70px", 
                height: "70px", 
                zIndex: 2,
                position: "relative"
              }}>
                <span className="fs-4 fw-bold">4</span>
              </div>
              <h5 className="fw-bold mb-3 text-center">Follow-ups</h5>
              
              <p className="text-muted text-center">Track remediation, monitor KPIs, and iterate the audit plan.</p>
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
              <div className="container py-4 position-relative z-index-1">
                <h2 className="fw-bold mb-4 display-5">Ready to Elevate Internal Audit?</h2>
                <p className="lead mb-5 mx-auto fs-5" style={{ maxWidth: "700px" }}>
                  Let's design a risk-based internal audit program that delivers value beyond compliance
                </p>
                <div className="d-flex justify-content-center gap-3 flex-wrap">
                  <a
                    href="https://wa.me/254755453975?text=Hello%20JP%20Alliance!%20I%20am%20interested%20in%20your%20Internal%20Audit%20Services."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-light btn-lg px-5 py-3 rounded-pill fw-semibold shadow"
                    style={{ transition: "all 0.3s ease", minWidth: "200px" }}
                  >
                    <i className="bi bi-whatsapp me-2"></i> WhatsApp Consultation
                  </a>
                  <a
                    href="tel:+254755453975"
                    className="btn btn-outline-light btn-lg px-5 py-3 rounded-pill fw-semibold"
                    style={{ transition: "all 0.3s ease", minWidth: "200px" }}
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

            {/* Additional Info */}
      <section className="py-5">
        <div className="container">
          <div className="row">
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
};

export default InternalAudit;