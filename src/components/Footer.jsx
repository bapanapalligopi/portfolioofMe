import React from "react";
import styles from "./contact.module.css";
<<<<<<< HEAD
import { AiOutlineLinkedin } from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";
import { GrGithub } from "react-icons/gr";
import { GrInstagram } from "react-icons/gr";
import { FaCircleArrowUp } from "react-icons/fa6";
import { FaUserTie } from "react-icons/fa6";
import { FaPhoneSquare } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
=======
>>>>>>> 206988a778aadccc9bd4b3f42de2130a43e6d744

const Footer = () => {
  return (
    <div className={styles.footer}>
<<<<<<< HEAD
      <div className={styles.footerabout}>
        {" "}
        <div className={styles.devpl}>
          <div>
            {" "}
            <FaUserTie color="blue" /> Developed By Gopi Bapanapalli.
          </div>
          {"  "}
          <div>
            <FaPhoneSquare color="green" /> +91 7672005018{" "}
          </div>
          <div>
            <SiGmail color="red" /> bapanapalligopi7@gmail.com
          </div>
        </div>
      </div>
      <div className={styles.socialmediaicons}>
        <div>
          <a href="https://www.linkedin.com/in/bapanapalli-gopi-55a2771a7/">
            {" "}
            <AiOutlineLinkedin fontSize="2.3rem" color="violet" />
          </a>
        </div>
        <div>
          <a href="https://twitter.com/B_GOPI_17">
            <FaXTwitter fontSize="2.3rem" color="white" />
          </a>
        </div>
        <div>
          <a href="https://github.com/bapanapalligopi">
            <GrGithub fontSize="2.3rem" color="yellow" />
          </a>
        </div>
        <div>
          <a href="https://www.instagram.com/g.o.p.i_17/?hl=en">
            <GrInstagram fontSize="2.3rem" color="red" />
          </a>
        </div>
      </div>
      <div className={styles.top}>
        <a href="#" className={styles.toplink}>
          Goto Top{" "}
          <span>
            {" "}
            <FaCircleArrowUp />
          </span>
=======
      <div className={styles.devpl}>Developed By Gopi Bapanapalli</div>
      <div className={styles.phno}>+91 7672005018</div>
      <div className={styles.email}>bapanapalligopi7@gmail.com</div>
      <div className={styles.top}>
        <a href="#" className={styles.toplink}>
          Goto Top
>>>>>>> 206988a778aadccc9bd4b3f42de2130a43e6d744
        </a>
      </div>
    </div>
  );
};

export default Footer;
