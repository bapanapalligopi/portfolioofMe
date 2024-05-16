import styles from "./home.module.css";
import photo from "../images/photo.png";
import resume from "../images/resume.pdf";
import { Link } from "react-router-dom";
import { GrLinkedinOption } from "react-icons/gr";
import { FaGithub } from "react-icons/fa";
import { IoMailUnread } from "react-icons/io5";
export default function Home() {
  function downloadResume(resume) {
    const link = document.createElement("a");
    link.href = resume; // Assuming 'resume' is the URL of the resume
    link.download = "resume.pdf"; // Specify the filename here
    link.click();
  }

  return (
    <div className={`container ${styles.homecontainer}`} id="homesec">
      <div className={`${styles.dataphoto}`}>
        <div className={`${styles.data}`}>
          <p className={styles.hello}>Hello, My name is</p>
          <p className={styles.name}>
            <span className={styles.firstname}>Gopi</span>
            <span className={styles.lastname}> Bapanapalli</span>
          </p>

          <p className={styles.quicklearner}>
            Driven, Quick Learner, Innovative.
          </p>
          <p className={styles.role}>Software Engineer</p>
          <p className={`${styles.objective}`}>
            I am a proficient developer skilled in React for crafting dynamic
            frontend experiences and Java Spring Boot for building resilient
            backend systems. With expertise in both, I engineer comprehensive
            solutions seamlessly integrating frontend and backend
            functionalities. My mastery spans the development spectrum,
            delivering robust, scalable, and innovative solutions tailored to
            meet demanding project needs.
          </p>
        </div>
        <div className={`${styles.photo}`}>
          <img src={photo} alt="Gopi Image" className={styles.myphoto} />
        </div>
      </div>
      <div className={styles.resumecontact}>
        <button
          type="button"
          className={styles.resume}
          onClick={() => downloadResume(resume)}
        >
          Download Resume
        </button>

        <a href="#contactsection">
          <button className={styles.contact}>Contact Me</button>
        </a>
      </div>
      <div className={styles.socialmedia}>
        <div className={styles.linkedin}>
          <a href="https://www.linkedin.com/in/bapanapalli-gopi-55a2771a7/">
            <GrLinkedinOption color="white" />
          </a>
        </div>
        <div className={styles.github}>
          <a href="https://github.com/bapanapalligopi">
            {" "}
            <FaGithub color="white" />
          </a>
        </div>
        <div className={styles.mail}>
          <a href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCJZfSkgnkSnKmXQGVgZCflBCwScbdLnHCQLHhFjWJDqcshnGTWqgHMHRvHfnMFpjrHbmxfL">
            {" "}
            <IoMailUnread color="white" />
          </a>
        </div>
      </div>
    </div>
  );
}
