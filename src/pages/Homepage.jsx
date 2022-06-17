import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import decen from "../assets/decen.jpg";
import fair from "../assets/fair.jpg";
import logo from "../assets/ourlogo.png";
import web3 from "../assets/web3.jpg";

import harish from "../assets/harish.jpg";
import mihir from "../assets/mihir.jpg";
import me from "../assets/My-Pic.jpg";
import praba from "../assets/praba.jpg";
import tej from "../assets/tej.jpg";

import bg from "../assets/bg.jpg";

import GitHubIcon from "@mui/icons-material/GitHub";
import LanguageIcon from "@mui/icons-material/Language";

import "../App.css";
import Profile from "../components/Profile";

import styles from "../styles/homepage.module.css";

import axios from "axios";

import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";

// import { GoogleLogin } from "react-google-login";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  height: 50,
  width: 300,
  bgcolor: "#fff",
  boxShadow: 24,
  p: 4,
  color: "black",
  display: "flex",
  justifyContent: "center",
};

const connectWalletHandler = async (setCurrentAccount, setFlag) => {
  const { ethereum } = window;
  if (!ethereum) {
    alert("Allow website to access metamask wallet");
  } else {
    try {
      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });
      setCurrentAccount(accounts[0]);
      setFlag(true);
    } catch (error) {
      console.log(error);
    }
  }
};

export default function Homepage({ link, account, setAccount }) {
  const [flag, setFlag] = React.useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    connectWalletHandler(setAccount, setFlag);
  }, []);

  const contributorslist = [
    { name: "Mihir", imglink: mihir, title: "", email: "", linkedin: "" },
    { name: "Prabhakar", imglink: praba, title: "", email: "", linkedin: "" },
    { name: "Harish", imglink: harish, title: "", email: "", linkedin: "" },
    { name: "Tejas", imglink: tej, title: "", email: "", linkedin: "" },
    { name: "Vamsi", imglink: me, title: "", email: "", linkedin: "" },
  ];

  const [hackId, setHackId] = useState("");

  const joinHack = async (x) => {
    setHackId(x);
    localStorage.setItem("curr_hack_id", x);
    await axios
      .post(link + "/user/joinevent", {
        user_wallet_id: localStorage.getItem("curr_wallet_id"),
        event_id: x,
      })
      .then((r) => console.log(r));
  };

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const responseGoogle = (response) => {
    console.log(response);
  };

  return (
    <div className={styles.container} style={{ backgroundImage: `url(${bg})` }}>
      <nav style={{ display: "flex", justifyContent: "space-between" }}>
        <div
          className="paybtn"
          style={{ margin: 0 }}
          onClick={(e) => connectWalletHandler(setAccount)}
        >
          {account ? <div> Connected</div> : <div> Connect</div>}
        </div>
        <div
          className="paybtn"
          style={{
            backgroundColor: "black",
            margin: 0,
            paddingLeft: "18px",
            paddingRight: "18px",
          }}
          onClick={() => {
            setOpen(true);
          }}
        >
          LogIn/SignUp
        </div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}></Box>
        </Modal>
      </nav>
      <div className={styles.header}>
        <div className={styles.heading}>
          <h1>
            Hackportal
            <blink
              style={{ color: "#fff", fontWeight: "bolder", fontSize: "60px" }}
            >
              _
            </blink>
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
                  // setHackId(e.target.value);
                  joinHack(e.target.value);
                }}
              />
              <Link to={`/hackathon/${hackId ? hackId : "sample"}`}>
                {" "}
                Join Hackathon{" "}
              </Link>
            </div>
          </div>
        </div>
        <div className={styles.img}>
          <img src={logo} alt="logo here" height={160} width={160} />
        </div>
      </div>
      <div className={styles.aboutus}>
        <h1 style={{ marginLeft: "20px" }}>How it works</h1>
        <div>
          <div style={{ backgroundColor: "#fff", opacity: "0.75" }}>
            <h4 style={{ color: "#9D4EDD" }}> Web3 focused</h4>
            <img src={web3} alt="logo here" height={200} width={230} />
            <p style={{ textAlign: "center" }}>
              {" "}
              First ever trustless platform for hosting hackathons and contests.
            </p>
          </div>
          <div style={{ backgroundColor: "#fff", opacity: "0.75" }}>
            <h4 style={{ color: "#9D4EDD" }}>Decentralized judgement</h4>
            <img src={decen} alt="logo here" height={200} width={200} />
            <p style={{ textAlign: "center" }}>
              With voting, we had decentralized the entire judging process.
            </p>
          </div>
          <div style={{ backgroundColor: "#fff", opacity: "0.75" }}>
            <h4 style={{ color: "#9D4EDD" }}>Fair rewards distribution</h4>
            <img src={fair} alt="logo here" height={200} width={250} />
            <p style={{ textAlign: "center" }}>
              Our smart contracts automatically distributes the prizes to the
              teams.
            </p>
          </div>
        </div>
      </div>
      <footer className={styles.footer}>
        <div className={styles.contrilinks}>
          <div className={styles.contributor}>
            <h5>Contributors</h5>
            <div className="judgelist">
              {contributorslist.map((item) => {
                return (
                  <Profile
                    key={item.name}
                    name={item.name}
                    title={item.title}
                    imglink={item.imglink}
                    email={item.email}
                    linkedin={item.linkedin}
                  />
                );
              })}
            </div>
          </div>
          <div className={styles.links}>
            <a
              className={styles.links}
              href="https://github.com/MihirMulay2001/web3-hackportal/tree/integrated_branch"
            >
              <GitHubIcon />
              {" Github"}
            </a>
          </div>
          <div className={styles.links}>
            <a
              className={styles.links}
              href="https://github.com/decoder3/hack3"
            >
              <LanguageIcon /> {" Etherscan"}
            </a>
          </div>
        </div>
        <div className={styles.footerillus}>
          <img src={logo} alt="logo here" />
        </div>
      </footer>
    </div>
  );
}
