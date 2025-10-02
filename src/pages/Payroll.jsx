// src/pages/Payroll.jsx
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

export default function Payroll() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    window.scrollTo(0, 0);
  }, []);

  const payrollServices = [
    {
      id: 1,
      icon: "bi-cash-coin",
      title: "Automated Payroll Processing",
      description: "Efficient and accurate salary processing with automated calculations for all employee payments",
      benefits: ["Salary calculations", "Overtime processing", "Bonus management"]
    },
    {
      id: 2,
      icon: "bi-receipt",
      title: "Tax & Statutory Deductions",
      description: "Proper handling of PAYE, NHIF, NSSF, and other statutory deductions in compliance with Kenyan laws",
      benefits: ["PAYE calculations", "NHIF deductions", "NSSF compliance"]
    },
    {
      id: 3,
      icon: "bi-file-earmark-text",
      title: "Custom Payslip Generation",
      description: "Professional and detailed payslips tailored to your organization's branding and requirements",
      benefits: ["Branded payslips", "Detailed breakdown", "Digital delivery"]
    },
    {
      id: 4,
      icon: "bi-shield-check",
      title: "Labor Law Compliance",
      description: "Full compliance with Kenyan labor laws and regulations to protect your business from penalties",
      benefits: ["Legal compliance", "Regulation updates", "Risk mitigation"]
    },
    {
      id: 5,
      icon: "bi-graph-up",
      title: "Payroll Reports & Analytics",
      description: "Comprehensive reports and record keeping for better financial planning and decision making",
      benefits: ["Financial reports", "Analytics dashboard", "Record keeping"]
    },
    {
      id: 6,
      icon: "bi-headset",
      title: "Ongoing Support",
      description: "Dedicated support team to handle any payroll queries and ensure smooth operations",
      benefits: ["24/7 support", "Query resolution", "Training assistance"]
    }
  ];

  const payrollProcess = [
    {
      step: 1,
      title: "Data Collection & Setup",
      description: "We gather employee information, salary structures, and statutory requirements to set up your payroll system."
    },
    {
      step: 2,
      title: "Processing & Calculations",
      description: "Our system processes salaries, calculates deductions, and ensures accuracy in all financial computations."
    },
    {
      step: 3,
      title: "Compliance Verification",
      description: "We verify all statutory deductions and ensure full compliance with Kenyan labor and tax regulations."
    },
    {
      step: 4,
      title: "Delivery & Support",
      description: "We deliver payslips, process payments, and provide ongoing support for all payroll-related queries."
    }
  ];

  return (
    <div className="payroll-page" style={{ fontFamily: "'Quicksand', sans-serif" }}>
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
              <h1 className="display-4 fw-bold mb-4">Payroll Services</h1>
              <p className="lead mb-5 mx-auto fs-5" style={{ maxWidth: "700px", fontWeight: 500 }}>
            Comprehensive payroll solutions ensuring accurate, timely payments and full compliance with statutory requirements
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
              <h2 className="fw-bold mb-4 display-5" style={{ color: "#004C99" }}>Streamlined Payroll Management</h2>
              <p className="text-muted mb-4 fs-5">
                  At <span className="fw-bold text-dark">JP Alliance & Associates</span>, we ensure your employees 
                  are paid accurately, on time, and in full compliance with statutory requirements. From salary 
                  processing to statutory deductions, we've got you covered.
                </p>
              <p className="text-muted mb-4 fs-5">
                Our automated payroll system handles everything from basic salary calculations to complex statutory 
                deductions, ensuring accuracy and compliance while saving you time and reducing errors.
              </p>
              <div className="d-flex flex-wrap gap-3">
                <a
                  href="https://wa.me/+254738462705?text=Hello%20JP%20Alliance!%20I%20am%20interested%20in%20your%20Payroll%20Services."
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
                  src="/payroll.jpg" 
                  alt="Payroll Services" 
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
            <h2 className="fw-bold mb-4 display-5" style={{ color: "#004C99" }}>Our Payroll Services</h2>
            <p className="text-muted mx-auto fs-5" style={{ maxWidth: "700px" }}>
              Comprehensive payroll solutions tailored to meet your organization's specific needs and ensure compliance
              </p>
            </div>

          <div className="row g-4">
            {payrollServices.map((service) => (
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
            <h2 className="fw-bold mb-4 display-5" style={{ color: "#004C99" }}>Our Payroll Process</h2>
            <p className="text-muted mx-auto fs-5" style={{ maxWidth: "700px" }}>
              A structured approach to ensure accurate payroll processing and full statutory compliance
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
                  <h5 className="fw-bold mb-3 text-center">Data Collection</h5>
                  <p className="text-muted text-center">{payrollProcess[0].description}</p>
                </div>

                {/* Step 2 */}
                <div className="d-flex flex-column align-items-center position-relative z-index-1 mb-5 mb-md-0" style={{ flex: "1" }}>
                  <div className="rounded-circle bg-primary text-white d-flex align-items-center justify-content-center mb-3" style={{ width: "70px", height: "70px" }}>
                    <span className="fs-4 fw-bold">2</span>
                  </div>
                  <h5 className="fw-bold mb-3 text-center">Processing</h5>
                  <p className="text-muted text-center">{payrollProcess[1].description}</p>
                </div>

                {/* Step 3 */}
                <div className="d-flex flex-column align-items-center position-relative z-index-1 mb-5 mb-md-0" style={{ flex: "1" }}>
                  <div className="rounded-circle bg-primary text-white d-flex align-items-center justify-content-center mb-3" style={{ width: "70px", height: "70px" }}>
                    <span className="fs-4 fw-bold">3</span>
                  </div>
                  <h5 className="fw-bold mb-3 text-center">Verification</h5>
                  <p className="text-muted text-center">{payrollProcess[2].description}</p>
                </div>
                
                {/* Step 4 */}
                <div className="d-flex flex-column align-items-center position-relative z-index-1" style={{ flex: "1" }}>
                  <div className="rounded-circle bg-primary text-white d-flex align-items-center justify-content-center mb-3" style={{ width: "70px", height: "70px" }}>
                    <span className="fs-4 fw-bold">4</span>
                  </div>
                  <h5 className="fw-bold mb-3 text-center">Delivery</h5>
                  <p className="text-muted text-center">{payrollProcess[3].description}</p>
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
              <h2 className="fw-bold mb-4 display-5" style={{ color: "#004C99" }}>Why Choose Our Payroll Services?</h2>
              
              <div className="d-flex align-items-start mb-4">
                <div className="me-4">
                  <div className="bg-primary bg-opacity-10 rounded-3 p-3">
                    <i className="bi bi-award-fill text-primary fs-3"></i>
                  </div>
                </div>
                <div>
                  <h5 className="fw-bold">Certified Payroll Professionals</h5>
                  <p className="text-muted mb-0">Our team consists of certified payroll experts with extensive knowledge of Kenyan labor laws.</p>
                </div>
              </div>
              
              <div className="d-flex align-items-start mb-4">
                <div className="me-4">
                  <div className="bg-primary bg-opacity-10 rounded-3 p-3">
                    <i className="bi bi-clock-fill text-primary fs-3"></i>
                  </div>
                </div>
                <div>
                  <h5 className="fw-bold">Timely Processing</h5>
                  <p className="text-muted mb-0">We ensure all payroll processing and payments are completed on time to maintain employee satisfaction.</p>
              </div>
            </div>

              <div className="d-flex align-items-start mb-4">
                <div className="me-4">
                  <div className="bg-primary bg-opacity-10 rounded-3 p-3">
                    <i className="bi bi-shield-fill-check text-primary fs-3"></i>
                  </div>
                </div>
                <div>
                  <h5 className="fw-bold">Full Compliance</h5>
                  <p className="text-muted mb-0">We stay updated with the latest labor laws and statutory requirements to ensure full compliance.</p>
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
                    <p className="text-muted mb-0">Large enterprises with complex payroll requirements</p>
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
                    <i className="bi bi-gear text-primary fs-1 mb-3"></i>
                    <h5 className="fw-bold">Manufacturing</h5>
                    <p className="text-muted mb-0">Industrial and production businesses</p>
                      </div>
                    </div>
                
                <div className="col-sm-6 mb-4">
                  <div className="bg-white rounded-3 p-4 h-100 shadow-sm">
                    <i className="bi bi-briefcase text-primary fs-1 mb-3"></i>
                    <h5 className="fw-bold">Service Sector</h5>
                    <p className="text-muted mb-0">Professional services and consulting firms</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      

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
