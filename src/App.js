import "./App.css";
import { useState, useEffect } from "react";
import Router from "./Router";
import { ethers } from "ethers";
import ContractJson from "./assets/abi/Factory.json";

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

  function onAccountChange(accounts) {
    setAccount(accounts[0]);
    console.log(accounts[0]);
  }

  useEffect(() => {
    if (checkWalletIsConnected()) {
      getContract();
      console.log("wallet connected");
    }
    window.ethereum.on("accountsChanged", onAccountChange);
    // return(()=>{
    //   window.ethereum.off('accountsChanged',onAccountChange)
    // })
  }, []);

  return (
    <div className="App">
      <Router account={account} contract={contract} setAccount={setAccount} />
    </div>
  );
}

export default App;
