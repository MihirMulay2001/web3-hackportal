import React, { useState } from "react";
import useFetcher from "../hooks/useFetcher";
import data from "../data/project.json";
import styles from "../styles/projectinfo.module.css";

export default function ProjectInfo({ projectId, handleToggle, vote }) {
  // const {loading, data} = useFetcher()
  const [voteTrack, setVoteTrack] = useState(null);

  const handleChange = (e) => {
    e.preventDefault();
    const { value } = e.target;
    console.log(value);
    setVoteTrack((v) => value);
  };
  return (
    <div className={styles.container} onClick={handleToggle}>
      <h3>{data.name}</h3>
      <div className={styles.desc}>{data.description}</div>
      <div>
        <i class="fab fa-github"></i> <a href={data.github}>{data.github}</a>{" "}
      </div>
      <div>
        <i class="fas fa-globe"></i>
        <a href={data.etherscan}>{data.etherscan}</a>
      </div>
      <iframe
        src={data.youtube}
        title="Youtube link"
        height="300px"
        width="500px"
      />

      {vote && (
        <>
          {data.personType === "judge" && (
            <div className={styles.radio}>
              {data.tracks.map((track, key) => (
                <span key={key}>
                  <label>{track}</label>
                  <input
                    type="radio"
                    name="track"
                    value={track}
                    onChange={handleChange}
                    checked={voteTrack === track}
                  />
                </span>
              ))}
            </div>
          )}
          <button>Vote</button>
        </>
      )}
    </div>
  );
}
