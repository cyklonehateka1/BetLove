import { BiSolidBellRing, BiSolidBookmarkPlus } from "react-icons/bi";
import "../styles/components/liveTendingMatch.css";
const LiveTrendingMatch = () => {
  return (
    <div className="ltm">
      <div className="ltmCont">
        <div className="textStatusCont">
          <div className="text">
            <h5>UEFA Champions League</h5>
            <span>Round of 16 - Match 1 of 4</span>
          </div>
          <button>Live</button>
        </div>
        <div className="teamsScores">
          <div className="left">
            <div className="imgCont">
              <img src="./photos/realmadrid.png" alt="" />
            </div>
            <span>Real Madrid</span>
          </div>
          <div className="center">
            <div className="scores">
              <span>2</span> <p>:</p>
              <span>2</span>
            </div>
            <span>76'</span>
          </div>
          <div className="right">
            <div className="imgCont">
              <img src="./photos/barcelona.png" alt="" />
            </div>
            <span>Barcelona</span>
          </div>
        </div>
        <div className="actions">
          <button className="bookmark">
            <BiSolidBookmarkPlus />
          </button>
          <button className="bet">bet</button>
          <button className="notify">
            <BiSolidBellRing />
          </button>
        </div>
      </div>

      <button className="details">Match details</button>
    </div>
  );
};

export default LiveTrendingMatch;
