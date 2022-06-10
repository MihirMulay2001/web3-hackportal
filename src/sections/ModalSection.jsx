import React from "react";
import styles from "../styles/modalsection.module.css";

export default function ModalSection({ children, handleToggle }) {
  return (
    <div className={styles.container} onClick={handleToggle}>
      {children}
    </div>
  );
}
