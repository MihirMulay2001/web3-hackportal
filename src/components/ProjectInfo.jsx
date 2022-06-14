import React, { useState, useEffect } from "react";
import useFetcher from "../hooks/useFetcher";
import data from "../data/project.json";
import styles from "../styles/projectinfo.module.css";
import TextField from '@mui/material/TextField';
import GavelIcon from '@mui/icons-material/Gavel';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import StarsIcon from '@mui/icons-material/Stars';
import AssistantIcon from '@mui/icons-material/Assistant';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

import axios from 'axios';

export default function ProjectInfo({ link, hack_id, projectId, handleToggle, vote, cmt }) {
  // const {loading, data} = useFetcher()
  const [voteTrack, setVoteTrack] = useState(null);

  const handleVote = (event, newVote) => {
    setVoteTrack(newVote);
  };

  const votencmt = async () => {
    await axios.patch(link + '/user/votencmt', {
      event_id: hack_id,
      team_leader_wallet_id: projectId,
      comments: cmt
    }).then(r => console.log(r));
  }

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
        <button className="paybtn" style={{ marginTop: "10px", borderWidth: 0, backgroundColor: "black" }} >
          <AssistantIcon />
          <h5> S E N D</h5>
        </button>

        {vote && (
          <>
            {data.personType === "judge" && (
              <ToggleButtonGroup
                color="secondary"
                value={voteTrack}
                exclusive
                onChange={handleVote}
                sx={{ marginBottom: "15px" }}
              >
                {data.tracks.map((track, key) => (
                  <ToggleButton key={key} value={track}>{track}</ToggleButton>
                ))}
              </ToggleButtonGroup>
            )}
            <button className="paybtn" style={{ margin: 0, borderWidth: 0 }}>
              {
                data.personType === "judge" ? <GavelIcon /> : data.personType === "people" ? <LocalFireDepartmentIcon /> : <StarsIcon />
              }
              <h5> V O T E</h5>
            </button>
          </>
        )}
      </div>
    </div >

  );
}