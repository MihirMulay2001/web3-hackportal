import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import useFetcher from "../hooks/useFetcher";
import ProjectCard from "../components/ProjectCard";
import ProjectInfo from "../components/ProjectInfo";
import ModalSection from "./ModalSection";
import styles from "../styles/projectssection.module.css";
import axios from 'axios';
import hackData from "../data/data.json";

export default function ProjectsSection({ link, hackId }) {
  const [show, setShow] = useState(false);
  const [projectId, setProjectId] = useState("");
  const [allsubmissions, setAllsubmissions] = useState([]);

  // const {loading, data} = useFetcher()
  const handleToggle = (e, id) => {
    e.preventDefault();
    setProjectId(id);
    setShow((a) => !a);
  };

  useEffect(() => {
    const getdata = async () => {
      await axios.get(link + '/event/allsubmissions', {
        event_id: hackId
      }).then(r => setAllsubmissions(r.data));
    }
    getdata();
  }, [])
  return (
    <>
      {show && (
        <ModalSection handleToggle={handleToggle}>
          <ProjectInfo
            projectId={projectId}
            handleToggle={handleToggle}
            vote={true}
          />
        </ModalSection>
      )}
      <div className={styles.heading}>
        <div className={styles.persontype}>You are a judge</div>
      </div>
      <div className={styles.container}>
        <div className={styles.container}>
          {hackData.projects.map((project, key) => (
            <ProjectCard
              project={project}
              key={key}
              handleToggle={handleToggle}
            />
          ))}
        </div>
        {/* {allsubmissions === [] ?

          hackData.map((project, key) => (
            <ProjectCard
              project={project}
              key={key}
              handleToggle={handleToggle}
            />
          ))

          :

          allsubmissions.map((project, key) => (
            <ProjectCard
              project={project}
              key={key}
              handleToggle={handleToggle}
            />
          ))
        } */}

      </div>
    </>
  );
}
