import styles from "./about.module.css";
import tickmark from "../images/tickmark.png";
export default function Aboutcertifications() {
  return (
    <div className={styles.certifications}>
      <div className={styles.allcertifications}>
        <div className={styles.certificationsmessage}> Certifications</div>
        <div className={styles.certificate}>
          <a href="#" className={styles.certificatelink}>
            <img src={tickmark} alt="" className={styles.tickmark} /> National
            Program on Technology Enhanced Learning (NPTEL) - The Joy of
            Computing using Python.
          </a>
        </div>
        <div className={styles.certificate}>
          <a href="#" className={styles.certificatelink}>
            <img src={tickmark} alt="" className={styles.tickmark} /> Web
            Development certification by Udemy.
          </a>
        </div>
        <div className={styles.certificate}>
          <a href="#" className={styles.certificatelink}>
            <img src={tickmark} alt="" className={styles.tickmark} /> Software
            Development Processes and Methodologies and Agile Software
            Development Coursera.
          </a>
        </div>
        <div className={styles.certificate}>
          <a href="#" className={styles.certificatelink}>
            <img src={tickmark} alt="" className={styles.tickmark} /> Java
            Certification on Infosys Springboard.
          </a>
        </div>
        <div className={styles.certificate}>
          <a href="#" className={styles.certificatelink}>
            <img src={tickmark} alt="" className={styles.tickmark} />{" "}
            Introduction to Redis Data Structures from Redis University
          </a>
        </div>
        <div className={styles.certificate}>
          <a href="#" className={styles.certificatelink}>
            <img src={tickmark} alt="" className={styles.tickmark} /> Front End
            React developer by HackerRank.
          </a>
        </div>
        <div className={styles.certificate}>
          <a href="#" className={styles.certificatelink}>
            <img src={tickmark} alt="" className={styles.tickmark} /> python,
            sql and java developer by Hackerrank.
          </a>
        </div>
      </div>
    </div>
  );
}
