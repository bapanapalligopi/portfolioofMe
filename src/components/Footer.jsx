"use client";

import React from "react";
import { AiOutlineLinkedin } from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";
import { GrGithub, GrInstagram } from "react-icons/gr";
import { FaArrowUp } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleScrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <footer className="footer">
      <div className="layout-container footer-grid">
        <div className="footer-brand">
          <h3>Gopi Bapanapalli</h3>
          <p>Building high-performance, robust, and scalable software solutions.</p>
        </div>

        <div className="footer-middle">
          <div className="footer-socials">
            <a 
              href="https://www.linkedin.com/in/bapanapalli-gopi-55a2771a7/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="footer-social-link linkedin"
              aria-label="LinkedIn"
            >
              <AiOutlineLinkedin />
            </a>
            <a 
              href="https://github.com/bapanapalligopi" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="footer-social-link github"
              aria-label="GitHub"
            >
              <GrGithub />
            </a>
            <a 
              href="https://twitter.com/B_GOPI_17" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="footer-social-link twitter"
              aria-label="Twitter / X"
            >
              <FaXTwitter />
            </a>
            <a 
              href="https://www.instagram.com/g.o.p.i_17/?hl=en" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="footer-social-link instagram"
              aria-label="Instagram"
            >
              <GrInstagram />
            </a>
          </div>
          <p className="footer-copyright">
            &copy; {currentYear} | Developed by Gopi Bapanapalli.
          </p>
        </div>

        <div className="footer-back-to-top">
          <button onClick={handleScrollToTop} className="scroll-top-btn" aria-label="Go to Top">
            <FaArrowUp />
          </button>
          <span>Back to Top</span>
        </div>
      </div>
    </footer>
  );
}
