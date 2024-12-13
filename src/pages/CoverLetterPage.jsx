import React from 'react';
import '../styles/CoverLetterPage.css';

const CoverLetterPage = () => (
  <div className="cover-letter-container container mt-5">
    <h1 className="text-center text-primary mb-5">Cover Letter</h1>

    {/* Introductory Paragraph */}
    <section className="mb-5">
      <p>
        Dear [Hiring Manager's Name],
      </p>
      <p>
        I am excited to apply for the <strong>Full-Stack Developer</strong> position at <strong>[Company Name]</strong>.
        With over three years of experience building scalable web applications and solving complex challenges,
        I am confident in my ability to contribute to your team.
      </p>
    </section>

    {/* Skills and Achievements */}
    <section className="mb-5">
      <p>
        In my current role as a Full-Stack Developer at <strong>Tech Company XYZ</strong>, I led the development of a
        secure, scalable e-commerce platform that increased user engagement by 25%. My expertise includes frontend
        technologies like <strong>React</strong> and backend systems powered by <strong>Node.js</strong> and
        <strong> MongoDB</strong>. Additionally, I thrive in agile environments and collaborate effectively with cross-functional teams.
      </p>
    </section>

    {/* Why the Company? */}
    <section className="mb-5">
      <p>
        What excites me about <strong>[Company Name]</strong> is your commitment to innovation and user-centric
        solutions. I admire how your team leverages cutting-edge technology to create impactful digital experiences,
        and I am eager to bring my skills and passion to contribute to your mission.
      </p>
    </section>

    {/* Closing Statement */}
    <section className="mb-5">
      <p>
        I would welcome the opportunity to discuss how my expertise can align with your needs and goals. Thank you
        for considering my application, and I look forward to the possibility of contributing to your team.
      </p>
      <p>Sincerely,</p>
      <p><strong>Sairam Gundeboina</strong></p>
    </section>

    {/* Download Cover Letter */}
    <section className="text-center">
      <a
        href="/path-to-your-cover-letter.pdf"
        className="btn btn-primary btn-lg"
        download="Sairam_Cover_Letter.pdf"
      >
        Download Cover Letter
      </a>
    </section>
  </div>
);

export default CoverLetterPage;
