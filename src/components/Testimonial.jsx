import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const testimonials = [
    {
      id: 1,
      text: "JP Alliance & Associates have been instrumental in helping us streamline our financial processes. Their professionalism and expertise are unmatched.",
      author: "Mary W.",
      role: "Business Owner",
      avatar: "https://randomuser.me/api/portraits/women/65.jpg"
    },
    {
      id: 2,
      text: "Their auditing services are thorough and reliable. We feel confident in our compliance thanks to their dedicated team.",
      author: "John K.",
      role: "CFO",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
      id: 3,
      text: "The consulting team provided us with clear strategies that helped our company grow sustainably. Highly recommended!",
      author: "Grace M.",
      role: "CEO",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
      id: 4,
      text: "The tax planning services saved our company significant amounts of money. Their proactive approach is truly valuable.",
      author: "Robert T.",
      role: "Finance Director",
      avatar: "https://randomuser.me/api/portraits/men/67.jpg"
    },
    {
      id: 5,
      text: "We've been working with JP Alliance for over 5 years, and their consistent quality and attention to detail keep us coming back.",
      author: "Sarah J.",
      role: "Entrepreneur",
      avatar: "https://randomuser.me/api/portraits/women/28.jpg"
    }
  ];

  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  const goToTestimonial = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="testimonials-page" style={{ fontFamily: "'Quicksand', sans-serif" }}>
      {/* Hero Section */}
      <section 
        className="text-white py-5 text-center" 
        style={{ 
          background: "linear-gradient(135deg, #0066CC 0%, #004C99 100%)"
        }}
      >
        <div className="container py-4">
          <h1 className="display-5 fw-bold mb-3">Client Testimonials</h1>
          <p className="lead mx-auto" style={{ maxWidth: "700px" }}>
            Discover what our clients have to say about our services and commitment to excellence
          </p>
        </div>
      </section>

      {/* Testimonials Content */}
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            {/* Testimonial Card */}
            <div 
              className="card border-0 shadow-lg testimonial-card"
              style={{ borderRadius: "15px" }}
            >
              <div className="card-body p-5 text-center">
                <div className="quote-icon mb-4">
                  <i className="bi bi-chat-quote-fill text-primary" style={{ fontSize: "2.5rem" }}></i>
                </div>
                <p className="card-text fs-5 fst-italic mb-4" style={{ lineHeight: "1.8" }}>
                  "{testimonials[activeIndex].text}"
                </p>
                <div className="client-info d-flex align-items-center justify-content-center">
                  <img 
                    src={testimonials[activeIndex].avatar} 
                    alt={testimonials[activeIndex].author}
                    className="rounded-circle me-3"
                    style={{ width: "60px", height: "60px", objectFit: "cover" }}
                  />
                  <div className="text-start">
                    <h5 className="card-title mb-0 fw-bold">{testimonials[activeIndex].author}</h5>
                    <p className="text-muted mb-0">{testimonials[activeIndex].role}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Controls */}
            <div className="d-flex justify-content-center align-items-center mt-4">
              <button 
                className="btn btn-outline-primary rounded-circle me-3"
                onClick={prevTestimonial}
                style={{ width: "50px", height: "50px" }}
              >
                <i className="bi bi-chevron-left"></i>
              </button>
              
              {/* Indicators */}
              <div className="d-flex">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    className={`btn p-0 mx-1 ${index === activeIndex ? 'active' : ''}`}
                    onClick={() => goToTestimonial(index)}
                    style={{ width: "12px", height: "12px", borderRadius: "50%" }}
                  >
                    <div 
                      className="rounded-circle"
                      style={{ 
                        width: "100%", 
                        height: "100%", 
                        backgroundColor: index === activeIndex ? "#004C99" : "#ccc",
                        transition: "all 0.3s ease"
                      }}
                    ></div>
                  </button>
                ))}
              </div>
              
              <button 
                className="btn btn-outline-primary rounded-circle ms-3"
                onClick={nextTestimonial}
                style={{ width: "50px", height: "50px" }}
              >
                <i className="bi bi-chevron-right"></i>
              </button>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="row text-center mt-5 pt-5">
          <div className="col-md-3 col-6 mb-4">
            <div className="p-4 border-0 rounded shadow-sm" style={{ backgroundColor: "#f8f9fa" }}>
              <h3 className="fw-bold text-primary mb-2">98%</h3>
              <p className="text-muted mb-0">Client Satisfaction</p>
            </div>
          </div>
          <div className="col-md-3 col-6 mb-4">
            <div className="p-4 border-0 rounded shadow-sm" style={{ backgroundColor: "#f8f9fa" }}>
              <h3 className="fw-bold text-primary mb-2">200+</h3>
              <p className="text-muted mb-0">Clients Served</p>
            </div>
          </div>
          <div className="col-md-3 col-6 mb-4">
            <div className="p-4 border-0 rounded shadow-sm" style={{ backgroundColor: "#f8f9fa" }}>
              <h3 className="fw-bold text-primary mb-2">15+</h3>
              <p className="text-muted mb-0">Years Experience</p>
            </div>
          </div>
          <div className="col-md-3 col-6 mb-4">
            <div className="p-4 border-0 rounded shadow-sm" style={{ backgroundColor: "#f8f9fa" }}>
              <h3 className="fw-bold text-primary mb-2">12</h3>
              <p className="text-muted mb-0">Professional Staff</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-5 pt-4">
          <h3 className="fw-bold mb-4" style={{ color: "#004C99" }}>Ready to Share Your Success Story?</h3>
          <p className="lead mb-4 mx-auto" style={{ maxWidth: "700px" }}>
            Join our growing list of satisfied clients and experience the JP Alliance difference
          </p>
          <div className="d-flex justify-content-center gap-3 flex-wrap">
            <a 
              href="/contact" 
              className="btn btn-primary px-4 py-2 rounded-pill"
              style={{
                fontWeight: "600",
                backgroundColor: "#004C99",
                border: "none",
                transition: "all 0.3s ease"
              }}
            >
              Get Started
            </a>
            <a 
              href="/services" 
              className="btn btn-outline-primary px-4 py-2 rounded-pill"
              style={{
                fontWeight: "600",
                borderColor: "#004C99",
                color: "#004C99",
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
          
          .testimonial-card {
            transition: all 0.5s ease;
            position: relative;
            overflow: hidden;
          }
          
          .testimonial-card::before {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 4px;
            background: linear-gradient(90deg, #0066CC, #004C99);
            transform: scaleX(0);
            transform-origin: left;
            transition: transform 0.5s ease;
          }
          
          .testimonial-card:hover::before {
            transform: scaleX(1);
          }
          
          .testimonial-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 15px 30px rgba(0,0,0,0.1) !important;
          }
          
          .btn-outline-primary:hover {
            background-color: #004C99 !important;
            color: white !important;
          }
          
          .btn-primary:hover {
            background-color: #003366 !important;
            transform: translateY(-2px);
          }
        `}
      </style>
    </div>
  );
};

// Add this default export at the end of the file
export default Testimonials;





