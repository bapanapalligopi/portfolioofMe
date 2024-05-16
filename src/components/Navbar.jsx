import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styles from "./navbar.module.css";
import logo from "../images/namelogo.png";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Navbar() {
  const [collapseNav, setcollapseNav] = useState(false);
  const handleNavClick = () => {
    setcollapseNav(true);
  };
  const handleNavClickLinks = () => {
    setcollapseNav(false);
  };
  return (
    <div className={styles.navbar}>
      <nav className={`navbar navbar-expand-lg   ${styles.navbarcontainer}`}>
        <div className="container">
          <div className={`navbar-brand ${styles.brand}`}>
            <img src={logo} alt="BG" className={styles.logo} />
            <span className={styles.name}> Gopi Bapanapalli</span>
          </div>
          <button
            className={`navbar-toggler outline-0 ${styles.togglebut}`}
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={handleNavClick}
          >
            <span className={`navbar-toggler-icon ${styles.toggle}`}></span>
          </button>

          <div
            className={`collapse navbar-collapse`}
            id="navbarSupportedContent"
            style={{ display: !collapseNav ? "none" : "block" }}
          >
            <ul className={`navbar-nav ms-auto ${styles.navitems_ul}`}>
              <li
                className={`nav-item ${styles.navitem_li}`}
                onClick={handleNavClickLinks}
              >
                <a to="/home" className={styles.navitem_link} href="#">
                  Home
                </a>
              </li>
              <li
                className={`nav-item ${styles.navitem_li}`}
                onClick={handleNavClickLinks}
              >
                <a to="/about" className={styles.navitem_link} href="#aboutsec">
                  About
                </a>
              </li>
              <li
                className={`nav-item ${styles.navitem_li}`}
                onClick={handleNavClickLinks}
              >
                <a
                  to="/projects"
                  className={styles.navitem_link}
                  href="#projectsec"
                >
                  Projects
                </a>
              </li>
              <li
                className={`nav-item ${styles.navitem_li}`}
                onClick={handleNavClickLinks}
              >
                <a
                  to="/skills"
                  className={styles.navitem_link}
                  href="#skillsec"
                >
                  Skills
                </a>
              </li>

              <li
                className={`nav-item ${styles.navitem_li}`}
                onClick={handleNavClickLinks}
              >
                <a href="#contactsection" className={styles.navitem_link}>
                  Contact
                </a>
              </li>
              <li onClick={handleNavClickLinks}>
                <a href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCJZfSkgnkSnKmXQGVgZCflBCwScbdLnHCQLHhFjWJDqcshnGTWqgHMHRvHfnMFpjrHbmxfL">
                  <button className={styles.hireme}>Hire Me</button>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
