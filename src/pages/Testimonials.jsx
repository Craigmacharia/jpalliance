import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isTextVisible, setIsTextVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTextVisible(false);
      setTimeout(() => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
        setIsTextVisible(true);
      }, 300);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const testimonials = [
    {
      id: 1,
      text: "JP Alliance & Associates have been instrumental in helping us streamline our financial processes. Their professionalism and attention to detail in audit services have significantly improved our finances.",
      author: "Highlands Mineral Water",
      role: "Manufacturing - Soft Drinks",
      avatar: "hl.jpg",
      logo: "hl.jpg"
    },
    {
      id: 2,
      text: "Their auditing services are thorough and reliable. We feel confident in our compliance thanks to their dedicated team. The risk-based approach added real value to our operations.",
      author: "Motorfit Limited",
      role: "Automobile Garage Services",
      avatar: "gr.jpg",
      logo: "gr.jpg"
    },
    {
      id: 3,
      text: "The consulting team provided us with clear strategies that helped our company grow sustainably. Their financial advisory services transformed our business operations completely.",
      author: "Jubilee Christian Church",
      role: "Religious Organization",
      avatar: "JCC.png",
      logo: "JCC.png"
    },
    {
      id: 4,
      text: "The tax planning services saved our company significant amounts of money. Their proactive approach in handling KRA audits and tax compliance is truly valuable.",
      author: "Derek Prince EA",
      role: "NGO-Organization",
      avatar: "5925.jpg",
      logo: "5925.jpg"
    },
    {
      id: 5,
      text: "We've been working with JP Alliance for over 5 years, and their consistent quality and attention to detail keep us coming back. Their expertise in financing arrangements helped us secure major projects.",
      author: "Fave gas and oil LTD",
      role: "Energy and gas company",
      avatar: "pt.jpg",
      logo: "pt.jpg"
    }
  ];

  const nextTestimonial = () => {
    setIsTextVisible(false);
    setTimeout(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
      setIsTextVisible(true);
    }, 300);
  };

  const prevTestimonial = () => {
    setIsTextVisible(false);
    setTimeout(() => {
      setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
      setIsTextVisible(true);
    }, 300);
  };

  const goToTestimonial = (index) => {
    setIsTextVisible(false);
    setTimeout(() => {
      setActiveIndex(index);
      setIsTextVisible(true);
    }, 300);
  };

  return (
    <div className="testimonials-page" style={{ fontFamily: "'Quicksand', sans-serif", minHeight: "100vh" }}>
      {/* Hero Section */}
      <section 
        className="text-white py-5 text-center position-relative" 
        style={{ 
          background: "linear-gradient(rgba(0, 76, 153, 0.85), rgba(0, 76, 153, 0.9)), url('/youth.png') center/cover no-repeat",
          minHeight: "50vh",
          display: "flex",
          alignItems: "center"
        }}
      >
        <div className="container py-4 position-relative z-index-1">
          <h1 className="display-5 fw-bold mb-3">Client Testimonials</h1>
          <p className="lead mx-auto mb-4" style={{ maxWidth: "700px", fontSize: "1.2rem" }}>
            Discover what our valued clients say about our professional services and partnership
          </p>
        </div>
      </section>

      {/* Testimonials Content */}
      <div className="container py-5 my-4">
        <div className="row justify-content-center">
          <div className="col-xl-10 col-lg-12">
            {/* Clean Testimonial Card */}
            <div 
              className="testimonial-card position-relative overflow-hidden bg-white"
              style={{ 
                borderRadius: "15px",
                minHeight: "400px",
                border: "1px solid #e9ecef",
                boxShadow: "0 4px 20px rgba(0, 0, 0, 0.08)"
              }}
            >
              <div className="card-body p-4 d-flex flex-column h-100">
                {/* Logo Display */}
                <div className="text-center mb-4">
                  <div className="logo-container mx-auto mb-4">
                    <img 
                      src={testimonials[activeIndex].logo} 
                      alt={testimonials[activeIndex].author}
                      className="company-logo"
                      style={{ 
                        width: "100px", 
                        height: "100px", 
                        objectFit: "contain",
                        borderRadius: "8px",
                        padding: "6px",
                        backgroundColor: "white",
                        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)"
                      }}
                    />
                  </div>
                </div>

                {/* Testimonial Text with Slide Animation */}
                <div className="flex-grow-1 d-flex align-items-center">
                  <div 
                    className={`testimonial-text text-center w-100 ${isTextVisible ? 'slide-in-visible' : 'slide-in-hidden'}`}
                    style={{ transition: "all 0.5s ease-in-out" }}
                  >
                    <p 
                      className="card-text fs-5 fst-italic mb-4 text-dark" 
                      style={{ 
                        lineHeight: "1.7",
                        fontFamily: "Comfortaa, sans-serif"
                      }}
                    >
                      "{testimonials[activeIndex].text}"
                    </p>
                  </div>
                </div>

                {/* Client Info */}
                <div 
                  className={`client-info text-center mt-4 ${isTextVisible ? 'fade-in-visible' : 'fade-in-hidden'}`}
                  style={{ transition: "all 0.5s ease-in-out" }}
                >
                  <div className="d-flex align-items-center justify-content-center flex-wrap">
                    <img 
                      src={testimonials[activeIndex].avatar} 
                      alt={testimonials[activeIndex].author}
                      className="rounded-circle me-3"
                      style={{ 
                        width: "60px", 
                        height: "60px", 
                        objectFit: "cover",
                        border: "2px solid #dee2e6"
                      }}
                    />
                    <div className="text-start">
                      <h5 className="card-title mb-0 fw-bold text-dark fs-5">{testimonials[activeIndex].author}</h5>
                      <p className="text-muted mb-0 fs-6">{testimonials[activeIndex].role}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Controls */}
            <div className="d-flex justify-content-center align-items-center mt-4">
              <button 
                className="btn btn-outline-primary rounded-circle me-3"
                onClick={prevTestimonial}
                style={{ 
                  width: "50px", 
                  height: "50px",
                  transition: "all 0.3s ease"
                }}
              >
                <i className="bi bi-chevron-left fs-6"></i>
              </button>
              
              {/* Indicators */}
              <div className="d-flex align-items-center">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    className="btn p-0 mx-2"
                    onClick={() => goToTestimonial(index)}
                    style={{ width: "12px", height: "12px" }}
                  >
                    <div 
                      className="rounded-circle"
                      style={{ 
                        width: "100%", 
                        height: "100%", 
                        backgroundColor: index === activeIndex ? "#004C99" : "#dee2e6",
                        transition: "all 0.3s ease"
                      }}
                    ></div>
                  </button>
                ))}
              </div>
              
              <button 
                className="btn btn-outline-primary rounded-circle ms-3"
                onClick={nextTestimonial}
                style={{ 
                  width: "50px", 
                  height: "50px",
                  transition: "all 0.3s ease"
                }}
              >
                <i className="bi bi-chevron-right fs-6"></i>
              </button>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="row text-center mt-5 pt-5">
          {[
            { value: "98%", label: "Client Satisfaction" },
            { value: "30+", label: "Clients Served" },
            { value: "15+", label: "Years Experience" },
            { value: "8", label: "Professional Staff" }
          ].map((stat, index) => (
            <div key={index} className="col-md-3 col-6 mb-4">
              <div 
                className="p-4 rounded bg-light border-0"
                style={{ 
                  transition: "all 0.3s ease"
                }}
              >
                <h3 className="fw-bold text-primary mb-2" style={{ fontSize: "2.2rem" }}>{stat.value}</h3>
                <p className="text-muted mb-0">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-5 pt-5 bg-light p-5 rounded-3">
          <h3 className="fw-bold mb-4" style={{ color: "#004C99" }}>Ready to Share Your Success Story?</h3>
          <p className="lead mb-4 mx-auto" style={{ maxWidth: "700px", color: "#333" }}>
            Join our growing list of satisfied clients and experience the JP Alliance difference in professional services
          </p>
          <div className="d-flex justify-content-center gap-3 flex-wrap">
            <a 
              href="/contact" 
              className="btn btn-primary px-4 py-3 rounded-1 fw-bold"
              style={{
                fontSize: "1rem",
                transition: "all 0.3s ease"
              }}
            >
              Get Started Today
            </a>
            <a 
              href="/services" 
              className="btn btn-outline-primary px-4 py-3 rounded-1 fw-bold"
              style={{
                fontSize: "1rem",
                transition: "all 0.3s ease"
              }}
            >
              Our Services
            </a>
          </div>
        </div>
      </div>

      {/* CSS */}
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@400;500;600;700&display=swap');
          @import url('https://fonts.googleapis.com/css2?family=Comfortaa:wght@400;500;600;700&display=swap');
          
          .testimonials-page {
            background: #f8f9fa;
            min-height: 100vh;
          }
          
          .testimonial-card {
            transition: all 0.3s ease;
          }
          
          .testimonial-card:hover {
            box-shadow: 0 6px 25px rgba(0, 0, 0, 0.1) !important;
          }
          
          .slide-in-hidden {
            opacity: 0;
            transform: translateX(50px);
          }
          
          .slide-in-visible {
            opacity: 1;
            transform: translateX(0);
          }
          
          .fade-in-hidden {
            opacity: 0;
          }
          
          .fade-in-visible {
            opacity: 1;
          }
          
          .btn-outline-primary:hover {
            background-color: #004C99;
            color: white;
            transform: translateY(-1px);
          }
          
          .btn-primary:hover {
            background-color: #003366;
            transform: translateY(-1px);
          }
          
          .company-logo {
            transition: all 0.3s ease;
          }
          
          .company-logo:hover {
            transform: scale(1.05);
          }
          
          /* Mobile Responsive */
          @media (max-width: 768px) {
            .testimonial-card {
              min-height: 450px;
            }
            
            .company-logo {
              width: 80px !important;
              height: 80px !important;
            }
            
            .card-text {
              font-size: 1rem !important;
            }
          }
          
          /* Reduced motion for accessibility */
          @media (prefers-reduced-motion: reduce) {
            .testimonial-card,
            .btn,
            .company-logo {
              transition: none !important;
            }
            
            .slide-in-hidden,
            .slide-in-visible,
            .fade-in-hidden,
            .fade-in-visible {
              transition: none !important;
              opacity: 1 !important;
              transform: none !important;
            }
          }
        `}
      </style>
    </div>
  );
};

export default Testimonials;