import styles from "./skills.module.css";

export default function Frontendskill({ allskills }) {
  return (
    <div className={styles.listOfSingleSkills}>
      {Object.values(allskills).map((skill) => (
        <div key={skill[0]} className={styles.singleskillContainer}>
          <div className={styles.skilllogo}>{skill[1]}</div>
          <div className={styles.skillname}>{skill[0]}</div>
        </div>
      ))}
    </div>
  );
}
