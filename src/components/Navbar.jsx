"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import logo from "../images/namelogo.png";
import { IoSunnyOutline, IoMoonOutline } from "react-icons/io5";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("homesec");
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    // Read theme preference from local storage
    const savedTheme = localStorage.getItem("theme") || "dark";
    setTheme(savedTheme);
    if (savedTheme === "light") {
      document.documentElement.classList.add("light-theme");
    } else {
      document.documentElement.classList.remove("light-theme");
    }

    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // ScrollSpy active link detection
      const sections = ["homesec", "aboutsec", "resumesec", "projectsec", "skillsec", "contactsection"];
      let currentSection = "homesec";

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150) {
            currentSection = section;
          }
        }
      }
      setActiveSection(currentSection);
    };

    const handleResize = () => {
      if (window.innerWidth > 1024) {
        setIsOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isOpen]);

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    localStorage.setItem("theme", nextTheme);
    if (nextTheme === "light") {
      document.documentElement.classList.add("light-theme");
    } else {
      document.documentElement.classList.remove("light-theme");
    }
  };

  return (
    <header className={`navbar-header ${scrolled ? "scrolled" : ""}`}>
      {/* Click-outside backdrop overlay */}
      {isOpen && (
        <div 
          className="navbar-backdrop" 
          onClick={() => setIsOpen(false)}
        />
      )}

      <div className="navbar-container layout-container">
        <a href="#homesec" className="navbar-brand" onClick={() => setIsOpen(false)}>
          <Image src={logo} alt="BG" width={40} height={40} className="navbar-logo" />
          <span className="navbar-name">Gopi Bapanapalli</span>
        </a>

        <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
          {/* Theme Toggle Button */}
          <button 
            type="button"
            onClick={toggleTheme} 
            className="theme-toggle-btn" 
            aria-label="Toggle Theme"
          >
            {theme === "dark" ? <IoSunnyOutline /> : <IoMoonOutline />}
          </button>

          {/* Custom Hamburger Icon */}
          <button 
            type="button"
            className={`navbar-toggle ${isOpen ? "open" : ""}`} 
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>

        {/* Navigation Menu */}
        <nav className={`navbar-menu ${isOpen ? "active" : ""}`}>
          <ul className="navbar-nav">
            <li className="nav-item">
              <a 
                href="#homesec"
                onClick={() => setIsOpen(false)} 
                className={`nav-link ${activeSection === "homesec" ? "active" : ""}`}
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a 
                href="#aboutsec"
                onClick={() => setIsOpen(false)} 
                className={`nav-link ${activeSection === "aboutsec" ? "active" : ""}`}
              >
                About
              </a>
            </li>
            <li className="nav-item">
              <a 
                href="#resumesec"
                onClick={() => setIsOpen(false)} 
                className={`nav-link ${activeSection === "resumesec" ? "active" : ""}`}
              >
                Resume
              </a>
            </li>
            <li className="nav-item">
              <a 
                href="#projectsec"
                onClick={() => setIsOpen(false)} 
                className={`nav-link ${activeSection === "projectsec" ? "active" : ""}`}
              >
                Projects
              </a>
            </li>
            <li className="nav-item">
              <a 
                href="#skillsec"
                onClick={() => setIsOpen(false)} 
                className={`nav-link ${activeSection === "skillsec" ? "active" : ""}`}
              >
                Skills
              </a>
            </li>
            <li className="nav-item">
              <a 
                href="#contactsection"
                onClick={() => setIsOpen(false)} 
                className={`nav-link ${activeSection === "contactsection" ? "active" : ""}`}
              >
                Contact
              </a>
            </li>
            <li className="nav-item nav-action">
              <a 
                href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCJZfSkgnkSnKmXQGVgZCflBCwScbdLnHCQLHhFjWJDqcshnGTWqgHMHRvHfnMFpjrHbmxfL"
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-primary hire-me-btn"
                onClick={() => setIsOpen(false)}
              >
                Hire Me
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
