import React from "react";
import styles from "../styles/projectcard.module.css";

export default function ProjectCard({ project, handleToggle }) {
  return (
    <div className={styles.container}>
      <div>
        <h5>{project.title}</h5>
        <div>{project.description}</div>
        <button onClick={(e) => handleToggle(e, project.id)}>See more</button>
      </div>
    </div>
  );
}
