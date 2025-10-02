import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const About = () => {
  // Core values data - Updated to match your profile
  const coreValues = [
    {
      title: "Excellence",
      icon: "bi-award",
      description: "With efficiency and diligence, carry out tasks to attain utmost excellence in our service delivery"
    },
    {
      title: "Integrity",
      icon: "bi-shield-check",
      description: "Demonstrate high standards of honesty, reliability and confidentiality in all engagements"
    },
    {
      title: "Teamwork",
      icon: "bi-people",
      description: "Working together as a team with unity of purpose to achieve our mission effectively"
    },
    {
      title: "Responsibility",
      icon: "bi-check-circle",
      description: "Being accountable for every action and efficiently utilizing resources to meet client needs"
    }
  ];

  // Team stats - Updated to match your data
  const stats = [
    { value: "15+", label: "Years Experience" },
    { value: "30+", label: "Clients Served" },
    { value: "8", label: "Professional Staff" },
    { value: "98%", label: "Client Satisfaction" }
  ];

  return (
    <div className="about-page" style={{ fontFamily: "'Quicksand', sans-serif" }}>
      {/* Hero Section */}
      <section 
        className="text-white py-5 text-center position-relative" 
        style={{ 
          background: "linear-gradient(rgba(0, 76, 153, 0.85), rgba(0, 76, 150, 0.5)), url('/corp.jpg') center/cover no-repeat",
          minHeight: "60vh",
          display: "flex",
          alignItems: "center"
        }}
      >
        <div className="container py-4 position-relative z-index-1">
          <h1 className="display-5 fw-bold mb-3">About JP Alliance</h1>
          <p className="lead mx-auto mb-4" style={{ maxWidth: "700px", fontSize: "1.2rem" }}>
            Independent firm of Certified Public Accountants with expertise in audit and assurance, tax advisory and business consulting
          </p>
        </div>
      </section>

      {/* Company Overview */}
      <div className="container py-5">
        <div className="row align-items-center mb-5">
          <div className="col-lg-6 mb-4 mb-lg-0">
            <div className="position-relative">
              <img
                src="trust.jpg"
                alt="JP Alliance Office"
                className="img-fluid rounded shadow"
                loading="lazy"
                style={{ border: "4px solid white" }}
              />
              <div className="position-absolute bottom-0 start-0 bg-primary text-white p-3 rounded-end">
                <h5 className="mb-0" style={{ fontWeight: 600 }}>Since 2008</h5>
                <p className="mb-0" style={{ fontSize: "0.9rem" }}>Serving Kenyan Businesses</p>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <h3 className="mb-4" style={{ color: "#004787", fontWeight: 600 }}>Who We Are</h3>
            <p className="mb-4" style={{ lineHeight: "1.7" }}>
              JP Alliance & Associates is an independent firm of Certified Public Accountants with expertise in audit and assurance, tax advisory and business consulting. Registered by The Institute of Certified Public Accountants of Kenya (ICPAK), we are mandated to conduct audit and assurance, tax advisory, and business consulting services.
            </p>
            <p className="mb-4" style={{ lineHeight: "1.7" }}>
              Our professional team of 8 staff is well trained in providing independent audit, assurance and advisory services across all sectors. We have in-depth knowledge of the regional business environment and significant experience with both Small and Medium Entities and Private Companies with public interest.
            </p>
            <p className="mb-4" style={{ lineHeight: "1.7" }}>
              We specialize in delivering tailored solutions that address the unique challenges faced by businesses in today's dynamic economic environment, ensuring financial accuracy and sustainable growth.
            </p>
          </div>
        </div>

        {/* Stats Section */}
        <div className="row text-center mb-5">
          {stats.map((stat, index) => (
            <div key={index} className="col-md-3 col-6 mb-4">
              <div className="p-4 border-0 rounded shadow-sm bg-light">
                <h3 className="fw-bold text-primary mb-2" style={{ fontSize: "2.2rem" }}>{stat.value}</h3>
                <p className="text-muted mb-0">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Mission & Vision */}
        <div className="row mb-5">
          <div className="col-md-6 mb-4">
            <div 
              className="card border-0 shadow-sm h-100"
              style={{
                background: "linear-gradient(135deg, #004787 0%, #003366 100%)",
                color: "white",
                borderRadius: "15px",
                transition: "transform 0.2s ease, box-shadow 0.2s ease"
              }}
            >
              <div className="card-body p-4 text-center">
                <i className="bi bi-bullseye display-4 mb-3"></i>
                <h4 className="fw-bold mb-3">Our Mission</h4>
                <p className="mb-0" style={{ lineHeight: "1.6" }}>
                  We offer a service that is full of profundity and analytical precision to enable us meet our stakeholder's expectations and goals while at the same time ensuring our staff grow in skill and grace.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6 mb-4">
            <div 
              className="card border-0 shadow-sm h-100"
              style={{
                background: "linear-gradient(135deg, #0066CC 0%, #004787 100%)",
                color: "white",
                borderRadius: "15px",
                transition: "transform 0.2s ease, box-shadow 0.2s ease"
              }}
            >
              <div className="card-body p-4 text-center">
                <i className="bi bi-eye display-4 mb-3"></i>
                <h4 className="fw-bold mb-3">Our Vision</h4>
                <p className="mb-0" style={{ lineHeight: "1.6" }}>
                  To be the firm of choice providing excellent financial business solutions in Africa and beyond.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div className="mb-5">
          <div className="text-center mb-5">
            <h3 style={{ color: "#004787", fontWeight: 600 }}>Our Core Values</h3>
            <div className="heading-underline mx-auto mb-3"></div>
            <p className="text-muted">The principles that guide our work and client relationships</p>
          </div>
          <div className="row g-4">
            {coreValues.map((value, index) => (
              <div key={index} className="col-md-3 col-sm-6">
                <div 
                  className="card h-100 border-0 shadow-sm p-4 text-center"
                  style={{
                    borderRadius: "15px",
                    transition: "transform 0.2s ease, box-shadow 0.2s ease"
                  }}
                >
                  <div className="card-body">
                    <div className="icon-wrapper mb-3">
                      <i className={`bi ${value.icon} text-primary`} style={{ fontSize: "2.2rem" }}></i>
                    </div>
                    <h5 className="card-title mb-3" style={{ color: "#004787", fontWeight: 600 }}>{value.title}</h5>
                    <p className="card-text" style={{ lineHeight: "1.6" }}>{value.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="row mb-5">
          <div className="col-12">
            <div className="card border-0 shadow-sm p-5" style={{ backgroundColor: "#f8f9fa", borderRadius: "15px" }}>
              <div className="text-center mb-4">
                <h3 style={{ color: "#004787", fontWeight: 600 }}>Why Choose JP Alliance?</h3>
                <div className="heading-underline mx-auto mb-3"></div>
              </div>
              <div className="row">
                <div className="col-md-6 mb-3">
                  <div className="d-flex align-items-start">
                    <i className="bi bi-check-circle-fill text-primary me-3 mt-1"></i>
                    <div>
                      <h6 className="fw-bold">ICPAK Registered</h6>
                      <p className="text-muted mb-0">Officially registered and mandated by The Institute of Certified Public Accountants of Kenya</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 mb-3">
                  <div className="d-flex align-items-start">
                    <i className="bi bi-check-circle-fill text-primary me-3 mt-1"></i>
                    <div>
                      <h6 className="fw-bold">Certified Professionals</h6>
                      <p className="text-muted mb-0">Team of 8 qualified staff with decades of combined experience</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 mb-3">
                  <div className="d-flex align-items-start">
                    <i className="bi bi-check-circle-fill text-primary me-3 mt-1"></i>
                    <div>
                      <h6 className="fw-bold">Sector Expertise</h6>
                      <p className="text-muted mb-0">Deep knowledge across all sectors including SMEs and private companies</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 mb-3">
                  <div className="d-flex align-items-start">
                    <i className="bi bi-check-circle-fill text-primary me-3 mt-1"></i>
                    <div>
                      <h6 className="fw-bold">Quality Assurance</h6>
                      <p className="text-muted mb-0">Regular staff training and independent review of all assignments</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 mb-3">
                  <div className="d-flex align-items-start">
                    <i className="bi bi-check-circle-fill text-primary me-3 mt-1"></i>
                    <div>
                      <h6 className="fw-bold">International Standards</h6>
                      <p className="text-muted mb-0">Compliance with IFRS and International Auditing Standards</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 mb-3">
                  <div className="d-flex align-items-start">
                    <i className="bi bi-check-circle-fill text-primary me-3 mt-1"></i>
                    <div>
                      <h6 className="fw-bold">Client-Centric Approach</h6>
                      <p className="text-muted mb-0">Tailored solutions addressing unique business challenges</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Closing CTA */}
        <div className="text-center py-4">
          <h4 className="fw-bold mb-4" style={{ color: "#004787" }}>
            Ready to Experience the JP Alliance Difference?
          </h4>
          <p className="lead mb-4" style={{ maxWidth: "700px", margin: "0 auto" }}>
            Partner with our team of certified financial experts to navigate complex financial landscapes with confidence.
          </p>
          <div className="d-flex justify-content-center gap-3 flex-wrap">
            <Link 
              to="/contact" 
              className="btn btn-primary px-4 py-2 rounded-pill"
              style={{
                fontWeight: "600",
                backgroundColor: "#004787",
                border: "none",
                transition: "all 0.3s ease"
              }}
            >
              Get Started Today
            </Link>
            <Link 
              to="/services" 
              className="btn btn-outline-primary px-4 py-2 rounded-pill"
              style={{
                fontWeight: "600",
                borderColor: "#004787",
                color: "#004787",
                transition: "all 0.3s ease"
              }}
            >
              Explore Our Services
            </Link>
          </div>
        </div>
      </div>

      {/* CSS */}
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@400;500;600;700&display=swap');
          
          .card:hover {
            transform: translateY(-5px);
            box-shadow: 0 12px 25px rgba(0,0,0,0.15) !important;
          }
          
          .btn-primary:hover {
            background-color: #003366 !important;
            transform: translateY(-2px);
          }
          
          .btn-outline-primary:hover {
            background-color: #004787 !important;
            color: white !important;
            transform: translateY(-2px);
          }
          
          .icon-wrapper {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            width: 60px;
            height: 60px;
            background: rgba(0, 76, 135, 0.08);
            border-radius: 50%;
            transition: all 0.3s ease;
          }
          
          .card:hover .icon-wrapper {
            transform: scale(1.1);
            background: rgba(0, 76, 135, 0.15);
          }
          
          .heading-underline { 
            width: 60px; 
            height: 3px; 
            background: #004787; 
            border-radius: 2px; 
          }

          /* Reduced motion for accessibility */
          @media (prefers-reduced-motion: reduce) {
            .card,
            .btn-primary,
            .btn-outline-primary,
            .icon-wrapper {
              transition: none !important;
              transform: none !important;
            }
          }
        `}
      </style>
    </div>
  );
};

export default About;