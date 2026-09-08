"use client";

import React from "react";
import { FaDownload, FaBriefcase, FaGraduationCap, FaCertificate, FaTrophy } from "react-icons/fa";

export default function Resume() {
  const experiences = [
    {
      company: "Payswiff Technologies Pvt. Ltd",
      role: "Java Backend Developer | QR on POS",
      period: "Jun 2024 – May 2026",
      achievements: [
        "Built a QR batch-processing service handling 50,000+ transactions/day using Java 17, Spring Boot, MySQL, and AWS S3.",
        "Designed REST API suite for batch job orchestration (schedule, execute, monitor, control) and built automated reconciliation engine.",
        "Optimized backend and database operations, added authentication, authorization, and audit logging for compliant transaction handling."
      ]
    },
    {
      company: "Payswiff Technologies Pvt. Ltd",
      role: "Java Backend Developer | Refund Automation",
      period: "Jun 2024 – May 2026",
      achievements: [
        "Designed an end-to-end refund platform covering request processing, tracking, reconciliation, and auditing — replacing a manual workflow.",
        "Implemented Spring Batch jobs with retry logic and error-recovery workflows, improving data consistency and fault tolerance across the refund lifecycle."
      ]
    },
    {
      company: "Payswiff Technologies Pvt. Ltd",
      role: "Java Backend Developer | POS Security & Feedback",
      period: "Jun 2024 – May 2026",
      achievements: [
        "Implemented DUKPT encryption and RSA-based secure communication for POS key management, maintaining zero security incidents across tenure.",
        "Built a full-stack Merchant Feedback Management System (Spring Boot, ReactJS, MySQL, AWS) with RBAC, feedback collection, and real-time analytics; applied OWASP/CWE standards with SonarQube SAST scanning."
      ]
    }
  ];

  const educations = [
    {
      institution: "KKR & KSR Institute of Technology and Sciences",
      degree: "Bachelor of Technology in Information Technology",
      details: "Affiliated with JNTU Kakinada | Guntur, AP, India",
      period: "Graduation: May 2023",
      grade: "CGPA: 7.91"
    }
  ];

  const accomplishments = [
    "Led a 4-month project to successful completion as the team leader, demonstrating leadership skills.",
    "Achieved a score of 83% in the NPTEL Joy of Computing Using Python course.",
    "Actively participated in IOT/ML Hackathons, Idea-thons, and developer boot camps hosted by Mad Blocks team."
  ];

  return (
    <section className="resume-section" id="resumesec">
      <div className="layout-container">
        <div className="section-header">
          <h2 className="section-title"><span className="gradient-text">My Resume</span></h2>
          <p className="section-subtitle">Interactive CV detailing my technical career history, education milestones, and accolades.</p>
          <div style={{ marginTop: "2rem" }}>
            <a href="/resume.pdf" download="Gopi_Bapanapalli_Resume.pdf" className="btn-primary">
              Download PDF Resume <FaDownload style={{ marginLeft: "0.5rem" }} />
            </a>
          </div>
        </div>

        <div className="resume-grid">
          {/* Left Column: Work Experience */}
          <div className="resume-column">
            <h3 className="resume-col-title"><FaBriefcase style={{ marginRight: "0.75rem", color: "var(--accent-solid)" }} /> Professional Experience</h3>
            <div className="resume-timeline">
              {experiences.map((exp, index) => (
                <div className="resume-timeline-item glass-panel" key={index}>
                  <div className="resume-item-header">
                    <div>
                      <h4 className="resume-item-role">{exp.role}</h4>
                      <span className="resume-item-company">{exp.company}</span>
                    </div>
                    <span className="resume-item-period">{exp.period}</span>
                  </div>
                  <ul className="resume-item-bullets">
                    {exp.achievements.map((bullet, bIndex) => (
                      <li key={bIndex}>{bullet}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Education & Accolades */}
          <div className="resume-column">
            <h3 className="resume-col-title"><FaGraduationCap style={{ marginRight: "0.75rem", color: "var(--accent-solid)" }} /> Education</h3>
            <div className="education-list" style={{ marginBottom: "3rem" }}>
              {educations.map((edu, index) => (
                <div className="education-card glass-panel" key={index}>
                  <div className="resume-item-header">
                    <div>
                      <h4 className="resume-item-role">{edu.degree}</h4>
                      <span className="resume-item-company">{edu.institution}</span>
                    </div>
                    <span className="resume-item-period">{edu.period}</span>
                  </div>
                  <p className="education-details">{edu.details}</p>
                  <span className="education-grade">{edu.grade}</span>
                </div>
              ))}
            </div>

            <h3 className="resume-col-title"><FaTrophy style={{ marginRight: "0.75rem", color: "var(--accent-solid)" }} /> Key Accomplishments</h3>
            <div className="accomplishments-card glass-panel">
              <ul className="resume-item-bullets">
                {accomplishments.map((acc, index) => (
                  <li key={index}>{acc}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
