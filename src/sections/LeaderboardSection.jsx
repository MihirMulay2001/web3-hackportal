import React, { useState } from "react";
import ProjectCard from "../components/ProjectCard";
import data from "../data/winners.json";
import useFetcher from "../hooks/useFetcher";
import ModalSection from "./ModalSection";
import ProjectInfo from "../components/ProjectInfo";

export default function LeaderboardSection() {
  // const {loading, data} = useFetcher()
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
      <h3>Leaderboard</h3>
      <div>
        {data.map((winner, key) => (
          <div key={key}>
            <div>{winner.track}</div>
            <div>
              <div>
                <ProjectCard
                  project={winner.project}
                  handleToggle={handleToggle}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      {show && (
        <ModalSection>
          <ProjectInfo projectId={projectId} handleToggle={handleToggle} />
        </ModalSection>
      )}
    </div>
  );
}
