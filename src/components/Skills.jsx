"use client";

import React from "react";
import { skillsData } from "../data/skillsData";

export default function Skills() {
  const categoryTitles = {
    programmingFrameworks: "Programming & Frameworks",
    frontend: "Front-End Development",
    cloudDevops: "Cloud & DevOps",
    apisTools: "APIs & Tools",
    monitoringLogging: "Monitoring & Logging",
    utilitiesIdes: "Utilities & IDEs"
  };

  return (
    <section className="skills-section" id="skillsec">
      <div className="layout-container">
        <div className="section-header">
          <h2 className="section-title"><span className="gradient-text">Technical Skills</span></h2>
          <p className="section-subtitle">My core technical competencies compiled from my experience and academic record.</p>
        </div>

        <div className="skills-grid">
          {Object.keys(skillsData).map((categoryKey) => {
            const skillsList = skillsData[categoryKey];
            const title = categoryTitles[categoryKey];

            return (
              <div className="skills-category-card glass-panel" key={categoryKey}>
                <h3 className="category-title">{title}</h3>
                <div className="skills-list">
                  {skillsList.map((skill, index) => {
                    const IconComponent = skill.icon;
                    return (
                      <div 
                        className="skill-pill" 
                        key={index}
                        style={{ "--hover-color": skill.color }}
                      >
                        <span className="skill-icon-wrapper" style={{ color: skill.color }}>
                          <IconComponent className="skill-icon" />
                        </span>
                        <span className="skill-name">{skill.name}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
