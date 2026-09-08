"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import photo from "../images/photo.png";
import { GrLinkedinOption } from "react-icons/gr";
import { FaGithub } from "react-icons/fa";
import { IoMailUnread } from "react-icons/io5";

export default function Hero() {
  const [tagline, setTagline] = useState("");
  const [taglineIndex, setTaglineIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const taglines = ["Software Engineer", "Full Stack Developer", "Backend Engineer", "React Specialist"];
  const typingSpeed = 100;
  const deletingSpeed = 50;
  const delayBetweenWords = 2000;

  useEffect(() => {
    let timer;
    const currentFullWord = taglines[taglineIndex];

    if (isDeleting) {
      timer = setTimeout(() => {
        setTagline((prev) => prev.slice(0, -1));
      }, deletingSpeed);
    } else {
      timer = setTimeout(() => {
        setTagline((prev) => currentFullWord.slice(0, prev.length + 1));
      }, typingSpeed);
    }

    // Word completely typed, wait and start deleting
    if (!isDeleting && tagline === currentFullWord) {
      timer = setTimeout(() => setIsDeleting(true), delayBetweenWords);
    }
    // Word completely deleted, move to next
    else if (isDeleting && tagline === "") {
      setIsDeleting(false);
      setTaglineIndex((prev) => (prev + 1) % taglines.length);
    }

    return () => clearTimeout(timer);
  }, [tagline, isDeleting, taglineIndex]);

  const handleScrollToContact = (e) => {
    e.preventDefault();
    const element = document.getElementById("contactsection");
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <section className="hero-section" id="homesec">
      <div className="hero-grid layout-container">
        <div className="hero-info">
          <p className="hero-hello">Hello, My name is</p>
          <h1 className="hero-name">
            Gopi <span className="gradient-text">Bapanapalli</span>
          </h1>
          <div className="hero-tagline-container">
            <span className="hero-tagline-prefix">I am a  </span>
            <span className="hero-tagline gradient-text">{tagline}</span>
            <span className="hero-cursor">|</span>
          </div>
          <p className="hero-desc">
            I am a proficient developer skilled in Java  for building resilient, scalable backend systems. With expertise spanning the full software development spectrum, I engineer comprehensive, robust, and innovative solutions tailored to modern project requirements.
          </p>

          <div className="hero-actions">
            <a
              href="/resume.pdf"
              download="Gopi_Bapanapalli_Resume.pdf"
              className="btn-primary hero-btn-download"
            >
              Download Resume
            </a>
            <a
              href="#contactsection"
              onClick={handleScrollToContact}
              className="btn-secondary hero-btn-contact"
            >
              Contact Me
            </a>
          </div>

          <div className="hero-socials">
            <a
              href="https://www.linkedin.com/in/bapanapalli-gopi-55a2771a7/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon linkedin"
              aria-label="LinkedIn"
            >
              <GrLinkedinOption />
            </a>
            <a
              href="https://github.com/bapanapalligopi"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon github"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
            <a
              href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCJZfSkgnkSnKmXQGVgZCflBCwScbdLnHCQLHhFjWJDqcshnGTWqgHMHRvHfnMFpjrHbmxfL"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon mail"
              aria-label="Email"
            >
              <IoMailUnread />
            </a>
          </div>
        </div>

        <div className="hero-avatar-area">
          <div className="hero-avatar-wrapper">
            <div className="hero-avatar-glow"></div>
            <div className="hero-avatar-image-container">
              <Image
                src={photo}
                alt="Gopi Bapanapalli"
                priority
                className="hero-avatar-image"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
