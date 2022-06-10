import React from "react";

export default function HackathonHeader({ hackData }) {
  return (
    <div>
      <div>
        <h3>{hackData.name}</h3>
        <h6>{hackData.description}</h6>
        <div>
          {hackData.judges.map((judge, key) => (
            <div key={key}>
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
  );
}
