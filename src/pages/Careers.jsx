import React, { useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

export default function Careers() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    position: "",
    coverLetter: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { fullName, email, phone, position, coverLetter } = formData;
    const message = `Hello, I'd like to apply for a career opportunity at JP Alliance & Associates.\n\n📌 Name: ${fullName}\n📧 Email: ${email}\n📱 Phone: ${phone}\n💼 Position: ${position}\n📝 Cover Note: ${coverLetter || "Not provided"}\n\nI will attach my CV and relevant documents when sending.`;
    
    const whatsappNumber = "254755453975";
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

    window.open(url, "_blank");
  };

  const benefits = [
    {
      icon: "bi-currency-dollar",
      title: "Competitive Salary",
      description: "Attractive compensation package with performance bonuses"
    },
    {
      icon: "bi-heart",
      title: "Health Insurance",
      description: "Comprehensive medical coverage for you and your family"
    },
    {
      icon: "bi-lightbulb",
      title: "Professional Development",
      description: "Continuous learning opportunities and certification support"
    },
    {
      icon: "bi-people",
      title: "Great Team Culture",
      description: "Collaborative environment with experienced professionals"
    }
  ];

  return (
    <div className="careers-page" style={{ fontFamily: "'Quicksand', sans-serif" }}>
      {/* Hero Section */}
      <section 
    className="text-white py-5 text-center position-relative" 
    style={{ 
      background: "linear-gradient(rgba(0, 76, 153, 0.85), rgba(0, 76, 153, 0.9)), url('/carloan.png') center/cover no-repeat",
      minHeight: "60vh",
      display: "flex",
      alignItems: "center"
    }}
  >
    <div className="container py-4 position-relative z-index-1">
      <h1 className="display-5 fw-bold mb-3">Join Our Firm</h1>
      <p className="lead mx-auto mb-4" style={{ maxWidth: "700px" }}>
        Expert tax solutions to ensure compliance, minimize liabilities, and maximize your financial benefits
      </p>
      <div className="mt-4">
        
      </div>
    </div>
  </section>

      {/* Application Form */}
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="text-center mb-5">
              <h2 className="fw-bold mb-3" style={{ color: "#004C99" }}>Apply Now</h2>
              <p className="text-muted mx-auto" style={{ maxWidth: "700px" }}>
                Submit your application and we'll get back to you shortly. We're always looking for talented professionals to join our team.
              </p>
            </div>

            <div className="card border-0 shadow-lg p-4" style={{ borderRadius: "15px" }}>
              <form onSubmit={handleSubmit}>
                <div className="row g-3">
                  <div className="col-md-6">
                    <label htmlFor="fullName" className="form-label fw-medium">Full Name</label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      placeholder="Dexter Morgan"
                      onChange={handleChange}
                      required
                      className="form-control py-2"
                      style={{ borderRadius: "8px" }}
                    />
                  </div>

                  <div className="col-md-6">
                    <label htmlFor="email" className="form-label fw-medium">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="dexter.morgan@009.com"
                      onChange={handleChange}
                      required
                      className="form-control py-2"
                      style={{ borderRadius: "8px" }}
                    />
                  </div>

                  <div className="col-md-6">
                    <label htmlFor="phone" className="form-label fw-medium">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      placeholder="+254 XXX XXX XXX"
                      onChange={handleChange}
                      required
                      className="form-control py-2"
                      style={{ borderRadius: "8px" }}
                    />
                  </div>

                  <div className="col-md-6">
                    <label htmlFor="position" className="form-label fw-medium">Position</label>
                    <input
                      type="text"
                      id="position"
                      name="position"
                      placeholder="e.g., Senior Auditor, Tax Consultant, etc."
                      value={formData.position}
                      onChange={handleChange}
                      required
                      className="form-control py-2"
                      style={{ borderRadius: "8px" }}
                    />
                  </div>

                  <div className="col-12">
                    <label htmlFor="coverLetter" className="form-label fw-medium">Cover Note (Optional)</label>
                    <textarea
                      id="coverLetter"
                      name="coverLetter"
                      placeholder="Brief introduction about yourself and why you're interested in joining our team..."
                      rows="3"
                      onChange={handleChange}
                      className="form-control py-2"
                      style={{ borderRadius: "8px" }}
                    ></textarea>
                  </div>

                  <div className="col-12">
                    <button
                      type="submit"
                      className="btn w-100 py-3 fw-bold"
                      style={{ 
                        backgroundColor: "#004C99",
                        color: "white",
                        borderRadius: "10px",
                        border: "none",
                        transition: "all 0.3s ease"
                      }}
                    >
                      Submit Application
                    </button>
                  </div>

                  <div className="col-12 text-center">
                    <small className="text-muted">
                      You'll be redirected to WhatsApp to complete your application. Please have your CV ready to attach.
                    </small>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="row mt-5 pt-5">
          <div className="col-12 text-center mb-5">
            <h2 className="fw-bold" style={{ color: "#004C99" }}>Why Work With Us?</h2>
            <p className="text-muted">We invest in our team's growth and well-being</p>
          </div>
          
          {benefits.map((benefit, index) => (
            <div key={index} className="col-md-3 col-sm-6 mb-4">
              <div className="text-center p-4">
                <i className={`bi ${benefit.icon} text-primary display-4 mb-3`}></i>
                <h5 className="fw-bold mb-3">{benefit.title}</h5>
                <p className="text-muted mb-0">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-5 pt-4">
          <h3 className="fw-bold mb-4" style={{ color: "#004C99" }}>Not Sure Where You Fit?</h3>
          <p className="lead mb-4 mx-auto" style={{ maxWidth: "700px" }}>
            We're always interested in meeting talented professionals. Send us your CV and we'll keep you in mind for future opportunities that match your skills.
          </p>
          <Link 
            to="/contact" 
            className="btn btn-outline-primary px-4 py-2 rounded-pill"
            style={{
              fontWeight: "600",
              borderColor: "#004C99",
              color: "#004C99",
              transition: "all 0.3s ease"
            }}
          >
            Send General Application
          </Link>
        </div>
      </div>

      {/* CSS */}
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@400;500;600;700&display=swap');
          
          .btn:hover {
            transform: translateY(-2px);
          }
          
          .form-control:focus {
            border-color: #004C99;
            box-shadow: 0 0 0 0.2rem rgba(0, 76, 153, 0.25);
          }
          
          .btn-outline-primary:hover {
            background-color: #004C99 !important;
            color: white !important;
          }
        `}
      </style>
    </div>
  );
}