"use client";

import React, { useState } from "react";
import { IoMailOutline, IoLocationOutline, IoSend } from "react-icons/io5";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null); // 'success' | 'error' | null

  const handleSubmit = async (e) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!name || !email || !subject || !message) {
      setStatus("error");
      setTimeout(() => setStatus(null), 3000);
      return;
    }

    if (!emailRegex.test(email)) {
      setStatus("invalid-email");
      setTimeout(() => setStatus(null), 3000);
      return;
    }

    setLoading(true);
    setStatus(null);

    // Mock asynchronous message send (Spring Boot or Serverless handler mock)
    await new Promise((resolve) => setTimeout(resolve, 1800));

    setLoading(false);
    setStatus("success");
    setName("");
    setEmail("");
    setSubject("");
    setMessage("");

    // Hide status after 4 seconds
    setTimeout(() => setStatus(null), 4000);
  };

  return (
    <section className="contact-section" id="contactsection">
      <div className="layout-container">
        <div className="section-header">
          <h2 className="section-title"><span className="gradient-text">Get In Touch</span></h2>
          <p className="section-subtitle">Have a project in mind, a job opportunity, or just want to say hello? Drop me a message.</p>
        </div>

        <div className="contact-grid">
          {/* Left Column: Direct Info */}
          <div className="contact-info-panel glass-panel">
            <h3 className="contact-panel-title">Let's Connect</h3>
            <p className="contact-panel-desc">
              I am open to discussions about Full Stack positions (React / Spring Boot), freelance collaborations, or microservice architectures.
            </p>

            <div className="info-items">
              <div className="info-item">
                <div className="info-icon-wrapper">
                  <IoMailOutline className="info-icon" />
                </div>
                <div className="info-text">
                  <h4>Email</h4>
                  <a href="mailto:bapanapalligopi7@gmail.com" className="info-link">
                    bapanapalligopi7@gmail.com
                  </a>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon-wrapper">
                  <IoLocationOutline className="info-icon" />
                </div>
                <div className="info-text">
                  <h4>Location</h4>
                  <p>Andhra Pradesh, India</p>
                </div>
              </div>
            </div>

            <div className="contact-accent-box">
              <p>⚡ High response rate. I usually get back to you within 24 hours.</p>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="contact-form-panel glass-panel">
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="form-input"
                  placeholder=" "
                  required
                />
                <label htmlFor="name" className="form-label">Your Name</label>
              </div>

              <div className="form-group">
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="form-input"
                  placeholder=" "
                  required
                />
                <label htmlFor="email" className="form-label">Your Email</label>
              </div>

              <div className="form-group">
                <input
                  type="text"
                  id="subject"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className="form-input"
                  placeholder=" "
                  required
                />
                <label htmlFor="subject" className="form-label">Subject</label>
              </div>

              <div className="form-group">
                <textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="form-textarea"
                  placeholder=" "
                  rows={4}
                  required
                ></textarea>
                <label htmlFor="message" className="form-label">Message</label>
              </div>

              <button 
                type="submit" 
                className={`btn-primary form-submit-btn ${loading ? "loading" : ""}`}
                disabled={loading}
              >
                {loading ? (
                  <span className="spinner"></span>
                ) : (
                  <>
                    Send Message <IoSend className="btn-icon" />
                  </>
                )}
              </button>

              {/* Status Alert Panels */}
              {status === "error" && (
                <div className="form-status alert-error">
                  Please fill out all fields.
                </div>
              )}
              {status === "invalid-email" && (
                <div className="form-status alert-error">
                  Please provide a valid email address.
                </div>
              )}
              {status === "success" && (
                <div className="form-status alert-success">
                  ✓ Message sent successfully! Thank you.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
