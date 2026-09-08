"use client";

import React from "react";
import { FaGraduationCap, FaAward, FaBuilding } from "react-icons/fa";

export default function About() {
  const certifications = [
    { title: "The Joy of Computing using Python (Score: 83%)", issuer: "NPTEL (National Program on Technology Enhanced Learning)" },
    { title: "Software Development Processes & Agile Methodologies", issuer: "Coursera" },
    { title: "Java Programming Certification", issuer: "Infosys Springboard" },
    { title: "Introduction to Redis Data Structures", issuer: "Redis University" },
    { title: "AWS Academy Graduate - Cloud Foundations", issuer: "AWS Academy" },
    { title: "Introduction to Cloud Identity", issuer: "Google Cloud" },
    { title: "Cloud Computing Basics (Cloud 101)", issuer: "LearnQuest (Coursera)" },
  ];

  return (
    <section className="about-section" id="aboutsec">
      <div className="layout-container">
        <div className="section-header">
          <h2 className="section-title"><span className="gradient-text">About Me</span></h2>
          <p className="section-subtitle">Java Backend Developer with nearly 2 years of experience at Payswiff Technologies.</p>
        </div>

        <div className="about-grid">
          {/* Left Column: Interactive Terminal Mockup */}
          <div className="about-code-editor glass-panel">
            <div className="editor-header">
              <span className="dot dot-red"></span>
              <span className="dot dot-yellow"></span>
              <span className="dot dot-green"></span>
              <span className="editor-title">developer_profile.json</span>
            </div>
            <div className="editor-body">
              <pre>
                <code>
{`{
  `}
  <span className="json-key">"name"</span>: <span className="json-val">"Gopi Bapanapalli"</span>,
  <span className="json-key">"role"</span>: <span className="json-val">"Java Backend Developer"</span>,
  <span className="json-key">"experience"</span>: <span className="json-val">"Nearly 2 Years"</span>,
  <span className="json-key">"company"</span>: <span className="json-val">"Payswiff Technologies Pvt. Ltd"</span>,
  <span className="json-key">"education"</span>: {`{`}
    <span className="json-key">"degree"</span>: <span className="json-val">"B.Tech in Information Technology"</span>,
    <span className="json-key">"score"</span>: <span className="json-val">"CGPA 7.91"</span>
  {`}`},
  <span className="json-key">"specialties"</span>: [
    <span className="json-val">"Java"</span>, 
    <span className="json-val">"Spring Boot"</span>, 
    <span className="json-val">"REST APIs"</span>,
    <span className="json-val">"AWS Cloud"</span>,
    <span className="json-val">"Kafka"</span>
  ]
{`}`}
                </code>
              </pre>
            </div>
          </div>

          {/* Right Column: Bio Narrative */}
          <div className="about-text-content">
            <h3 className="about-subtitle">Designing Scalable Backend Architectures</h3>
            <p className="about-bio">
              I am a dedicated Java Backend Developer with nearly 2 years of experience designing, implementing, and debugging scalable backend systems at <strong>Payswiff Technologies Pvt. Ltd</strong>. I specialize in the Java and Spring Boot ecosystem, with a proven track record of writing clean, secure, and highly optimized code following industry best practices.
            </p>
            <p className="about-bio">
              My engineering experience includes building modular, service-oriented architectures that process <strong>50,000+ daily transactions</strong>, constructing robust reconciliation engines, automating cloud pipelines with AWS S3, and integrating event-driven systems with Apache Kafka.
            </p>

            <div className="about-stats">
              <div className="stat-card glass-panel">
                <FaBuilding className="stat-icon" />
                <div className="stat-info">
                  <h4>Developer Experience</h4>
                  <p>Payswiff Technologies Pvt. Ltd</p>
                </div>
              </div>
              <div className="stat-card glass-panel">
                <FaGraduationCap className="stat-icon" />
                <div className="stat-info">
                  <h4>B.Tech in IT</h4>
                  <p>Graduation: May 2023 | JNTUK</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Certifications Block */}
        <div className="certifications-section">
          <h3 className="certifications-heading">Professional Credentials</h3>
          <div className="certifications-grid">
            {certifications.map((cert, index) => (
              <div className="cert-card glass-panel" key={index}>
                <div className="cert-badge">
                  <span className="cert-check">✓</span>
                </div>
                <div className="cert-details">
                  <h4 className="cert-title">{cert.title}</h4>
                  <p className="cert-issuer">{cert.issuer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
