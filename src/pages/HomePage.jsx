import React from 'react';
import 'animate.css'; // Import animations
import '../styles/HomePage.css'; // Custom CSS

const HomePage = () => {
  return (
    <div className="homepage-container container text-center mt-10">
      {/* Hero Section */}
      <section className="hero-section">
        <h1 className="animate__animated animate__fadeInDown mb-4 text-primary">Welcome to Sairam's Portfolio</h1>
        <p className="animate__animated animate__fadeInUp mb-4">
          I am a passionate <strong>Full-Stack Developer</strong> with expertise in creating scalable and efficient web applications.
        </p>
        <div className="animate__animated animate__fadeInUp">
          <a href="/resume" className="btn btn-primary btn-lg mx-2">
            View Resume
          </a>
          <a href="/contact" className="btn btn-outline-primary btn-lg mx-3">
            Contact Me
          </a>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section mt-5">
        <h2 className="mb-5 text-secondary">What I Do</h2>
        <div className="row">
          <div className="col-md-4 mb-4">
            <div className="card shadow service-card">
              <i className="bi bi-laptop-code service-icon text-primary"></i>
              <h5 className="mt-3">Frontend Development</h5>
              <p>Building responsive and dynamic user interfaces using modern frameworks like React.</p>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card shadow service-card">
              <i className="bi bi-server service-icon text-primary"></i>
              <h5 className="mt-3">Backend Development</h5>
              <p>Creating secure and efficient backend systems with Node.js and Express.</p>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card shadow service-card">
              <i className="bi bi-cloud service-icon text-primary"></i>
              <h5 className="mt-3">Cloud & DevOps</h5>
              <p>Deploying and managing applications on cloud platforms for optimal performance.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="skills-section mt-5">
        <h2 className="mb-5 text-secondary">Skills</h2>
        <div className="row">
          <div className="col-md-3">
            <i className="bi bi-braces text-primary skill-icon"></i>
            <p>JavaScript</p>
          </div>
          <div className="col-md-3">
            <i className="bi bi-code-slash text-primary skill-icon"></i>
            <p>React</p>
          </div>
          <div className="col-md-3">
            <i className="bi bi-database text-primary skill-icon"></i>
            <p>MongoDB</p>
          </div>
          <div className="col-md-3">
            <i className="bi bi-terminal text-primary skill-icon"></i>
            <p>Node.js</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
