import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const BusinessAdvisory = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    window.scrollTo(0, 0);
  }, []);

  const advisoryServices = [
    {
      id: 1,
      title: "Strategic Planning",
      description: "Develop comprehensive business strategies to achieve your long-term goals and objectives.",
      icon: "bi bi-bullseye",
      benefits: ["Market analysis", "Goal setting", "Implementation roadmap"]
    },
    {
      id: 2,
      title: "Financial Advisory",
      description: "Optimize your financial structure, manage cash flow, and improve profitability.",
      icon: "bi bi-graph-up-arrow",
      benefits: ["Cash flow management", "Financial modeling", "Profitability analysis"]
    },
    {
      id: 3,
      title: "Operational Efficiency",
      description: "Streamline operations, reduce costs, and enhance overall business performance.",
      icon: "bi bi-gear-fill",
      benefits: ["Process optimization", "Cost reduction", "Performance metrics"]
    },
    {
      id: 4,
      title: "Risk Management",
      description: "Identify potential risks and develop strategies to mitigate their impact on your business.",
      icon: "bi bi-shield-check",
      benefits: ["Risk assessment", "Contingency planning", "Compliance review"]
    },
    {
      id: 5,
      title: "Growth Strategy",
      description: "Develop and execute plans for business expansion, market penetration, and diversification.",
      icon: "bi bi-rocket-fill",
      benefits: ["Market expansion", "Product diversification", "Strategic partnerships"]
    },
    {
      id: 6,
      title: "Succession Planning",
      description: "Plan for leadership transitions and ensure business continuity for the future.",
      icon: "bi bi-people-fill",
      benefits: ["Leadership development", "Transition planning", "Knowledge transfer"]
    }
  ];

  const caseStudies = [
    {
      id: 1,
      company: "Manufacturing Company",
      challenge: "Declining profitability and operational inefficiencies",
      solution: "Implemented lean manufacturing processes and cost control measures",
      result: "25% increase in operational efficiency and 18% reduction in costs"
    },
    {
      id: 2,
      company: "Tech Startup",
      challenge: "Difficulty scaling operations and securing funding",
      solution: "Developed growth strategy and financial projections for investors",
      result: "Secured $2M in funding and expanded to new markets locally and abroad"
    },
    {
      id: 3,
      company: "Family Business",
      challenge: "No clear succession plan for leadership transition",
      solution: "Created comprehensive succession plan and leadership development program",
      result: "Smooth transition to next generation with 95% retention of key staff"
    }
  ];

  return (
    <div className="business-advisory-page" style={{ fontFamily: "'Quicksand', sans-serif" }}>
      {/* Hero Section */}
      <section 
        className="text-white py-5 d-flex align-items-center justify-content-center position-relative overflow-hidden" 
        style={{ 
          background: "linear-gradient(135deg, rgba(0, 76, 153, 0.9) 0%, rgba(0, 50, 100, 0.85) 100%), url('https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80') center/cover no-repeat",
          minHeight: "60vh"
        }}
      >
        <div className="container position-relative z-index-1 text-center">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <h1 className="display-4 fw-bold mb-4">Business Advisory Services</h1>
              <p className="lead mb-5 mx-auto fs-5" style={{ maxWidth: "700px", fontWeight: 500 }}>
                Strategic guidance to navigate challenges, capitalize on opportunities, and drive sustainable growth for your business.
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
              <h2 className="fw-bold mb-4 display-5" style={{ color: "#004C99" }}>Expert Guidance for Business Success</h2>
              <p className="text-muted mb-4 fs-5">
                Our Business Advisory services provide the strategic insight and practical guidance needed to navigate complex business challenges and capitalize on growth opportunities. We partner with you to develop customized solutions that drive sustainable success.
              </p>
              <p className="text-muted mb-4 fs-5">
                With decades of combined experience across various industries, our advisors bring fresh perspectives and proven methodologies to help your business thrive in today's competitive landscape.
              </p>
              <div className="d-flex flex-wrap gap-3">
                <Link 
                  to="/contact" 
                  className="btn btn-primary btn-lg px-4 py-3 rounded-pill fw-semibold shadow-sm"
                  style={{ transition: "all 0.3s ease" }}
                >
                  Schedule Consultation
                </Link>
                <a 
                  href="#services" 
                  className="btn btn-outline-primary btn-lg px-4 py-3 rounded-pill fw-semibold"
                  style={{ transition: "all 0.3s ease" }}
                >
                  Explore Services
                </a>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="rounded-3 overflow-hidden shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  altBusiness Advisory Team 
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
            <h2 className="fw-bold mb-4 display-5" style={{ color: "#004C99" }}>Our Advisory Services</h2>
            <p className="text-muted mx-auto fs-5" style={{ maxWidth: "700px" }}>
              Comprehensive advisory solutions tailored to your specific business needs and challenges
            </p>
          </div>

          <div className="row g-4">
            {advisoryServices.map((service) => (
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
                      <i className={`${service.icon} text-white`} style={{ fontSize: "1.8rem" }}></i>
                    </div>
                    <h5 className="card-title fw-bold mb-3" style={{ color: "#004C99", minHeight: "60px", fontSize: "1.25rem" }}>
                      {service.title}
                    </h5>
                    <p className="card-text text-muted flex-grow-1 mb-4" style={{ lineHeight: "1.6", fontSize: "0.95rem" }}>
                      {service.description}
                    </p>
                    <div className="mt-auto">
                      <h6 className="fw-semibold mb-3" style={{ color: "#004C99" }}>Key Benefits:</h6>
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

      {/* Approach Section */}
      <section className="py-5">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="fw-bold mb-4 display-5" style={{ color: "#004C99" }}>Our Advisory Approach</h2>
            <p className="text-muted mx-auto fs-5" style={{ maxWidth: "700px" }}>
              A structured methodology that delivers tangible results and sustainable growth
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
                  <h5 className="fw-bold mb-3 text-center">Analysis</h5>
                  <p className="text-muted text-center">We begin by thoroughly understanding your business, challenges, and goals through detailed analysis.</p>
                </div>

                {/* Step 2 */}
                <div className="d-flex flex-column align-items-center position-relative z-index-1 mb-5 mb-md-0" style={{ flex: "1" }}>
                  <div className="rounded-circle bg-primary text-white d-flex align-items-center justify-content-center mb-3" style={{ width: "70px", height: "70px" }}>
                    <span className="fs-4 fw-bold">2</span>
                  </div>
                  <h5 className="fw-bold mb-3 text-center">Strategy Planning</h5>
                  <p className="text-muted text-center">We craft customized strategies tailored to your specific situation and objectives.</p>
                </div>

                {/* Step 3 */}
                <div className="d-flex flex-column align-items-center position-relative z-index-1 mb-5 mb-md-0" style={{ flex: "1" }}>
                  <div className="rounded-circle bg-primary text-white d-flex align-items-center justify-content-center mb-3" style={{ width: "70px", height: "70px" }}>
                    <span className="fs-4 fw-bold">3</span>
                  </div>
                  <h5 className="fw-bold mb-3 text-center">Implementation</h5>
                  <p className="text-muted text-center">We work alongside your team to execute the plan, ensuring smooth adoption and integration.</p>
                </div>

                {/* Step 4 */}
                <div className="d-flex flex-column align-items-center position-relative z-index-1" style={{ flex: "1" }}>
                  <div className="rounded-circle bg-primary text-white d-flex align-items-center justify-content-center mb-3" style={{ width: "70px", height: "70px" }}>
                    <span className="fs-4 fw-bold">4</span>
                  </div>
                  <h5 className="fw-bold mb-3 text-center">Reviewing</h5>
                  <p className="text-muted text-center">We continuously monitor progress and make adjustments to ensure optimal results.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="fw-bold mb-4 display-5" style={{ color: "#004C99" }}>Success Stories</h2>
            <p className="text-muted mx-auto fs-5" style={{ maxWidth: "700px" }}>
              See how our advisory services have helped businesses overcome challenges and achieve growth
            </p>
          </div>

          <div className="row g-4">
            {caseStudies.map((study) => (
              <div key={study.id} className="col-lg-4 col-md-6">
                <div className="card h-100 border-0 shadow-sm rounded-3">
                  <div className="card-body p-4">
                    <div className="bg-primary bg-opacity-10 rounded-3 p-3 mb-4">
                      <h5 className="fw-bold mb-0" style={{ color: "#004C99" }}>{study.company}</h5>
                    </div>
                    <h6 className="fw-semibold mb-3">Challenge:</h6>
                    <p className="text-muted mb-4">{study.challenge}</p>
                    <h6 className="fw-semibold mb-3">Our Solution:</h6>
                    <p className="text-muted mb-4">{study.solution}</p>
                    <div className="bg-success bg-opacity-10 rounded-3 p-3 mt-auto">
                      <h6 className="fw-semibold mb-2 text-success">Results Achieved:</h6>
                      <p className="text-success mb-0">{study.result}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
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

export default BusinessAdvisory;