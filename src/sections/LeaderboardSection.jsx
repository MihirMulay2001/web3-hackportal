import React, { useState } from "react";
import ProjectCard from "../components/ProjectCard";
import data from "../data/winners.json";
import useFetcher from "../hooks/useFetcher";
import ModalSection from "./ModalSection";
import ProjectInfo from "../components/ProjectInfo";
import styles from "../styles/leaderboard.module.css";

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
    <div className={styles.container}>
      <h3>Leaderboard</h3>
      <div>
        {data.map((winner, key) => (
          <div className={styles.section} key={key}>
            <div className={styles.track}>{winner.track}</div>
            <div className={winner.isWinner ? styles.project : ""}>
              <div>
                <ProjectCard
                  project={winner.project}
                  handleToggle={handleToggle}
                />
              </div>
              {winner.isWinner && (
                <div className={styles.card}>
                  Congratulations!! You will receive the price money soon!
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
      {show && (
        <ModalSection handleToggle={handleToggle}>
          <ProjectInfo
            projectId={projectId}
            handleToggle={handleToggle}
            vote={false}
          />
        </ModalSection>
      )}
    </div>
  );
}
