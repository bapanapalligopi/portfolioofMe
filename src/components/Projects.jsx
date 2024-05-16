import styles from "./projects.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Projects0 from "./Projects0";
import Projectone from "./Projectsone";
import Projecttwo from "./Projecttwo";
import Linkproject from "./Linkproject";
export default function Projects() {
  return (
    <div className={`container ${styles.projectscontainer}`} id="projectsec">
      <div className={styles.projectheading}>Projects</div>
      <div>
        {" "}
        <div className={styles.threeprojects}>
          {Projects0.map((project) => (
            <Linkproject key={project.title} project={project} />
          ))}
        </div>
        <div className={styles.threeprojects}>
          {Projectone.map((project) => (
            <Linkproject key={project.title} project={project} />
          ))}
        </div>
        <div className={styles.sixprojects}>
          {Projecttwo.map((project) => (
            <Linkproject key={project.title} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
}
