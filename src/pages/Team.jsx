import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const Team = () => {
  const teamMembers = [
    {
      name: "Josphat Mwangi",
      role: "Managing Partner",
      expertise: "Tax & Audit Specialist",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      experience: "15+ years",
      linkedin: "#"
    },
    {
      name: "Sarah Kamau",
      role: "Senior Partner",
      expertise: "Business Advisory",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      experience: "12+ years",
      linkedin: "#"
    },
    {
      name: "David Ochieng",
      role: "Partner",
      expertise: "Internal Audit",
      image: "https://randomuser.me/api/portraits/men/75.jpg",
      experience: "10+ years",
      linkedin: "#"
    },
    {
      name: "Grace Wambui",
      role: "Partner",
      expertise: "Accounting Services",
      image: "https://randomuser.me/api/portraits/women/68.jpg",
      experience: "8+ years",
      linkedin: "#"
    },
    {
      name: "Michael Njoroge",
      role: "Senior Manager",
      expertise: "Risk Management",
      image: "https://randomuser.me/api/portraits/men/41.jpg",
      experience: "7+ years",
      linkedin: "#"
    },
    {
      name: "Lucy Achieng",
      role: "Tax Consultant",
      expertise: "Tax Planning",
      image: "https://randomuser.me/api/portraits/women/55.jpg",
      experience: "6+ years",
      linkedin: "#"
    },
    {
      name: "James Mutua",
      role: "Audit Manager",
      expertise: "External Audit",
      image: "https://randomuser.me/api/portraits/men/22.jpg",
      experience: "9+ years",
      linkedin: "#"
    },
    {
      name: "Patricia Mwende",
      role: "Business Advisor",
      expertise: "Financial Consulting",
      image: "https://randomuser.me/api/portraits/women/33.jpg",
      experience: "5+ years",
      linkedin: "#"
    }
  ];

  return (
    <div className="team-page" style={{ fontFamily: "'Quicksand', sans-serif" }}>
      {/* Hero Section */}
      <section 
    className="text-white py-5 text-center position-relative" 
    style={{ 
      background: "linear-gradient(rgba(0, 76, 153, 0.85), rgba(0, 76, 153, 0.9)), url('/agm.png') center/cover no-repeat",
      minHeight: "60vh",
      display: "flex",
      alignItems: "center"
    }}
  >
    <div className="container py-4 position-relative z-index-1">
      <h1 className="display-5 fw-bold mb-3">Meet The Team</h1>
      <p className="lead mx-auto mb-4" style={{ maxWidth: "700px" }}>
        Expert tax solutions to ensure compliance, minimize liabilities, and maximize your financial benefits
      </p>
      <div className="mt-4">
        
      </div>
    </div>
  </section>

      {/* Team Content */}
      <div className="container py-5">
        <div className="text-center mb-5">
          <h2 className="fw-bold mb-3" style={{ color: "#004C99" }}>Our Expert Team</h2>
          <p className="text-muted mx-auto" style={{ maxWidth: "700px" }}>
            Certified professionals with decades of combined experience in auditing, tax, and financial advisory services
          </p>
        </div>

        <div className="row g-4">
          {teamMembers.map((member, index) => (
            <div key={index} className="col-lg-3 col-md-4 col-sm-6">
              <div 
                className="card border-0 shadow-sm h-100 team-card"
                style={{ 
                  borderRadius: "15px",
                  transition: "all 0.3s ease"
                }}
              >
                <div className="card-body text-center p-4">
                  <div className="position-relative mb-4">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="rounded-circle shadow-sm"
                      style={{ 
                        width: "120px", 
                        height: "120px", 
                        objectFit: "cover",
                        border: "4px solid white",
                        boxShadow: "0 4px 15px rgba(0,0,0,0.1)"
                      }}
                    />
                    <div className="position-absolute bottom-0 end-0 bg-primary text-white rounded-circle p-2">
                      <i className="bi bi-award-fill"></i>
                    </div>
                  </div>
                  <h5 className="card-title fw-bold mb-2" style={{ color: "#004C99" }}>
                    {member.name}
                  </h5>
                  <p className="text-primary fw-medium mb-2">{member.role}</p>
                  <p className="text-muted small mb-2">{member.expertise}</p>
                  <p className="text-muted small mb-3">
                    <i className="bi bi-briefcase me-1"></i>
                    {member.experience} experience
                  </p>
                  <div className="social-links">
                    <a 
                      href={member.linkedin} 
                      className="text-primary me-2"
                      style={{ fontSize: "1.2rem" }}
                    >
                      
                    </a>
                    <a 
                      href="#" 
                      className="text-primary me-2"
                      style={{ fontSize: "1.2rem" }}
                    >
                      
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Team Stats */}
        <div className="row text-center mt-5 pt-5">
          <div className="col-md-3 col-6 mb-4">
            <div className="p-4 border-0 rounded shadow-sm" style={{ backgroundColor: "#f8f9fa" }}>
              <h3 className="fw-bold text-primary mb-2">12</h3>
              <p className="text-muted mb-0">Team Members</p>
            </div>
          </div>
          <div className="col-md-3 col-6 mb-4">
            <div className="p-4 border-0 rounded shadow-sm" style={{ backgroundColor: "#f8f9fa" }}>
              <h3 className="fw-bold text-primary mb-2">75+</h3>
              <p className="text-muted mb-0">Years Experience</p>
            </div>
          </div>
          <div className="col-md-3 col-6 mb-4">
            <div className="p-4 border-0 rounded shadow-sm" style={{ backgroundColor: "#f8f9fa" }}>
              <h3 className="fw-bold text-primary mb-2">100%</h3>
              <p className="text-muted mb-0">Certified Professionals</p>
            </div>
          </div>
          <div className="col-md-3 col-6 mb-4">
            <div className="p-4 border-0 rounded shadow-sm" style={{ backgroundColor: "#f8f9fa" }}>
              <h3 className="fw-bold text-primary mb-2">15+</h3>
              <p className="text-muted mb-0">Professional Certifications</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-5 pt-4">
          <h3 className="fw-bold mb-4" style={{ color: "#004C99" }}>Join Our Team</h3>
          <p className="lead mb-4 mx-auto" style={{ maxWidth: "700px" }}>
            We're always looking for talented professionals to join our growing team
          </p>
          <div className="d-flex justify-content-center gap-3 flex-wrap">
            <Link 
              to="/careers" 
              className="btn btn-primary px-4 py-2 rounded-pill"
              style={{
                fontWeight: "600",
                backgroundColor: "#004C99",
                border: "none",
                transition: "all 0.3s ease"
              }}
            >
              View Open Positions
            </Link>
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
              Contact HR
            </Link>
          </div>
        </div>
      </div>

      {/* CSS */}
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@400;500;600;700&display=swap');
          
          .team-card {
            transition: all 0.3s ease;
          }
          
          .team-card:hover {
            transform: translateY(-8px);
            box-shadow: 0 15px 30px rgba(0,0,0,0.1) !important;
          }
          
          .team-card:hover .card-title {
            color: #003366 !important;
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
          
          .social-links a {
            transition: all 0.3s ease;
          }
          
          .social-links a:hover {
            transform: translateY(-3px);
            color: #003366 !important;
          }
        `}
      </style>
    </div>
  );
};

export default Team;
