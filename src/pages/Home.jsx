import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const Home = () => {
  // Slideshow data
  const slides = [
    {
      image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1350&q=80",
      title: "Professional Audit Services",
      description: "Comprehensive financial audits with precision and integrity"
    },
    {
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1350&q=80",
      title: "Tax Advisory Experts",
      description: "Strategic tax planning to optimize your financial position"
    },
    {
      image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1350&q=80",
      title: "Business Growth Partners",
      description: "Financial advisory services to drive sustainable growth in the future"
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Core values data
  const coreValues = [
    {
      title: "Integrity",
      icon: "bi-shield-check",
      description: "We uphold the highest ethical standards in all our engagements"
    },
    {
      title: "Excellence",
      icon: "bi-award",
      description: "Commitment to delivering exceptional quality in our services"
    },
    {
      title: "Innovation",
      icon: "bi-lightbulb",
      description: "Creative solutions tailored to your unique business needs"
    },
    {
      title: "Professionalism",
      icon: "bi-person-badge",
      description: "Certified experts providing reliable financial guidance"
    }
  ];

  // Services data
  const services = [
    {
      title: "Audit & Assurance",
      description: "Comprehensive audit services ensuring financial accuracy",
      icon: "bi-file-earmark-check"
    },
    {
      title: "Tax Advisory",
      description: "Strategic tax planning and compliance services",
      icon: "bi-calculator"
    },
    {
      title: "Financial Advisory",
      description: "Expert guidance to optimize your financial performance and growth",
      icon: "bi-graph-up"
    },
    {
      title: "Accounting Services",
      description: "Professional bookkeeping and financial reporting services",
      icon: "bi-journal-bookmark"
    },
    {
      title: "Risk Management",
      description: "Identifying and mitigating financial risks to protect your business",
      icon: "bi-shield-exclamation"
    },
    {
      title: "Business Consulting",
      description: "Strategic advice to enhance your business operations",
      icon: "bi-briefcase"
    }
  ];

  // Stats data
  const stats = [
    { value: "15+", label: "Years Experience" },
    { value: "200+", label: "Clients Served" },
    { value: "98%", label: "Client Satisfaction" },
    { value: "12", label: "Professional Staff" }
  ];

  return (
    <div style={{ fontFamily: "'Quicksand', sans-serif" }}>
      {/* Hero Slideshow Section */}
      <section 
        className="text-white d-flex align-items-center" 
        style={{ 
          minHeight: "90vh",
          position: "relative",
          overflow: "hidden",
          borderRadius: " 20px 20px",
          margin: "0px 15px",
          boxShadow: "0 10px 30px rgba(0,0,0,0.1)"
        }}
      >
        {/* Background Slides */}
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`position-absolute w-100 h-100 transition-all ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
            style={{
              background: `linear-gradient(rgba(0, 71, 135, 0.8), rgba(0, 71, 135, 0.8)), url(${slide.image}) center/cover`,
              transition: "opacity 1.2s ease-in-out",
              borderRadius: "0 0 20px 20px"
            }}
          ></div>
        ))}
        
        {/* Slide Content */}
        <div className="container position-relative z-index-1 text-center py-5">
          <h2 
            className="fw-bold mb-4 animate-fade-in"
            style={{ 
              textShadow: "0 2px 4px rgba(0,0,0,0.74)",
              fontWeight: "100",
              fontSize: "2.2rem"
            }}
          >
            JP Alliance & Associates
          </h2>
          <p 
            className="lead mb-5 mx-auto animate-fade-in"
            style={{
              fontSize: "1.4rem",
              maxWidth: "700px",
              textShadow: "0 1px 3px rgba(0,0,0,0.3)"
            }}
          >
            {slides[currentSlide].description}
          </p>
          <div className="d-flex justify-content-center gap-3 animate-fade-in">
            <Link 
              to="/services" 
              className="btn btn-light btn-lg px-4 py-3 rounded-pill"
              style={{
                fontWeight: "600",
                letterSpacing: "0.5px",
                transition: "all 0.3s ease"
              }}
            >
              Our Services
            </Link>
            <Link 
              to="/contact" 
              className="btn btn-outline-light btn-lg px-4 py-3 rounded-pill"
              style={{
                fontWeight: "600",
                letterSpacing: "0.5px",
                transition: "all 0.3s ease"
              }}
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-5 bg-white">
        <div className="container">
          <div className="row text-center">
            {stats.map((stat, index) => (
              <div key={index} className="col-md-3 col-6 mb-4">
                <div className="animate-stat" style={{ animationDelay: `${index * 0.1}s` }}>
                  <h3 className="fw-bold text-primary mb-1">{stat.value}</h3>
                  <p className="text-muted mb-0">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <h3 className="fw-bold mb-4" style={{ color: "#004787" }}>
                About Our Firm
              </h3>
              <p className="lead mb-4">
                JP Alliance & Associates is a premier audit and financial advisory firm based in Nairobi, Kenya.
              </p>
              <p>
                With over 15 years of experience, we provide comprehensive financial solutions to businesses across East Africa. Our team of certified professionals is dedicated to helping clients navigate complex financial landscapes with confidence.
              </p>
              <p>
                We specialize in delivering tailored solutions that address the unique challenges faced by businesses in today's dynamic economic environment. Our client-centric approach ensures that we understand your specific needs and provide personalized services that drive growth and sustainability.
              </p>
              <Link 
                to="/about" 
                className="btn btn-primary mt-3 px-4 py-2 rounded-pill"
                style={{
                  fontWeight: "600",
                  backgroundColor: "#004787",
                  border: "none",
                  transition: "all 0.3s ease"
                }}
              >
                Learn More About Us
              </Link>
            </div>
            <div className="col-lg-6">
              <div className="position-relative">
                <img
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1350&q=80"
                  alt="Our Office"
                  className="img-fluid rounded shadow-lg"
                  style={{ border: "5px solid white" }}
                />
                <div className="position-absolute bottom-0 start-0 bg-primary text-white p-3 rounded-end" style={{zIndex: 5}}>
                  <h5 className="mb-0">Since 2008</h5>
                  <p className="mb-0">Serving Kenyan Businesses</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-5" style={{ backgroundColor: "#f8f9fa" }}>
        <div className="container">
          <div className="text-center mb-5">
            <h3 className="fw-bold" style={{ color: "#004787" }}>Our Core Values</h3>
            <p className="text-muted">The principles that guide our work</p>
          </div>
          <div className="row g-4">
            {coreValues.map((value, index) => (
              <div key={index} className="col-md-3 col-sm-6">
                <div 
                  className="card h-100 border-0 shadow-sm p-4 text-center hover-card"
                  style={{
                    transition: "all 0.3s ease",
                    borderRadius: "15px"
                  }}
                >
                  <div className="card-body">
                    <div className="icon-wrapper mb-3">
                      <i className={`bi ${value.icon} text-primary`} style={{ fontSize: "2.5rem" }}></i>
                    </div>
                    <h5 className="card-title fw-bold mb-3" style={{ color: "#004787" }}>{value.title}</h5>
                    <p className="card-text">{value.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-5 bg-white">
        <div className="container">
          <div className="text-center mb-5">
            <h3 className="fw-bold" style={{ color: "#004787" }}>Our Services</h3>
            <p className="text-muted">Comprehensive financial solutions for your business</p>
          </div>
          <div className="row g-4">
            {services.map((service, index) => (
              <div key={index} className="col-lg-4 col-md-6">
                <div 
                  className="card h-100 border-0 shadow-sm p-4 hover-card"
                  style={{
                    transition: "all 0.3s ease",
                    borderRadius: "15px"
                  }}
                >
                  <div className="card-body text-center">
                    <div className="icon-wrapper mb-3">
                      <i className={`bi ${service.icon} text-primary`} style={{ fontSize: "2rem" }}></i>
                    </div>
                    <h5 className="card-title fw-bold mb-3" style={{ color: "#004787" }}>{service.title}</h5>
                    <p className="card-text mb-4">{service.description}</p>
                    <Link 
                      to="/services" 
                      className="btn btn-outline-primary px-3 rounded-pill"
                      style={{
                        fontWeight: "600",
                        borderColor: "#004787",
                        color: "#004787",
                        transition: "all 0.3s ease"
                      }}
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Preview */}
      <section className="py-5 bg-light">
        <div className="container text-center">
          <h3 className="fw-bold mb-4" style={{ color: "#004787" }}>Client Testimonials</h3>
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="card border-0 shadow-sm p-4">
                <div className="card-body">
                  <i className="bi bi-chat-quote text-primary" style={{ fontSize: "2rem" }}></i>
                  <p className="fst-italic my-4">
                    "JP Alliance & Associates transformed our financial systems and helped us achieve 30% growth in just one year. Their expertise in tax planning saved us significant costs."
                  </p>
                  <div className="d-flex align-items-center justify-content-center">
                    <img 
                      src="https://randomuser.me/api/portraits/men/41.jpg" 
                      alt="Client" 
                      className="rounded-circle me-3"
                      style={{ width: "50px", height: "50px", objectFit: "cover" }}
                    />
                    <div>
                      <h6 className="mb-0">James Kimani</h6>
                      <small className="text-muted">CEO, Nairobi Enterprises</small>
                    </div>
                  </div>
                </div>
              </div>
              <Link to="/testimonials" className="btn btn-outline-primary mt-4 rounded-pill">
                Read More Testimonials
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section 
        className="py-5 text-white text-center"
        style={{ 
          background: "linear-gradient(135deg, #004787 0%, #003366 100%)",
          fontFamily: "'Quicksand', sans-serif",
          borderRadius: "20px 20px",
          margin: " 15px"
        }}
      >
        <div className="container py-4">
          <h3 className="fw-bold mb-4">Ready to Grow Your Business?</h3>
          <p className="lead mb-5 mx-auto" style={{ maxWidth: "700px" }}>
            Partner with our team of financial experts to take your business to the next level.
          </p>
          <div className="d-flex justify-content-center gap-3 flex-wrap">
            <Link 
              to="/contact" 
              className="btn btn-light btn-lg px-4 py-3 rounded-pill"
              style={{
                fontWeight: "600",
                letterSpacing: "0.5px",
                transition: "all 0.3s ease"
              }}
            >
              Get a Consultation
            </Link>
            <a 
              href="tel:+254755453975" 
              className="btn btn-outline-light btn-lg px-4 py-3 rounded-pill"
              style={{
                fontWeight: "600",
                letterSpacing: "0.5px",
                transition: "all 0.3s ease"
              }}
            >
              <i className="bi bi-telephone me-2"></i> Call us
            </a>
            <a 
              href="mailto:cmacharia482@gmail.com" 
              className="btn btn-outline-light btn-lg px-4 py-3 rounded-pill"
              style={{
                fontWeight: "600",
                letterSpacing: "0.5px",
                transition: "all 0.3s ease"
              }}
            >
              <i className="bi bi-envelope me-2"></i> Email
            </a>
          </div>
        </div>
      </section>

      {/* CSS */}
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@400;500;600;700&display=swap');
          
          .transition-all {
            transition: all 1s ease-in-out;
          }
          .opacity-100 {
            opacity: 1;
          }
          .opacity-0 {
            opacity: 0;
          }
          .z-index-1 {
            z-index: 1;
          }
          .hover-card:hover {
            transform: translateY(-8px);
            box-shadow: 0 15px 30px rgba(0,0,0,0.1) !important;
          }
          .hover-card:hover .card-text,
          .hover-card:hover .card-title {
            opacity: 1 !important;
          }
          .btn-light:hover {
            background-color: #fff !important;
            transform: translateY(-2px);
            box-shadow: 0 4px 8px rgba(0,0,0,0.1);
          }
          .btn-outline-light:hover {
            background-color: rgba(255,255,255,0.1) !important;
            transform: translateY(-2px);
          }
          .btn-primary:hover {
            background-color: #003366 !important;
            transform: translateY(-2px);
            box-shadow: 0 4px 8px rgba(0,0,0,0.1);
          }
          .btn-outline-primary:hover {
            background-color: #004787 !important;
            color: white !important;
            transform: translateY(-2px);
          }
          
          /* Animations */
          .animate-fade-in {
            opacity: 0;
            animation: fadeIn 1.5s ease-out forwards;
            animation-delay: 0.3s;
          }
          
          .animate-stat {
            opacity: 0;
            animation: fadeInUp 1s ease-out forwards;
          }
          
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          
          @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(30px); }
            to { opacity: 1; transform: translateY(0); }
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

export default Home;