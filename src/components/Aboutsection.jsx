import styles from "./about.module.css";

export default function Aboutsection() {
  return (
    <div className={styles.aboutsection}>
      <div className={styles.theory}>
        <p className={styles.singleword}>
          <span className={styles.singlewordspan}>Driven</span>, Innovative,
          Quick Learner.
        </p>
        <p className={styles.role}>
          Software <span className={styles.singlewordspan}>Engineer</span>
        </p>
        <p>
          Equipped with a Bachelor of Technology degree in Information
          Technology and boasting a commendable CGPA of 7.91, I embody a
          commitment to academic excellence. Beyond conventional learning, I've
          dived into practical projects, crafting intuitive interfaces like the
          Student Exam Results Portal and engineering resilient backend systems
          using Spring Boot and microservices architecture. With expertise in
          front-end technologies like React Js and adeptness with backend tools
          such as Redis and Kafka, I'm primed to confront diverse IT challenges
          and make substantial contributions to organizational triumphs.
        </p>
      </div>
    </div>
  );
}
