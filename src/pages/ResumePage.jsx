import React from 'react';
import '../styles/ResumePage.css';

const ResumePage = () => (
  <div className="resume-container container mt-10">
    <h1 className="text-center text-primary mb-5">Resume</h1>

    {/* Professional Summary */}
    <section className="mb-5">
      <h2 className="text-secondary">Professional Summary</h2>
      <p>
        I am a results-driven <strong>Full-Stack Developer</strong> with over 3 years of experience
        building scalable, high-performance web applications. Proficient in both frontend and backend
        development, I excel at delivering clean, maintainable code and collaborating across teams to achieve
        business objectives.
      </p>
    </section>

    {/* Key Skills */}
    <section className="mb-5">
      <h2 className="text-secondary">Key Skills</h2>
      <div className="row">
        <div className="col-md-6">
          <ul>
            <li>Frontend: React, HTML5, CSS3, JavaScript (ES6+), Bootstrap</li>
            <li>Backend: Node.js, Express.js</li>
            <li>Database: MongoDB, PostgreSQL</li>
          </ul>
        </div>
        <div className="col-md-6">
          <ul>
            <li>Tools: Git, Docker, Jira, VS Code</li>
            <li>Testing: Jest, Mocha, Postman</li>
            <li>Soft Skills: Problem-solving, Team Collaboration, Agile Methodology</li>
          </ul>
        </div>
      </div>
    </section>

    {/* Experience */}
    <section className="mb-5">
      <h2 className="text-secondary">Experience</h2>
      <div className="experience-item mb-4">
        <h5 className="text-dark">Full-Stack Developer</h5>
        <p className="text-muted">Tech Company XYZ (June 2020 - Present)</p>
        <ul>
          <li>Developed scalable full-stack applications using React, Node.js, and MongoDB.</li>
          <li>Reduced server response times by 30% through optimization of backend APIs.</li>
          <li>Led a team of 4 developers to implement a user authentication system, increasing security by 40%.</li>
        </ul>
      </div>
      <div className="experience-item">
        <h5 className="text-dark">Frontend Developer</h5>
        <p className="text-muted">Web Agency ABC (May 2018 - May 2020)</p>
        <ul>
          <li>Built responsive web interfaces with React and Bootstrap, improving user engagement by 25%.</li>
          <li>Collaborated with designers to implement pixel-perfect designs in multiple projects.</li>
        </ul>
      </div>
    </section>

    {/* Projects */}
    <section className="mb-5">
      <h2 className="text-secondary">Notable Projects</h2>
      <ul>
        <li>
          <strong>E-commerce Platform:</strong> Developed a full-stack e-commerce platform with user authentication, 
          product management, and payment gateway integration.
        </li>
        <li>
          <strong>Social Media App:</strong> Built a scalable app with real-time chat, notifications, and user feeds.
        </li>
      </ul>
    </section>

    {/* Education */}
    <section className="mb-5">
      <h2 className="text-secondary">Education</h2>
      <ul>
        <li>
          <strong>Bachelor of Technology in Computer Science</strong> - University of XYZ (2014 - 2018)
        </li>
      </ul>
    </section>

    {/* Contact Information */}
    <section className="mb-5 text-center">
      <h2 className="text-secondary">Contact Information</h2>
      <ul className="list-inline">
        <li className="list-inline-item mx-3">
          <a href="mailto:sairam@example.com" className="text-dark">
            <i className="bi bi-envelope"></i> sairam@example.com
          </a>
        </li>
        <li className="list-inline-item mx-3">
          <a href="https://linkedin.com/in/sairam" target="_blank" rel="noreferrer" className="text-dark">
            <i className="bi bi-linkedin"></i> LinkedIn
          </a>
        </li>
        <li className="list-inline-item mx-3">
          <a href="https://github.com/sairam" target="_blank" rel="noreferrer" className="text-dark">
            <i className="bi bi-github"></i> GitHub
          </a>
        </li>
      </ul>
    </section>

    {/* Download Resume */}
    <section className="text-center">
      <a
        href="/path-to-your-resume.pdf"
        className="btn btn-primary btn-lg"
        download="Sairam_Resume.pdf"
      >
        Download Resume
      </a>
    </section>
  </div>
);

export default ResumePage;
