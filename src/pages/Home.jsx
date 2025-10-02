import React, { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const Home = () => {
  // Preload critical images
  useEffect(() => {
    const preloadImages = [
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      "jplogo5.png"
    ];
    
    preloadImages.forEach(src => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  // Slideshow data with optimized images
  const slides = [
    {
      image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
      title: "Professional Audit & Assurance Services",
      description: "Comprehensive financial audits with precision and integrity"
    },
    {
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
      title: "Tax Advisory Experts",
      description: "Strategic tax planning and compliance services for businesses across East Africa"
    },
    {
      image: "watu.png",
      title: "Business Consulting & Financial Advisory",
      description: "Tailored solutions addressing unique business challenges in today's dynamic economy"
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  
  const goToNext = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  const goToPrev = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  }, [slides.length]);

  // Optimized slideshow with cleanup
  useEffect(() => {
    const interval = setInterval(goToNext, 8000);
    return () => clearInterval(interval);
  }, [goToNext]);

  // Debounced scroll reveal
  useEffect(() => {
    let timeoutId;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            timeoutId = setTimeout(() => {
              entry.target.classList.add("reveal-visible");
            }, 50);
          }
        });
      },
      { 
        threshold: 0.1,
        rootMargin: "50px"
      }
    );
    
    const elements = document.querySelectorAll('.reveal');
    elements.forEach((el) => observer.observe(el));
    
    return () => {
      observer.disconnect();
      clearTimeout(timeoutId);
    };
  }, []);

  // Core values data
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

  // Services data
  const services = [
    {
      title: "Audit & Assurance",
      description: "Statutory audits following International Auditing Standards with risk-based approach",
      icon: "bi-file-earmark-check"
    },
    {
      title: "Tax Advisory",
      description: "Full tax advisory services including corporate tax, VAT, and acting as your tax agents",
      icon: "bi-calculator"
    },
    {
      title: "Accounting Services",
      description: "Design of accounting systems, financial procedures and internal controls",
      icon: "bi-journal-bookmark"
    },
    {
      title: "Due Diligence",
      description: "Comprehensive financial investigation and risk assessment for informed business choices",
      icon: "bi-briefcase"
    },
    {
      title: "Special Assignments",
      description: "Financial procedures development, cash flow advisory and internal controls evaluation",
      icon: "bi-clipboard-check"
    },
    {
      title: "Business Valuation",
      description: "Project feasibility reviews, financial planning and investment structuring",
      icon: "bi-graph-up"
    }
  ];

  // Stats data
  const stats = [
    
  ];

  // Single testimonial data


  return (
    <div style={{ fontFamily: "'Quicksand', sans-serif" }}>
      {/* Hero Slideshow Section */}
      <section 
        className="text-white d-flex align-items-center" 
        style={{ 
          minHeight: "85vh",
          position: "relative",
          overflow: "hidden",
          borderRadius: "12px",
          margin: "10px 15px",
        }}
      >
        {/* Background Slides with optimized loading */}
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`position-absolute w-100 h-100 ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
            style={{
              background: `linear-gradient(rgba(0, 71, 135, 0.85), rgba(0, 71, 135, 0.78)), url(${slide.image}) center/cover`,
              transition: "opacity 0.8s ease-in-out",
              borderRadius: "12px",
              willChange: "opacity"
            }}
          />
        ))}
        
        {/* Slide Content */}
        <div className="container position-relative text-center py-5">
          <h2 
            className="mb-3"
            style={{ 
              fontWeight: 600,
              fontSize: "clamp(2rem, 4vw, 2.4rem)",
              letterSpacing: "-0.5px"
            }}
          >
            JP Alliance & Associates
          </h2>
          <h3 className="mb-3" style={{ 
            fontWeight: 500, 
            fontSize: "clamp(1.4rem, 3vw, 1.8rem)" 
          }}>
            {slides[currentSlide].title}
          </h3>
          <p 
            className="lead mb-5 mx-auto"
            style={{
              fontSize: "clamp(1rem, 2vw, 1.2rem)",
              maxWidth: "700px",
              lineHeight: "1.6"
            }}
          >
            {slides[currentSlide].description}
          </p>
          <div className="d-flex justify-content-center gap-3 flex-wrap">
            <Link 
              to="/services" 
              className="btn btn-light btn-lg px-4 py-3 rounded-pill"
              style={{
                fontWeight: "600",
                minWidth: "140px"
              }}
            >
              Our Services
            </Link>
            <Link 
              to="/contact" 
              className="btn btn-lg px-4 py-3 rounded-pill"
              style={{
                fontWeight: "600",
                backgroundColor: "rgba(255,255,255,0.15)",
                color: "white",
                border: "1px solid rgba(255,255,255,0.3)",
                minWidth: "140px"
              }}
            >
              Contact Us
            </Link>
          </div>

          {/* Slide Controls */}
          <button
            aria-label="Previous slide"
            onClick={goToPrev}
            className="btn btn-light position-absolute top-50 start-0 translate-middle-y rounded-pill shadow-sm d-none d-md-flex align-items-center justify-content-center"
            style={{ width: "44px", height: "44px", marginLeft: "15px" }}
          >
            <i className="bi bi-chevron-left"></i>
          </button>
          <button
            aria-label="Next slide"
            onClick={goToNext}
            className="btn btn-light position-absolute top-50 end-0 translate-middle-y rounded-pill shadow-sm d-none d-md-flex align-items-center justify-content-center"
            style={{ width: "44px", height: "44px", marginRight: "15px" }}
          >
            <i className="bi bi-chevron-right"></i>
          </button>

          {/* Indicators */}
          <div className="d-flex justify-content-center gap-2 mt-4">
            {slides.map((_, i) => (
              <button
                key={i}
                aria-label={`Go to slide ${i + 1}`}
                onClick={() => setCurrentSlide(i)}
                className={`hero-dot ${i === currentSlide ? 'active' : ''}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-5 bg-white">
        <div className="container">
          <div className="row text-center reveal">
            {stats.map((stat, index) => (
              <div key={index} className="col-md-3 col-6 mb-4">
                <div>
                  <h3 className="text-primary mb-2" style={{ fontWeight: 700, fontSize: "clamp(1.8rem, 3vw, 2.2rem)" }}>{stat.value}</h3>
                  <p className="text-muted mb-0" style={{ fontSize: "0.95rem" }}>{stat.label}</p>
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
            <div className="col-lg-6 mb-4 mb-lg-0 reveal">
              <h3 className="mb-4" style={{ color: "#004787", fontWeight: 600 }}>
                About Our Firm
              </h3>
              <p className="mb-4" style={{ lineHeight: "1.7" }}>
                JP Alliance & Associates is an independent firm of Certified Public Accountants with expertise in audit and assurance, tax advisory and business consulting. Registered by The Institute of Certified Public Accountants of Kenya (ICPAK), we are mandated to conduct audit and assurance, tax advisory, and business consulting services.
              </p>
              <p className="mb-4" style={{ lineHeight: "1.7" }}>
                Our professional team is well trained in providing independent audit, assurance and advisory services across all sectors. We have in-depth knowledge of the regional business environment and significant experience with both Small and Medium Entities and Private Companies with public interest.
              </p>
              <Link 
                to="/about" 
                className="btn btn-primary mt-3 px-4 py-2 rounded-pill"
                style={{
                  fontWeight: "600",
                  backgroundColor: "#004787",
                  border: "none"
                }}
              >
                Learn More About Us
              </Link>
            </div>
            <div className="col-lg-6 reveal">
              <div className="position-relative">
                <img
                  src="trust.jpg"
                  alt="Our Office"
                  className="img-fluid rounded shadow"
                  loading="lazy"
                  style={{ border: "4px solid white" }}
                />
                <div className="position-absolute bottom-0 start-0 bg-primary text-white p-3 rounded-end">
                  <h5 className="mb-0" style={{ fontWeight: 600 }}>Diligently</h5>
                  <p className="mb-0" style={{ fontSize: "0.9rem" }}>Serving Kenyan Businesses</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-5" style={{ backgroundColor: "#f8f9fa" }}>
        <div className="container">
          <div className="text-center mb-5 reveal">
            <h3 style={{ color: "#004787", fontWeight: 600 }}>Our Core Values</h3>
            <div className="heading-underline mx-auto mb-3"></div>
            <p className="text-muted">The principles that guide our work and client relationships</p>
          </div>
          <div className="row g-4 reveal">
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
      </section>

      {/* Services Section */}
      {/* Services Section */}
<section className="py-5 bg-white">
  <div className="container">
    <div className="text-center mb-5 reveal">
      <h3 style={{ color: "#004787", fontWeight: 600 }}>Our Professional Services</h3>
      <div className="heading-underline mx-auto mb-3"></div>
      <p className="text-muted">Comprehensive financial and business solutions tailored to your needs</p>
    </div>
    <div className="row g-4 reveal">
      {services.map((service, index) => (
        <div key={index} className="col-lg-4 col-md-6">
          <div 
            className="card h-100 border-0 shadow-sm p-4"
            style={{
              borderRadius: "15px",
              transition: "transform 0.2s ease, box-shadow 0.2s ease"
            }}
          >
            <div className="card-body text-center">
              <div className="icon-wrapper mb-3">
                <i className={`bi ${service.icon} text-primary`} style={{ fontSize: "1.8rem" }}></i>
              </div>
              <h5 className="card-title mb-3" style={{ color: "#004787", fontWeight: 600 }}>{service.title}</h5>
              <p className="card-text mb-4" style={{ lineHeight: "1.6" }}>{service.description}</p>
              <Link 
                to="/services" 
                className="btn btn-outline-primary px-3 rounded-pill"
                style={{
                  fontWeight: "600",
                  borderColor: "#004787",
                  color: "#004787"
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

{/* CTA Section */}
<section 
  className="py-5 text-white text-center reveal"
  style={{ 
    backgroundColor: "#004787",
    borderRadius: "12px",
    margin: "10px 15px"
  }}
>
  <div className="container py-4">
    <h3 className="mb-4" style={{ fontWeight: 600 }}>Ready to Grow Your Business?</h3>
    <p className="lead mb-5 mx-auto" style={{ maxWidth: "700px", fontSize: "1.1rem" }}>
      Partner with our team of certified financial experts to navigate complex financial landscapes with confidence.
    </p>
    <div className="d-flex justify-content-center gap-3 flex-wrap">
      <Link 
        to="/contact" 
        className="btn btn-light btn-lg px-4 py-3 rounded-pill"
        style={{
          fontWeight: "600",
          minWidth: "180px"
        }}
      >
        Get a Consultation
      </Link>
      <a 
        href="tel:+254755453975" 
        className="btn btn-outline-light btn-lg px-4 py-3 rounded-pill"
        style={{
          fontWeight: "600",
          minWidth: "140px"
        }}
      >
        <i className="bi bi-telephone me-2"></i> Call Us
      </a>
      <a 
        href="mailto:Contact@jpa.co.ke" 
        className="btn btn-outline-light btn-lg px-4 py-3 rounded-pill"
        style={{
          fontWeight: "600",
          minWidth: "140px"
        }}
      >
        <i className="bi bi-envelope me-2"></i> Email Us
      </a>
    </div>
  </div>
</section>

      {/* CTA Section */}
      

      {/* Optimized CSS */}
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@400;500;600;700&display=swap');
          
          .transition-all {
            transition: all 0.8s ease-in-out;
          }
          .opacity-100 {
            opacity: 1;
          }
          .opacity-0 {
            opacity: 0;
          }
          
          .card:hover {
            transform: translateY(-5px);
            box-shadow: 0 12px 25px rgba(0,0,0,0.15) !important;
          }
          
          .btn-light:hover {
            background-color: #f8f9fa !important;
            transform: translateY(-2px);
          }
          
          .btn-outline-light:hover {
            background-color: rgba(255,255,255,0.1) !important;
            transform: translateY(-2px);
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
          
          /* Dots */
          .hero-dot {
            width: 10px;
            height: 10px;
            border-radius: 50%;
            background: rgba(255,255,255,0.4);
            border: none;
            transition: all 0.3s ease;
          }
          .hero-dot.active {
            background: #ffffff;
            width: 24px;
            border-radius: 999px;
          }
          .hero-dot:hover { 
            background: #ffffff; 
          }

          /* Scroll reveal */
          .reveal { 
            opacity: 0; 
            transform: translateY(20px); 
            transition: all 0.6s ease; 
          }
          .reveal-visible { 
            opacity: 1 !important; 
            transform: translateY(0) !important; 
          }
          
          .heading-underline { 
            width: 60px; 
            height: 3px; 
            background: #004787; 
            border-radius: 2px; 
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

          .icon-wrapper:hover {
            transform: scale(1.1);
            background: rgba(0, 76, 135, 0.15);
          }

          /* Performance optimizations */
          * {
            box-sizing: border-box;
          }
          
          .card {
            will-change: transform;
          }
          
          /* Reduced motion for accessibility */
          @media (prefers-reduced-motion: reduce) {
            .reveal,
            .card,
            .btn-light,
            .btn-primary,
            .btn-outline-primary,
            .hero-dot,
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

export default Home;