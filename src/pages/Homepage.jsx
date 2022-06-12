import React, { useState } from "react";
import { Link } from "react-router-dom";

import styles from "../styles/homepage.module.css";
export default function Homepage({ account }) {
  const [hackId, setHackId] = useState("");
  return (
    <div className={styles.container}>
      <nav>
        <div>
          {account ? (
            <div>Wallet {account} connected</div>
          ) : (
            <Link to="/signup">Connect wallet </Link>
          )}
        </div>
      </nav>
      <div className={styles.header}>
        <div className={styles.heading}>
          <h1>Hackportal</h1>
          <h3>A decentralized transparent hackathon system</h3>
          <div className={styles.hacklinks}>
            <div className={styles.createhack}>
              <Link to="/createhack">Create Hackathon</Link>
            </div>
            <div className={styles.joinhack}>
              <input
                type="text"
                placeholder="Enter code"
                value={hackId}
                onChange={(e) => {
                  setHackId(e.target.value);
                }}
              />
              <Link to={`/hackathon:${hackId}`}> Join Hackathon </Link>
            </div>
          </div>
        </div>
        <div className={styles.img}>
          <img src="" alt="logo here" />
        </div>
      </div>

      <hr />
      <div className={styles.aboutus}>
        <h1>How it works</h1>
        <div>
          <div>Web3 focused</div>
          <div>Decentralized voting</div>
          <div>Fair rewards distribution</div>
        </div>
      </div>
      <footer className={styles.footer}>
        <div className={styles.contrilinks}>
          <div className={styles.contributor}>
            <h5>Contributors</h5>
            <div>names here</div>
          </div>
          <div className={styles.links}>
            <label>Github</label>
            <div>[github link]</div>
          </div>
          <div className={styles.links}>
            <label>Etherscan</label>
            <div>[etherscan link of contract]</div>
          </div>
        </div>
        <div className={styles.footerillus}>
          <img src="" alt="logo here" />
        </div>
      </footer>
    </div>
  );
}
