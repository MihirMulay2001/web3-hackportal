import React, { useState } from "react";
import useFetcher from "../hooks/useFetcher";
import data from "../data/project.json";
import styles from "../styles/projectinfo.module.css";
import TextField from '@mui/material/TextField';
import GavelIcon from '@mui/icons-material/Gavel';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import StarsIcon from '@mui/icons-material/Stars';

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
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "space-between" }}>
        <iframe
          src={"https://www.youtube.com/embed/wtvpQ9liu4g"}
          title="Youtube link"
          height="300px"
          width="85%"
          frameBorder={0}
          style={{ marginBottom: "15px" }}
        />
        <TextField sx={{ width: "85%", marginBottom: "15px" }} multiline maxRows={4} label="Comment" variant="filled" />


        {vote && (
          <>
            {data.personType === "judge" && (
              <div className={styles.radio} style={{ marginBottom: "15px" }}>
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
            <button className="paybtn" style={{ margin: 0, }}>
              {
                data.personType === "judge" ? <GavelIcon /> : data.personType === "people" ? <LocalFireDepartmentIcon /> : <LocalFireDepartmentIcon />
              }
              <h5> V O T E</h5>
            </button>
          </>
        )}
      </div>
    </div >

  );
}