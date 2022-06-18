import { useEffect, useState } from "react";
import ProjectCard from "../components/ProjectCard";
import ProjectInfo from "../components/ProjectInfo";
import dummydata from "../data/winners.json";
import styles from "../styles/leaderboard.module.css";
import ModalSection from "./ModalSection";
import axios from "axios";
export default function LeaderboardSection({ link, contract }) {
  // const {loading, data} = useFetcher(link+)
  const [data, setData] = useState([]);
  const [show, setShow] = useState(false);
  const [projectInfo, setProjectInfo] = useState("");
  // const {loading, data} = useFetcher()
  const handleToggle = (e, info) => {
    e.preventDefault();
    setProjectInfo(info);
    setShow((a) => !a);
  };
  async function fetchLeaderboard() {
    axios
      .get(link + "/event/info", {
        event_id: "",
      })
      .then(async (res) => {
        const arr = getProjectWinners();
        let winners = [];
        const people_choice = await axios.get(link + `/${res._id}` + arr[1]);
        winners.push({
          track: "People's Choice",
          project: { ...people_choice },
          isWinner: localStorage.getItem("curr_wallet_id") === arr[1],
        });
        const participant_choice = await axios.get(
          link + `/${res._id}` + arr[0]
        );
        winners.push({
          track: "Competitors's Choice",
          project: { ...participant_choice },
          isWinner: localStorage.getItem("curr_wallet_id") === arr[0],
        });
        let i = 0;
        let w = 2;
        for (const a of arr) {
          while (w--) continue;
          const x = await axios.get(link + `/${res._id}` + a);
          winners.push({
            track: res.prizes[i],
            project: { ...x },
            isWinner: localStorage.getItem("curr_wallet_id") === a,
          });
          i++;
        }
        setData(winners);
      });
  }
  async function getProjectWinners() {
    const ans = await contract.getWiners();
    await ans.wait();
    console.log(ans);
    return ans;
  }
  useEffect(() => {
    fetchLeaderboard();
  });
  return (
    <div className={styles.container}>
      <h3>Leaderboard</h3>
      <div>
        {data.map((winner, key) => (
          <div className={styles.section} key={key}>
            <div className={styles.track}>{winner.track}</div>
            <div className={winner.isWinner ? styles.project : ""}>
              <div>
                <ProjectCard
                  project={winner.project}
                  handleToggle={handleToggle}
                />
              </div>
              {winner.isWinner && (
                <div className={styles.card}>
                  Congratulations!! You will receive the price money soon!
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
      {show && (
        <ModalSection handleToggle={handleToggle}>
          <ProjectInfo
            projectInfo={projectInfo}
            handleToggle={handleToggle}
            vote={false}
          />
        </ModalSection>
      )}
    </div>
  );
}
