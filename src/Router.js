import React from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Signup from "./pages/Signup";
import CreateHack from "./pages/CreateHack";
import HackPage from "./pages/HackPage";
import Hackathon from "./pages/Hackathon";
import Leaderboard from "./pages/Leaderboard";

export default function Router({ setAccount, account }) {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage account={account} />} />
        <Route path="/signup" element={<Signup account={account} setAccount={setAccount} />} />
        <Route path="/createhack" element={<CreateHack />} />
        <Route path="/hackathon/:hackId" element={<HackPage />} />
        <Route path="/mihirhackathon/:hackId" element={<Hackathon />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
      </Routes>
    </>
  );
}
