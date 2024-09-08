// src/Resume.js

import React from 'react';
import "./Resume.css"; // Import the CSS file

const Resume = () => {
  return (
    <div className="resume-container">
      <header className="resume-header">
        <h1 className="resume-name">Aldrean G. Ponsoy</h1>
        <p className="resume-contact">Email: Aldreanponsoy11@gmail.com | Phone: 0917-420-5235</p>
      </header>

      <section className="resume-section">
        <h2 className="section-title">Computer Engineering</h2>
        <p className="section-content">
        To secure the position of the computer engineer where I can utilize my technical and management skills for achieving the target and delivering the best performance in the esteemed organization. Strong written and verbal communications.
        </p>
      </section>

      <section className="resume-section">
        <h2 className="section-title">Experience</h2>
        <div className="experience-item">
          <h3 className="job-title">Teacher’s Assistant</h3>
          <p className="job-date">February 2021 - August 2021</p>
          <ul className="job-description">
            <li>Parañaque Elementary School Unit II</li>
            <li>Kabihasanan Road, Parañaque, 1700 Kalakhang Maynila</li>
          </ul>
        </div>
        <div className="experience-item">
          <h3 className="job-title">Web Developer (Total of 720 hours)</h3>
          <p className="job-date">April 2023 - September 2023</p>
          <ul className="job-description">
            <li>Paranaque City Hall (BPLO)</li>
            <li>Full Stack Developer - Ticketing System under BPLO.</li>
          </ul>
        </div><div className="experience-item">
          <h3 className="job-title">Teacher’s Assistant</h3>
          <p className="job-date">February 2021 - August 2021</p>
          <ul className="job-description">
            <li>Parañaque Elementary School Unit II</li>
            <li>Kabihasanan Road, Parañaque, 1700 Kalakhang Maynila</li>
          </ul>
        </div>
        {/* Add more experience items as needed */}
      </section>

      <section className="resume-section">
        <h2 className="section-title">Education</h2>
        <div className="education-item">
          <h3 className="degree">San Antonio Elementary School</h3>
          <li className="institution">Paranaque, Metro Manila (Near Paranaque City Hall)</li>
          <li className="graduation-date">Graduated: 2007 - 2013</li>
        </div>
        <div className="education-item">
          <h3 className="degree">Paranaque National High School</h3>
          <li className="institution">8155 Dr Arcadio Santos Ave, Parañaque, 1700 Metro Manila</li>
          <li className="graduation-date">Graduated: 2013 - 2017</li>
        </div><div className="education-item">
          <h3 className="degree">Olivarez College</h3>
          <li className="strand">Accountancy, Business, and Management (ABM)</li>
          <li className="institution">Dr Arcadio Santos Ave, Parañaque, 1700 Metro Manila</li>
          <li className="graduation-date">Graduated: 2017 - 2019</li>
        </div><div className="education-item">
          <h3 className="degree">Bachelor of Engineering Technology Major in Computer 
          Engineering Technology (Non - Stem) </h3>
          <li className="institution">Technological University of the Philippines</li>
          <li className="graduation-date">Graduated: 2019 - 2023</li>
        </div>
        {/* Add more education items as needed */}
      </section>

      <section className="resume-section">
        <h2 className="section-title">Skills</h2>
        <ul className="skills-list">
          <li>JavaScript, React, Node.js</li>
          <li>HTML, CSS</li>
          <li>Basic PHP</li>
          <li>Basic CISCO</li>
          <li>MySQL</li>
          <li>Git, Github</li>
          <li>Boothstrap</li>
        </ul>
      </section>
    </div>
  );
};

export default Resume;
