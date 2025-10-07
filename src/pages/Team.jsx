import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Team = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Josphat Mwangi Chege",
      position: "Managing Partner",
      qualifications: "CPA (K)",
      profile: [
        "15+ years professional experience in audit, tax and financial advisory",
        "Expertise in SME sector, manufacturing, and donor-funded projects",
        "International experience across East Africa with major development partners"
      ],
      specialties: ["Strategic Advisory", "Tax Planning", "International Projects"]
    },
    {
      id: 2,
      name: "Jane Waithira",
      position: "Audit Manager",
      qualifications: "B-Com, CPA (K)",
      profile: [
        "15+ years in audit, tax and financial consultancy",
        "Specialized in insurance, pension schemes, NGOs and SACCOs",
        "Extensive experience with regulated corporate entities"
      ],
      specialties: ["Risk Assurance", "Regulatory Compliance", "Financial Audit"]
    },
    {
      
        id: 3,
        name: "Patrick Kiruki Ng’aru",
        position: "Audit & Assurance Manager",
        qualifications: "B.Business Management, CPA (K)",
        profile: [
          "12+ years in audit and financial consultancy services",
          "Specialized in SACCOs, NGOs, donor-funded projects and religious organizations",
          "Expert in internal audit, risk management and financial compliance"
        ],
        specialties: ["Internal Audit", "SACCO Compliance", "Risk Management", "NGO Accounting"]
      }
  ];

  return (
    <div className="team-page" style={styles.container}>
      {/* Hero Section */}
      <section 
        className="text-white py-5 d-flex align-items-center justify-content-center position-relative overflow-hidden" 
        style={{ 
          background: "linear-gradient(135deg, rgba(0, 76, 153, 0.9) 0%, rgba(0, 50, 100, 0.85) 100%), url('https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80') center/cover no-repeat",
          minHeight: "40vh"
        }}
      >
        <div className="container position-relative z-index-1 text-center">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <h1 className="display-5 fw-bold mb-4">Our Leadership Team</h1>
              <p className="lead mb-4 mx-auto" style={{ maxWidth: "600px", fontWeight: 500 }}>
                Experienced professionals dedicated to delivering exceptional accounting solutions
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Members Section */}
      <section className="py-5">
        <Container>
          <Row className="g-4">
            {teamMembers.map((member, index) => (
              <Col lg={4} md={6} key={member.id}>
                <div 
                  className="team-card h-100 d-flex flex-column"
                  style={styles.teamCard}
                >
                  {/* Profile Header */}
                  <div 
                    className="text-white text-center p-4"
                    style={index % 2 === 0 ? styles.cardHeaderPrimary : styles.cardHeaderSecondary}
                  >
                    <div className="staff-avatar mb-3 mx-auto">
                      <i className="bi bi-person-fill" style={styles.personIcon}></i>
                    </div>
                    <h5 className="mb-2 fw-bold">{member.name}</h5>
                    <div className="mb-2" style={styles.position}>{member.position}</div>
                    <div className="d-flex align-items-center justify-content-center">
                      <i className="bi bi-award-fill me-2" style={styles.qualIcon}></i>
                      <span style={styles.qualifications}>{member.qualifications}</span>
                    </div>
                  </div>

                  {/* Profile Content */}
                  <div className="p-4 flex-grow-1 d-flex flex-column" style={styles.cardContent}>
                    <div className="mb-3 flex-grow-1">
                      <h6 className="d-flex align-items-center mb-3" style={styles.sectionTitle}>
                        <i className="bi bi-person-badge me-2"></i>
                        Expertise
                      </h6>
                      <ul className="list-unstyled mb-0">
                        {member.profile.map((item, itemIndex) => (
                          <li key={itemIndex} className="d-flex align-items-start mb-2">
                            <i className="bi bi-check-circle me-2 mt-1" style={styles.bulletIcon}></i>
                            <span style={styles.listText}>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    {/* Specialties */}
                    <div>
                      <h6 className="d-flex align-items-center mb-2" style={styles.sectionTitle}>
                        <i className="bi bi-stars me-2"></i>
                        Specialties
                      </h6>
                      <div className="d-flex flex-wrap gap-2">
                        {member.specialties.map((specialty, specIndex) => (
                          <span 
                            key={specIndex} 
                            className="badge"
                            style={styles.specialtyBadge}
                          >
                            {specialty}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
            ))}
          </Row>

          {/* Contact Section */}
          
        </Container>
      </section>

      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@400;500;600;700&display=swap');
          @import url('https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.0/font/bootstrap-icons.css');
          
          .team-card {
            transition: all 0.3s ease;
            border-radius: 12px;
            overflow: hidden;
            box-shadow: 0 4px 12px rgba(0, 76, 153, 0.1);
            border: 1px solid rgba(0, 76, 153, 0.1);
          }
          
          .team-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 8px 25px rgba(0, 76, 153, 0.15);
          }
          
          .staff-avatar {
            width: 80px;
            height: 80px;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.1);
            display: flex;
            align-items: center;
            justify-content: center;
            border: 2px solid rgba(255, 255, 255, 0.3);
          }

          .phone-link:hover {
            color: #0066CC !important;
          }
        `}
      </style>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: "'Quicksand', sans-serif",
    backgroundColor: '#f8f9fa',
    minHeight: '100vh'
  },
  teamCard: {
    backgroundColor: 'white',
  },
  cardHeaderPrimary: {
    background: 'linear-gradient(135deg, #004C99 0%, #0066CC 100%)'
  },
  cardHeaderSecondary: {
    background: 'linear-gradient(135deg, #0066CC 0%, #004C99 100%)'
  },
  cardContent: {
    backgroundColor: 'white'
  },
  personIcon: {
    fontSize: '2rem',
    color: 'rgba(255, 255, 255, 0.9)'
  },
  position: {
    fontSize: '0.9rem',
    opacity: '0.9',
    fontWeight: '500'
  },
  qualIcon: {
    color: 'rgba(255, 255, 255, 0.9)',
    fontSize: '0.9rem'
  },
  qualifications: {
    fontSize: '0.85rem',
    opacity: '0.9'
  },
  sectionTitle: {
    color: '#004C99',
    fontSize: '0.95rem',
    fontWeight: '600',
    fontFamily: "'Quicksand', sans-serif"
  },
  bulletIcon: {
    color: '#28a745',
    fontSize: '0.8rem'
  },
  listText: {
    color: '#555',
    fontSize: '0.85rem',
    lineHeight: '1.4',
    fontFamily: "'Quicksand', sans-serif"
  },
  specialtyBadge: {
    backgroundColor: 'rgba(0, 76, 153, 0.1)',
    color: '#004C99',
    fontSize: '0.75rem',
    padding: '0.35rem 0.75rem',
    borderRadius: '20px',
    fontWeight: '500',
    fontFamily: "'Quicksand', sans-serif"
  },
  contactCard: {
    backgroundColor: 'white',
    padding: '2.5rem 2rem',
    borderRadius: '12px',
    boxShadow: '0 4px 12px rgba(0, 76, 153, 0.1)',
    borderTop: '4px solid #004C99'
  },
  contactTitle: {
    color: '#004C99',
    fontWeight: '600',
    fontFamily: "'Quicksand', sans-serif"
  },
  contactText: {
    color: '#666',
    fontSize: '1rem',
    fontFamily: "'Quicksand', sans-serif"
  },
  contactIcon: {
    color: '#004C99',
    fontSize: '1.1rem'
  },
  phoneLink: {
    color: '#004C99',
    fontSize: '1.1rem',
    fontFamily: "'Quicksand', sans-serif",
    transition: 'color 0.3s ease'
  }
};

export default Team;