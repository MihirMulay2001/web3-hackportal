import React, { useEffect } from "react";
import useFetcher from "../hooks/useFetcher";
import { useNavigate } from "react-router-dom";

const connectWalletHandler = async (setCurrentAccount) => {
  const { ethereum } = window;
  if (!ethereum) {
    alert("Allow website to access metamask wallet");
  } else {
    try {
      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });
      setCurrentAccount(accounts[0]);
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

export default function Signup() {
  const [flag, setFlag] = React.useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <button onClick={connectWalletHandler}>Connect wallet</button>
      <input type="text" placeholder="mihir" />
      <input type="email" placeholder="mihir@gmail.com" />
      {flag ? <button onClick={handleSubmit}>Log In</button> : <SendData />}
    </div>
  );
}
