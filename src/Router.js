import React from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import CreateHack from "./pages/CreateHack";
import HackPage from "./pages/HackPage";
import Leaderboard from "./pages/Leaderboard";

export default function Router({ link, setAccount, account, contract }) {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <Homepage link={link} account={account} setAccount={setAccount} />
          }
        />
        <Route
          path="/createhack"
          element={<CreateHack link={link} account={account} />}
        />
        <Route
          path="/hackathon/:hackId"
          element={<HackPage link={link} account={account} />}
        />
        <Route
          path="/leaderboard/:hackId"
          element={<Leaderboard link={link} account={account} />}
        />
      </Routes>
    </>
  );
}
