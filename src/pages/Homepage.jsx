import React, { useState } from "react";
import { Link } from "react-router-dom";
export default function Homepage({ account }) {
  const [hackId, setHackId] = useState("");
  return (
    <div>
      <nav>
        <div>
          {account ? (
            <div>Wallet {account} connected</div>
          ) : (
            <Link to="/signup">Connect wallet </Link>
          )}
        </div>
        <div>
          <div>About us</div>
        </div>
      </nav>
      <div>
        <div>
          <h1>Hackportal</h1>
          <h3>A decentralized transparent hackathon system</h3>
        </div>
        <div>
          <img src="" alt="logo here" />
        </div>
      </div>
      <div>
        <div>
          <Link to="/createhack">Create Hackathon</Link>
        </div>
        <div>
          <Link to={`/hackathon:${hackId}`}> Join Hackathon </Link>
          <input
            type="text"
            placeholder="HSKHFH"
            value={hackId}
            onChange={(e) => {
              setHackId(e.target.value);
            }}
          />
        </div>
      </div>
      <hr />
      <div>
        <h1>How it works</h1>
        <div>
          <div>Web3 focused</div>
          <div>Decentralized voting</div>
          <div>Fair rewards distribution</div>
        </div>
      </div>
      <footer>
        <div>
          <div>
            <h5>Contributors</h5>
            <div>names here</div>
          </div>
          <div>github [github link]</div>
          <div>etherscan [etherscan link of contract]</div>
        </div>
        <div>
          <img src="" alt="logo here" />
        </div>
      </footer>
    </div>
  );
}
