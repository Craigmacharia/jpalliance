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
        "15 years of professional experience; 10 years in audit, tax and financial advisory services",
        "Broad experience in private companies in SME sector, manufacturing donor funded projects",
        "International experience in Somalia, Uganda & Southern Sudan with OXFARM, EU and USAID funded projects"
      ],
      experience: [
        { year: "2020 May to Date", organization: "JP Alliance & Associates", position: "Founder & Managing Partner" },
        { year: "2018 May to Sept 2019", organization: "Thomas and Associates", position: "Audit Manager" },
        { year: "2016 – 2018 May", organization: "Mazars Kenya", position: "Senior Auditor" }
      ],
      membership: "Institute of Certified Public Accountants of Kenya (ICPAK) and Institute of Internal Auditors (IIA)"
    },
    {
      id: 2,
      name: "Jane Waithira",
      position: "Audit Manager",
      qualifications: "B-Com, CPA (K)",
      profile: [
        "Over 15 years of professional experience in audit, tax and financial consultancy",
        "Broad experience in audit of insurance companies, pension schemes, NGOs, SACCOs",
        "Experience with regulated corporate entities across all sectors of the economy"
      ],
      experience: [
        { year: "2021 to Date", organization: "JP Alliance & Associates", position: "Manager" },
        { year: "2016 – 2018 May", organization: "Mazars Kenya", position: "Manager" },
        { year: "2010-2014", organization: "King'ang'i Kamau & Co", position: "Audit Manager" }
      ],
      membership: "Institute of Certified Public Accountants of Kenya (ICPAK)"
    },
    {
      id: 3,
      name: "Joseph Wambua Maluki",
      position: "Tax Manager",
      qualifications: "B.Com (Finance), CPA (K)",
      profile: [
        "Over 12 years of professional experience in tax and financial consultancy services",
        "Experienced and well conversant with Small and Medium Entities in financial & tax advisory"
      ],
      experience: [
        { year: "2023-Present", organization: "JP Alliance & Associates", position: "Tax Manager" },
        { year: "Jul 2019 – 2022", organization: "MNC Consulting Group Ltd", position: "Audit Manager" },
        { year: "2017 – Jun 2018", organization: "Mwingi Central – NG-CDF", position: "Accountant" }
      ],
      membership: "Institute of Certified Public Accountants of Kenya (ICPAK)"
    }
  ];

  return (
    <div className="team-page" style={styles.container}>
      {/* Enhanced Hero Section */}
      <section 
        className="text-white py-5 d-flex align-items-center justify-content-center position-relative overflow-hidden" 
        style={{ 
          background: "linear-gradient(135deg, rgba(0, 76, 153, 0.9) 0%, rgba(0, 50, 100, 0.85) 100%), url('https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80') center/cover no-repeat",
          minHeight: "60vh"
        }}
      >
        <div className="container position-relative z-index-1 text-center">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <h1 className="display-4 fw-bold mb-4">JP Alliance Team</h1>
              <p className="lead mb-5 mx-auto fs-5" style={{ maxWidth: "700px", fontWeight: 500 }}>
                A well traiined and highly skilled team of professionals to meet our client's needs.
              </p>
            </div>
          </div>
        </div>
        <div className="position-absolute bottom-0 start-0 end-0 bg-white" style={{ height: "50px", clipPath: "polygon(0 100%, 100% 100%, 100% 0, 0 100%)" }}></div>
      </section>

      {/* Team Members Section */}
      <section className="py-5">
        <Container>
          <div className="team-members">
            {teamMembers.map((member, index) => (
              <div 
                key={member.id} 
                className={`team-member-card ${index % 2 === 1 ? 'reversed' : ''}`}
                style={styles.memberCard}
              >
                <Row className="align-items-stretch g-0">
                  {/* Image Section */}
                  <Col md={4}>
                    <div 
                      className="h-100 d-flex align-items-center justify-content-center p-4"
                      style={index % 2 === 0 ? styles.imageSectionPrimary : styles.imageSectionSecondary}
                    >
                      <div className="staff-image-wrapper text-center">
                        <div className="staff-image-placeholder">
                          <i className="bi bi-person-fill" style={styles.personIcon}></i>
                        </div>
                        <div className="mt-4">
                          <h5 className="text-white mb-3" style={{ fontFamily: "'Comfortaa', cursive" }}>
                            {member.name.split(' ')[0]}
                          </h5>
                          <div className="d-flex justify-content-center gap-3">
                            <a href="tel:+254755453975" className="text-white">
                              <i className="bi bi-telephone-fill" style={styles.contactIcon}></i>
                            </a>
                            <a 
                              href="https://wa.me/254755453975" 
                              target="_blank" 
                              rel="noopener noreferrer" 
                              className="text-white"
                            >
                              <i className="bi bi-whatsapp" style={styles.contactIcon}></i>
                            </a>
                            <a href="mailto:info@jpalliance.com" className="text-white">
                              <i className="bi bi-envelope-fill" style={styles.contactIcon}></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Col>

                  {/* Content Section */}
                  <Col md={8}>
                    <div className="p-4 p-lg-5 h-100" style={styles.contentSection}>
                      <div className="mb-4">
                        <h3 style={styles.staffName}>{member.name}</h3>
                        <div style={styles.position}>{member.position}</div>
                        <div className="d-flex align-items-center mt-2">
                          <i className="bi bi-award-fill me-2" style={styles.qualIcon}></i>
                          <span style={styles.qualifications}>{member.qualifications}</span>
                        </div>
                      </div>
                      
                      <div className="mb-4">
                        <h5 className="d-flex align-items-center mb-3" style={styles.sectionTitle}>
                          <i className="bi bi-person-badge-fill me-2"></i>
                          Profile Summary
                        </h5>
                        <ul className="list-unstyled">
                          {member.profile.map((item, itemIndex) => (
                            <li key={itemIndex} className="d-flex align-items-start mb-2">
                              <i className="bi bi-check-circle-fill me-2 mt-1" style={styles.bulletIcon}></i>
                              <span style={styles.listText}>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="mb-4">
                        <h5 className="d-flex align-items-center mb-3" style={styles.sectionTitle}>
                          <i className="bi bi-briefcase-fill me-2"></i>
                          Professional Experience
                        </h5>
                        {member.experience.map((exp, expIndex) => (
                          <div key={expIndex} className="mb-3 pb-3 border-bottom" style={styles.experienceItem}>
                            <div style={styles.experienceYear}>{exp.year}</div>
                            <div style={styles.experienceOrg}>{exp.organization}</div>
                            <div style={styles.experiencePos}>{exp.position}</div>
                          </div>
                        ))}
                      </div>
                      
                      <div style={styles.professionalMembership}>
                        <h5 className="d-flex align-items-center mb-3" style={styles.sectionTitle}>
                          <i className="bi bi-shield-check me-2"></i>
                          Professional Membership
                        </h5>
                        <p style={styles.membershipText}>{member.membership}</p>
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Comfortaa:wght@400;500;600;700&display=swap');
          
          .team-member-card {
            transition: all 0.3s ease;
            border-radius: 12px;
            overflow: hidden;
            box-shadow: 0 4px 12px rgba(0, 76, 153, 0.1);
            margin-bottom: 2rem;
          }
          
          .team-member-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 8px 25px rgba(0, 76, 153, 0.15);
          }
          
          .staff-image-placeholder {
            width: 150px;
            height: 150px;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.1);
            display: flex;
            align-items: center;
            justify-content: center;
            border: 3px solid rgba(255, 255, 255, 0.3);
          }
          
          @media (max-width: 768px) {
            .team-member-card.reversed .row {
              flex-direction: column-reverse;
            }
          }
        `}
      </style>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: "'Comfortaa', cursive",
    backgroundColor: '#f8f9fa',
    minHeight: '100vh'
  },
  hero: {
    background: "linear-gradient(135deg, #004C99 0%, #0066CC 100%)",
    paddingTop: '5rem',
    paddingBottom: '8rem',
    position: 'relative'
  },
  heroOverlay: {
    background: "url('https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80') center/cover no-repeat",
    opacity: '0.1'
  },
  heroContent: {
    color: 'white'
  },
  heroTitle: {
    fontSize: '3.5rem',
    fontWeight: '700',
    marginBottom: '1rem',
    fontFamily: "'Comfortaa', cursive"
  },
  titleUnderline: {
    width: '80px',
    height: '4px',
    background: 'rgba(255, 255, 255, 0.8)',
    margin: '0 auto 2rem auto',
    borderRadius: '2px'
  },
  heroSubtitle: {
    fontSize: '1.3rem',
    fontWeight: '400',
    marginBottom: '3rem',
    opacity: '0.9',
    maxWidth: '600px',
    marginLeft: 'auto',
    marginRight: 'auto',
    lineHeight: '1.6'
  },
  heroStats: {
    display: 'flex',
    justifyContent: 'center',
    gap: '4rem',
    flexWrap: 'wrap'
  },
  statItem: {
    textAlign: 'center'
  },
  statNumber: {
    fontSize: '2.5rem',
    fontWeight: '700',
    marginBottom: '0.5rem',
    fontFamily: "'Comfortaa', cursive"
  },
  statLabel: {
    fontSize: '1rem',
    opacity: '0.9',
    fontWeight: '500'
  },
  memberCard: {
    backgroundColor: 'white',
    borderRadius: '12px'
  },
  imageSectionPrimary: {
    backgroundColor: '#004C99',
    background: 'linear-gradient(135deg, #004C99 0%, #0066CC 100%)'
  },
  imageSectionSecondary: {
    backgroundColor: '#0066CC',
    background: 'linear-gradient(135deg, #0066CC 0%, #004C99 100%)'
  },
  contentSection: {
    backgroundColor: 'white'
  },
  personIcon: {
    fontSize: '4rem',
    color: 'rgba(255, 255, 255, 0.9)'
  },
  contactIcon: {
    fontSize: '1.2rem',
    opacity: '0.8',
    transition: 'opacity 0.3s ease'
  },
  staffName: {
    color: '#004C99',
    fontSize: '1.5rem',
    fontWeight: '700',
    marginBottom: '0.5rem',
    fontFamily: "'Comfortaa', cursive"
  },
  position: {
    color: '#0066CC',
    fontSize: '1.1rem',
    fontWeight: '600',
    marginBottom: '0.5rem',
    fontFamily: "'Comfortaa', cursive"
  },
  qualifications: {
    color: '#555',
    fontSize: '0.95rem',
    fontFamily: "'Comfortaa', cursive"
  },
  qualIcon: {
    color: '#004C99',
    fontSize: '1rem'
  },
  sectionTitle: {
    color: '#004C99',
    fontSize: '1.1rem',
    fontWeight: '600',
    fontFamily: "'Comfortaa', cursive"
  },
  bulletIcon: {
    color: '#28a745',
    fontSize: '0.9rem'
  },
  listText: {
    color: '#555',
    fontSize: '0.95rem',
    lineHeight: '1.5',
    fontFamily: "'Comfortaa', cursive"
  },
  experienceItem: {
    borderColor: '#e9ecef !important'
  },
  experienceYear: {
    color: '#0066CC',
    fontSize: '0.9rem',
    fontWeight: '600',
    marginBottom: '0.2rem',
    fontFamily: "'Comfortaa', cursive"
  },
  experienceOrg: {
    color: '#004C99',
    fontSize: '1rem',
    fontWeight: '600',
    marginBottom: '0.2rem',
    fontFamily: "'Comfortaa', cursive"
  },
  experiencePos: {
    color: '#666',
    fontSize: '0.9rem',
    fontFamily: "'Comfortaa', cursive"
  },
  professionalMembership: {
    backgroundColor: '#f8f9fa',
    padding: '1.25rem',
    borderRadius: '8px',
    borderLeft: '4px solid #004C99'
  },
  membershipText: {
    color: '#555',
    fontSize: '0.95rem',
    margin: 0,
    lineHeight: '1.5',
    fontFamily: "'Comfortaa', cursive"
  }
};

export default Team;