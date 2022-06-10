import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useFetcher from "../hooks/useFetcher";
import hackData from "../data/data.json";
import ProjectsSection from "../sections/ProjectsSection";
import HackathonHeader from "../components/HackathonHeader";
import LeaderboardSection from "../sections/LeaderboardSection";
import styles from "../styles/hackathon.module.css";

export default function Hackathon() {
  const { hackId } = useParams();
  console.log(hackId);
  // const { loading, data } = useFetcher("www.google.com", "POST", hackId);
  // if (loading) {
  //   return <div>Loading..........</div>;
  // }

  return (
    <div className={styles.container}>
      <div>
        <HackathonHeader hackData={hackData} />
      </div>
      {hackData.hacktimeout ? (
        hackData.votetimeout ? (
          <LeaderboardSection />
        ) : (
          <ProjectsSection hackId={hackId} />
        )
      ) : (
        <div> Wait until hackathon is over </div>
      )}
    </div>
  );
}
