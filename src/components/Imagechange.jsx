import styles from "./projectbyid.module.css";

export default function Imagechange({ url, title }) {
  return (
    <>
      <img src={url} alt={title} className={styles.pimage} />
    </>
  );
}
