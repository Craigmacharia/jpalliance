import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Testimonials from './pages/Testimonials';
import Team from "./pages/Team";


// Placeholder pages until you build proper ones
function ServiceDetail({ title }) {
  return <h1 className="text-center mt-5">{title} Services</h1>;
}
function NewsEvents() {
  return <h1 className="text-center mt-5">News & Events</h1>;
}
function Careers() {
  return <h1 className="text-center mt-5">Careers at JP Alliance</h1>;
}

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container my-5">
        <Routes>
          {/* Main Pages */}
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/team" element={<Team />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/news" element={<NewsEvents />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          

          {/* Service Details */}
          <Route path="/services/tax" element={<ServiceDetail title="Tax" />} />
          <Route path="/services/external-audit" element={<ServiceDetail title="External Audit" />} />
          <Route path="/services/internal-audit" element={<ServiceDetail title="Internal Audit" />} />
          <Route path="/services/payroll" element={<ServiceDetail title="Payroll" />} />
          <Route path="/services/business-advisory" element={<ServiceDetail title="Business Advisory" />} />
          <Route
            path="/services/accounting-bookkeeping"
            element={<ServiceDetail title="Accounting & Bookkeeping" />}
          />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;