// src/pages/BlogDetail.jsx
import React from "react";
import { useLocation, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const BlogDetail = () => {
  const location = useLocation();
  const { newsItem } = location.state || {};

  if (!newsItem) {
    return (
      <div className="container py-5 text-center">
        <h2>Article Not Found</h2>
        <p>The requested article could not be found.</p>
        <Link to="/news" className="btn btn-primary">
          Back to News
        </Link>
      </div>
    );
  }

  return (
    <div className="blog-detail-page" style={{ fontFamily: "'Quicksand', sans-serif" }}>
      {/* Hero Section */}
      <section 
        className="text-white py-5" 
        style={{ 
          background: "linear-gradient(135deg, #0066CC 0%, #004C99 100%)"
        }}
      >
        <div className="container py-4">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <span className="badge bg-light text-primary mb-3">{newsItem.category}</span>
              <h1 className="display-6 fw-bold mb-3">{newsItem.title}</h1>
              <div className="d-flex justify-content-center align-items-center text-light flex-wrap">
                <span className="me-3">
                  <i className="bi bi-person me-1"></i>
                  By {newsItem.author}
                </span>
                <span className="me-3">
                  <i className="bi bi-calendar me-1"></i>
                  {newsItem.date}
                </span>
                <span>
                  <i className="bi bi-clock me-1"></i>
                  {newsItem.readTime}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <img 
              src={newsItem.image} 
              alt={newsItem.title}
              className="img-fluid rounded shadow mb-4"
              style={{ width: "100%", height: "400px", objectFit: "cover" }}
            />
            
            <div 
              className="blog-content"
              style={{ lineHeight: "1.8", fontSize: "1.1rem" }}
              dangerouslySetInnerHTML={{ __html: newsItem.fullContent }}
            />

            <div className="border-top mt-5 pt-4">
              <Link to="/news" className="btn btn-outline-primary">
                <i className="bi bi-arrow-left me-2"></i>
                Back to News
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Related Articles */}
      <div className="bg-light py-5">
        <div className="container">
          <h3 className="fw-bold text-center mb-4" style={{ color: "#004C99" }}>Related Articles</h3>
          <div className="row">
            {/* You can add related articles here */}
          </div>
        </div>
      </div>

      <style>
        {`
          .blog-content h4 {
            color: #004C99;
            margin-top: 2rem;
            margin-bottom: 1rem;
          }
          
          .blog-content ul {
            padding-left: 1.5rem;
          }
          
          .blog-content li {
            margin-bottom: 0.5rem;
          }
        `}
      </style>
    </div>
  );
};

export default BlogDetail;