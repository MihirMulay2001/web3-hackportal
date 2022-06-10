import React, { useState } from "react";
import { useParams } from "react-router-dom";
import useFetcher from "../hooks/useFetcher";
import hackData from "../data/data.json";
import projectData from "../data/project.json";
import ProjectCard from "../components/ProjectCard";
import ProjectInfo from "../components/ProjectInfo";
import ModalSection from "./ModalSection";
import styles from "../styles/projectssection.module.css";

export default function ProjectsSection({ hackId }) {
  const [show, setShow] = useState(false);
  const [projectId, setProjectId] = useState("");
  // const {loading, data} = useFetcher()
  const handleToggle = (e, id) => {
    e.preventDefault();
    setProjectId(id);
    setShow((a) => !a);
  };
  return (
    <>
      {show && (
        <ModalSection handleToggle={handleToggle}>
          <ProjectInfo projectId={projectId} handleToggle={handleToggle} />
        </ModalSection>
      )}
      <div className={styles.heading}>
        <div className={styles.h3}>All Projects</div>
        <div className={styles.persontype}>You are a judge</div>
      </div>
      <div className={styles.container}>
        {hackData.projects.map((project, key) => (
          <ProjectCard
            project={project}
            key={key}
            handleToggle={handleToggle}
          />
        ))}
      </div>
    </>
  );
}
