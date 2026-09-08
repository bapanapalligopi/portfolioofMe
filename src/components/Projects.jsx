"use client";

import React, { useState } from "react";
import { FaGithub, FaExternalLinkAlt, FaPlay } from "react-icons/fa";
import { projectsData } from "../data/projectsData";

export default function Projects() {
  const [activeTab, setActiveTab] = useState("professional"); // 'professional' | 'personal'
  const [personalFilter, setPersonalFilter] = useState("All");
  const [activeVideo, setActiveVideo] = useState(null);

  const personalCategories = ["All", "Fullstack", "Frontend", "Games/Utils"];

  // Filter projects by Tab first
  const tabProjects = projectsData.filter(project => project.type === activeTab);

  // If personal, apply sub-filter
  const displayProjects = activeTab === "personal" && personalFilter !== "All"
    ? tabProjects.filter(project => project.category === personalFilter)
    : tabProjects;

  return (
    <section className="projects-section" id="projectsec">
      <div className="layout-container">
        <div className="section-header">
          <h2 className="section-title"><span className="gradient-text">My Projects</span></h2>
          <p className="section-subtitle">Browse my professional software experience and personal engineering builds.</p>
        </div>

        {/* Tab Toggle: Professional vs Personal */}
        <div className="projects-toggle-container">
          <button 
            type="button"
            className={`projects-toggle-btn ${activeTab === "professional" ? "active" : ""}`}
            onClick={() => { setActiveTab("professional"); setPersonalFilter("All"); }}
          >
            Professional Experience
          </button>
          <button 
            type="button"
            className={`projects-toggle-btn ${activeTab === "personal" ? "active" : ""}`}
            onClick={() => { setActiveTab("personal"); setPersonalFilter("All"); }}
          >
            Personal Projects
          </button>
        </div>

        {/* Professional Experience View (Timeline layout) */}
        {activeTab === "professional" && (
          <div className="professional-timeline">
            {displayProjects.map((project, index) => (
              <div className="timeline-item" key={project.id}>
                <div className="timeline-marker animate-pulse-slow"></div>
                <div className="timeline-card glass-panel">
                  <div className="timeline-header">
                    <div className="timeline-company-info">
                      <span className="timeline-company">{project.company}</span>
                      <h3 className="timeline-role">{project.title}</h3>
                    </div>
                    <span className="timeline-dates">{project.timeline}</span>
                  </div>
                  <p className="timeline-desc">{project.description}</p>
                  <div className="timeline-tech-tags">
                    {project.lang.split(",").map((tech, techIndex) => (
                      <span className="timeline-tech-tag" key={techIndex}>{tech.trim()}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Personal Projects View (Grid with sub-filters) */}
        {activeTab === "personal" && (
          <>
            {/* Sub-Filters */}
            <div className="projects-filters">
              {personalCategories.map((cat) => (
                <button
                  type="button"
                  key={cat}
                  className={`filter-btn ${personalFilter === cat ? "active" : ""}`}
                  onClick={() => setPersonalFilter(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Project Grid */}
            <div className="projects-grid">
              {displayProjects.map((project) => (
                <div className="project-card glass-panel" key={project.id}>
                  <div className="project-image-container">
                    <img 
                      src={project.url?.src || project.url} 
                      alt={project.title} 
                      className="project-image"
                    />
                    <div className="project-overlay">
                      <div className="overlay-links">
                        <a 
                          href={project.githuburl} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="overlay-icon-link" 
                          title="View Code"
                        >
                          <FaGithub />
                        </a>
                        {project.view && (
                          <a 
                            href={project.view} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="overlay-icon-link" 
                            title="Live Demo"
                          >
                            <FaExternalLinkAlt />
                          </a>
                        )}
                        {project.videourl && (
                          <button 
                            type="button"
                            onClick={() => setActiveVideo(project)} 
                            className="overlay-icon-link" 
                            title="Watch Video Walkthrough"
                          >
                            <FaPlay />
                          </button>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="project-details">
                    <div className="project-meta">
                      <span className="project-category">{project.category}</span>
                    </div>
                    <h3 className="project-title">{project.title}</h3>
                    <p className="project-description">{project.description}</p>
                    <div className="project-tech">
                      <span className="tech-label">Built with:</span>
                      <div className="tech-tags">
                        {project.lang.split(",").map((tech, index) => (
                          <span className="tech-tag" key={index}>{tech.trim()}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>

      {/* Video Modal Popup */}
      {activeVideo && (
        <div className="video-modal" onClick={() => setActiveVideo(null)}>
          <div className="video-modal-content glass-panel" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3 className="modal-title">{activeVideo.title} Demo</h3>
              <button type="button" className="close-btn" onClick={() => setActiveVideo(null)}>&times;</button>
            </div>
            <div className="modal-body">
              <video 
                controls 
                autoPlay 
                playsInline
                className="modal-video"
              >
                <source src={activeVideo.videourl} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
