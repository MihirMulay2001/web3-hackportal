import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from '../assets/ourlogo.png';
import fair from '../assets/fair.jpg';
import web3 from '../assets/web3.jpg';
import decen from '../assets/decen.jpg';

import '../App.css';

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
          <h1 >
            Hackportal
            <blink style={{ color: "#9D4EDD", fontWeight: "bolder", fontSize: "60px" }}>_</blink>
          </h1>
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
              <Link to={`/hackathon/${hackId ? hackId : "sample"}`}> Join Hackathon </Link>
            </div>
          </div>
        </div>
        <div className={styles.img}>
          <img src={logo} alt="logo here" height={160} width={160} />
        </div>
      </div>

      <hr />
      <div className={styles.aboutus}>
        <h1 style={{ marginLeft: "20px" }}>How it works</h1>
        <div>
          <div>
            <h4 style={{ color: "#9D4EDD" }}> Web3 focused</h4>
            <img src={web3} alt="logo here" height={200} width={230} />
            <p style={{ textAlign: "center" }}> First ever trustless platform for hosting hackathons and contests.</p>
          </div>
          <div>
            <h4 style={{ color: "#9D4EDD" }}>Decentralized judgement</h4>
            <img src={decen} alt="logo here" height={200} width={200} />
            <p style={{ textAlign: "center" }}>With voting, we had decentralized the entire judging process.</p>
          </div>
          <div>
            <h4 style={{ color: "#9D4EDD" }}>Fair rewards distribution</h4>
            <img src={fair} alt="logo here" height={200} width={250} />
            <p style={{ textAlign: "center" }}>Our smart contracts automatically distributes the prizes to the teams.</p>
          </div>
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
          <img src={logo} alt="logo here" />
        </div>
      </footer>
    </div>
  );
}
