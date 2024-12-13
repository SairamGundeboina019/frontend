import React from 'react';
import '../styles/AboutPage.css'; // Custom CSS for styling
import ProfilePicture from "../images/ProfilePicture.jpg";



const AboutPage = () => (
  <div className="container mt-0">
    <h1 className="text-primary mb-4 text-center">About Me</h1>

    {/* Profile Section */}
    <div className="profile-section row align-items-center mb-5">
      <div className="col-md-4 text-center">
        <img
          src={ProfilePicture} // Replace with the actual image path
          alt="Sairam Gundeboina"
          className="profile-picture img-fluid "
        />
      </div>
      <div className="col-md-8">
        <p className="lead">
          Hello! I’m <strong>Sairam Gundeboina</strong>, a dedicated and results-oriented <strong>Full-Stack Developer</strong>.
          I specialize in building robust, scalable web applications and solving challenging technical problems.
        </p>
        <p>
          With over 3 years of professional experience, I have honed my skills in both frontend and backend development.
          I am passionate about creating seamless user experiences, clean architecture, and leveraging technology to deliver
          impactful solutions.
        </p>
      </div>
    </div>

    {/* Core Values */}
    <section className="mb-5">
      <h2 className="text-secondary">Core Values</h2>
      <ul>
        <li>Commitment to continuous learning and improvement.</li>
        <li>Collaboration and teamwork to achieve goals effectively.</li>
        <li>Innovative thinking to solve complex challenges.</li>
      </ul>
    </section>

    {/* Technologies & Expertise */}
    <section className="mb-5">
      <h2 className="text-secondary">Technologies & Expertise</h2>
      <p>
        I am proficient in a variety of tools and technologies, including:
      </p>
      <ul>
        <li><strong>Frontend:</strong> React, HTML5, CSS3, JavaScript (ES6+), Bootstrap</li>
        <li><strong>Backend:</strong> Node.js, Express.js</li>
        <li><strong>Databases:</strong> MongoDB, PostgreSQL</li>
        <li><strong>Tools:</strong> Git, Docker, Postman</li>
        <li><strong>Others:</strong> REST APIs, Agile Methodology, Testing with Jest</li>
      </ul>
    </section>

    {/* Hobbies & Interests */}
    <section className="mb-5">
      <h2 className="text-secondary">Hobbies & Interests</h2>
      <p>
        Beyond coding, I enjoy exploring new technologies, contributing to open-source projects, and mentoring aspiring developers.
        When I’m not at my desk, you’ll find me:
      </p>
      <ul>
        <li>Reading about advancements in AI and web development.</li>
        <li>Playing chess to sharpen strategic thinking.</li>
        <li>Hiking and photography to reconnect with nature.</li>
      </ul>
    </section>

    {/* Closing */}
    <section>
      <h2 className="text-secondary">Get in Touch</h2>
      <p>
        I am always excited to collaborate on interesting projects or discuss innovative ideas. Feel free to reach out to me through
        my <a href="/contact" className="text-primary">Contact Page</a>.
      </p>
    </section>
  </div>
);

export default AboutPage;
