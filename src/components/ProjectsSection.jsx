import React, { useState } from "react";
import { useParams } from "react-router-dom";
import useFetcher from "../hooks/useFetcher";
import hackData from "../data/data.json";
import projectData from "../data/project.json";
import Project from "./Project";

export default function ProjectsSection() {
  const { hackId } = useParams();
  const [show, setShow] = useState(false);
  const [projectId, setProjectId] = useState("");
  // const {loading, data} = useFetcher()
  const handleToggle = (e, id) => {
    e.preventDefault();
    setProjectId(id);
    setShow((a) => !a);
  };
  return (
    <div>
      {hackData.projects.map((project) => (
        <div>
          <div>{project.title}</div>
          <div>{project.description}</div>
          <button onClick={(e) => handleToggle(e, project.id)}>See more</button>
        </div>
      ))}
      {show && <Project projectId={projectId} handleToggle={handleToggle} />}
    </div>
  );
}
