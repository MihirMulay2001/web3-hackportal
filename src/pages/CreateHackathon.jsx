import React, { useState } from "react";

export default function CreateHackathon() {
  const [hackathonDetails, setHackathonDetails] = useState({
    name: "",
    description: "",
    devfolio: "",
    judges: [],
    prizes: [],
  });
  const [judgeDetails, setJudgeDetails] = useState({
    judgde_name: "",
    judge_wallet: "",
  });

  const [prizes, setPrizes] = useState({
    prize_name: "",
    prize_amount: "",
  });

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    if (name === "judge_name") {
      setJudgeDetails((prev) => ({ ...prev, judge_name: value }));
    } else if (name === "judge_wallet") {
      setJudgeDetails((prev) => ({ ...prev, judge_wallet: value }));
    } else if (name === "prize_name") {
      setPrizes((prev) => ({ ...prev, prize_name: value }));
    } else if (name === "prize_amount") {
      setPrizes((prev) => ({ ...prev, prize_amount: value }));
    } else if (name === "add_judge") {
      setHackathonDetails((prev) => ({
        ...prev,
        judges: [...prev.judges, judgeDetails],
      }));
    } else if (name === "add_prizes") {
      setHackathonDetails((prev) => ({
        ...prev,
        prizes: [...prev.prizes, prizes],
      }));
    } else {
      setHackathonDetails((prev) => ({ ...prev, [name]: value }));
    }
  };
  return (
    <div>
      <h1>Create Hackathon</h1>
      <div>
        name
        <input type="text" name="name" placeholder="mihir" />
      </div>
      <div>
        Description
        <input
          type="text"
          name="description"
          placeholder="Enter everything about the hackathon here"
        />
      </div>
      <div>
        Devfolio Link
        <input type="text" name="devfolio" placeholder="devfolio link here" />
      </div>
      <div>
        Enter judges' Details
        <div>
          <label>Name</label>
          <input type="text" placeholder="Mihir" name="judge_name" />
          <label>Wallet Address</label>
          <input
            type="text"
            placeholder="0x92a49832748....."
            name="judge_wallet"
          />
        </div>
        <button name="add_judge" onClick={handleChange}>
          Add judge
        </button>
      </div>
      <div>
        <h3>Prizes</h3>
        <div>
          <input type="text" placeholder="1st Prize" name="prize_name" />
          <input type="text" placeholder="0.03" name="prize_amount" /> matic
          <button name="add_prizes" onClick={handleChange}></button>
        </div>
      </div>
    </div>
  );
}
