import React, { useEffect } from "react";
import useFetcher from "../hooks/useFetcher";
import { useNavigate } from "react-router-dom";
import styles from "../styles/signup.module.css";

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

function SendData() {
  const { loading, data } = useFetcher("www.google.com", "GET", {
    name: "mihir",
  });
  let navigate = useNavigate();
  if (loading) {
    return <div>Loading .......</div>;
  } else {
    navigate("/homepage", { replace: true });
  }
}

export default function Signup({ account, setAccount }) {
  const [flag, setFlag] = React.useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    connectWalletHandler(setAccount, setFlag);
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.login}>
        <h3>Login</h3>
        <button onClick={(e) => connectWalletHandler(setAccount)}>
          {account ? "Wallet connected" : "Connect wallet"}
        </button>
        <button>Connect Google</button>
      </div>
      <div className={styles.signup}>
        <h3>Sign Up</h3>
        <input type="text" placeholder="mihir" />
        <input type="email" placeholder="mihir@gmail.com" />
        {account ? (
          <button>Wallet connected</button>
        ) : (
          <button onClick={(e) => connectWalletHandler(setAccount, setFlag)}>
            Connect wallet
          </button>
        )}
        {flag ? <button onClick={handleSubmit}>Log In</button> : <SendData />}
      </div>
    </div>
  );
}
