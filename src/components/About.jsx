import Aboutcertifications from "./Aboutcertifications";
import Aboutsection from "./Aboutsection";
import styles from "./about.module.css";
import photo from "../images/photo.png";
import about from "../images/about.png";

export default function About() {
  return (
    <div className={`container ${styles.aboutcontainer}`} id="aboutsec">
      <div className={styles.aboutheading}>About Me</div>
      <div className={styles.about}>
        <div className={styles.imageandtheory}>
          <div className={styles.aboutimage}>
            <img src={about} alt="aboutphoto" className={styles.aboutphoto} />
          </div>
          <div className={styles.abouttheory}>
            <Aboutsection />
            <Aboutcertifications />
          </div>
        </div>
      </div>
    </div>
  );
}
