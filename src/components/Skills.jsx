// skills.js
// import React from "react";
// import { FaJava } from "react-icons/fa";
// import { DiPython } from "react-icons/di";
import allskills from "./Allskills";
import styles from "./skills.module.css";
import Frontendskill from "./Frontendskill";
import langskills from "./Languageskills";
import dbskills from "./Databaseskills";
import Frameworkskill from "./Frameworkskill";
export default function Skills() {
  return (
    <div className={`container ${styles.skillscontainer}`} id="skillsec">
      <div className={styles.skillsheading}>Skills</div>
      <div>
        <div className={`${styles.frontendskills}`}>
          <div className={styles.message}>FrontEnd</div>
          <div className={styles.singleskill}>
            <Frontendskill allskills={allskills}></Frontendskill>
          </div>
        </div>
        <div className={styles.programmingskills}>
          <div className={styles.programmessage}>Languages</div>
          <div className={styles.singleskill}>
            <Frontendskill allskills={langskills}></Frontendskill>
          </div>
        </div>
        <div className={styles.dbskills}>
          <div className={styles.dbmessage}>Databases</div>
          <div className={styles.singleskill}>
            <Frontendskill allskills={dbskills}></Frontendskill>
          </div>
        </div>
        <div className={styles.frameworkskills}>
          <div className={styles.fwmessage}>Frameworks & Tools</div>
          <div className={styles.singleskill}>
            <Frontendskill allskills={Frameworkskill}></Frontendskill>
          </div>
        </div>
      </div>
    </div>
  );
}
