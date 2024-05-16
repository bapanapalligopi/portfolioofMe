import styles from "./projects.module.css";
import { MdOutlineVideoLibrary } from "react-icons/md";
import { FaGithub } from "react-icons/fa6";
import { GiCircuitry } from "react-icons/gi";

export default function Linkproject({ project }) {
  return (
    <div>
      <div div className={`${styles.link}`}>
        <div className={`${styles.singleprojects}`}>
          <img
            src={project.url}
            className={`card-img-top ${styles.image}`}
            alt={project.title}
          />
          <div className={`${styles.titleanddesc}`}>
            <h5 className={` ${styles.title}`}>{project.title}</h5>
            <p className={`card-text ${styles.desc}`}>{project.description}</p>
            <div className={styles.languages}>
              Built by using:{" "}
              <span className={styles.langskills}>{project.lang}</span>
            </div>
            <div className={styles.source}>
              <div className={styles.viewcode}>
                <a href={project.githuburl} className={styles.codeview}>
                  <FaGithub className={styles.iconsofview} /> Code
                </a>
              </div>
              {project.view !== "#" && (
                <div className={styles.livedemo}>
                  <a href={project.view} className={styles.liveview}>
                    <GiCircuitry className={styles.iconsofview} /> Try it
                  </a>
                </div>
              )}
              <div className={styles.videodemo}>
                <a href={project.videourl} className={styles.videoview}>
                  <MdOutlineVideoLibrary className={styles.iconsofview} /> Demo
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
