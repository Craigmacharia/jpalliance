import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const NewsEvents = () => {
  const news = [
    {
      id: 1,
      title: "New Tax Advisory Services Launched",
      date: "August 15, 2025",
      content: "We are excited to announce the launch of our comprehensive tax advisory services designed to help businesses optimize their tax strategies and ensure compliance.",
      fullContent: `
        <p>JP Alliance & Associates is proud to announce the expansion of our service offerings with the launch of our specialized Tax Advisory Division. This new service line is designed to address the complex tax challenges faced by businesses in today's dynamic economic environment.</p>
        
        <h4>What We Offer:</h4>
        <ul>
          <li>Strategic tax planning and optimization</li>
          <li>Compliance and regulatory guidance</li>
          <li>Tax risk assessment and management</li>
          <li>International tax consulting</li>
          <li>Tax dispute resolution</li>
        </ul>
        
        <p>Our team of certified tax professionals brings decades of experience in helping businesses navigate the complex tax landscape. We understand that effective tax planning is crucial for sustainable business growth and profitability.</p>
        
        <p>"This expansion represents our commitment to providing comprehensive financial solutions to our clients," said Josphat Mwangi, Managing Partner. "We recognize the growing need for expert tax guidance in today's business environment."</p>
      `,
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      category: "Service Update",
      author: "Josphat Mwangi",
      readTime: "3 min read"
    },
    {
      id: 2,
      title: "Annual Client Appreciation Event",
      date: "July 30, 2025",
      content: "Join us for our Annual Client Appreciation Event where we'll celebrate our partnerships and discuss future growth opportunities.",
      fullContent: `
        <p>JP Alliance & Associates cordially invites all our valued clients to our Annual Client Appreciation Event, scheduled for July 30, 2025, at the Nairobi Safari Club from 6:00 PM onwards.</p>
        
        <h4>Event Highlights:</h4>
        <ul>
          <li>Networking session with industry leaders</li>
          <li>Keynote address on emerging financial trends</li>
          <li>Recognition of long-term client partnerships</li>
          <li>Cocktail reception and dinner</li>
          <li>Exclusive insights into our 2025 service enhancements</li>
        </ul>
        
        <p>This event is our way of expressing gratitude to the clients who have been instrumental in our growth journey. It's also an opportunity for us to share our vision for the future and how we plan to continue delivering exceptional value.</p>
        
        <p>"Our clients are at the heart of everything we do," said Sarah Kamau, Senior Partner. "This event is our small way of saying thank you for the trust and partnership."</p>
        
        <p>RSVP by July 20, 2025, to secure your spot. Limited seats available.</p>
      `,
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      category: "Event",
      author: "Sarah Kamau",
      readTime: "4 min read"
    },
    {
      id: 3,
      title: "Industry Recognition: Best Audit Firm 2025",
      date: "June 12, 2025",
      content: "JP Alliance & Associates has been awarded the prestigious 'Best Audit Firm 2025' by the Kenya Institute of Certified Public Accountants.",
      fullContent: `
        <p>We are honored to announce that JP Alliance & Associates has been recognized as the 'Best Audit Firm 2025' by the Kenya Institute of Certified Public Accountants (KICPA) at their annual awards ceremony.</p>
        
        <h4>Award Criteria:</h4>
        <ul>
          <li>Excellence in audit quality and compliance</li>
          <li>Innovation in audit methodologies</li>
          <li>Client satisfaction and retention rates</li>
          <li>Professional development and training</li>
          <li>Contribution to the accounting profession</li>
        </ul>
        
        <p>This recognition is a testament to our team's dedication to maintaining the highest standards of professionalism and excellence in all our audit engagements. It reflects our commitment to delivering value and building trust with our clients.</p>
        
        <p>"This award belongs to every member of our team who has worked tirelessly to uphold our standards of excellence," said David Ochieng, Partner. "It reinforces our commitment to continuous improvement and client satisfaction."</p>
        
        <p>The award ceremony was attended by industry leaders and professionals from across East Africa, highlighting the growing recognition of Kenyan audit firms on the regional stage.</p>
      `,
      image: "https://images.unsplash.com/photo-1576086213369-97a306d36557?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      category: "Achievement",
      author: "David Ochieng",
      readTime: "5 min read"
    }
  ];

  const events = [
    {
      id: 1,
      name: "Financial Literacy Workshop",
      date: "September 5, 2025",
      time: "2:00 PM - 5:00 PM",
      location: "JP Alliance Conference Room, Spur Mall Ruiru",
      description: "Join us for an engaging session on personal financial management, investment strategies, and wealth creation principles.",
      image: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: 2,
      name: "Tax Compliance Seminar",
      date: "October 10, 2025",
      time: "9:00 AM - 1:00 PM",
      location: "Nairobi Business Hub",
      description: "Learn about the latest tax regulations, compliance requirements, and strategies for optimizing your tax position.",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: 3,
      name: "Business Growth Forum",
      date: "November 15, 2025",
      time: "8:30 AM - 4:00 PM",
      location: "Safari Park Hotel, Nairobi",
      description: "A full-day forum featuring industry experts discussing strategies for sustainable business growth in the current economic climate.",
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    }
  ];

  return (
    <div className="news-events-page" style={{ fontFamily: "'Quicksand', sans-serif" }}>
      {/* Hero Section */}
      <section 
        className="text-white py-5 text-center" 
        style={{ 
          background: "linear-gradient(135deg, #0066CC 0%, #004C99 100%)"
        }}
      >
        <div className="container py-4">
          <h1 className="display-5 fw-bold mb-3">News & Events</h1>
          <p className="lead mx-auto" style={{ maxWidth: "700px" }}>
            Stay updated with the latest news, insights, and events from JP Alliance & Associates
          </p>
        </div>
      </section>

      {/* News Section */}
      <div className="container py-5">
        <div className="text-center mb-5">
          <h2 className="fw-bold mb-3" style={{ color: "#004C99" }}>Latest News & Updates</h2>
          <p className="text-muted mx-auto" style={{ maxWidth: "700px" }}>
            Discover the latest developments, insights, and achievements from our firm
          </p>
        </div>

        <div className="row g-4 mb-5">
          {news.map((item) => (
            <div key={item.id} className="col-lg-4 col-md-6">
              <div 
                className="card border-0 shadow-sm h-100 news-card"
                style={{ 
                  borderRadius: "15px",
                  transition: "all 0.3s ease"
                }}
              >
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="card-img-top"
                  style={{ 
                    height: "200px", 
                    objectFit: "cover",
                    borderTopLeftRadius: "15px",
                    borderTopRightRadius: "15px"
                  }}
                />
                <div className="card-body d-flex flex-column">
                  <div className="d-flex justify-content-between align-items-center mb-2">
                    <span className="badge bg-primary">{item.category}</span>
                    <small className="text-muted">{item.readTime}</small>
                  </div>
                  <h5 className="card-title fw-bold" style={{ color: "#004C99" }}>
                    {item.title}
                  </h5>
                  <p className="card-text text-muted flex-grow-1">{item.content}</p>
                  <div className="d-flex justify-content-between align-items-center mt-auto">
                    <small className="text-muted">
                      <i className="bi bi-calendar me-1"></i>
                      {item.date}
                    </small>
                    <Link 
                      to={`/news/${item.id}`}
                      state={{ newsItem: item }}
                      className="btn btn-outline-primary btn-sm rounded-pill"
                      style={{
                        fontWeight: "600",
                        borderColor: "#004C99",
                        color: "#004C99"
                      }}
                    >
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Events Section */}
        <div className="text-center mb-5">
          <h2 className="fw-bold mb-3" style={{ color: "#004C99" }}>Upcoming Events</h2>
          <p className="text-muted mx-auto" style={{ maxWidth: "700px" }}>
            Join us for our upcoming events, workshops, and seminars
          </p>
        </div>

        <div className="row g-4">
          {events.map((event) => (
            <div key={event.id} className="col-lg-4 col-md-6">
              <div 
                className="card border-0 shadow-sm h-100 event-card"
                style={{ 
                  borderRadius: "15px",
                  transition: "all 0.3s ease",
                  borderLeft: "4px solid #004C99"
                }}
              >
                <img 
                  src={event.image} 
                  alt={event.name}
                  className="card-img-top"
                  style={{ 
                    height: "180px", 
                    objectFit: "cover",
                    borderTopLeftRadius: "15px",
                    borderTopRightRadius: "15px"
                  }}
                />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title fw-bold" style={{ color: "#004C99" }}>
                    {event.name}
                  </h5>
                  <div className="mb-3">
                    <div className="d-flex align-items-center mb-1">
                      <i className="bi bi-calendar text-primary me-2"></i>
                      <small className="text-muted">{event.date}</small>
                    </div>
                    <div className="d-flex align-items-center mb-1">
                      <i className="bi bi-clock text-primary me-2"></i>
                      <small className="text-muted">{event.time}</small>
                    </div>
                    <div className="d-flex align-items-center">
                      <i className="bi bi-geo-alt text-primary me-2"></i>
                      <small className="text-muted">{event.location}</small>
                    </div>
                  </div>
                  <p className="card-text text-muted flex-grow-1">{event.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Newsletter Section */}
        <div className="text-center mt-5 pt-5">
          <div className="card border-0 shadow-sm p-5" style={{ backgroundColor: "#f8f9fa", borderRadius: "15px" }}>
            <h3 className="fw-bold mb-3" style={{ color: "#004C99" }}>Stay Updated</h3>
            <p className="text-muted mb-4 mx-auto" style={{ maxWidth: "600px" }}>
              Subscribe to our newsletter to receive the latest news and event updates directly in your inbox
            </p>
            <div className="row justify-content-center">
              <div className="col-md-6">
                <div className="input-group">
                  <input 
                    type="email" 
                    className="form-control rounded-pill" 
                    placeholder="Enter your email address"
                    style={{ borderColor: "#004C99" }}
                  />
                  <button 
                    className="btn btn-primary rounded-pill ms-2"
                    style={{ 
                      backgroundColor: "#004C99",
                      border: "none"
                    }}
                  >
                    Subscribe
                  </button>
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
          
          .news-card:hover, .event-card:hover {
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

export default NewsEvents;