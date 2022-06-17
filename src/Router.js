import React from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import CreateHack from "./pages/CreateHack";
import HackPage from "./pages/HackPage";
import Leaderboard from "./pages/Leaderboard";
import Signup from "./pages/Signup";

export default function Router({ link, setAccount, account, contract }) {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <Homepage
              link={link}
              account={account}
              setAccount={setAccount}
              contract={contract}
            />
          }
        />
        <Route
          path="/createhack"
          element={
            <CreateHack link={link} account={account} contract={contract} />
          }
        />
        <Route
          path="/hackathon/:hackId"
          element={
            <HackPage link={link} account={account} contract={contract} />
          }
        />
        <Route
          path="/leaderboard/:hackId"
          element={
            <Leaderboard link={link} account={account} contract={contract} />
          }
        />
        <Route
          path="/signup"
          element={
            <Signup
              account={account}
              setAccount={setAccount}
              contract={contract}
            />
          }
        />
      </Routes>
    </>
  );
}
