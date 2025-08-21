import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [partnerIndex, setPartnerIndex] = useState(0);

  useEffect(() => {
    const testimonialInterval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);

    const partnerInterval = setInterval(() => {
      setPartnerIndex((prevIndex) => (prevIndex + 1) % partners.length);
    }, 3000);

    return () => {
      clearInterval(testimonialInterval);
      clearInterval(partnerInterval);
    };
  }, []);

  const testimonials = [
    {
      id: 1,
      text: "JP Alliance & Associates have been instrumental in helping us streamline our financial processes. Their professionalism and expertise are unmatched in the industry.",
      author: "Mary Wanjiku",
      role: "CEO, Nairobi Enterprises",
      avatar: "https://randomuser.me/api/portraits/women/65.jpg",
      company: "Nairobi Enterprises Ltd"
    },
    {
      id: 2,
      text: "Their auditing services are thorough and reliable. We feel confident in our compliance thanks to their dedicated team's attention to detail and expertise.",
      author: "John Kamau",
      role: "Chief Financial Officer",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      company: "Kenya Commercial Group"
    },
    {
      id: 3,
      text: "The consulting team provided us with clear strategies that helped our company achieve 30% growth in just one year. Highly recommended!",
      author: "Grace Mwende",
      role: "Managing Director",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
      company: "Innovate Africa Solutions"
    }
  ];

  const partners = [
    {
      id: 1,
      name: "Safaricom PLC",
      initial: "S",
      description: "Telecommunications Partner",
      color: "#FF6B00"
    },
    {
      id: 2,
      name: "Equity Bank Kenya",
      initial: "E",
      description: "Banking & Financial Services",
      color: "#00A86B"
    },
    {
      id: 3,
      name: "KPMG Africa",
      initial: "K",
      description: "Global Audit & Advisory",
      color: "#FF0000"
    },
    {
      id: 4,
      name: "Kenya Revenue Authority",
      initial: "KRA",
      description: "Tax Compliance Partner",
      color: "#0066CC"
    },
    {
      id: 5,
      name: "Nairobi Securities Exchange",
      initial: "NSE",
      description: "Capital Markets Partner",
      color: "#004C99"
    }
  ];

  const stats = [
    { value: "98%", label: "Client Satisfaction Rate", icon: "bi-emoji-smile" },
    { value: "200+", label: "Clients Served", icon: "bi-people" },
    { value: "15+", label: "Years Experience", icon: "bi-award" },
    { value: "12", label: "Professional Staff", icon: "bi-person-badge" }
  ];

  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="testimonials-page" style={{ fontFamily: "'Quicksand', sans-serif" }}>
      {/* Hero Section */}
      <section 
        className="text-white py-5 text-center" 
        style={{ 
          background: "linear-gradient(rgba(0, 76, 153, 0.85), rgba(0, 76, 153, 0.9)), url('/youth.png') center/cover no-repeat",
          backgroundSize: "cover"
        }}
      >
        <div className="container py-4">
          <h1 className="display-5 fw-bold mb-3">Client Testimonials</h1>
          <p className="lead mx-auto" style={{ maxWidth: "700px", fontWeight: "500" }}>
            Discover why leading businesses trust JP Alliance & Associates for their financial success
          </p>
        </div>
      </section>

      {/* Testimonials Content */}
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            {/* Testimonial Card */}
            <div 
              className="card border-0 shadow-lg testimonial-card mx-auto"
              style={{ 
                borderRadius: "20px",
                maxWidth: "800px",
                background: "linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)"
              }}
            >
              <div className="card-body p-5 text-center">
                <div className="quote-icon mb-4">
                  <i className="bi bi-chat-quote text-primary" style={{ fontSize: "3rem", opacity: "0.8" }}></i>
                </div>
                <p className="card-text fs-5 fst-italic mb-4 text-dark" style={{ lineHeight: "1.8", fontWeight: "500" }}>
                  "{testimonials[activeIndex].text}"
                </p>
                <div className="client-info d-flex align-items-center justify-content-center mt-4">
                  <img 
                    src={testimonials[activeIndex].avatar} 
                    alt={testimonials[activeIndex].author}
                    className="rounded-circle me-3 shadow-sm"
                    style={{ 
                      width: "70px", 
                      height: "70px", 
                      objectFit: "cover",
                      border: "3px solid #004C99"
                    }}
                  />
                  <div className="text-start">
                    <h5 className="card-title mb-1 fw-bold text-dark">{testimonials[activeIndex].author}</h5>
                    <p className="text-primary mb-1 fw-medium">{testimonials[activeIndex].role}</p>
                    <p className="text-muted mb-0 small">{testimonials[activeIndex].company}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Controls */}
            <div className="d-flex justify-content-center align-items-center mt-4">
              <button 
                className="btn btn-outline-primary rounded-circle me-3 d-flex align-items-center justify-content-center"
                onClick={prevTestimonial}
                style={{ 
                  width: "50px", 
                  height: "50px",
                  borderWidth: "2px"
                }}
              >
                <i className="bi bi-chevron-left"></i>
              </button>
              
              {/* Indicators */}
              <div className="d-flex">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    className={`btn p-0 mx-2 ${index === activeIndex ? 'active' : ''}`}
                    onClick={() => setActiveIndex(index)}
                    style={{ 
                      width: "12px", 
                      height: "12px", 
                      borderRadius: "50%",
                      transition: "all 0.3s ease"
                    }}
                  >
                    <div 
                      className="rounded-circle"
                      style={{ 
                        width: "100%", 
                        height: "100%", 
                        backgroundColor: index === activeIndex ? "#004C99" : "#dee2e6",
                        transform: index === activeIndex ? "scale(1.2)" : "scale(1)"
                      }}
                    ></div>
                  </button>
                ))}
              </div>
              
              <button 
                className="btn btn-outline-primary rounded-circle ms-3 d-flex align-items-center justify-content-center"
                onClick={nextTestimonial}
                style={{ 
                  width: "50px", 
                  height: "50px",
                  borderWidth: "2px"
                }}
              >
                <i className="bi bi-chevron-right"></i>
              </button>
            </div>
          </div>
        </div>

        {/* Partners Slideshow */}
        <div className="row mt-5 pt-5">
          <div className="col-12 text-center mb-4">
            <h3 className="fw-bold" style={{ color: "#004C99" }}>Our Valued Partners</h3>
            <p className="text-muted">Collaborating with industry leaders to deliver exceptional service</p>
          </div>
          <div className="col-12">
            <div className="card border-0 shadow-sm p-4" style={{ borderRadius: "15px", backgroundColor: "#f8f9fa" }}>
              <div className="row align-items-center justify-content-center">
                <div className="col-lg-8 mx-auto">
                  <div className="text-center">
                    <div 
                      className="partner-logo mx-auto mb-3 d-flex align-items-center justify-content-center"
                      style={{
                        width: "80px",
                        height: "80px",
                        borderRadius: "12px",
                        backgroundColor: partners[partnerIndex].color,
                        color: "white",
                        fontSize: "1.5rem",
                        fontWeight: "bold",
                        transition: "all 0.5s ease"
                      }}
                    >
                      {partners[partnerIndex].initial}
                    </div>
                    <h5 className="fw-bold text-dark mb-2">{partners[partnerIndex].name}</h5>
                    <p className="text-muted mb-0">{partners[partnerIndex].description}</p>
                    <div className="d-flex justify-content-center mt-3">
                      {partners.map((_, index) => (
                        <div
                          key={index}
                          className={`mx-1 ${index === partnerIndex ? 'active' : ''}`}
                          style={{ 
                            width: "8px", 
                            height: "8px", 
                            borderRadius: "50%",
                            backgroundColor: index === partnerIndex ? "#004C99" : "#ccc",
                            transition: "all 0.3s ease",
                            cursor: "pointer"
                          }}
                          onClick={() => setPartnerIndex(index)}
                        ></div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Multiple Partners Grid */}
        <div className="row mt-4">
          <div className="col-12">
            <div className="text-center mb-4">
              <h5 className="fw-bold text-muted">Trusted by Leading Organizations</h5>
            </div>
            <div className="row justify-content-center">
              {partners.slice(0, 4).map((partner) => (
                <div key={partner.id} className="col-md-3 col-6 mb-3">
                  <div className="text-center p-3">
                    <div 
                      className="partner-badge mx-auto mb-2 d-flex align-items-center justify-content-center"
                      style={{
                        width: "60px",
                        height: "60px",
                        borderRadius: "10px",
                        backgroundColor: partner.color,
                        color: "white",
                        fontSize: "1.1rem",
                        fontWeight: "bold"
                      }}
                    >
                      {partner.initial}
                    </div>
                    <h6 className="fw-bold text-dark mb-1">{partner.name}</h6>
                    <small className="text-muted">{partner.description}</small>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="row text-center mt-5 pt-5">
          {stats.map((stat, index) => (
            <div key={index} className="col-md-3 col-6 mb-4">
              <div className="p-4 border-0 rounded" style={{ backgroundColor: "#f8f9fa" }}>
                <i className={`bi ${stat.icon} text-primary display-4 mb-3`}></i>
                <h3 className="fw-bold text-primary mb-2">{stat.value}</h3>
                <p className="text-muted mb-0 fw-medium">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-5 pt-4">
          <h3 className="fw-bold mb-4" style={{ color: "#004C99" }}>Experience the JP Alliance Difference</h3>
          <p className="lead mb-4 mx-auto" style={{ maxWidth: "700px", fontWeight: "500" }}>
            Join our community of satisfied clients and discover how our expertise can transform your business
          </p>
          <div className="d-flex justify-content-center gap-3 flex-wrap">
            <Link 
              to="/contact" 
              className="btn btn-primary px-4 py-3 rounded-pill fw-bold"
              style={{
                backgroundColor: "#004C99",
                border: "none",
                transition: "all 0.3s ease",
                minWidth: "200px"
              }}
            >
              Start Your Journey
            </Link>
            <Link 
              to="/services" 
              className="btn btn-outline-primary px-4 py-3 rounded-pill fw-bold"
              style={{
                borderColor: "#004C99",
                color: "#004C99",
                transition: "all 0.3s ease",
                minWidth: "200px"
              }}
            >
              Explore Services
            </Link>
          </div>
        </div>
      </div>

      {/* CSS */}
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@400;500;600;700&display=swap');
          
          .testimonial-card {
            transition: all 0.5s ease;
            border: 1px solid rgba(0, 76, 153, 0.1);
          }
          
          .testimonial-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 20px 40px rgba(0,0,0,0.15) !important;
          }
          
          .btn-outline-primary:hover {
            background-color: #004C99 !important;
            color: white !important;
            transform: translateY(-2px);
          }
          
          .btn-primary:hover {
            background-color: #003366 !important;
            transform: translateY(-2px);
            box-shadow: 0 8px 20px rgba(0,0,0,0.2);
          }
          
          .quote-icon {
            opacity: 0.9;
          }
          
          .partner-logo {
            box-shadow: 0 4px 15px rgba(0,0,0,0.1);
          }
          
          .partner-badge {
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
            transition: transform 0.3s ease;
          }
          
          .partner-badge:hover {
            transform: scale(1.1);
          }
        `}
      </style>
    </div>
  );
};

export default Testimonials;





