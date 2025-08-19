import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const About = () => {
  // Core values data
  const coreValues = [
    {
      title: "Integrity",
      icon: "bi-shield-check",
      description: "Upholding honesty and transparency in every service we provide."
    },
    {
      title: "Excellence",
      icon: "bi-award",
      description: "Delivering top-quality results through professionalism and dedication."
    },
    {
      title: "Client Focus",
      icon: "bi-people",
      description: "Building lasting relationships through personalized solutions."
    },
    {
      title: "Innovation",
      icon: "bi-lightbulb",
      description: "Continuously improving with modern strategies and tools."
    }
  ];

  // Team stats
  const stats = [
    { value: "15+", label: "Years Experience" },
    { value: "200+", label: "Clients Served" },
    { value: "98%", label: "Client Satisfaction" },
    { value: "12", label: "Professional Staff" }
  ];

  return (
    <div className="about-page" style={{ fontFamily: "'Quicksand', sans-serif" }}>
      {/* Hero Section */}
      <section 
        className="text-white py-5 text-center" 
        style={{ 
          background: "linear-gradient(135deg, #0066CC 0%, #004C99 100%)"
        }}
      >
        <div className="container py-4">
          <h1 className="display-5 fw-bold mb-3">About Us</h1>
          <p className="lead mx-auto" style={{ maxWidth: "700px" }}>
            Learn more about who we are, our mission, and what drives us to deliver excellence
          </p>
        </div>
      </section>

      {/* Company Overview */}
      <div className="container py-5">
        <div className="row align-items-center mb-5">
          <div className="col-lg-6 mb-4 mb-lg-0">
            <div className="position-relative">
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1350&q=80"
                alt="JP Alliance Office"
                className="img-fluid rounded shadow-lg"
                style={{ border: "5px solid white" }}
              />
              <div className="position-absolute top-0 start-0 bg-primary text-white p-3 rounded-end">
                <h5 className="mb-0">Since 2008</h5>
                <p className="mb-0">Trusted Financial Partners</p>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <h3 className="fw-bold mb-4" style={{ color: "#004C99" }}>Who We Are</h3>
            <p className="lead mb-4">
              JP Alliance & Associates is a premier audit and financial advisory firm based in Nairobi, Kenya.
            </p>
            <p className="mb-4">
              With over 15 years of experience, we provide comprehensive financial solutions to businesses across East Africa. Our team of certified professionals is dedicated to helping clients navigate complex financial landscapes with confidence and clarity.
            </p>
            <p className="mb-4">
              We specialize in delivering tailored solutions that address the unique challenges faced by businesses in today's dynamic economic environment. Our client-centric approach ensures that we understand your specific needs and provide personalized services that drive growth and sustainability.
            </p>
          </div>
        </div>

        {/* Stats Section */}
        <div className="row text-center mb-5">
          {stats.map((stat, index) => (
            <div key={index} className="col-md-3 col-6 mb-4">
              <div className="p-4 border-0 rounded shadow-sm" style={{ backgroundColor: "#f8f9fa" }}>
                <h3 className="fw-bold text-primary mb-2">{stat.value}</h3>
                <p className="text-muted mb-0">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Mission & Vision */}
        <div className="row mb-5">
          <div className="col-md-6 mb-4">
            <div 
              className="card border-0 shadow-sm h-100 hover-card"
              style={{
                background: "linear-gradient(135deg, #004C99 0%, #003366 100%)",
                color: "white",
                borderRadius: "15px"
              }}
            >
              <div className="card-body p-4 text-center">
                <i className="bi bi-bullseye display-4 mb-3"></i>
                <h4 className="fw-bold mb-3">Our Mission</h4>
                <p className="mb-0">
                  To empower businesses and individuals with trustworthy financial solutions, 
                  helping them achieve sustainable growth while maintaining the highest ethical standards.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6 mb-4">
            <div 
              className="card border-0 shadow-sm h-100 hover-card"
              style={{
                background: "linear-gradient(135deg, #0066CC 0%, #004C99 100%)",
                color: "white",
                borderRadius: "15px"
              }}
            >
              <div className="card-body p-4 text-center">
                <i className="bi bi-eye display-4 mb-3"></i>
                <h4 className="fw-bold mb-3">Our Vision</h4>
                <p className="mb-0">
                  To be a leading audit and advisory firm recognized for innovation, 
                  accuracy, and dedication to client success across Kenya and beyond.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div className="mb-5">
          <div className="text-center mb-5">
            <h3 className="fw-bold" style={{ color: "#004C99" }}>Our Core Values</h3>
            <p className="text-muted">The principles that guide everything we do</p>
          </div>
          <div className="row">
            {coreValues.map((value, index) => (
              <div key={index} className="col-md-3 col-sm-6 mb-4">
                <div 
                  className="card border-0 shadow-sm p-4 text-center h-100 hover-card"
                  style={{ borderRadius: "15px" }}
                >
                  <div className="card-body">
                    <div className="icon-wrapper mb-3">
                      <i className={`bi ${value.icon} text-primary`} style={{ fontSize: "2.5rem" }}></i>
                    </div>
                    <h5 className="card-title fw-bold mb-3" style={{ color: "#004C99" }}>{value.title}</h5>
                    <p className="card-text">{value.description}</p>
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
                <h3 className="fw-bold" style={{ color: "#004C99" }}>Why Choose JP Alliance?</h3>
              </div>
              <div className="row">
                <div className="col-md-6 mb-3">
                  <div className="d-flex align-items-start">
                    <i className="bi bi-check-circle-fill text-primary me-3 mt-1"></i>
                    <div>
                      <h6 className="fw-bold">Certified Professionals</h6>
                      <p className="text-muted mb-0">Our team consists of qualified CPAs and financial experts</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 mb-3">
                  <div className="d-flex align-items-start">
                    <i className="bi bi-check-circle-fill text-primary me-3 mt-1"></i>
                    <div>
                      <h6 className="fw-bold">Personalized Service</h6>
                      <p className="text-muted mb-0">Tailored solutions for your unique business needs</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 mb-3">
                  <div className="d-flex align-items-start">
                    <i className="bi bi-check-circle-fill text-primary me-3 mt-1"></i>
                    <div>
                      <h6 className="fw-bold">Proven Track Record</h6>
                      <p className="text-muted mb-0">15+ years of delivering exceptional results</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 mb-3">
                  <div className="d-flex align-items-start">
                    <i className="bi bi-check-circle-fill text-primary me-3 mt-1"></i>
                    <div>
                      <h6 className="fw-bold">Comprehensive Solutions</h6>
                      <p className="text-muted mb-0">Full range of financial and advisory services</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Closing CTA */}
        <div className="text-center py-4">
          <h4 className="fw-bold mb-4" style={{ color: "#004C99" }}>
            Ready to Experience the JP Alliance Difference?
          </h4>
          <p className="lead mb-4">
            Let's work together to achieve your financial goals and drive your business forward.
          </p>
          <div className="d-flex justify-content-center gap-3 flex-wrap">
            <Link 
              to="/contact" 
              className="btn btn-primary px-4 py-2 rounded-pill"
              style={{
                fontWeight: "600",
                backgroundColor: "#004C99",
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
                borderColor: "#004C99",
                color: "#004C99",
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
          
          .hover-card {
            transition: all 0.3s ease;
          }
          .hover-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 10px 20px rgba(0,0,0,0.1) !important;
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
          .icon-wrapper {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            width: 70px;
            height: 70px;
            background: rgba(0, 76, 135, 0.1);
            border-radius: 50%;
            transition: all 0.3s ease;
          }
          .hover-card:hover .icon-wrapper {
            transform: scale(1.1);
            background: rgba(0, 76, 135, 0.2);
          }
        `}
      </style>
    </div>
  );
};

export default About;