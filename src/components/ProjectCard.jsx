import React from "react";
import styles from "../styles/projectcard.module.css";

export default function ProjectCard({ project, handleToggle }) {
  return (
    <div className={styles.container}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <img
          height={192}
          width={259}
          style={{
            objectFit: "cover",
            marginBottom: "6px",
            borderRadius: "10px",
          }}
          src={project.teamlogo}
          alt=""
        />
        <h5>{project.title}</h5>
        <h4 style={{ marginTop: "-30px" }}> {project.teamname}</h4>
        <div>{project.description}</div>
        <button onClick={(e) => handleToggle(e, project)}>See more</button>
      </div>
    </div>
  );
}
