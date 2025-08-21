// src/pages/Payroll.jsx
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const Payroll = () => {
  const payrollServices = [
    {
      icon: "bi-cash-coin",
      title: "Automated Payroll Processing",
      description: "Efficient and accurate salary processing with automated calculations for all employee payments"
    },
    {
      icon: "bi-receipt",
      title: "Tax & Statutory Deductions",
      description: "Proper handling of PAYE, NHIF, NSSF, and other statutory deductions in compliance with Kenyan laws"
    },
    {
      icon: "bi-file-earmark-text",
      title: "Custom Payslip Generation",
      description: "Professional and detailed payslips tailored to your organization's branding and requirements"
    },
    {
      icon: "bi-shield-check",
      title: "Labor Law Compliance",
      description: "Full compliance with Kenyan labor laws and regulations to protect your business from penalties"
    },
    {
      icon: "bi-graph-up",
      title: "Payroll Reports & Analytics",
      description: "Comprehensive reports and record keeping for better financial planning and decision making"
    },
    {
      icon: "bi-headset",
      title: "Ongoing Support",
      description: "Dedicated support team to handle any payroll queries and ensure smooth operations"
    }
  ];

  return (
    <div className="payroll-page" style={{ fontFamily: "'Quicksand', sans-serif" }}>
      {/* Hero Section */}
      <section 
        className="text-white py-5 text-center position-relative" 
        style={{ 
          background: "linear-gradient(rgba(0, 76, 153, 0.85), rgba(0, 76, 153, 0.9)), url('/cash.png') center/cover no-repeat",
          minHeight: "60vh",
          display: "flex",
          alignItems: "center"
        }}
      >
        <div className="container py-4 position-relative z-index-1">
          <h1 className="display-5 fw-bold mb-3">Payroll Services</h1>
          <p className="lead mx-auto mb-4" style={{ maxWidth: "700px" }}>
            Comprehensive payroll solutions ensuring accurate, timely payments and full compliance with statutory requirements
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
                  Streamlined Payroll Management
                </h2>
                <p className="lead text-muted mb-4">
                  At <span className="fw-bold text-dark">JP Alliance & Associates</span>, we ensure your employees 
                  are paid accurately, on time, and in full compliance with statutory requirements. From salary 
                  processing to statutory deductions, we've got you covered.
                </p>
                
                <div className="row mt-4">
                  <div className="col-md-6">
                    <div className="d-flex align-items-center mb-3">
                      <i className="bi bi-check-circle-fill text-primary me-3"></i>
                      <span>Timely and accurate salary processing</span>
                    </div>
                    <div className="d-flex align-items-center mb-3">
                      <i className="bi bi-check-circle-fill text-primary me-3"></i>
                      <span>Full statutory compliance (PAYE, NHIF, NSSF)</span>
                    </div>
                    <div className="d-flex align-items-center mb-3">
                      <i className="bi bi-check-circle-fill text-primary me-3"></i>
                      <span>Customized payroll solutions</span>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="d-flex align-items-center mb-3">
                      <i className="bi bi-check-circle-fill text-primary me-3"></i>
                      <span>Detailed reporting and analytics</span>
                    </div>
                    <div className="d-flex align-items-center mb-3">
                      <i className="bi bi-check-circle-fill text-primary me-3"></i>
                      <span>Secure data handling</span>
                    </div>
                    <div className="d-flex align-items-center mb-3">
                      <i className="bi bi-check-circle-fill text-primary me-3"></i>
                      <span>Dedicated support team</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Services Grid */}
            <div id="services" className="text-center mb-5">
              <h2 className="fw-bold mb-3" style={{ color: "#004C99" }}>Our Payroll Services</h2>
              <p className="text-muted mx-auto" style={{ maxWidth: "700px" }}>
                Comprehensive payroll solutions tailored to meet your organization's specific needs
              </p>
            </div>

            <div className="row g-4 mb-5">
              {payrollServices.map((service, index) => (
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
                  Ready to Streamline Your Payroll?
                </h3>
                <p className="lead mb-4 mx-auto" style={{ maxWidth: "600px" }}>
                  Contact us today for expert payroll services that ensure accuracy, compliance, and efficiency
                </p>
                
                <div className="d-flex justify-content-center gap-3 flex-wrap">
                  <a
                    href="https://wa.me/254755453975?text=Hello%20JP%20Alliance!%20I%20am%20interested%20in%20your%20Payroll%20Services."
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
                    <i className="bi bi-me-2"></i>
                    Inquire
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
                    Call Us
                  </a>
                </div>
                
                <div className="mt-4">
                  <small className="text-muted">
                    Or email us at: <a href="mailto:cmacharia482@gmail.com" className="text-primary">cmacharia482@gmail.com</a>
                  </small>
                </div>
              </div>
            </div>

            {/* Additional Info */}
            <div className="row mt-5 pt-4">
              <div className="col-md-6 mb-4">
                <div className="card border-0 shadow-sm h-100" style={{ borderRadius: "15px" }}>
                  <div className="card-body p-4">
                    <h5 className="fw-bold mb-3" style={{ color: "#004C99" }}>Why Choose Our Payroll Services?</h5>
                    <ul className="list-unstyled">
                      <li className="mb-2"><i className="bi bi-check-circle text-primary me-2"></i>Experienced payroll professionals</li>
                      <li className="mb-2"><i className="bi bi-check-circle text-primary me-2"></i>Up-to-date with Kenyan labor laws</li>
                      <li className="mb-2"><i className="bi bi-check-circle text-primary me-2"></i>Customized payroll solutions</li>
                      <li><i className="bi bi-check-circle text-primary me-2"></i>Confidential and secure service</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="col-md-6 mb-4">
                <div className="card border-0 shadow-sm h-100" style={{ borderRadius: "15px" }}>
                  <div className="card-body p-4">
                    <h5 className="fw-bold mb-3" style={{ color: "#004C99" }}>Benefits for Your Business</h5>
                    <div className="row">
                      <div className="col-6">
                        <ul className="list-unstyled">
                          <li className="mb-2"><i className="bi bi-arrow-right-circle text-primary me-2"></i>Time savings</li>
                          <li className="mb-2"><i className="bi bi-arrow-right-circle text-primary me-2"></i>Reduced errors</li>
                          <li className="mb-2"><i className="bi bi-arrow-right-circle text-primary me-2"></i>Compliance assured</li>
                        </ul>
                      </div>
                      <div className="col-6">
                        <ul className="list-unstyled">
                          <li className="mb-2"><i className="bi bi-arrow-right-circle text-primary me-2"></i>Client satisfaction</li>
                          <li className="mb-2"><i className="bi bi-arrow-right-circle text-primary me-2"></i>Cost efficiency</li>
                          <li className="mb-2"><i className="bi bi-arrow-right-circle text-primary me-2"></i>Better reporting</li>
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

export default Payroll;
