import React, { useState } from "react";
import useFetcher from "../hooks/useFetcher";
import data from "../data/project.json";
import styles from "../styles/projectinfo.module.css";

export default function ProjectInfo({ projectId, handleToggle }) {
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
        icon <a href={data.github}>{data.github}</a>{" "}
      </div>
      <div>
        icon <a href={data.etherscan}>{data.etherscan}</a>
      </div>
      <iframe
        src={data.youtube}
        title="Youtube link"
        height="300px"
        width="500px"
      />
      {data.personType === "judge" && (
        <div>
          {data.tracks.map((track, key) => (
            <span key={key}>
              <label>
                <input
                  type="radio"
                  id={track}
                  name="track"
                  value={track}
                  onChange={handleChange}
                  checked={voteTrack === track}
                />
                {track}
              </label>
            </span>
          ))}
        </div>
      )}
      <button>Vote</button>
    </div>
  );
}
