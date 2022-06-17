import "./App.css";
import { useState, useEffect } from "react";
import Router from "./Router";
import { ethers } from "ethers";
import ContractJson from "./assets/abi/contract.json";
import axios from "axios";

const link = "https://hackportalserver.herokuapp.com";

const CONTRACT_ADDRESS = "0x95574ff0d2F8347b919d7a9687632b86D8760e68";

function App() {
  const [account, setAccount] = useState(null);
  const [contract, setContract] = useState(null);

  const checkWalletIsConnected = () => {
    const { ethereum } = window;
    if (ethereum) {
      console.log("We are good to go!");
      return true;
    } else {
      alert("Make sure you have metamask installed");
      return false;
    }
  };

  const getContract = async () => {
    try {
      const { ethereum } = window;
      if (ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const _contract = new ethers.Contract(
          CONTRACT_ADDRESS,
          ContractJson.abi,
          signer
        );
        setContract(_contract);
      } else {
        console.log("Object doesn't exist");
      }
    } catch (e) {
      console.log(e);
    }
  };

  async function onAccountChange(accounts) {
    setAccount(accounts[0]);
    console.log("Voila! connected " + accounts[0]);
    localStorage.setItem("curr_wallet_id", accounts[0]);
    await axios
      .post(link + "/user/newuser", {
        user_wallet_id: accounts[0],
      })
      .then((r) => console.log(r));
  }

  useEffect(() => {
    if (checkWalletIsConnected()) {
      // getContract()
      console.log("wallet connected");
      console.log("Still! connected " + localStorage.getItem("curr_wallet_id"));
    }
    window.ethereum.on("accountsChanged", onAccountChange);
    // return(()=>{
    //   window.ethereum.off('accountsChanged',onAccountChange)
    // })
  }, []);

  return (
    <div className="App">
      <Router
        link={link}
        account={account}
        contract={contract}
        setAccount={setAccount}
      />
    </div>
  );
}

export default App;

/*

{
    "organizer_wallet_id": "0xE925b0Af68e203A80491089b2104D9Ca4d838a35",
    "event_name": "hack 1",
    "event_logo": "",
    "event_link": "",
    "event_disc": "description",
    "prizes": [],
    "judges": [],
    "submission_date": "2022-06-17T18:24:46.839Z",
    "end_date": "2022-06-17T18:24:46.839Z",
    "teams": [],
    "judge_coin_holders": [],
    "competitor_coin_holders": []
}
*/

//62acc796797ca650bc458d63

//hack 2: 62acca6f797ca650bc458d7e

//project id: 62accbf5797ca650bc458d88
