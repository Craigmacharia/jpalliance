import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

export default function Tax() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    window.scrollTo(0, 0);
  }, []);

  const taxServices = [
    {
      id: 1,
      icon: "bi-file-earmark-text",
      title: "Corporate Tax Filing",
      description: "Comprehensive corporate tax compliance and filing services for businesses of all sizes",
      benefits: ["KRA compliance", "Timely submissions", "Documentation management"]
    },
    {
      id: 2,
      icon: "bi-person-circle",
      title: "Individual Tax Filing",
      description: "Personal income tax preparation and filing for individuals and sole proprietors",
      benefits: ["Deduction optimization", "Tax return preparation", "KRA iTax support"]
    },
    {
      id: 3,
      icon: "bi-calculator",
      title: "VAT & PAYE Support",
      description: "Expert handling of Value Added Tax, Pay As You Earn, and other statutory deductions",
      benefits: ["Monthly returns", "Compliance monitoring", "Payment processing"]
    },
    {
      id: 4,
      icon: "bi-graph-up-arrow",
      title: "Tax Planning",
      description: "Strategic tax planning to minimize liabilities and maximize your financial benefits",
      benefits: ["Tax efficiency analysis", "Strategy development", "Implementation guidance"]
    },
    {
      id: 5,
      icon: "bi-shield-check",
      title: "Tax Compliance Reviews",
      description: "Thorough reviews to ensure full compliance with Kenyan tax regulations",
      benefits: ["Compliance audit", "Risk assessment", "Remediation planning"]
    },
    {
      id: 6,
      icon: "bi-people",
      title: "Dispute Resolution",
      description: "Professional representation and resolution of disputes with tax authorities",
      benefits: ["KRA liaison", "Appeal preparation", "Settlement negotiation"]
    }
  ];

  const taxProcess = [
    {
      step: 1,
      title: "Consultation & Analysis",
      description: "We begin by understanding your tax situation, business structure, and financial objectives."
    },
    {
      step: 2,
      title: "Strategy Development",
      description: "Our experts create a customized tax strategy tailored to your specific needs and goals."
    },
    {
      step: 3,
      title: "Implementation",
      description: "We handle all aspects of tax filing and compliance, ensuring accuracy and timeliness."
    },
    {
      step: 4,
      title: "Ongoing Support",
      description: "We provide continuous monitoring and support to keep you compliant as regulations change."
    }
  ];

  return (
    <div className="tax-page" style={{ fontFamily: "'Quicksand', sans-serif" }}>
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
              <h1 className="display-4 fw-bold mb-4">Tax Advisory Services</h1>
              <p className="lead mb-5 mx-auto fs-5" style={{ maxWidth: "700px", fontWeight: 500 }}>
                Expert tax solutions to ensure compliance, minimize liabilities, and maximize your financial benefits
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
              <h2 className="fw-bold mb-4 display-5" style={{ color: "#004C99" }}>Comprehensive Tax Solutions</h2>
              <p className="text-muted mb-4 fs-5">
                At <span className="fw-bold text-dark">JP Alliance & Associates</span>, we help 
                individuals and businesses navigate the complexities of tax compliance and planning in Kenya. 
                Our team ensures you stay compliant with the latest KRA regulations while maximizing your 
                benefits and minimizing liabilities.
              </p>
              <p className="text-muted mb-4 fs-5">
                With our deep understanding of Kenyan tax laws and extensive experience across various industries, 
                we provide tailored solutions that address your specific tax challenges and opportunities.
              </p>
              <div className="d-flex flex-wrap gap-3">
                <a
                  href="https://wa.me/254755453975?text=Hello%20JP%20Alliance!%20I%20am%20interested%20in%20your%20Tax%20Advisory%20Services."
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
                  src="/taxs.jpg" 
                  alt="Tax Advisory Services" 
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
            <h2 className="fw-bold mb-4 display-5" style={{ color: "#004C99" }}>Our Tax Services</h2>
            <p className="text-muted mx-auto fs-5" style={{ maxWidth: "700px" }}>
              Comprehensive tax solutions tailored to meet your specific needs and ensure compliance with Kenyan regulations
            </p>
          </div>

          <div className="row g-4">
            {taxServices.map((service) => (
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
            <h2 className="fw-bold mb-4 display-5" style={{ color: "#004C99" }}>Our Tax Advisory Process</h2>
            <p className="text-muted mx-auto fs-5" style={{ maxWidth: "700px" }}>
              A structured approach to ensure comprehensive tax compliance and optimization
            </p>
          </div>

          <div className="row">
            <div className="col-lg-10 mx-auto">
              <div className="d-flex flex-column flex-md-row justify-content-between position-relative">
                {/* Connecting line */}
                
                
                {/* Step 1 */}
                <div className="d-flex flex-column align-items-center position-relative z-index-1 mb-5 mb-md-0" style={{ flex: "1" }}>
                  <div className="rounded-circle bg-primary text-white d-flex align-items-center justify-content-center mb-3" style={{ width: "70px", height: "70px" }}>
                    <span className="fs-4 fw-bold">1</span>
                  </div>
                  <h5 className="fw-bold mb-3 text-center">Consultation</h5>
                  <p className="text-muted text-center">{taxProcess[0].description}</p>
                </div>

                {/* Step 2 */}
                <div className="d-flex flex-column align-items-center position-relative z-index-1 mb-5 mb-md-0" style={{ flex: "1" }}>
                  <div className="rounded-circle bg-primary text-white d-flex align-items-center justify-content-center mb-3" style={{ width: "70px", height: "70px" }}>
                    <span className="fs-4 fw-bold">2</span>
                  </div>
                  <h5 className="fw-bold mb-3 text-center">Strategy Planning</h5>
                  <p className="text-muted text-center">{taxProcess[1].description}</p>
                </div>

                {/* Step 3 */}
                <div className="d-flex flex-column align-items-center position-relative z-index-1 mb-5 mb-md-0" style={{ flex: "1" }}>
                  <div className="rounded-circle bg-primary text-white d-flex align-items-center justify-content-center mb-3" style={{ width: "70px", height: "70px" }}>
                    <span className="fs-4 fw-bold">3</span>
                  </div>
                  <h5 className="fw-bold mb-3 text-center">Implementation</h5>
                  <p className="text-muted text-center">{taxProcess[2].description}</p>
                </div>

                {/* Step 4 */}
                <div className="d-flex flex-column align-items-center position-relative z-index-1" style={{ flex: "1" }}>
                  <div className="rounded-circle bg-primary text-white d-flex align-items-center justify-content-center mb-3" style={{ width: "70px", height: "70px" }}>
                    <span className="fs-4 fw-bold">4</span>
                  </div>
                  <h5 className="fw-bold mb-3 text-center">Support</h5>
                  <p className="text-muted text-center">{taxProcess[3].description}</p>
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
              <h2 className="fw-bold mb-4 display-5" style={{ color: "#004C99" }}>Why Choose us?</h2>
              
              <div className="d-flex align-items-start mb-4">
                <div className="me-4">
                  <div className="bg-primary bg-opacity-10 rounded-3 p-3">
                    <i className="bi bi-award-fill text-primary fs-3"></i>
                  </div>
                </div>
                <div>
                  <h5 className="fw-bold">Certified Tax Professionals</h5>
                  <p className="text-muted mb-0">Our team consists of certified tax experts with extensive knowledge of Kenyan tax laws.</p>
                </div>
              </div>
              
              <div className="d-flex align-items-start mb-4">
                <div className="me-4">
                  <div className="bg-primary bg-opacity-10 rounded-3 p-3">
                    <i className="bi bi-clock-fill text-primary fs-3"></i>
                  </div>
                </div>
                <div>
                  <h5 className="fw-bold">Timely Compliance</h5>
                  <p className="text-muted mb-0">We ensure all tax filings and payments are submitted before deadlines to avoid penalties.</p>
                </div>
              </div>
              
              <div className="d-flex align-items-start mb-4">
                <div className="me-4">
                  <div className="bg-primary bg-opacity-10 rounded-3 p-3">
                    <i className="bi bi-shield-fill-check text-primary fs-3"></i>
                  </div>
                </div>
                <div>
                  <h5 className="fw-bold">KRA Compliance</h5>
                  <p className="text-muted mb-0">We stay updated with the latest KRA regulations to ensure full compliance.</p>
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
                    <p className="text-muted mb-0">Large enterprises and multinational companies</p>
                  </div>
                </div>
                
                <div className="col-sm-6 mb-4">
                  <div className="bg-white rounded-3 p-4 h-100 shadow-sm">
                    <i className="bi bi-shop text-primary fs-1 mb-3"></i>
                    <h5 className="fw-bold">SMEs</h5>
                    <p className="text-muted mb-0">Small and medium-sized enterprises</p>
                  </div>
                </div>
                
                <div className="col-sm-6 mb-4">
                  <div className="bg-white rounded-3 p-4 h-100 shadow-sm">
                    <i className="bi bi-person text-primary fs-1 mb-3"></i>
                    <h5 className="fw-bold">Individuals</h5>
                    <p className="text-muted mb-0">Personal tax and sole proprietors</p>
                  </div>
                </div>
                
                <div className="col-sm-6 mb-4">
                  <div className="bg-white rounded-3 p-4 h-100 shadow-sm">
                    <i className="bi bi-gear text-primary fs-1 mb-3"></i>
                    <h5 className="fw-bold">Manufacturing</h5>
                    <p className="text-muted mb-0">Industrial and production businesses</p>
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
}
