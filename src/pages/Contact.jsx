import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    window.location.href = "mailto:cmacharia482@gmail.com?subject=Contact%20from%20Website&body=" + 
      encodeURIComponent(`Name: ${e.target.name.value}\nEmail: ${e.target.email.value}\nMessage: ${e.target.message.value}`);
  };

  return (
    <div className="contact-page" style={{ fontFamily: "'Quicksand', sans-serif" }}>
      {/* Hero Section */}
      <section 
    className="text-white py-5 text-center position-relative" 
    style={{ 
      background: "linear-gradient(rgba(0, 76, 153, 0.85), rgba(0, 76, 153, 0.9)), url('/fon.png') center/cover no-repeat",
      minHeight: "60vh",
      display: "flex",
      alignItems: "center"
    }}
  >
    <div className="container py-4 position-relative z-index-1">
      <h1 className="display-5 fw-bold mb-3">Contact Us Today</h1>
      <p className="lead mx-auto mb-4" style={{ maxWidth: "700px" }}>
        Expert tax solutions to ensure compliance, minimize liabilities, and maximize your financial benefits
      </p>
      <div className="mt-4">
        
      </div>
    </div>
  </section>

      {/* Contact Content */}
      <div className="container py-5">
        <div className="row g-4">
          {/* Contact Form */}
          <div className="col-lg-6">
            <div className="card border-0 shadow-sm p-4 h-100">
              <h3 className="fw-bold mb-4" style={{ color: "#004C99" }}>Send us a Message</h3>
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="name" className="form-label fw-medium">Full Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="form-control py-2" 
                    placeholder="Your Name" 
                    required 
                    style={{ borderRadius: "6px" }}
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="email" className="form-label fw-medium">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="form-control py-2" 
                    placeholder="Your Email" 
                    required 
                    style={{ borderRadius: "6px" }}
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="message" className="form-label fw-medium">Message</label>
                  <textarea 
                    id="message" 
                    rows="5" 
                    className="form-control py-2" 
                    placeholder="How can we help you?" 
                    required
                    style={{ borderRadius: "6px" }}
                  ></textarea>
                </div>
                <button 
                  type="submit" 
                  className="btn w-100 py-2"
                  style={{ 
                    backgroundColor: "#004C99",
                    color: "white",
                    fontWeight: "600",
                    borderRadius: "6px",
                    border: "none",
                    transition: "all 0.3s ease"
                  }}
                  onMouseEnter={(e) => e.target.style.backgroundColor = "#003366"}
                  onMouseLeave={(e) => e.target.style.backgroundColor = "#004C99"}
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>

          {/* Contact Info */}
          <div className="col-lg-6">
            <div className="card border-0 shadow-sm p-4 h-100">
              <h3 className="fw-bold mb-4" style={{ color: "#004C99" }}>Our Office</h3>
              
              <div className="mb-4">
                <div className="d-flex align-items-start mb-3">
                  <i className="bi bi-geo-alt-fill text-primary me-3" style={{ fontSize: "1.2rem" }}></i>
                  <div>
                    <h6 className="fw-bold mb-1">Address</h6>
                    <p className="mb-0">Blessed House, Opposite Garden City Mall</p>
                    <p className="mb-0">Nairobi, Kenya</p>
                  </div>
                </div>
                
                <div className="d-flex align-items-start mb-3">
                  <i className="bi bi-envelope-fill text-primary me-3" style={{ fontSize: "1.2rem" }}></i>
                  <div>
                    <h6 className="fw-bold mb-1">Email</h6>
                    <a href="mailto:cmacharia482@gmail.com" className="text-decoration-none">cmacharia482@gmail.com</a>
                  </div>
                </div>
                
                <div className="d-flex align-items-start mb-3">
                  <i className="bi bi-telephone-fill text-primary me-3" style={{ fontSize: "1.2rem" }}></i>
                  <div>
                    <h6 className="fw-bold mb-1">Phone</h6>
                    <a href="tel:+254755453975" className="text-decoration-none">+254 755 453975</a>
                  </div>
                </div>
                
                <div className="d-flex align-items-start">
                  <i className="bi bi-clock-fill text-primary me-3" style={{ fontSize: "1.2rem" }}></i>
                  <div>
                    <h6 className="fw-bold mb-1">Working Hours</h6>
                    <p className="mb-0">Monday - Friday: 8:00 AM - 5:00 PM</p>
                    <p className="mb-0">Saturday: 9:00 AM - 1:00 PM</p>
                  </div>
                </div>
              </div>

              <div className="ratio ratio-16x9 mt-auto position-relative">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.8199999999997!2d36.8175!3d-1.2833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f10d4b2b2b2b2%3A0x9b9b9b9b9b9b9b9b!2sBlessed%20House%2C%20Opposite%20Garden%20City%20Mall!5e0!3m2!1sen!2ske!4v1620000000000!5m2!1sen!2ske"
                  title="JP Alliance Location at Blessed House, Opposite Garden City Mall"
                  allowFullScreen
                  loading="lazy"
                  style={{ border: "none", borderRadius: "8px" }}
                ></iframe>
                
                {/* Custom Location Marker */}
                <div 
                  className="position-absolute d-flex flex-column align-items-center"
                  style={{
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    zIndex: 10,
                    pointerEvents: "none"
                  }}
                >
                  {/* Red Marker Pin */}
                  <div 
                    className="position-relative"
                    style={{
                      width: "0",
                      height: "0",
                      borderLeft: "12px solid transparent",
                      borderRight: "12px solid transparent",
                      borderTop: "20px solid #dc3545",
                      filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.3))"
                    }}
                  >
                    {/* White dot in center */}
                    <div 
                      className="position-absolute"
                      style={{
                        width: "6px",
                        height: "6px",
                        background: "white",
                        borderRadius: "50%",
                        top: "-16px",
                        left: "-3px"
                      }}
                    ></div>
                  </div>
                  
                  {/* Company Label */}
                  <div 
                    className="bg-white text-dark px-3 py-2 rounded-3 shadow-sm border"
                    style={{
                      fontSize: "0.85rem",
                      fontWeight: "600",
                      whiteSpace: "nowrap",
                      marginTop: "5px",
                      borderColor: "#dc3545 !important"
                    }}
                  >
                    <i className="bi bi-building me-2 text-danger"></i>
                    JP Alliance & Associates
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
          
          .contact-page {
            background-color: #f8f9fa;
          }
          .card {
            border-radius: 10px !important;
            transition: transform 0.3s ease;
          }
          .card:hover {
            transform: translateY(-5px);
          }
          a {
            color: #004C99;
          }
          a:hover {
            color: #003366;
            text-decoration: underline;
          }
        `}
      </style>
    </div>
  );
};

export default Contact;
