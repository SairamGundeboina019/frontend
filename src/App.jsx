import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css'; // Import Bootstrap Icons
import HomePage from './pages/HomePage';
import ProjectsPage from './pages/ProjectsPage';
import ContactPage from './pages/ContactPage';
import AboutPage from './pages/AboutPage';
import ResumePage from './pages/ResumePage';
import CoverLetterPage from './pages/CoverLetterPage';
import './App.css';


function App() {
  return (
    <Router>
      {/* Horizontal Header */}
      <header className="bg-primary text-white py-3">
        <div className="container d-flex justify-content-between align-items-center">
        <h1 className="mb-0 text-white  ps-5">Sairam's Portfolio</h1>


          <nav>
            <Link to="/" className="text-white text-decoration-none mx-3">Home</Link>
            <Link to="/projects" className="text-white text-decoration-none mx-3">Projects</Link>
            <Link to="/contact" className="text-white text-decoration-none mx-3">Contact</Link>
          </nav>
        </div>
      </header>

      <div className="d-flex">
        {/* Vertical Sidebar */}
                <aside className="vertical-header bg-light border-end">
          <nav className="d-flex flex-column align-items-center py-3 px-3">
            <Link to="/about" className="text-decoration-none mb-4 text-center">
              <i className="bi bi-person-circle text-primary"></i>
              <span className="d-block mt-2 text-primary">About</span>
            </Link>
            <Link to="/resume" className="text-decoration-none mb-4 text-center">
              <i className="bi bi-file-earmark-text text-primary"></i>
              <span className="d-block mt-2 text-primary">Resume</span>
            </Link>
            <Link to="/cover-letter" className="text-decoration-none mb-4 text-center">
              <i className="bi bi-envelope text-primary"></i>
              <span className="d-block mt-2 text-primary">Cover Letter</span>
            </Link>
          </nav>
        </aside>



        {/* Main Content */}
        <main className="container mt-4 flex-grow-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/resume" element={<ResumePage />} />
            <Route path="/cover-letter" element={<CoverLetterPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
