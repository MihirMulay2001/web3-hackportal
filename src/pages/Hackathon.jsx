import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useFetcher from "../hooks/useFetcher";
import hackData from "../data/data.json";
import ProjectsSection from "../components/ProjectsSection";

export default function Hackathon() {
  const { hackId } = useParams();
  console.log(hackId);
  // const { loading, data } = useFetcher("www.google.com", "POST", hackId);
  // if (loading) {
  //   return <div>Loading..........</div>;
  // }

  return (
    <div>
      <div>
        <div>
          <h3>{hackData.name}</h3>
          <h6>{hackData.description}</h6>
          <div>
            {hackData.judges.map((judge) => (
              <div>
                <a href={judge.url}>
                  <img src="" alt="judge profile pic" />
                </a>
              </div>
            ))}
          </div>
        </div>
        <div>
          <img src={""} alt="hackathon" />
        </div>
      </div>
      {hackData.timeout ? (
        <ProjectsSection />
      ) : (
        <div> Wait until hackathon is over </div>
      )}
    </div>
  );
}
